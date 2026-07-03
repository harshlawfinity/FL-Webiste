/** SEO-friendly public asset URLs (served from /public/assets/) */
export const SEO_ASSETS = {
  factoryLicenceLogo: "/assets/factory-licence-logo.gif",
  factoryLicenceLogoStatic: "/assets/factory-licence-logo.png",
  factoryLicenceVideoPreview: "/assets/factory-licence-video-preview.jpg",
  factoryLicenceExpertHelp: "/assets/factory-licence-expert-help.webp",
  factoryLicenseRenewal: "/assets/factory-license-renewal.webp",
  factoryLicenseRegistration: "/assets/factory-license-registration.webp",
  factoryLicenceRenewal: "/assets/factory-licence-renewal.webp",
  factoryRegistrationCertificate: "/assets/factory-registration-certificate.webp",
  factoryActConsultants: "/assets/factory-act-consultants.webp",
  factoryLicenceConsultants: "/assets/factory-licence-consultants.webp",
  factoryLicenseOnline: "/assets/factory-license-online.jpg",
  factoryLicenseRenewalHero: "/assets/factory-license-renewal-hero.webp",
  factoryRegistrationCertificateHero: "/assets/factory-registration-certificate-hero.webp",
  factoryLicenceStepsHaryana: "/assets/factory-licence-steps-haryana.webp",
  factoryLicenceStepsUttarPradesh: "/assets/factory-licence-steps-uttar-pradesh.webp",
  clientServotech: "/assets/client-servotech-power-system.webp",
  clientJaypee: "/assets/client-jaypee-infratech.png",
  clientInnobev: "/assets/client-innobev-solution.webp",
  clientSpruProducts: "/assets/client-spru-products.webp",
  clientLatherGreenEnergy: "/assets/client-lather-green-energy.webp",
  clientSleepyOwlCoffee: "/assets/client-sleepy-owl-coffee.webp",
  clientSmcEnterprises: "/assets/client-smc-enterprises.webp",
  factoriesImage: "/assets/factories-image.png",
};

export const HERO_BACKGROUND_IMAGES = [
  SEO_ASSETS.factoryLicenseRegistration,
  SEO_ASSETS.factoryLicenseRenewalHero,
  SEO_ASSETS.factoryRegistrationCertificateHero,
];

const MOBILE_HERO_IMAGES = {
  "/assets/factory-license-registration.webp":
    "/assets/factory-license-registration-mobile.jpg",
  "/assets/factories-in-delhi.webp": "/assets/factories-in-delhi-mobile.jpg",
  "/assets/factory-act-haryana.webp": "/assets/factory-act-haryana-mobile.jpg",
  "/assets/factories-act-license-in-up.webp":
    "/assets/factories-act-license-in-up-mobile.jpg",
  "/assets/pollution-noc-for-factory-in-delhi.webp":
    "/assets/pollution-noc-for-factory-in-delhi-mobile.jpg",
  "/assets/factory-pollution-certificate-in-haryana.webp":
    "/assets/factory-pollution-certificate-in-haryana-mobile.jpg",
  "/assets/pollution-control-board-license-in-up.webp":
    "/assets/pollution-control-board-license-in-up-mobile.jpg",
  "/assets/fire-certificate-renewal-in-delhi.webp":
    "/assets/fire-certificate-renewal-in-delhi-mobile.jpg",
  "/assets/fire-noc-renewal-haryana.webp":
    "/assets/fire-noc-renewal-haryana-mobile.jpg",
  "/assets/factory-fire-noc-apply-online-up.webp":
    "/assets/factory-fire-noc-apply-online-up-mobile.jpg",
};

export const getMobileHeroImage = (src) => MOBILE_HERO_IMAGES[src] || null;

// Alt text → SEO filename slug (e.g. "Hazardous Waste Licence" → hazardous-waste-licence).
export function slugifyHeroAlt(value = "") {
  return (
    String(value || "")
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "service"
  );
}

