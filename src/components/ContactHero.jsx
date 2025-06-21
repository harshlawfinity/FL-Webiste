import ContactForm from "./ContactForm";

export default function ContactUs() {
  return (
    <div className="mt-20">
      <div className="bg-gradient-to-br from-[#7A3EF2] to-[#a674f7] text-white md:py-40 py-20  px-6">
        <div className="max-w-7xl mx-auto flex justify-center items-center text-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
              Contact Us
            </h1>
            
          </div>
        </div>
      </div>

      <div className="flex flex-col max-w-7xl mx-auto lg:flex-row justify-between mt-10 px-4     ">
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-4xl font-semibold text-gray-800">We are here to help you.</h1>
          <p className="text-gray-600">
            Get in touch with us via email, phone, or by filling out the form to discover how factorylicence.in can solve your licencing challenges.

          </p>
          <p className="text-purple-600">info@factorylicence.in</p>
          <p className="text-purple-600">+91 99107 74687
</p>
          
<div className="mt-10 grid md:grid-cols-2 grid-cols-1 gap-6 text-gray-700">
  {/* Location 1 */}
  <div>
    <h4 className="font-extrabold">Noida Office</h4>
    <p className="mt-2 text-sm">
      Coco County, Plot No. GH-03 C, Sector-10, Greater Noida West, Uttar Pradesh 201309
    </p>
    <p className="text-sm mt-2">
       <span className="font-medium"></span> +91 93111 17064
    </p>
  </div>

  {/* Location 2 */}
  <div>
    <h4 className="font-extrabold">Gurugram Office</h4>
    <p className="mt-2 text-sm">
 GLS Avenue 51. Sector 92 Gurgaon 122505.
     </p>
    <p className="text-sm mt-2">
       <span className="font-medium"></span> +91 95400 34687
    </p>
  </div>

  {/* Location 3 */}
  <div>
    <h4 className="font-extrabold">Delhi   Office</h4>
    <p className="mt-2 text-sm">
T-10, Plot No. -7, 3rd Floor, Pankaj Plaza, Pocket-7, Sector-12, Dwarka, New Delhi - 110078
    </p>
    <p className="text-sm mt-2">
       <span className="font-medium"></span> +91 99107 74687
    </p>
  </div>
  <div>
    <h4 className="font-extrabold">Lucknow Office</h4>
    <p className="mt-2 text-sm">
CP-53, near Engineering College Chauraha, near CNG Petrol Pump, Lucknow, Uttar Pradesh 226021    </p>
    <p className="text-sm mt-2">
       <span className="font-medium"></span> +91 72338 11034
    </p>
  </div>
</div>


        </div>

        {/* Right Section */}
        <div className="lg:w-1/2  mt-10 lg:mt-0">
          <ContactForm />
        </div>
      </div>

      {/* Left Section */}
    </div>
  );
}
