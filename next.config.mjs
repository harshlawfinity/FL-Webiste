const additionalBlogRedirects = [
  {
    source: "/blogs/documents-you-must-have-before-applying-for-factory-licence",
    destination: "/",
    statusCode: 301,
  },
  {
    source:
      "/blogs/factory-licence-delhi-new-green-compliance-and-pollution-noc-requirements",
    destination: "/pollution-noc-in-delhi",
    statusCode: 301,
  },
  {
    source:
      "/blogs/factory-license-in-delhi-for-msmes-and-startups-step-by-step-guidance",
    destination: "/factory-licence-in-delhi",
    statusCode: 301,
  },
  {
    source: "/blogs/fire-noc-application-and-approval-everything-you-need-to-know",
    destination: "/fire-noc-in-delhi",
    statusCode: 301,
  },
  {
    source: "/blogs/fire-noc-checklist-in-uttar-pradesh",
    destination: "/fire-noc-in-uttar-pradesh",
    statusCode: 301,
  },
  {
    source: "/blogs/fire-noc-fees-and-validity-in-uttar-pradesh",
    destination: "/fire-noc-in-uttar-pradesh",
    statusCode: 301,
  },
  {
    source: "/blogs/fire-noc-online-process-via-delhi-fire-services",
    destination: "/fire-noc-in-delhi",
    statusCode: 301,
  },
  {
    source: "/blogs/factory-license-fees-in-haryana",
    destination: "/factory-licence-in-haryana",
    statusCode: 301,
  },
  {
    source: "/blogs/fire-safety-certificate-and-factory-license-in-delhi",
    destination: "/fire-noc-in-delhi",
    statusCode: 301,
  },
  {
    source:
      "/blogs/factory-licence-delhi-2025-latest-rules-digital-approvals-and-compliance-ch",
    destination: "/factory-licence-in-delhi",
    statusCode: 301,
  },
  {
    source: "/blogs/fire-noc-for-factories-in-uttar-pradesh",
    destination: "/fire-noc-in-uttar-pradesh",
    statusCode: 301,
  },
  {
    source: "/blogs/how-factory-licence-helps-you-get-fire-noc-in-delhi",
    destination: "/fire-noc-in-delhi",
    statusCode: 301,
  },
  {
    source: "/blogs/fire-noc-approval-timeline-in-delhi",
    destination: "/fire-noc-in-delhi",
    statusCode: 301,
  },
  {
    source:
      "/blogs/fire-noc-checklist-2025-for-industrial-and-manufacturing-units-in-delhi",
    destination: "/fire-noc-in-delhi",
    statusCode: 301,
  },
  {
    source:
      "/blogs/online-factory-license-for-manufacturing-units-in-delhi-sector-wise",
    destination: "/fire-noc-in-delhi",
    statusCode: 301,
  },
  {
    source: "/blogs/fire-noc-for-small-manufacturing-units-in-delhi",
    destination: "/fire-noc-in-delhi",
    statusCode: 301,
  },
  {
    source: "/blogs/fire-noc-for-warehouses-and-godowns-in-delhi",
    destination: "/fire-noc-in-delhi",
    statusCode: 301,
  },
  {
    source: "/blogs/fire-noc-rules-and-penalties-in-uttar-pradesh",
    destination: "/fire-noc-in-uttar-pradesh",
    statusCode: 301,
  },
  {
    source:
      "/blogs/smart-fire-safety-compliance-digital-fire-noc-in-delhi-for-factories",
    destination: "/fire-noc-in-delhi",
    statusCode: 301,
  },
  {
    source: "/blogs/green-fire-safety-delhis-latest-rules-for-sustainable-factories",
    destination: "/fire-noc-in-delhi",
    statusCode: 301,
  },
  {
    source: "/blogs/fire-safety-audit-in-uttar-pradesh",
    destination: "/fire-noc-in-uttar-pradesh",
    statusCode: 301,
  },
  {
    source: "/blogs/fire-safety-rules-for-factories-in-delhi",
    destination: "/fire-noc-in-delhi",
    statusCode: 301,
  },
  {
    source:
      "/blogs/fire-safety-audit-before-factory-license-complete-guide-for-fire-noc-delhi",
    destination: "/fire-noc-in-delhi",
    statusCode: 301,
  },
  {
    source:
      "/blogs/noc-from-pollution-control-board-cte-and-cto-made-simple-with-factorylicence",
    destination: "/blogs/what-is-cte-and-cto",
    statusCode: 301,
  },
  {
    source:
      "/blogs/why-hiring-a-factorylicencein-consultant-can-save-your-time-and-trouble",
    destination: "/",
    statusCode: 301,
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  //      output: "export",
  //   trailingSlash: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source:
          "/blogs/mcd-factory-licence-in-delhi-process-approval-and-compliance",
        destination: "/factory-licence-in-delhi",
        statusCode: 301,
      },
      {
        source:
          "/blogs/how-to-register-a-factory-licence-in-delhi-haryana-and-noida",
        destination: "/factory-licence-in-delhi",
        statusCode: 301,
      },
      {
        source:
          "/blogs/how-to-apply-for-fire-noc-renewal-documents-fees-and-timeline-in-uttar-pradesh",
        destination: "/fire-noc-in-uttar-pradesh",
        statusCode: 301,
      },
      {
        source:
          "/blogs/understanding-fire-noc-requirements-before-you-start-construction-in-delhi",
        destination: "/fire-noc-in-delhi",
        statusCode: 301,
      },
      {
        source:
          "/blogs/understanding-fire-noc-requirements-before-you-start-construction-in-up",
        destination: "/fire-noc-in-uttar-pradesh",
        statusCode: 301,
      },
      {
        source: "/blogs/apply-fire-noc-in-delhi",
        destination: "/fire-noc-in-delhi",
        statusCode: 301,
      },
      {
        source:
          "/blogs/understanding-fire-noc-requirements-before-you-start-construction-in-haryana",
        destination: "/fire-noc-in-haryana",
        statusCode: 301,
      },
      {
        source: "/blogs/apply-fire-noc-in-uttar-pradesh",
        destination: "/fire-noc-in-uttar-pradesh",
        statusCode: 301,
      },
      {
        source: "/blogs/apply-online-for-fire-noc-with-factorylicencein",
        destination: "/",
        statusCode: 301,
      },
      {
        source:
          "/blogs/how-to-apply-for-fire-noc-renewal-in-haryana-documents-fees-and-timeline",
        destination: "/fire-noc-in-haryana",
        statusCode: 301,
      },
      {
        source: "/blogs/fire-noc-online-registration-for-factories",
        destination: "/",
        statusCode: 301,
      },
      {
        source:
          "/blogs/how-to-apply-for-fire-noc-renewal-in-delhi-documents-fees-and-timeline",
        destination: "/fire-noc-in-delhi",
        statusCode: 301,
      },
      {
        source: "/blogs/apply-fire-noc-in-haryana",
        destination: "/fire-noc-in-haryana",
        statusCode: 301,
      },
      {
        source:
          "/blogs/factory-licence-requirements-for-manufacturing-units-in-delhi-ncr",
        destination: "/factory-licence-in-delhi",
        statusCode: 301,
      },
      {
        source:
          "/blogs/how-noida-factories-can-simplify-pollution-noc-and-factory-licensing",
        destination: "/fire-noc-in-uttar-pradesh",
        statusCode: 301,
      },
      {
        source: "/blogs/factory-licence-compliance-checklist-for-haryana",
        destination: "/factory-licence-in-haryana",
        statusCode: 301,
      },
      {
        source: "/blogs/factory-licence-renewal-process-in-delhi",
        destination: "/factory-licence-in-delhi",
        statusCode: 301,
      },
      {
        source: "/blogs/factory-license-fees-in-delhi",
        destination: "/factory-licence-in-delhi",
        statusCode: 301,
      },
      {
        source: "/blogs/factory-license-fees-in-up",
        destination: "/factory-licence-in-uttar-pradesh",
        statusCode: 301,
      },
      {
        source: "/blogs/pollution-noc-fees-in-up",
        destination: "/fire-noc-in-uttar-pradesh",
        statusCode: 301,
      },
      {
        source: "/blogs/pollution-noc-fees-in-haryana",
        destination: "/pollution-noc-in-haryana",
        statusCode: 301,
      },
      {
        source: "/blogs/annual-compliance-for-factories-in-delhi",
        destination: "/factory-licence-in-delhi",
        statusCode: 301,
      },
      {
        source: "/blogs/annual-compliance-for-factories-in-haryana",
        destination: "/factory-licence-in-haryana",
        statusCode: 301,
      },
      {
        source: "/blogs/annual-compliance-for-factories-in-up",
        destination: "/factory-licence-in-uttar-pradesh",
        statusCode: 301,
      },
      {
        source: "/blogs/factory-license-renewal-in-delhi",
        destination: "/factory-licence-in-delhi",
        statusCode: 301,
      },
      {
        source: "/blogs/factory-license-renewal-in-haryana",
        destination: "/factory-licence-in-haryana",
        statusCode: 301,
      },
      {
        source: "/blogs/fire-noc-compliances-in-delhi",
        destination: "/fire-noc-in-delhi",
        statusCode: 301,
      },
      {
        source: "/blogs/fire-noc-compliances-in-haryana",
        destination: "/fire-noc-in-haryana",
        statusCode: 301,
      },
      {
        source: "/blogs/fire-noc-compliances-in-up",
        destination: "/fire-noc-in-uttar-pradesh",
        statusCode: 301,
      },
      {
        source: "/blogs/factory-license-renewal-in-up",
        destination: "/factory-licence-in-uttar-pradesh",
        statusCode: 301,
      },
      {
        source: "/blogs/building-plan-approval-in-delhi",
        destination: "/factory-licence-in-delhi",
        statusCode: 301,
      },
      {
        source: "/blogs/building-plan-approval-in-up",
        destination: "/factory-licence-in-uttar-pradesh",
        statusCode: 301,
      },
      {
        source: "/blogs/pollution-noc-for-restaurant-in-delhi",
        destination: "/factory-licence-in-delhi",
        statusCode: 301,
      },
      {
        source: "/blogs/pollution-noc-for-restaurant-in-haryana",
        destination: "/factory-licence-in-haryana",
        statusCode: 301,
      },
      {
        source: "/blogs/pollution-noc-for-restaurant-in-up",
        destination: "/factory-licence-in-uttar-pradesh",
        statusCode: 301,
      },
      {
        source: "/blogs/factory-license-registration-in-noida",
        destination: "/factory-licence-in-uttar-pradesh",
        statusCode: 301,
      },
      {
        source: "/blogs/factory-license-registration-in-sonipat",
        destination: "/factory-licence-in-haryana",
        statusCode: 301,
      },
      {
        source: "/blogs/factory-license-registration-in-meerut",
        destination: "/factory-licence-in-uttar-pradesh",
        statusCode: 301,
      },
      {
        source: "/blogs/factory-license-registration-in-rewari",
        destination: "/factory-licence-in-haryana",
        statusCode: 301,
      },
      {
        source: "/blogs/fire-noc-registration-in-uttar-pradesh",
        destination: "/fire-noc-in-uttar-pradesh",
        statusCode: 301,
      },
      {
        source: "/blogs/fire-noc-for-commercial-buildings-in-uttar-pradesh",
        destination: "/fire-noc-in-uttar-pradesh",
        statusCode: 301,
      },
      {
        source: "/blogs/fire-noc-renewal-in-uttar-pradesh",
        destination: "/fire-noc-in-uttar-pradesh",
        statusCode: 301,
      },
      {
        source: "/blogs/how-to-apply-for-fire-noc-in-uttar-pradesh",
        destination: "/fire-noc-in-uttar-pradesh",
        statusCode: 301,
      },
      {
        source: "/blogs/factory-license-registration-in-ghaziabad",
        destination: "/factory-licence-in-uttar-pradesh",
        statusCode: 301,
      },
      {
        source: "/blogs/documents-required-for-fire-noc-delhi",
        destination: "/fire-noc-in-delhi",
        statusCode: 301,
      },
      {
        source: "/blogs/how-to-register-a-factory-licence-in-haryana",
        destination: "/factory-licence-in-haryana",
        statusCode: 301,
      },
      {
        source: "/blogs/fire-noc-renewal-in-delhi",
        destination: "/fire-noc-in-delhi",
        statusCode: 301,
      },
      {
        source:
          "/blogs/get-your-factory-licence-online-fast-easy-and-hassle-free",
        destination: "/",
        statusCode: 301,
      },
      {
        source: "/blogs/how-to-apply-for-fire-noc-in-delhi-step-by-step",
        destination: "/fire-noc-in-delhi",
        statusCode: 301,
      },
      {
        source: "/blogs/fire-noc-in-delhi-complete-guide-for-industries",
        destination: "/fire-noc-in-delhi",
        statusCode: 301,
      },

       {
        source: "/blogs/how-to-apply-for-fire-noc-renewal-documents-fees-and-timeline-in-uttar-prad",
        destination: "/fire-noc-in-uttar-pradesh",
        statusCode: 301,
      },
       {
        source: "/blogs/fire-noc-cost-and-validity-in-delhi",
        destination: "/fire-noc-in-delhi",
        statusCode: 301,
      },
       {
        source: "/blogs/how-to-register-a-factory-licence-in-delhi",
        destination: "/factory-licence-in-delhi",
        statusCode: 301,
      },
      {
        source: "/blogs/fire-noc-for-restaurants-and-food-factories-in-delhi",
        destination: "/fire-noc-in-delhi",
        statusCode: 301,
      },
      ...additionalBlogRedirects,
    ];
  },
};

export default nextConfig;
