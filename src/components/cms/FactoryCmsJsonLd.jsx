import { getCmsSchema } from "@/lib/cms";

// Renders page-specific JSON-LD from CMS (seo.schema) in the document head.
export default function FactoryCmsJsonLd({ page }) {
  const schema = getCmsSchema(page);
  if (!schema) return null;

  return (
    <script
      id="cms-schema-org"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
