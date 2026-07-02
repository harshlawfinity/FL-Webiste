import Link from "next/link";
import { getCmsMarqueeServices } from "@/lib/cms";

// Footer marquee — surfaces CMS-only service pages above the site footer on every page.
export default async function ServicePagesMarquee() {
  const services = await getCmsMarqueeServices();
  if (!services.length) return null;

  // Repeat each half enough times so wide viewports never show a gap during the scroll.
  const repeatsPerHalf = Math.max(1, Math.ceil(6 / services.length));
  const oneHalf = Array.from({ length: repeatsPerHalf }, () => services).flat();
  // Two identical halves — CSS animates -50% for a seamless circular loop.
  const marqueeItems = [...oneHalf, ...oneHalf];

  return (
    <section
      aria-label="Explore our services"
      className="border-y border-[#7A3EF2]/20 bg-gradient-to-r from-[#f9f5ff] via-white to-[#f9f5ff] py-8 md:py-10"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#7A3EF2] mb-5 md:mb-6 text-center">
          Our More Services
        </h2>

        <div className="service-marquee-viewport relative overflow-hidden">
          <div className="service-marquee-track flex w-max items-center gap-3 md:gap-4">
            {marqueeItems.map((service, index) => (
              <Link
                key={`${service.slug}-${index}`}
                href={service.href}
                className="shrink-0 rounded-full border border-[#7A3EF2]/30 bg-white px-4 py-2 text-sm font-medium text-[#7A3EF2] shadow-sm transition-colors hover:border-[#7A3EF2] hover:bg-[#7A3EF2] hover:text-white"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
