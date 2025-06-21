export default function LocationSection() {
  return (
    <section className="py-20 md:px-0 px-4 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Map with info box */}
        <div className="w-full lg:w-1/2 relative">
          <div>
             <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.2988248919987!2d77.04086977537945!3d28.59081087568755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b52f4553e01%3A0x721ecdfa948756e8!2sLawfinity%20India%20Pvt%20Ltd%20(Business%20Compliance%20Group)!5e0!3m2!1sen!2sin!4v1748757590171!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
          {/* <div className="absolute top-8 left-8 bg-white shadow-lg rounded-xl p-4 w-72">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-blue-600 text-white p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M21 16.25V8.75C21 7.50736 20.1046 6.5 19 6.5H5C3.89543 6.5 3 7.50736 3 8.75v7.5C3 17.4926 3.89543 18.5 5 18.5h14c1.1046 0 2-.8954 2-2z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-bold text-sm">Snappy Inc.</p>
                <p className="text-sm text-gray-500">
                  Chat Beyond Limits Together
                </p>
              </div>
            </div>
            <p className="font-semibold text-sm mb-1">San Francisco, USA</p>
            <p className="text-sm text-gray-500">
              123 Tech Boulevard, Suite 456
            </p>
            <a href="#" className="text-sm text-blue-600 mt-2 inline-block">
              Open Google Maps →
            </a>
          </div> */}
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <p className="text-sm text-gray-500 mb-2">Our Location</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-[#8653F4]">
            Connecting Near and Far
          </h2>
          <div className="text-gray-700 text- leading-relaxed">
            <p className="font-bold">Headquarters</p>
            <p>
              T-10, Plot No. -7, 3rd Floor, Pankaj Plaza, Pocket-7, Sector-12,
              Dwarka, New Delhi - 110078
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
