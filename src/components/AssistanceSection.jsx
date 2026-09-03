import { SEO_ASSETS } from "@/lib/heroBackgrounds";

export default function AssistanceSection() {
  const features = [
    {
      title: "Zero-Error Documentation",
      description:
        "100% accuracy in paperwork to avoid delays, rejections, or penalties while you apply for fire safety certificate.",
      image: SEO_ASSETS.factoryLicenceRenewal,
      alt: "Factory Licence Renewal",
    },
    {
      title: "Ongoing Compliance Management",
      description:
        "We don't stop at licences — we help you stay compliant year-round. We have a team, that would help you assist with fire NOC renewal online, and help you in building a business that maintains the valid approvals and also help to avoid compliance-related disruptions.",
      image: SEO_ASSETS.factoryRegistrationCertificate,
      alt: "Factory Registration Certificate",
    },
    {
      title: "Support 24/7",
      description:
        "We help diagnose processes in the company regarding the type of registration or license that you might need, say, a pollution certificate for industry. We provide recommendations on process optimization and help you out with solutions instantly.",
      image: SEO_ASSETS.factoryActConsultants,
      alt: "Factory Act Consultants",
    },
  ];

  return (
    <div className="bg-gray-100 py-14 px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-12">
        We Provide Full Assistance In <br className="hidden sm:block" /> Your
        Business
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-3xl shadow-md text-center flex flex-col items-center"
          >
            <img
              src={feature.image}
              alt={feature.alt}
              className="w-24 h-24 mb-4 object-contain"
              loading="lazy"
              width={644}
              height={606}
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-500 text-sm ">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
