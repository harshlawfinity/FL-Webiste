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
