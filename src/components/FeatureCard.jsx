import { SEO_ASSETS } from "@/lib/heroBackgrounds";
import Link from "next/link";

export default function FeatureCard() {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <img
            src={SEO_ASSETS.factoryLicenseRegistration}
            alt="Factory License Registration"
            className="rounded-3xl w-full h-auto object-cover"
            loading="lazy"
            width={800}
            height={600}
          />
        </div>

        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
            What You Need to Know About <br /> Factory Licence
          </h2>
          <p className="text-gray-500 mb-6 text-xs md:text-sm text-justify">
            If you are planning to set up a manufacturing plant in India, then
            obtaining a Factory Licence is the first step that needs to be
            taken. As per the requirements of the Factories Act, 1948, this
            licence is mandatory for any premises involved in the manufacturing
            activities, especially if you are using power and have employed 10
            or more workers or in case you are operating without power but
            employing 20 or more people. The Factory Licence is issued by the
            Labour Department or the Chief Inspector of Factories of that
            particular state. It serves as the documented evidence that your
            premises meets all the criteria of health, safety, welfare and
            environmental standards mandated by the law.
          </p>

          <p className="text-gray-500 mb-6 text-xs md:text-sm text-justify">
            Obtaining a <Link className="text-blue-500 hover:underline" href="https://factorylicence.in">Factory Licence</Link>  is not just a mere paperwork exercise
            but involves a comprehensive review of the layout of the factory,
            it’s safety measures, waste management system and compliance with
            labour laws. Without a valid Factory Licence, your manufacturing
            unit can face penalties, shutdowns, or legal action. Whether you
            are applying for a new licence or renewing an existing one, it is
            essential to understand the documentation, fees, and timelines
            involved in the process.
          </p>
        </div>
      </div>
    </div>
  );
}
