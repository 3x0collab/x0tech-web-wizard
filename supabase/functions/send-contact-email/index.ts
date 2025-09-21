import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

// More restrictive CORS headers for security
const corsHeaders = {
  "Access-Control-Allow-Origin": "https://3x0techsolutionsltd.com.ng",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Max-Age": "86400",
};

interface ContactFormRequest {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

// Validation patterns
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NAME_REGEX = /^[a-zA-Z\s.-]+$/;
const PHONE_REGEX = /^[\d\s\-+()]*$/;

// Rate limiting in-memory store (in production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Security validation function
const validateAndSanitizeInput = (data: ContactFormRequest): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  // Validate name
  if (!data.name || data.name.trim().length < 2 || data.name.trim().length > 100) {
    errors.push("Name must be between 2-100 characters");
  }
  if (data.name && !NAME_REGEX.test(data.name.trim())) {
    errors.push("Name contains invalid characters");
  }

  // Validate email
  if (!data.email || !EMAIL_REGEX.test(data.email.trim())) {
    errors.push("Invalid email address");
  }
  if (data.email && data.email.trim().length > 254) {
    errors.push("Email address too long");
  }

  // Validate phone (optional)
  if (data.phone && data.phone.trim()) {
    if (data.phone.trim().length > 20) {
      errors.push("Phone number too long");
    }
    if (!PHONE_REGEX.test(data.phone.trim())) {
      errors.push("Phone number contains invalid characters");
    }
  }

  // Validate message
  if (!data.message || data.message.trim().length < 10 || data.message.trim().length > 5000) {
    errors.push("Message must be between 10-5000 characters");
  }

  return { isValid: errors.length === 0, errors };
};

// Rate limiting function
const checkRateLimit = (clientIP: string): { allowed: boolean; error?: string } => {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute window
  const maxRequests = 3; // Max 3 requests per minute per IP

  const clientData = rateLimitStore.get(clientIP);
  
  if (!clientData || now > clientData.resetTime) {
    rateLimitStore.set(clientIP, { count: 1, resetTime: now + windowMs });
    return { allowed: true };
  }

  if (clientData.count >= maxRequests) {
    return { 
      allowed: false, 
      error: `Rate limit exceeded. Please wait ${Math.ceil((clientData.resetTime - now) / 1000)} seconds.` 
    };
  }

  clientData.count++;
  return { allowed: true };
};

// HTML sanitization function
const sanitizeHTML = (input: string): string => {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Only allow POST requests
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  try {
    // Get client IP for rate limiting
    const clientIP = req.headers.get("x-forwarded-for") || 
                    req.headers.get("x-real-ip") || 
                    "anonymous";

    // Check rate limit
    const rateLimitResult = checkRateLimit(clientIP);
    if (!rateLimitResult.allowed) {
      console.warn(`Rate limit exceeded for IP: ${clientIP}`);
      return new Response(JSON.stringify({ error: rateLimitResult.error }), {
        status: 429,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const requestData: ContactFormRequest = await req.json();

    // Validate and sanitize input
    const validation = validateAndSanitizeInput(requestData);
    if (!validation.isValid) {
      console.warn("Invalid input data:", validation.errors);
      return new Response(JSON.stringify({ 
        error: "Invalid input data", 
        details: validation.errors 
      }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Sanitize the data
    const sanitizedData = {
      name: requestData.name.trim(),
      email: requestData.email.trim().toLowerCase(),
      phone: requestData.phone?.trim() || '',
      message: requestData.message.trim()
    };

    console.log("Processing validated contact form:", { 
      name: sanitizedData.name, 
      email: sanitizedData.email, 
      phone: sanitizedData.phone ? "provided" : "not provided",
      messageLength: sanitizedData.message.length
    });

    // Send email to business with sanitized content
    const businessEmailResponse = await resend.emails.send({
      from: "3x0Tech Contact Form <onboarding@resend.dev>",
      to: ["info@3x0techsolutionsltd.com.ng"],
      subject: `New Contact Form Submission from ${sanitizeHTML(sanitizedData.name)}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${sanitizeHTML(sanitizedData.name)}</p>
        <p><strong>Email:</strong> ${sanitizeHTML(sanitizedData.email)}</p>
        ${sanitizedData.phone ? `<p><strong>Phone:</strong> ${sanitizeHTML(sanitizedData.phone)}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${sanitizeHTML(sanitizedData.message).replace(/\n/g, '<br>')}</p>
        
        <hr>
        <p><small>This email was sent from the 3x0Tech Solutions contact form.</small></p>
        <p><small>Timestamp: ${new Date().toISOString()}</small></p>
        <p><small>Client IP: ${clientIP}</small></p>
      `,
    });

    // Send confirmation email to customer with sanitized content
    const confirmationEmailResponse = await resend.emails.send({
      from: "3x0Tech Solutions <onboarding@resend.dev>",
      to: [sanitizedData.email],
      subject: "Thank you for contacting 3x0Tech Solutions!",
      html: `
        <h1>Thank you for contacting us, ${sanitizeHTML(sanitizedData.name)}!</h1>
        <p>We have received your message and will get back to you as soon as possible.</p>
        
        <h3>Your Message:</h3>
        <p>${sanitizeHTML(sanitizedData.message).replace(/\n/g, '<br>')}</p>
        
        <p>Our team typically responds within 24 hours during business hours (Monday - Friday, 9:00 AM - 6:00 PM WAT).</p>
        
        <p>If you need immediate assistance, please call us at:</p>
        <ul>
          <li>0816 4435695</li>
          <li>0701 657 3950</li>
          <li>0802 906 3771</li>
        </ul>
        
        <p>Best regards,<br>The 3x0Tech Solutions Team</p>
        
        <hr>
        <p><small>3x0Tech Solutions Ltd<br>Number 22, Charity Avenue, Sango Ota, Ogun State, Nigeria<br>Email: info@3x0techsolutionsltd.com.ng</small></p>
      `,
    });

    console.log("Business email sent:", businessEmailResponse);
    console.log("Confirmation email sent:", confirmationEmailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Emails sent successfully",
        businessEmailId: businessEmailResponse.data?.id,
        confirmationEmailId: confirmationEmailResponse.data?.id
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);