import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: "website" | "article" | "product";
  ogImage?: string;
  twitterHandle?: string;
  structuredData?: object;
}

const SEO = ({
  title,
  description,
  canonical,
  ogType = "website",
  ogImage = "/og-image.jpg",
  twitterHandle = "@sabproperties",
  structuredData,
}: SEOProps) => {
  const siteName = "SAB Properties Private Limited";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const defaultDescription = "Trusted real estate consultancy, portfolio management & legal assistance in New Delhi. Specializing in office spaces, godowns, and showrooms.";
  const metaDescription = description || defaultDescription;
  const baseUrl = "https://sabproperties.in";
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={`${baseUrl}${ogImage}`} />
      <meta property="og:url" content={fullCanonical} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={`${baseUrl}${ogImage}`} />
      {twitterHandle && <meta name="twitter:site" content={twitterHandle} />}

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
