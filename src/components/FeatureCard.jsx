import Image from "next/image";
import f1 from "../assets/f1.webp";
export default function FeatureCard() {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="md:w-1/2">
          <Image
            src={f1} // Replace with your image path
            alt="Modern design visual"
            className="rounded-3xl w-full h-auto object-cover"
            loading="lazy"
          />
        </div>

        {/* Text Section */}
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
            Obtaining a Factory Licence is not just a mere paperwork exercise
            but involves a comprehensive review of the layout of the factory,
            it’s safety measures, waste management system and compliance with
            various rules and regulations. The licence may need to be renewed
            every year or within a stipulated time as per the requirements of
            the state. Ignoring these requirements shall lead to legal
            complications including penalties, fines etc. and in some case even
            lead to the force shutdowns.{" "}
          </p>

          <p className="text-gray-500 mb-6 text-xs md:text-sm text-justify">
            At Factorylicence.in, we take out all the guesswork from the
            licensing procedure. From preparing your application and handling
            inspections to ensuring the ongoing compliance, we help you to stay
            on the right track that aligns with the law so that you can focus on
            running and expanding your business peacefully and full of
            confidence.
          </p>
        </div>
      </div>
    </div>
  );
}
