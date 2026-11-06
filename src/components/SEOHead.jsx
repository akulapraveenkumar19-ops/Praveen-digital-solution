import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function SEOHead({ 
  title = "Praveen Digital Solutions | Website Development & Digital Marketing Hyderabad", 
  description = "Praveen Digital Solutions offers professional website development, Google Business Profile services, Google Ads and SEO for businesses in Hyderabad and across Telangana.",
  canonical
}) {
  const location = useLocation();

  useEffect(() => {
    // Update title
    document.title = title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    // Update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", description);

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", window.location.href);

    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [title, description, location.pathname]);

  return null;
}
