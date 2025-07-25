import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  structuredData?: Record<string, any>;
}

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  canonical, 
  ogImage,
  structuredData 
}: SEOHeadProps) => {
  const location = useLocation();
  const baseUrl = 'https://3x0techsolutionsltd.com.ng';
  
  // Default SEO values
  const defaultTitle = '3x0Tech Solutions Ltd – Web & Software Development Experts';
  const defaultDescription = 'Professional software and website development services in Nigeria. We build AI assistants, HR software, accounting tools, and learning platforms for businesses.';
  const defaultKeywords = 'web development Nigeria, software development, mobile apps, PYE AI, Orbityx HR, Quicksum accounting, Step-Code learning, Nigerian tech startup';
  const defaultImage = `${baseUrl}/lovable-uploads/29d73fec-f2da-4dcd-8ba9-2a01937574bd.png`;

  const finalTitle = title || defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalKeywords = keywords || defaultKeywords;
  const finalCanonical = canonical || `${baseUrl}${location.pathname}`;
  const finalOgImage = ogImage || defaultImage;

  useEffect(() => {
    // Update document title
    document.title = finalTitle;

    // Update meta tags
    const updateMeta = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', finalCanonical);

    // Basic meta tags
    updateMeta('description', finalDescription);
    updateMeta('keywords', finalKeywords);
    updateMeta('robots', 'index, follow');
    updateMeta('author', '3x0Tech Solutions Ltd');

    // Open Graph tags
    updateMeta('og:title', finalTitle, true);
    updateMeta('og:description', finalDescription, true);
    updateMeta('og:type', 'website', true);
    updateMeta('og:url', finalCanonical, true);
    updateMeta('og:image', finalOgImage, true);
    updateMeta('og:image:width', '1200', true);
    updateMeta('og:image:height', '630', true);
    updateMeta('og:image:alt', '3x0Tech Solutions Ltd Logo', true);
    updateMeta('og:site_name', '3x0Tech Solutions Ltd', true);
    updateMeta('og:locale', 'en_NG', true);

    // Twitter Card tags
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', finalTitle);
    updateMeta('twitter:description', finalDescription);
    updateMeta('twitter:image', finalOgImage);
    updateMeta('twitter:image:alt', '3x0Tech Solutions Ltd Logo');

    // Structured Data
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]#page-structured-data') as HTMLScriptElement;
      if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        script.id = 'page-structured-data';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }
  }, [finalTitle, finalDescription, finalKeywords, finalCanonical, finalOgImage, structuredData]);

  return null;
};

export default SEOHead;