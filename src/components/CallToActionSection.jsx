
import Link from "next/link";

export default function CallToActionSection() {
  return (
    <div className="bg-gradient-to-b border-2 py-24 text-center text-[#8753F4]">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8">Let's Talk</h2>
      <Link
        href="/contact"
        className="border-2 bg-gradient-to-b from-[#8753F4]   to-[#8753F4] border-white px-6 py-2 rounded-full text-white font-semibold hover:bg-white   transition"
      >
        Contact Us
      </Link>
    </div>
  );
}
