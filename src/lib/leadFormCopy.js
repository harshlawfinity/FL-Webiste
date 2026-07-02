import { HERO_BACKGROUND_IMAGES } from "@/lib/heroBackgrounds";

const STATE_LABELS = {
  delhi: "Delhi",
  haryana: "Haryana",
  "uttar-pradesh": "Uttar Pradesh",
};

function normalizePath(pathname = "") {
  const path = String(pathname || "/").split("?")[0].split("#")[0];
  return path.length > 1 ? path.replace(/\/+$/, "") : path;
}

function stateFromPath(pathname) {
  const match = normalizePath(pathname).match(
    /(?:factory-licence|fire-noc|pollution-noc)-in-(delhi|haryana|uttar-pradesh)$/
  );
  return match ? STATE_LABELS[match[1]] : "";
}

export function getLeadFormCopy(pathname) {
  const path = normalizePath(pathname);
  const state = stateFromPath(path);

  if (path === "/") {
    return {
      title: "Get Factory Licence Guidance",
      description:
        "Submit your information and get a customized Factory Licence Registration plan designed specifically for your business needs.",
    };
  }

  if (path.startsWith("/factory-licence-in-") && state) {
    return {
      title: `Get Factory License in ${state} Guidance`,
      description: `Fill in your details to receive a personalized Factory Licence in ${state} plan, including applicable government fees and expected approval timelines for your business.`,
    };
  }

  if (path.startsWith("/pollution-noc-in-") && state) {
    return {
      title: `Get Pollution NOC in ${state} Guidance`,
      description: `Fill in your details to receive a personalized Pollution NOC in ${state} plan, including applicable government fees and expected approval timelines for your business.`,
    };
  }

  if (path.startsWith("/fire-noc-in-") && state) {
    return {
      title: `Get Fire NOC in ${state} Guidance`,
      description: `Fill in your details to receive a personalized Fire NOC in ${state} plan, including applicable government fees and expected approval timelines for your business.`,
    };
  }

  return {
    title: "Let’s Connect Together",
    description: "Share your details & we’ll connect with you.",
  };
}

// CMS-only service pages — use admin Page Title (same field as marquee pills).
export function getCmsServiceLeadFormCopy(pageTitle) {
  const label = String(pageTitle || "Service").trim() || "Service";

  return {
    title: `Get ${label} Guidance`,
    description: `Fill in your details to receive a personalized ${label} plan, including applicable government fees and expected approval timelines for your business.`,
  };
}

// FAQ section heading for CMS-only service pages.
export function getCmsServiceFaqHeading(pageTitle) {
  const label = String(pageTitle || "Service").trim() || "Service";
  return `Frequently Asked Questions For ${label}`;
}

// Hero carousel alts for CMS service pages — matches HERO_BACKGROUND_IMAGES (3 slides).
export function getCmsServiceHeroBackgroundAlts(page) {
  const content = page?.content || {};
  const hero = content.hero || {};
  const pageTitle = page?.title || page?.mainHeading || content?.mainHeading || "Service";
  const h1Title =
    hero.headline || hero.heading || page?.mainHeading || page?.title || pageTitle;
  const formTitle = getCmsServiceLeadFormCopy(pageTitle).title;

  return [pageTitle, h1Title, formTitle];
}

// Hero slides for CMS pages — default carousel images + CMS-dynamic alts.
export function getCmsServiceHeroSlides(page) {
  const alts = getCmsServiceHeroBackgroundAlts(page);

  return alts.map((alt, slide) => ({
    alt,
    // Use real /public/assets files so all 3 slides rotate reliably on every host.
    src: HERO_BACKGROUND_IMAGES[slide] ?? HERO_BACKGROUND_IMAGES[0],
  }));
}