// Resolve carousel backing file — SEO alias URLs carry ?slide=N to pick the real image.
export function resolveHeroBackingSrc(src) {
  if (!src) return HERO_BACKGROUND_IMAGES[0];

  try {
    const url = new URL(String(src), "http://_");
    const slide = url.searchParams.get("slide");
    if (slide !== null) {
      const idx = Number(slide) || 0;
      return HERO_BACKGROUND_IMAGES[idx] ?? HERO_BACKGROUND_IMAGES[0];
    }
  } catch {
    // Plain /assets/... path without query string.
  }

  return String(src).split("?")[0];
}

// SEO-friendly public URL from alt; ?slide= maps to HERO_BACKGROUND_IMAGES[slide].
export function getHeroImageUrlFromAlt(alt, slideIndex = 0) {
  const slug = slugifyHeroAlt(alt);
  const slide = Number(slideIndex) || 0;
  return `/assets/${slug}.webp?slide=${slide}`;
}

export function getMobileHeroImageForSrc(src) {
  return getMobileHeroImage(resolveHeroBackingSrc(src));
}

export const PAGE_IMAGES = {
  factoryLicenceDelhi: {
    hero: [
      "/assets/factories-in-delhi.webp",
      "/assets/mcd-factory-license-in-delhi.webp",
      "/assets/mcd-factory-license-renewal-delhi.webp",
    ],
    process: "/assets/factoy-licence-process-in-delhi.webp",
  },
  factoryLicenceHaryana: {
    hero: [
      "/assets/factory-act-haryana.webp",
      "/assets/haryana-factory.webp",
      "/assets/haryana-factory-license.webp",
    ],
    process: "/assets/factory-licence-in-haryana.webp",
  },
  factoryLicenceUttarPradesh: {
    hero: [
      "/assets/factories-act-license-in-up.webp",
      "/assets/factory-license-renewal-up.webp",
      "/assets/factory-licence-in-up.webp",
    ],
    process: "/assets/factory-licence-process-in-up.webp",
  },
  pollutionNocDelhi: {
    hero: [
      "/assets/pollution-noc-for-factory-in-delhi.webp",
      "/assets/factory-pollution-certificate-in-delhi.webp",
      "/assets/pollution-certificate-for-factory-in-delhi.webp",
    ],
    process: "/assets/pollution-noc-process-in-delhi.png",
  },
  pollutionNocHaryana: {
    hero: [
      "/assets/factory-pollution-certificate-in-haryana.webp",
      "/assets/pollution-certificate-apply-online-in-haryana.webp",
      "/assets/pollution-noc-in-haryana.webp",
    ],
    process: "/assets/pollution-noc-process-in-haryana.png",
  },
  pollutionNocUttarPradesh: {
    hero: [
      "/assets/pollution-control-board-license-in-up.webp",
      "/assets/up-pollution-control-board-online-application.webp",
      "/assets/pollution-noc-uttar-pradesh.webp",
    ],
  },
  fireNocDelhi: {
    hero: [
      "/assets/fire-certificate-renewal-in-delhi.webp",
      "/assets/fire-noc-for-residential-buildings-in-delhi.webp",
      "/assets/fire-noc-delhi.webp",
    ],
    process: "/assets/fire-noc-process-in-delhi.jpeg",
  },
  fireNocHaryana: {
    hero: [
      "/assets/fire-noc-renewal-haryana.webp",
      "/assets/fire-noc-online-haryana.webp",
      "/assets/fire-noc-haryana.webp",
    ],
    process: "/assets/fire-noc-process-haryana.jpeg",
  },
  fireNocUttarPradesh: {
    hero: [
      "/assets/factory-fire-noc-apply-online-up.webp",
      "/assets/nivesh-mitra-fire-noc-up.webp",
      "/assets/fire-safety-certificate-renewal-online-up.webp",
    ],
    process: "/assets/fire-noc-process-in-up.png",
  },
};
