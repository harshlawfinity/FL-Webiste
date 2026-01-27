/** @type {import('next').NextConfig} */
const nextConfig = {
  //      output: "export",
  //   trailingSlash: true,
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
    ];
  },
};

export default nextConfig;
