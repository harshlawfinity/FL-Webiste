import Link from "next/link";
import { getCmsMarqueeServices } from "@/lib/cms";
import ServiceMarqueeClient from "./ServiceMarqueeClient";

// Footer marquee — surfaces CMS-only service pages above the site footer on every page.
export default async function ServicePagesMarquee() {
  const services = await getCmsMarqueeServices();
  if (!services.length) return null;

  // Repeat enough times so wide viewports never show a gap during the scroll loop.
  const repeatsPerHalf = Math.max(1, Math.ceil(6 / services.length));
  const oneHalf = Array.from({ length: repeatsPerHalf }, () => services).flat();

  return (
    <section
      aria-label="Explore our services"
      className="border-y border-[#7A3EF2]/20 bg-gradient-to-r from-[#f9f5ff] via-white to-[#f9f5ff] py-8 md:py-10"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#7A3EF2] mb-5 md:mb-6 text-center">
          Our More Services
        </h2>

        <ServiceMarqueeClient services={oneHalf} />
      </div>
    </section>
  );
}
