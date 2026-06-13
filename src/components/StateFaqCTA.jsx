"use client";

export default function StateFaqCTA({ onClick }) {
  return (
    <section className="max-w-7xl mx-auto md:px-0 px-4 mt-4 mb-10 md:my-10">
      <div className="grid md:grid-cols-4 gap-10">
        <div className="md:col-span-3">
          <div className="rounded-3xl border border-violet-100 bg-gradient-to-r from-violet-50 via-white to-violet-50 shadow-md px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <p className="text-base md:text-lg font-semibold leading-snug text-gray-900">
              Connect with Factory Licence and let our experts handle the legal
              hassle while you grow your business.
            </p>
            <button
              type="button"
              onClick={onClick}
              className="w-full md:w-auto shrink-0 rounded-2xl bg-[#7A3EF2] px-10 py-4 text-base font-semibold text-white shadow-lg shadow-violet-200 transition hover:bg-[#612ce0]"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
