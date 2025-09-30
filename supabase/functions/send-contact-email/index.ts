import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormRequest {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message }: ContactFormRequest = await req.json();

    console.log("Received contact form submission:", { name, email, phone });

    // Send email to business
    const businessEmailResponse = await resend.emails.send({
      from: "3x0Tech Contact Form <onboarding@resend.dev>",
      to: ["info@3x0techsolutionsltd.com.ng"],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        
        <hr>
        <p><small>This email was sent from the 3x0Tech Solutions contact form.</small></p>
      `,
    });

    // Send confirmation email to customer
    const confirmationEmailResponse = await resend.emails.send({
      from: "3x0Tech Solutions <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for contacting 3x0Tech Solutions!",
      html: `
        <h1>Thank you for contacting us, ${name}!</h1>
        <p>We have received your message and will get back to you as soon as possible.</p>
        
        <h3>Your Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
        
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