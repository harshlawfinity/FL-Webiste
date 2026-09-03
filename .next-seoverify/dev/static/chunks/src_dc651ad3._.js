(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/heroBackgrounds.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** SEO-friendly public asset URLs (served from /public/assets/) */ __turbopack_context__.s([
    "HERO_BACKGROUND_IMAGES",
    ()=>HERO_BACKGROUND_IMAGES,
    "PAGE_IMAGES",
    ()=>PAGE_IMAGES,
    "SEO_ASSETS",
    ()=>SEO_ASSETS,
    "getHeroImageUrlFromAlt",
    ()=>getHeroImageUrlFromAlt,
    "getMobileHeroImage",
    ()=>getMobileHeroImage,
    "getMobileHeroImageForSrc",
    ()=>getMobileHeroImageForSrc,
    "resolveHeroBackingSrc",
    ()=>resolveHeroBackingSrc,
    "slugifyHeroAlt",
    ()=>slugifyHeroAlt
]);
const SEO_ASSETS = {
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
    factoriesImage: "/assets/factories-image.png"
};
const HERO_BACKGROUND_IMAGES = [
    SEO_ASSETS.factoryLicenseRegistration,
    SEO_ASSETS.factoryLicenseRenewalHero,
    SEO_ASSETS.factoryRegistrationCertificateHero
];
const MOBILE_HERO_IMAGES = {
    "/assets/factory-license-registration.webp": "/assets/factory-license-registration-mobile.jpg",
    "/assets/factories-in-delhi.webp": "/assets/factories-in-delhi-mobile.jpg",
    "/assets/factory-act-haryana.webp": "/assets/factory-act-haryana-mobile.jpg",
    "/assets/factories-act-license-in-up.webp": "/assets/factories-act-license-in-up-mobile.jpg",
    "/assets/pollution-noc-for-factory-in-delhi.webp": "/assets/pollution-noc-for-factory-in-delhi-mobile.jpg",
    "/assets/factory-pollution-certificate-in-haryana.webp": "/assets/factory-pollution-certificate-in-haryana-mobile.jpg",
    "/assets/pollution-control-board-license-in-up.webp": "/assets/pollution-control-board-license-in-up-mobile.jpg",
    "/assets/fire-certificate-renewal-in-delhi.webp": "/assets/fire-certificate-renewal-in-delhi-mobile.jpg",
    "/assets/fire-noc-renewal-haryana.webp": "/assets/fire-noc-renewal-haryana-mobile.jpg",
    "/assets/factory-fire-noc-apply-online-up.webp": "/assets/factory-fire-noc-apply-online-up-mobile.jpg"
};
const getMobileHeroImage = (src)=>MOBILE_HERO_IMAGES[src] || null;
function slugifyHeroAlt(value = "") {
    return String(value || "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "service";
}
function resolveHeroBackingSrc(src) {
    if (!src) return HERO_BACKGROUND_IMAGES[0];
    try {
        const url = new URL(String(src), "http://_");
        const slide = url.searchParams.get("slide");
        if (slide !== null) {
            const idx = Number(slide) || 0;
            return HERO_BACKGROUND_IMAGES[idx] ?? HERO_BACKGROUND_IMAGES[0];
        }
    } catch  {
    // Plain /assets/... path without query string.
    }
    return String(src).split("?")[0];
}
function getHeroImageUrlFromAlt(alt, slideIndex = 0) {
    const slug = slugifyHeroAlt(alt);
    const slide = Number(slideIndex) || 0;
    return `/assets/${slug}.webp?slide=${slide}`;
}
function getMobileHeroImageForSrc(src) {
    return getMobileHeroImage(resolveHeroBackingSrc(src));
}
const PAGE_IMAGES = {
    factoryLicenceDelhi: {
        hero: [
            "/assets/factories-in-delhi.webp",
            "/assets/mcd-factory-license-in-delhi.webp",
            "/assets/mcd-factory-license-renewal-delhi.webp"
        ],
        process: "/assets/factoy-licence-process-in-delhi.webp"
    },
    factoryLicenceHaryana: {
        hero: [
            "/assets/factory-act-haryana.webp",
            "/assets/haryana-factory.webp",
            "/assets/haryana-factory-license.webp"
        ],
        process: "/assets/factory-licence-in-haryana.webp"
    },
    factoryLicenceUttarPradesh: {
        hero: [
            "/assets/factories-act-license-in-up.webp",
            "/assets/factory-license-renewal-up.webp",
            "/assets/factory-licence-in-up.webp"
        ],
        process: "/assets/factory-licence-process-in-up.webp"
    },
    pollutionNocDelhi: {
        hero: [
            "/assets/pollution-noc-for-factory-in-delhi.webp",
            "/assets/factory-pollution-certificate-in-delhi.webp",
            "/assets/pollution-certificate-for-factory-in-delhi.webp"
        ],
        process: "/assets/pollution-noc-process-in-delhi.png"
    },
    pollutionNocHaryana: {
        hero: [
            "/assets/factory-pollution-certificate-in-haryana.webp",
            "/assets/pollution-certificate-apply-online-in-haryana.webp",
            "/assets/pollution-noc-in-haryana.webp"
        ],
        process: "/assets/pollution-noc-process-in-haryana.png"
    },
    pollutionNocUttarPradesh: {
        hero: [
            "/assets/pollution-control-board-license-in-up.webp",
            "/assets/up-pollution-control-board-online-application.webp",
            "/assets/pollution-noc-uttar-pradesh.webp"
        ]
    },
    fireNocDelhi: {
        hero: [
            "/assets/fire-certificate-renewal-in-delhi.webp",
            "/assets/fire-noc-for-residential-buildings-in-delhi.webp",
            "/assets/fire-noc-delhi.webp"
        ],
        process: "/assets/fire-noc-process-in-delhi.jpeg"
    },
    fireNocHaryana: {
        hero: [
            "/assets/fire-noc-renewal-haryana.webp",
            "/assets/fire-noc-online-haryana.webp",
            "/assets/fire-noc-haryana.webp"
        ],
        process: "/assets/fire-noc-process-haryana.jpeg"
    },
    fireNocUttarPradesh: {
        hero: [
            "/assets/factory-fire-noc-apply-online-up.webp",
            "/assets/nivesh-mitra-fire-noc-up.webp",
            "/assets/fire-safety-certificate-renewal-online-up.webp"
        ],
        process: "/assets/fire-noc-process-in-up.png"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/FL.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$heroBackgrounds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/heroBackgrounds.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const FL = ({ mobile = false })=>{
    _s();
    const [showImage, setShowImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [startAnimation, setStartAnimation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FL.useEffect": ()=>{
            const timeout = setTimeout({
                "FL.useEffect.timeout": ()=>{
                    setStartAnimation(true);
                }
            }["FL.useEffect.timeout"], 3000);
            return ({
                "FL.useEffect": ()=>clearTimeout(timeout)
            })["FL.useEffect"];
        }
    }["FL.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FL.useEffect": ()=>{
            if (startAnimation) {
                const interval = setInterval({
                    "FL.useEffect.interval": ()=>{
                        setShowImage({
                            "FL.useEffect.interval": (prev)=>!prev
                        }["FL.useEffect.interval"]);
                    }
                }["FL.useEffect.interval"], 3000);
                return ({
                    "FL.useEffect": ()=>clearInterval(interval)
                })["FL.useEffect"];
            }
        }
    }["FL.useEffect"], [
        startAnimation
    ]);
    if (mobile) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center h-[60px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$heroBackgrounds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEO_ASSETS"].factoryLicenceLogoStatic,
                alt: "Factory Licence",
                width: 96,
                height: 72,
                className: "w-24 h-auto",
                priority: true
            }, void 0, false, {
                fileName: "[project]/src/components/FL.jsx",
                lineNumber: 31,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/FL.jsx",
            lineNumber: 30,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-[220px] h-[60px] overflow-hidden flex items-center justify-start",
        children: [
            startAnimation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex justify-start items-center absolute left-0 top-0 w-full h-full transition-all duration-1000 ease-in-out ${showImage ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$heroBackgrounds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEO_ASSETS"].factoryLicenceLogo,
                    alt: "Factory License Logo Gif",
                    width: 128,
                    height: 96,
                    className: "w-32 h-auto",
                    loading: "lazy",
                    decoding: "async"
                }, void 0, false, {
                    fileName: "[project]/src/components/FL.jsx",
                    lineNumber: 52,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/FL.jsx",
                lineNumber: 47,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            startAnimation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute left-0 top-0 h-full flex items-center text-2xl font-semibold text-[#7A3EF2] transition-all duration-100 ease-in-out ${showImage ? 'opacity-0 translate-y-full' : 'opacity-100 translate-y-0'}`,
                children: "Factory"
            }, void 0, false, {
                fileName: "[project]/src/components/FL.jsx",
                lineNumber: 66,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            !startAnimation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-2xl font-semibold text-[#7A3EF2]",
                children: "Factory"
            }, void 0, false, {
                fileName: "[project]/src/components/FL.jsx",
                lineNumber: 77,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ml-auto text-2xl font-semibold text-[#7A3EF2]",
                children: "Licence.In"
            }, void 0, false, {
                fileName: "[project]/src/components/FL.jsx",
                lineNumber: 83,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FL.jsx",
        lineNumber: 44,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FL, "LpoZH/iuE7xEcE+DU4FuH8zSSoA=");
_c = FL;
const __TURBOPACK__default__export__ = FL;
var _c;
__turbopack_context__.k.register(_c, "FL");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Header.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneCall$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone-call.js [app-client] (ecmascript) <export default as PhoneCall>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FL$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FL.jsx [app-client] (ecmascript)"); // Your logo component
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const Nav = ()=>{
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeDropdown, setActiveDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [expandedMenus, setExpandedMenus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const timeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const toggleMenu = ()=>setIsOpen(!isOpen);
    const toggleSubMenu = (index)=>{
        setExpandedMenus((prev)=>({
                ...prev,
                [index]: !prev[index]
            }));
    };
    const navItems = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "Factory Licence",
            subNav: [
                {
                    name: "Delhi",
                    path: "/factory-licence-in-delhi"
                },
                {
                    name: "Haryana",
                    path: "/factory-licence-in-haryana"
                },
                {
                    name: "Uttar Pradesh",
                    path: "/factory-licence-in-uttar-pradesh"
                }
            ]
        },
        {
            name: "Pollution NOC",
            subNav: [
                {
                    name: "Delhi",
                    path: "/pollution-noc-in-delhi"
                },
                {
                    name: "Haryana",
                    path: "/pollution-noc-in-haryana"
                },
                {
                    name: "Uttar Pradesh",
                    path: "/pollution-noc-in-uttar-pradesh"
                }
            ]
        },
        {
            name: "Fire NOC",
            subNav: [
                {
                    name: "Delhi",
                    path: "/fire-noc-in-delhi"
                },
                {
                    name: "Haryana",
                    path: "/fire-noc-in-haryana"
                },
                {
                    name: "Uttar Pradesh",
                    path: "/fire-noc-in-uttar-pradesh"
                }
            ]
        },
        // {
        //   name: "Pollution NOC",
        //   subNav: [
        //     { name: "Delhi", path: "https://delhi.pollutionnoc.factorylicence.in" },
        //     {
        //       name: "Haryana",
        //       path: "https://haryana.pollutionnoc.factorylicence.in",
        //     },
        //     {
        //       name: "Uttar Pradesh",
        //       path: "https://uttarpradesh.pollutionnoc.factorylicence.in",
        //     },
        //   ],
        // },
        {
            name: "About Us",
            path: "/about"
        },
        {
            name: "Blogs",
            path: "/blogs"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: `fixed top-0 w-full z-50 h-20 transition-all duration-300 ${isScrolled ? "bg-white shadow" : "bg-white"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto flex justify-between items-center h-full px-4 sm:px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        "aria-label": "Factory Licence Home",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:block",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FL$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/components/Header.jsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.jsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FL$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    mobile: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.jsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.jsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header.jsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex gap-6 text-sm font-medium",
                        children: navItems.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative group",
                                onMouseEnter: ()=>{
                                    clearTimeout(timeoutRef.current);
                                    setActiveDropdown(i);
                                },
                                onMouseLeave: ()=>{
                                    timeoutRef.current = setTimeout(()=>setActiveDropdown(null), 200);
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.path || "#",
                                        className: `flex items-center gap-1 transition hover:text-purple-600 ${pathname === item.path ? "text-purple-600" : "text-gray-800"}`,
                                        children: [
                                            item.name,
                                            item.subNav && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiChevronDown"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Header.jsx",
                                                lineNumber: 111,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Header.jsx",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    item.subNav && activeDropdown === i && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute left-0 mt-2 z-50 bg-white border rounded-md shadow-md",
                                        children: item.subNav.map((subItem, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: subItem.path,
                                                className: "block px-6 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-purple-600",
                                                children: subItem.name
                                            }, j, false, {
                                                fileName: "[project]/src/components/Header.jsx",
                                                lineNumber: 117,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.jsx",
                                        lineNumber: 115,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, i, true, {
                                fileName: "[project]/src/components/Header.jsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.jsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex items-center gap-3 text-black font-semibold",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "tel:+919910774687",
                            className: "border border-gray-400 px-4 py-2 rounded-full text-xs md:text-sm flex items-center gap-2 hover:bg-gray-100 text-black font-semibold transition",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneCall$3e$__["PhoneCall"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.jsx",
                                    lineNumber: 134,
                                    columnNumber: 3
                                }, ("TURBOPACK compile-time value", void 0)),
                                "+91 99107 74687"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Header.jsx",
                            lineNumber: 133,
                            columnNumber: 1
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.jsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:hidden flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "tel:+919910774687",
                                className: "border border-gray-400 px-3 py-1.5 rounded-full text-xs flex items-center gap-1.5 hover:bg-gray-100 text-black font-semibold transition whitespace-nowrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneCall$3e$__["PhoneCall"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.jsx",
                                        lineNumber: 146,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "+91 99107 74687"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Header.jsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: toggleMenu,
                                "aria-label": "Toggle Menu",
                                className: "text-black font-semibold",
                                children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiX"], {
                                    size: 26
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.jsx",
                                    lineNumber: 150,
                                    columnNumber: 23
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMenu"], {
                                    size: 26,
                                    className: "text-black"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.jsx",
                                    lineNumber: 150,
                                    columnNumber: 43
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.jsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header.jsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Header.jsx",
                lineNumber: 80,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/30 backdrop-blur-sm z-40",
                onClick: toggleMenu
            }, void 0, false, {
                fileName: "[project]/src/components/Header.jsx",
                lineNumber: 157,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed top-0 left-0 z-50 bg-white w-4/5 max-w-sm h-full shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                onClick: toggleMenu,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FL$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    mobile: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.jsx",
                                    lineNumber: 171,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.jsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: toggleMenu,
                                "aria-label": "Close menu",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiX"], {
                                    size: 28,
                                    className: "text-black"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.jsx",
                                    lineNumber: 174,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.jsx",
                                lineNumber: 173,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header.jsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex flex-col gap-5 px-6 pt-4 text-gray-800 text-base",
                        children: [
                            navItems.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center cursor-pointer",
                                            onClick: ()=>item.subNav ? toggleSubMenu(i) : toggleMenu(),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: item.path || "#",
                                                    onClick: !item.subNav ? toggleMenu : undefined,
                                                    className: "hover:text-purple-600",
                                                    children: item.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Header.jsx",
                                                    lineNumber: 185,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                item.subNav && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiChevronDown"], {
                                                    className: `transition-transform ${expandedMenus[i] ? "rotate-180" : ""}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Header.jsx",
                                                    lineNumber: 193,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Header.jsx",
                                            lineNumber: 181,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        item.subNav && expandedMenus[i] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pl-4 mt-2 flex flex-col gap-2 text-sm text-gray-700",
                                            children: item.subNav.map((subItem, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: subItem.path,
                                                    onClick: toggleMenu,
                                                    className: "hover:text-purple-600",
                                                    children: subItem.name
                                                }, j, false, {
                                                    fileName: "[project]/src/components/Header.jsx",
                                                    lineNumber: 200,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.jsx",
                                            lineNumber: 198,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, i, true, {
                                    fileName: "[project]/src/components/Header.jsx",
                                    lineNumber: 180,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "tel:+919910774687",
                                className: "border border-gray-400 px-4 py-2 rounded-full text-xs md:text-sm flex items-center gap-2 hover:bg-gray-100 text-black font-semibold transition",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneCall$3e$__["PhoneCall"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.jsx",
                                        lineNumber: 215,
                                        columnNumber: 3
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "+91 99107 74687"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Header.jsx",
                                lineNumber: 214,
                                columnNumber: 10
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header.jsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Header.jsx",
                lineNumber: 164,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Header.jsx",
        lineNumber: 79,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Nav, "gC20dUfUpr2dDCJRgVDWkB0Ay38=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Nav;
const __TURBOPACK__default__export__ = Nav;
var _c;
__turbopack_context__.k.register(_c, "Nav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/FL2.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$heroBackgrounds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/heroBackgrounds.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const FL = ()=>{
    _s();
    const [showImage, setShowImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // Controls the text/GIF switch
    const [startAnimation, setStartAnimation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // Delays animation start
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FL.useEffect": ()=>{
            const timeout = setTimeout({
                "FL.useEffect.timeout": ()=>{
                    setStartAnimation(true);
                }
            }["FL.useEffect.timeout"], 3000); // Wait 3 seconds before starting animation
            return ({
                "FL.useEffect": ()=>clearTimeout(timeout)
            })["FL.useEffect"];
        }
    }["FL.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FL.useEffect": ()=>{
            if (startAnimation) {
                const interval = setInterval({
                    "FL.useEffect.interval": ()=>{
                        setShowImage({
                            "FL.useEffect.interval": (prev)=>!prev
                        }["FL.useEffect.interval"]);
                    }
                }["FL.useEffect.interval"], 3000);
                return ({
                    "FL.useEffect": ()=>clearInterval(interval)
                })["FL.useEffect"];
            }
        }
    }["FL.useEffect"], [
        startAnimation
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-[222px] h-[60px] overflow-hidden flex items-center justify-start",
        children: [
            startAnimation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex justify-start items-center absolute left-0 top-0 w-full h-full transition-all duration-1000 ease-in-out ${showImage ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$heroBackgrounds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEO_ASSETS"].factoryLicenceLogoStatic,
                    alt: "Factory License Logo",
                    width: 128,
                    height: 96,
                    className: "w-32 h-auto",
                    loading: "lazy"
                }, void 0, false, {
                    fileName: "[project]/src/components/FL2.jsx",
                    lineNumber: 36,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/FL2.jsx",
                lineNumber: 31,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            startAnimation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute ml-2 left-0 top-0 h-full flex items-center text-2xl font-semibold text-[#eeedf0] transition-all duration-1000 ease-in-out ${showImage ? 'opacity-0 translate-y-full' : 'opacity-100 translate-y-0'}`,
                children: "Factory"
            }, void 0, false, {
                fileName: "[project]/src/components/FL2.jsx",
                lineNumber: 49,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            !startAnimation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-2xl ml-2 font-semibold text-[#ffffff]",
                children: "Factory"
            }, void 0, false, {
                fileName: "[project]/src/components/FL2.jsx",
                lineNumber: 60,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ml-auto text-2xl font-semibold text-[#ffffff]",
                children: "Licence.In"
            }, void 0, false, {
                fileName: "[project]/src/components/FL2.jsx",
                lineNumber: 66,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FL2.jsx",
        lineNumber: 28,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FL, "LpoZH/iuE7xEcE+DU4FuH8zSSoA=");
_c = FL;
const __TURBOPACK__default__export__ = FL;
var _c;
__turbopack_context__.k.register(_c, "FL");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Footer.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneCall$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone-call.js [app-client] (ecmascript) <export default as PhoneCall>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/facebook.js [app-client] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/youtube.js [app-client] (ecmascript) <export default as Youtube>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FL2$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FL2.jsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function Footer() {
    const services = [
        {
            href: "/factory-licence-in-delhi",
            label: "Factory Licence in Delhi"
        },
        {
            href: "/factory-licence-in-haryana",
            label: "Factory Licence in Haryana"
        },
        {
            href: "/factory-licence-in-uttar-pradesh",
            label: "Factory Licence in Uttar Pradesh"
        },
        {
            href: "/fire-noc-in-delhi",
            label: "Fire NOC in Delhi"
        },
        {
            href: "/fire-noc-in-haryana",
            label: "Fire NOC in Haryana"
        },
        {
            href: "/fire-noc-in-uttar-pradesh",
            label: "Fire NOC in Uttar Pradesh"
        },
        {
            href: "/fire-noc-certificate",
            label: "Fire NOC Certificate"
        },
        {
            href: "/pollution-noc-in-delhi",
            label: "Pollution NOC in Delhi"
        },
        {
            href: "/pollution-noc-in-haryana",
            label: "Pollution NOC in Haryana"
        },
        {
            href: "/pollution-noc-in-uttar-pradesh",
            label: "Pollution NOC in Uttar Pradesh"
        },
        {
            href: "/pollution-noc-certificate",
            label: "Pollution NOC Certificate"
        }
    ];
    const quickLinks = [
        {
            href: "/",
            label: "Home"
        },
        {
            href: "/about",
            label: "About Us"
        },
        {
            href: "/blogs",
            label: "Latest Blog"
        },
        {
            href: "/contact",
            label: "Contact Us"
        },
        {
            href: "/payments",
            label: "Payment"
        },
        {
            href: "/privacy-policy",
            label: "Privacy Policy"
        },
        {
            href: "/refund-cancellation",
            label: "Refund Cancellation"
        },
        {
            href: "/terms-conditions",
            label: "Terms Conditions"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-[#8653F4] text-gray-200 px-6 py-6 border-t border-slate-700",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex items-center justify-center flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FL2$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/components/Footer.jsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-2xl mt-10 italic font-semibold mb-6 tracking-wide text-purple-100",
                                children: "Factory Licencing Made Simple With factorylicence.in"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.jsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Footer.jsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-2xl font-semibold mb-6 tracking-wide text-purple-100",
                                children: "Contacts"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.jsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("address", {
                                className: "not-italic text-gray-100 leading-relaxed",
                                children: "T-10, Plot No. -7, 3rd Floor, Pankaj Plaza, Pocket-7, Sector-12, Dwarka, New Delhi - 110078"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.jsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-100 mt-6 leading-relaxed",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: "Mon – Sat:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.jsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this),
                                    " 10am – 7pm"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.jsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneCall$3e$__["PhoneCall"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.jsx",
                                                lineNumber: 69,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "tel:+919910774687",
                                                className: "hover:text-purple-100 transition-colors font-medium",
                                                children: "+91 99107 74687"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.jsx",
                                                lineNumber: 70,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Footer.jsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.jsx",
                                                lineNumber: 78,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "mailto:info@factorylicence.in",
                                                className: "hover:text-purple-100 transition-colors font-medium",
                                                children: "info@factorylicence.in"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.jsx",
                                                lineNumber: 79,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Footer.jsx",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.jsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex space-x-6 mt-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://www.facebook.com/factorylicence",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        "aria-label": "Facebook",
                                        className: "hover:text-purple-800 transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"], {
                                            size: 28
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.jsx",
                                            lineNumber: 97,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.jsx",
                                        lineNumber: 90,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://www.instagram.com/factorylicence.in/",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        "aria-label": "Instagram",
                                        className: "hover:text-purple-800 transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"], {
                                            size: 28
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.jsx",
                                            lineNumber: 106,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.jsx",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://www.linkedin.com/company/factorylicence/",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        "aria-label": "LinkedIn",
                                        className: "hover:text-purple-800 transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                                            size: 28
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.jsx",
                                            lineNumber: 115,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.jsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://www.youtube.com/@FactoryLicence",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        "aria-label": "YouTube",
                                        className: "hover:text-purple-800 transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__["Youtube"], {
                                            size: 28
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.jsx",
                                            lineNumber: 124,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.jsx",
                                        lineNumber: 117,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.jsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Footer.jsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-2xl font-semibold mb-6 tracking-wide text-purple-100",
                                children: "Services"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.jsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-2",
                                children: services.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: link.href,
                                            className: "hover:text-purple-100 transition-colors",
                                            children: link.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.jsx",
                                            lineNumber: 137,
                                            columnNumber: 17
                                        }, this)
                                    }, link.href, false, {
                                        fileName: "[project]/src/components/Footer.jsx",
                                        lineNumber: 136,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.jsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Footer.jsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-2xl font-semibold mb-6 tracking-wide text-purple-100",
                                children: "Quick Links"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.jsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-2 ",
                                children: quickLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: link.href,
                                            className: "hover:text-purple-100 transition-colors",
                                            children: link.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.jsx",
                                            lineNumber: 156,
                                            columnNumber: 17
                                        }, this)
                                    }, link.href, false, {
                                        fileName: "[project]/src/components/Footer.jsx",
                                        lineNumber: 155,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.jsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Footer.jsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                        fileName: "[project]/src/components/Footer.jsx",
                        lineNumber: 168,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Footer.jsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto w-full text-center text-xs text-gray-100 border-t border-gray-200 pt-4 pb-20 md:pb-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "!text-center",
                    children: [
                        "All Rights Reserved ",
                        new Date().getFullYear(),
                        ".",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "text-purple-100 hover:text-purple-800 transition-colors font-semibold",
                            children: "factorylicence.in"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer.jsx",
                            lineNumber: 185,
                            columnNumber: 11
                        }, this),
                        " "
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Footer.jsx",
                    lineNumber: 183,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Footer.jsx",
                lineNumber: 182,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Footer.jsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ServiceMarqueeClient.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServiceMarqueeClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ServiceMarqueeClient({ services }) {
    _s();
    const viewportRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pausedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const snappingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const resumeTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Two identical halves — when scroll hits halfway, jump back for a circular loop.
    const marqueeItems = [
        ...services,
        ...services
    ];
    const wrapScroll = ()=>{
        if (snappingRef.current) return;
        const viewport = viewportRef.current;
        if (!viewport) return;
        const half = viewport.scrollWidth / 2;
        if (half <= 0) return;
        if (viewport.scrollLeft >= half) viewport.scrollLeft -= half;
        if (viewport.scrollLeft < 0) viewport.scrollLeft += half;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ServiceMarqueeClient.useEffect": ()=>{
            const viewport = viewportRef.current;
            if (!viewport) return;
            const onScroll = {
                "ServiceMarqueeClient.useEffect.onScroll": ()=>wrapScroll()
            }["ServiceMarqueeClient.useEffect.onScroll"];
            viewport.addEventListener("scroll", onScroll, {
                passive: true
            });
            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                return ({
                    "ServiceMarqueeClient.useEffect": ()=>viewport.removeEventListener("scroll", onScroll)
                })["ServiceMarqueeClient.useEffect"];
            }
            // ~25px/s — slower than the previous 22s CSS loop.
            const id = window.setInterval({
                "ServiceMarqueeClient.useEffect.id": ()=>{
                    if (pausedRef.current || snappingRef.current) return;
                    viewport.scrollLeft += 1;
                    wrapScroll();
                }
            }["ServiceMarqueeClient.useEffect.id"], 40);
            return ({
                "ServiceMarqueeClient.useEffect": ()=>{
                    window.clearInterval(id);
                    viewport.removeEventListener("scroll", onScroll);
                    if (resumeTimerRef.current) window.clearTimeout(resumeTimerRef.current);
                }
            })["ServiceMarqueeClient.useEffect"];
        }
    }["ServiceMarqueeClient.useEffect"], []);
    // ScrollLeft needed to align a chip's left edge with the viewport's left edge.
    const scrollLeftForChip = (chip)=>{
        const viewport = viewportRef.current;
        return chip.getBoundingClientRect().left - viewport.getBoundingClientRect().left + viewport.scrollLeft;
    };
    // One click snaps exactly one chip left/right into view.
    const scrollByDir = (dir)=>{
        const viewport = viewportRef.current;
        if (!viewport) return;
        const chips = Array.from(viewport.querySelectorAll(".service-marquee-track > a"));
        if (!chips.length) return;
        const half = viewport.scrollWidth / 2;
        const current = viewport.scrollLeft;
        const epsilon = 4;
        // Pause auto-scroll while the user is nudging chips.
        pausedRef.current = true;
        snappingRef.current = true;
        if (resumeTimerRef.current) window.clearTimeout(resumeTimerRef.current);
        // Near loop edges, jump by one half so the next/prev chip still exists ahead.
        if (dir < 0 && current < 8 && half > 0) {
            viewport.scrollLeft = current + half;
        } else if (dir > 0 && half > 0 && current > half - 8) {
            viewport.scrollLeft = current - half;
        }
        const liveCurrent = viewport.scrollLeft;
        let targetChip = null;
        if (dir > 0) {
            targetChip = chips.find((chip)=>scrollLeftForChip(chip) > liveCurrent + epsilon);
        } else {
            for(let i = chips.length - 1; i >= 0; i -= 1){
                if (scrollLeftForChip(chips[i]) < liveCurrent - epsilon) {
                    targetChip = chips[i];
                    break;
                }
            }
        }
        if (!targetChip) {
            snappingRef.current = false;
            resumeTimerRef.current = window.setTimeout(()=>{
                pausedRef.current = false;
            }, 400);
            return;
        }
        viewport.scrollTo({
            left: scrollLeftForChip(targetChip),
            behavior: "smooth"
        });
        // Re-enable wrap + auto-scroll after the smooth snap finishes.
        resumeTimerRef.current = window.setTimeout(()=>{
            snappingRef.current = false;
            wrapScroll();
            // Keep paused if pointer is still over the viewport.
            const hovered = viewport.matches(":hover") || viewport.contains(document.activeElement);
            if (!hovered) pausedRef.current = false;
        }, 450);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex items-center gap-2 md:gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                "aria-label": "Scroll services left",
                onClick: ()=>scrollByDir(-1),
                className: "shrink-0 z-10 flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full border border-[#7A3EF2]/30 bg-white text-[#7A3EF2] shadow-sm transition-colors hover:bg-[#7A3EF2] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#7A3EF2] focus:ring-offset-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                    className: "h-5 w-5",
                    "aria-hidden": true
                }, void 0, false, {
                    fileName: "[project]/src/components/ServiceMarqueeClient.jsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ServiceMarqueeClient.jsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: viewportRef,
                tabIndex: 0,
                role: "region",
                "aria-label": "Our more services carousel",
                className: "service-marquee-viewport relative min-w-0 flex-1 overflow-x-auto overscroll-x-contain scroll-smooth",
                onMouseEnter: ()=>{
                    pausedRef.current = true;
                },
                onMouseLeave: ()=>{
                    if (!snappingRef.current) pausedRef.current = false;
                },
                onFocus: ()=>{
                    pausedRef.current = true;
                },
                onBlur: ()=>{
                    if (!snappingRef.current) pausedRef.current = false;
                },
                onKeyDown: (event)=>{
                    if (event.key === "ArrowLeft") {
                        event.preventDefault();
                        scrollByDir(-1);
                    } else if (event.key === "ArrowRight") {
                        event.preventDefault();
                        scrollByDir(1);
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "service-marquee-track flex w-max items-center gap-3 md:gap-4 py-1",
                    children: marqueeItems.map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: service.href,
                            className: "shrink-0 rounded-full border border-[#7A3EF2]/30 bg-white px-4 py-2 text-sm font-medium text-[#7A3EF2] shadow-sm transition-colors hover:border-[#7A3EF2] hover:bg-[#7A3EF2] hover:text-white",
                            children: service.title
                        }, `${service.slug}-${index}`, false, {
                            fileName: "[project]/src/components/ServiceMarqueeClient.jsx",
                            lineNumber: 171,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/ServiceMarqueeClient.jsx",
                    lineNumber: 169,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ServiceMarqueeClient.jsx",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                "aria-label": "Scroll services right",
                onClick: ()=>scrollByDir(1),
                className: "shrink-0 z-10 flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full border border-[#7A3EF2]/30 bg-white text-[#7A3EF2] shadow-sm transition-colors hover:bg-[#7A3EF2] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#7A3EF2] focus:ring-offset-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                    className: "h-5 w-5",
                    "aria-hidden": true
                }, void 0, false, {
                    fileName: "[project]/src/components/ServiceMarqueeClient.jsx",
                    lineNumber: 188,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ServiceMarqueeClient.jsx",
                lineNumber: 182,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ServiceMarqueeClient.jsx",
        lineNumber: 131,
        columnNumber: 5
    }, this);
}
_s(ServiceMarqueeClient, "cESCwm67AXStuMO1xwh/YcX2y10=");
_c = ServiceMarqueeClient;
var _c;
__turbopack_context__.k.register(_c, "ServiceMarqueeClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/leadFormCopy.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCmsServiceFaqHeading",
    ()=>getCmsServiceFaqHeading,
    "getCmsServiceHeroBackgroundAlts",
    ()=>getCmsServiceHeroBackgroundAlts,
    "getCmsServiceHeroSlides",
    ()=>getCmsServiceHeroSlides,
    "getCmsServiceLeadFormCopy",
    ()=>getCmsServiceLeadFormCopy,
    "getLeadFormCopy",
    ()=>getLeadFormCopy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$heroBackgrounds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/heroBackgrounds.js [app-client] (ecmascript)");
;
;
const STATE_LABELS = {
    delhi: "Delhi",
    haryana: "Haryana",
    "uttar-pradesh": "Uttar Pradesh"
};
function normalizePath(pathname = "") {
    const path = String(pathname || "/").split("?")[0].split("#")[0];
    return path.length > 1 ? path.replace(/\/+$/, "") : path;
}
function stateFromPath(pathname) {
    const match = normalizePath(pathname).match(/(?:factory-licence|fire-noc|pollution-noc)-in-(delhi|haryana|uttar-pradesh)$/);
    return match ? STATE_LABELS[match[1]] : "";
}
function getLeadFormCopy(pathname) {
    const path = normalizePath(pathname);
    const state = stateFromPath(path);
    if (path === "/") {
        return {
            title: "Get Factory Licence Guidance",
            description: "Submit your information and get a customized Factory Licence Registration plan designed specifically for your business needs."
        };
    }
    if (path.startsWith("/factory-licence-in-") && state) {
        return {
            title: `Get Factory License in ${state} Guidance`,
            description: `Fill in your details to receive a personalized Factory Licence in ${state} plan, including applicable government fees and expected approval timelines for your business.`
        };
    }
    if (path.startsWith("/pollution-noc-in-") && state) {
        return {
            title: `Get Pollution NOC in ${state} Guidance`,
            description: `Fill in your details to receive a personalized Pollution NOC in ${state} plan, including applicable government fees and expected approval timelines for your business.`
        };
    }
    if (path.startsWith("/fire-noc-in-") && state) {
        return {
            title: `Get Fire NOC in ${state} Guidance`,
            description: `Fill in your details to receive a personalized Fire NOC in ${state} plan, including applicable government fees and expected approval timelines for your business.`
        };
    }
    return {
        title: "Let’s Connect Together",
        description: "Share your details & we’ll connect with you."
    };
}
function getCmsServiceLeadFormCopy(pageTitle) {
    const label = String(pageTitle || "Service").trim() || "Service";
    return {
        title: `Get ${label} Guidance`,
        description: `Fill in your details to receive a personalized ${label} plan, including applicable government fees and expected approval timelines for your business.`
    };
}
function getCmsServiceFaqHeading(pageTitle) {
    const label = String(pageTitle || "Service").trim() || "Service";
    return `Frequently Asked Questions For ${label}`;
}
function getCmsServiceHeroBackgroundAlts(page) {
    const content = page?.content || {};
    const hero = content.hero || {};
    const pageTitle = page?.title || page?.mainHeading || content?.mainHeading || "Service";
    const h1Title = hero.headline || hero.heading || page?.mainHeading || page?.title || pageTitle;
    const formTitle = getCmsServiceLeadFormCopy(pageTitle).title;
    return [
        pageTitle,
        h1Title,
        formTitle
    ];
}
function getCmsServiceHeroSlides(page) {
    const alts = getCmsServiceHeroBackgroundAlts(page);
    return alts.map((alt, slide)=>({
            alt,
            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$heroBackgrounds$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHeroImageUrlFromAlt"])(alt, slide)
        }));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/lead-dedupe.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasSubmittedLead",
    ()=>hasSubmittedLead,
    "markLeadSubmitted",
    ()=>markLeadSubmitted
]);
const STORAGE_KEY = "fl_submitted_leads_v1";
function normalizePhone(phone = "") {
    return String(phone).replace(/\D/g, "").slice(-10);
}
// Local calendar date (YYYY-MM-DD) — a new day means a fresh lead even for the same
// phone + pageUrl combination.
function getLeadDateKey() {
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const dd = String(now.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
}
function readStore() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        const parsed = raw ? JSON.parse(raw) : {};
        return parsed && typeof parsed === "object" ? parsed : {};
    } catch  {
        return {};
    }
}
function writeStore(store) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
    } catch  {
    // Ignore quota / private-mode failures — form still submits normally.
    }
}
// Client-side lead dedupe (organic leads only): a submission is a duplicate ONLY when
// leadDate + pageUrl + phone ALL match a previous submission for that phone. If even one
// of these three differs from the previous entry (e.g. a new day, a different page, or a
// different number), it is treated as a fresh lead and gets appended in the DB.
function leadKeyFor(phone, pageUrl) {
    const normalizedPhone = normalizePhone(phone);
    if (!normalizedPhone || normalizedPhone.length !== 10) return null;
    const normalizedPageUrl = String(pageUrl || "").trim().toLowerCase();
    const leadDate = getLeadDateKey();
    return `${normalizedPhone}::${normalizedPageUrl}::${leadDate}`;
}
function hasSubmittedLead(phone, pageUrl) {
    const key = leadKeyFor(phone, pageUrl);
    if (!key) return false;
    const store = readStore();
    return Boolean(store[key]);
}
function markLeadSubmitted(phone, pageUrl) {
    const key = leadKeyFor(phone, pageUrl);
    if (!key) return;
    const store = readStore();
    store[key] = Date.now();
    writeStore(store);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/cityStateOptions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CITY_STATE_OPTIONS",
    ()=>CITY_STATE_OPTIONS,
    "OTHER_CITY_OPTION",
    ()=>OTHER_CITY_OPTION,
    "STATE_OPTIONS",
    ()=>STATE_OPTIONS,
    "getCitiesByState",
    ()=>getCitiesByState
]);
const OTHER_CITY_OPTION = "Others";
const CITY_STATE_OPTIONS = [
    {
        "state": "Andhra Pradesh",
        "cities": [
            "Adilabad",
            "Adoni",
            "Amadalavalasa",
            "Amalapuram",
            "Anakapalle",
            "Anantapur",
            "Badepalle",
            "Banganapalle",
            "Bapatla",
            "Bellampalle",
            "Bethamcherla",
            "Bhadrachalam",
            "Bhainsa",
            "Bheemunipatnam",
            "Bhimavaram",
            "Bhongir",
            "Bobbili",
            "Bodhan",
            "Chilakaluripet",
            "Chirala",
            "Chittoor",
            "Cuddapah",
            "Devarakonda",
            "Dharmavaram",
            "Eluru",
            "Farooqnagar",
            "Gadwal",
            "Gooty",
            "Gudivada",
            "Gudur",
            "Guntakal",
            "Guntur",
            "Hanuman Junction",
            "Hindupur",
            "Hyderabad",
            "Ichchapuram",
            "Jaggaiahpet",
            "Jagtial",
            "Jammalamadugu",
            "Jangaon",
            "Kadapa",
            "Kadiri",
            "Kagaznagar",
            "Kakinada",
            "Kalyandurg",
            "Kamareddy",
            "Kandukur",
            "Karimnagar",
            "Kavali",
            "Khammam",
            "Koratla",
            "Kothagudem",
            "Kothapeta",
            "Kovvur",
            "Kurnool",
            "Kyathampalle",
            "Macherla",
            "Machilipatnam",
            "Madanapalle",
            "Mahbubnagar",
            "Mancherial",
            "Mandamarri",
            "Mandapeta",
            "Manuguru",
            "Markapur",
            "Medak",
            "Miryalaguda",
            "Mogalthur",
            "Nagari",
            "Nagarkurnool",
            "Nandyal",
            "Narasapur",
            "Narasaraopet",
            "Narayanpet",
            "Narsipatnam",
            "Nellore",
            "Nidadavole",
            "Nirmal",
            "Nizamabad",
            "Nuzvid",
            "Ongole",
            "Palacole",
            "Palasa Kasibugga",
            "Palwancha",
            "Parvathipuram",
            "Pedana",
            "Peddapuram",
            "Pithapuram",
            "Pondur",
            "Ponnur",
            "Proddatur",
            "Punganur",
            "Puttur",
            "Rajahmundry",
            "Rajam",
            "Rajampet",
            "Ramachandrapuram",
            "Ramagundam",
            "Rayachoti",
            "Rayadurg",
            "Renigunta",
            "Repalle",
            "Sadasivpet",
            "Salur",
            "Samalkot",
            "Sangareddy",
            "Sattenapalle",
            "Siddipet",
            "Singapur",
            "Sircilla",
            "Srikakulam",
            "Srikalahasti",
            "Suryapet",
            "Tadepalligudem",
            "Tadpatri",
            "Tandur",
            "Tanuku",
            "Tenali",
            "Tirupati",
            "Tuni",
            "Uravakonda",
            "Venkatagiri",
            "Vicarabad",
            "Vijayawada",
            "Vinukonda",
            "Visakhapatnam",
            "Vizianagaram",
            "Wanaparthy",
            "Warangal",
            "Yellandu",
            "Yemmiganur",
            "Yerraguntla",
            "Zahirabad"
        ]
    },
    {
        "state": "Arunachal Pradesh",
        "cities": [
            "Along",
            "Bomdila",
            "Itanagar",
            "Naharlagun",
            "Pasighat"
        ]
    },
    {
        "state": "Assam",
        "cities": [
            "Abhayapuri",
            "Amguri",
            "Anandnagaar",
            "Barpeta",
            "Barpeta Road",
            "Bilasipara",
            "Bongaigaon",
            "Dhekiajuli",
            "Dhubri",
            "Dibrugarh",
            "Digboi",
            "Diphu",
            "Dispur",
            "Gauripur",
            "Goalpara",
            "Golaghat",
            "Guwahati",
            "Haflong",
            "Hailakandi",
            "Hojai",
            "Jorhat",
            "Karimganj",
            "Kokrajhar",
            "Lanka",
            "Lumding",
            "Mangaldoi",
            "Mankachar",
            "Margherita",
            "Mariani",
            "Marigaon",
            "Nagaon",
            "Nalbari",
            "North Lakhimpur",
            "Rangia",
            "Sibsagar",
            "Silapathar",
            "Silchar",
            "Tezpur",
            "Tinsukia"
        ]
    },
    {
        "state": "Bihar",
        "cities": [
            "Amarpur",
            "Araria",
            "Areraj",
            "Arrah",
            "Asarganj",
            "Aurangabad",
            "Bagaha",
            "Bahadurganj",
            "Bairgania",
            "Bakhtiarpur",
            "Banka",
            "Banmankhi Bazar",
            "Barahiya",
            "Barauli",
            "Barbigha",
            "Barh",
            "Begusarai",
            "Behea",
            "Bettiah",
            "Bhabua",
            "Bhagalpur",
            "Bihar Sharif",
            "Bikramganj",
            "Bodh Gaya",
            "Buxar",
            "Chandan Bara",
            "Chanpatia",
            "Chhapra",
            "Colgong",
            "Dalsinghsarai",
            "Darbhanga",
            "Daudnagar",
            "Dehri-on-Sone",
            "Dhaka",
            "Dighwara",
            "Dumraon",
            "Fatwah",
            "Forbesganj",
            "Gaya",
            "Gogri Jamalpur",
            "Gopalganj",
            "Hajipur",
            "Hilsa",
            "Hisua",
            "Islampur",
            "Jagdispur",
            "Jamalpur",
            "Jamui",
            "Jehanabad",
            "Jhajha",
            "Jhanjharpur",
            "Jogabani",
            "Kanti",
            "Katihar",
            "Khagaria",
            "Kharagpur",
            "Kishanganj",
            "Lakhisarai",
            "Lalganj",
            "Madhepura",
            "Madhubani",
            "Maharajganj",
            "Mahnar Bazar",
            "Makhdumpur",
            "Maner",
            "Manihari",
            "Marhaura",
            "Masaurhi",
            "Mirganj",
            "Mokameh",
            "Motihari",
            "Motipur",
            "Munger",
            "Murliganj",
            "Muzaffarpur",
            "Narkatiaganj",
            "Naugachhia",
            "Nawada",
            "Nokha",
            "Patna",
            "Piro",
            "Purnia",
            "Rafiganj",
            "Rajgir",
            "Ramnagar",
            "Raxaul Bazar",
            "Revelganj",
            "Rosera",
            "Saharsa",
            "Samastipur",
            "Sasaram",
            "Sheikhpura",
            "Sheohar",
            "Sherghati",
            "Silao",
            "Sitamarhi",
            "Siwan",
            "Sonepur",
            "Sugauli",
            "Sultanganj",
            "Supaul",
            "Warisaliganj"
        ]
    },
    {
        "state": "Chhattisgarh",
        "cities": [
            "Ahiwara",
            "Akaltara",
            "Ambagarh Chowki",
            "Ambikapur",
            "Arang",
            "Bade Bacheli",
            "Balod",
            "Baloda Bazar",
            "Bemetra",
            "Bhatapara",
            "Bilaspur",
            "Birgaon",
            "Champa",
            "Chirmiri",
            "Dalli-Rajhara",
            "Dhamtari",
            "Dipka",
            "Dongargarh",
            "Durg-Bhilai Nagar",
            "Gobranawapara",
            "Jagdalpur",
            "Janjgir",
            "Jashpurnagar",
            "Kanker",
            "Kawardha",
            "Kondagaon",
            "Korba",
            "Mahasamund",
            "Mahendragarh",
            "Mungeli",
            "Naila Janjgir",
            "Raigarh",
            "Raipur",
            "Rajnandgaon",
            "Sakti",
            "Tilda Newra"
        ]
    },
    {
        "state": "Delhi",
        "cities": [
            "Asola",
            "Delhi"
        ]
    },
    {
        "state": "Goa",
        "cities": [
            "Aldona",
            "Curchorem Cacora",
            "Madgaon",
            "Mapusa",
            "Margao",
            "Marmagao",
            "Panaji"
        ]
    },
    {
        "state": "Gujarat",
        "cities": [
            "Ahmedabad",
            "Amreli",
            "Anand",
            "Ankleshwar",
            "Bharuch",
            "Bhavnagar",
            "Bhuj",
            "Cambay",
            "Dahod",
            "Deesa",
            "Dholka",
            "Gandhinagar",
            "Godhra",
            "Himatnagar",
            "Idar",
            "Jamnagar",
            "Junagadh",
            "Kadi",
            "Kalavad",
            "Kalol",
            "Kapadvanj",
            "Karjan",
            "Keshod",
            "Khambhalia",
            "Khambhat",
            "Kheda",
            "Khedbrahma",
            "Kheralu",
            "Kodinar",
            "Lathi",
            "Limbdi",
            "Lunawada",
            "Mahesana",
            "Mahuva",
            "Manavadar",
            "Mandvi",
            "Mangrol",
            "Mansa",
            "Mehmedabad",
            "Modasa",
            "Morvi",
            "Nadiad",
            "Navsari",
            "Padra",
            "Palanpur",
            "Palitana",
            "Pardi",
            "Patan",
            "Petlad",
            "Porbandar",
            "Radhanpur",
            "Rajkot",
            "Rajpipla",
            "Rajula",
            "Ranavav",
            "Rapar",
            "Salaya",
            "Sanand",
            "Savarkundla",
            "Sidhpur",
            "Sihor",
            "Songadh",
            "Surat",
            "Talaja",
            "Thangadh",
            "Tharad",
            "Umbergaon",
            "Umreth",
            "Una",
            "Unjha",
            "Upleta",
            "Vadnagar",
            "Vadodara",
            "Valsad",
            "Vapi",
            "Veraval",
            "Vijapur",
            "Viramgam",
            "Visnagar",
            "Vyara",
            "Wadhwan",
            "Wankaner"
        ]
    },
    {
        "state": "Haryana",
        "cities": [
            "Ambala",
            "Asankhurd",
            "Assandh",
            "Ateli",
            "Babiyal",
            "Bahadurgarh",
            "Barwala",
            "Bhiwani",
            "Charkhi Dadri",
            "Cheeka",
            "Ellenabad 2",
            "Faridabad",
            "Fatehabad",
            "Ganaur",
            "Gharaunda",
            "Gohana",
            "Gurgaon",
            "Haibat(Yamuna Nagar)",
            "Hansi",
            "Hisar",
            "Hodal",
            "Jhajjar",
            "Jind",
            "Kaithal",
            "Kalan Wali",
            "Kalka",
            "Karnal",
            "Ladwa",
            "Mahendragarh",
            "Mandi Dabwali",
            "Narnaul",
            "Narwana",
            "Palwal",
            "Panchkula",
            "Panipat",
            "Pehowa",
            "Pinjore",
            "Rania",
            "Ratia",
            "Rewari",
            "Rohtak",
            "Safidon",
            "Samalkha",
            "Shahbad",
            "Sirsa",
            "Sohna",
            "Sonipat",
            "Taraori",
            "Thanesar",
            "Tohana",
            "Yamunanagar"
        ]
    },
    {
        "state": "Himachal Pradesh",
        "cities": [
            "Arki",
            "Baddi",
            "Bilaspur",
            "Chamba",
            "Dalhousie",
            "Dharamsala",
            "Hamirpur",
            "Mandi",
            "Nahan",
            "Shimla",
            "Solan",
            "Sundarnagar"
        ]
    },
    {
        "state": "Jammu & Kashmir",
        "cities": [
            "Achabbal",
            "Akhnoor",
            "Anantnag",
            "Arnia",
            "Awantipora",
            "Bandipore",
            "Baramula",
            "Jammu",
            "Kathua",
            "Leh",
            "Punch",
            "Rajauri",
            "Sopore",
            "Srinagar",
            "Udhampur"
        ]
    },
    {
        "state": "Jharkhand",
        "cities": [
            "Amlabad",
            "Ara",
            "Barughutu",
            "Bokaro Steel City",
            "Chaibasa",
            "Chakradharpur",
            "Chandrapura",
            "Chatra",
            "Chirkunda",
            "Churi",
            "Daltonganj",
            "Deoghar",
            "Dhanbad",
            "Dumka",
            "Garhwa",
            "Ghatshila",
            "Giridih",
            "Godda",
            "Gomoh",
            "Gumia",
            "Gumla",
            "Hazaribag",
            "Hussainabad",
            "Jamshedpur",
            "Jamtara",
            "Jhumri Tilaiya",
            "Khunti",
            "Lohardaga",
            "Madhupur",
            "Mihijam",
            "Musabani",
            "Pakaur",
            "Patratu",
            "Phusro",
            "Ramngarh",
            "Ranchi",
            "Sahibganj",
            "Saunda",
            "Simdega",
            "Tenu Dam-cum- Kathhara"
        ]
    },
    {
        "state": "Karnataka",
        "cities": [
            "Arasikere",
            "Bangalore",
            "Belgaum",
            "Bellary",
            "Chamrajnagar",
            "Chikkaballapur",
            "Chikmagalur",
            "Chintamani",
            "Chitradurga",
            "Davanagere",
            "Dharwad",
            "Gadag",
            "Gulbarga",
            "Gundlupet",
            "Hassan",
            "Hospet",
            "Hubli",
            "Karkala",
            "Karwar",
            "Kolar",
            "Kota",
            "Lakshmeshwar",
            "Lingsugur",
            "Maddur",
            "Madhugiri",
            "Madikeri",
            "Magadi",
            "Mahalingpur",
            "Malavalli",
            "Malur",
            "Mandya",
            "Mangalore",
            "Manvi",
            "Mudalgi",
            "Mudbidri",
            "Muddebihal",
            "Mudhol",
            "Mulbagal",
            "Mundargi",
            "Mysore",
            "Nanjangud",
            "Pavagada",
            "Puttur",
            "Rabkavi Banhatti",
            "Raichur",
            "Ramanagaram",
            "Ramdurg",
            "Ranibennur",
            "Robertson Pet",
            "Ron",
            "Sadalgi",
            "Sagar",
            "Sakleshpur",
            "Sandur",
            "Sankeshwar",
            "Saundatti-Yellamma",
            "Savanur",
            "Sedam",
            "Shahabad",
            "Shahpur",
            "Shiggaon",
            "Shikapur",
            "Shimoga",
            "Shorapur",
            "Shrirangapattana",
            "Sidlaghatta",
            "Sindgi",
            "Sindhnur",
            "Sira",
            "Sirsi",
            "Siruguppa",
            "Srinivaspur",
            "Talikota",
            "Tarikere",
            "Tekkalakota",
            "Terdal",
            "Tiptur",
            "Tumkur",
            "Udupi",
            "Vijayapura",
            "Wadi",
            "Yadgir"
        ]
    },
    {
        "state": "Kerala",
        "cities": [
            "Adoor",
            "Akathiyoor",
            "Alappuzha",
            "Ancharakandy",
            "Aroor",
            "Ashtamichira",
            "Attingal",
            "Avinissery",
            "Chalakudy",
            "Changanassery",
            "Chendamangalam",
            "Chengannur",
            "Cherthala",
            "Cheruthazham",
            "Chittur-Thathamangalam",
            "Chockli",
            "Erattupetta",
            "Guruvayoor",
            "Irinjalakuda",
            "Kadirur",
            "Kalliasseri",
            "Kalpetta",
            "Kanhangad",
            "Kanjikkuzhi",
            "Kannur",
            "Kasaragod",
            "Kayamkulam",
            "Kochi",
            "Kodungallur",
            "Kollam",
            "Koothuparamba",
            "Kothamangalam",
            "Kottayam",
            "Kozhikode",
            "Kunnamkulam",
            "Malappuram",
            "Mattannur",
            "Mavelikkara",
            "Mavoor",
            "Muvattupuzha",
            "Nedumangad",
            "Neyyattinkara",
            "Ottappalam",
            "Palai",
            "Palakkad",
            "Panniyannur",
            "Pappinisseri",
            "Paravoor",
            "Pathanamthitta",
            "Payyannur",
            "Peringathur",
            "Perinthalmanna",
            "Perumbavoor",
            "Ponnani",
            "Punalur",
            "Quilandy",
            "Shoranur",
            "Taliparamba",
            "Thiruvalla",
            "Thiruvananthapuram",
            "Thodupuzha",
            "Thrissur",
            "Tirur",
            "Vadakara",
            "Vaikom",
            "Varkala"
        ]
    },
    {
        "state": "Madhya Pradesh",
        "cities": [
            "Ashok Nagar",
            "Balaghat",
            "Betul",
            "Bhopal",
            "Burhanpur",
            "Chhatarpur",
            "Dabra",
            "Datia",
            "Dewas",
            "Dhar",
            "Fatehabad",
            "Gwalior",
            "Indore",
            "Itarsi",
            "Jabalpur",
            "Katni",
            "Kotma",
            "Lahar",
            "Lundi",
            "Maharajpur",
            "Mahidpur",
            "Maihar",
            "Malajkhand",
            "Manasa",
            "Manawar",
            "Mandideep",
            "Mandla",
            "Mandsaur",
            "Mauganj",
            "Mhow Cantonment",
            "Mhowgaon",
            "Morena",
            "Multai",
            "Murwara",
            "Nagda",
            "Nainpur",
            "Narsinghgarh",
            "Neemuch",
            "Nepanagar",
            "Niwari",
            "Nowgong",
            "Nowrozabad",
            "Pachore",
            "Pali",
            "Panagar",
            "Pandhurna",
            "Panna",
            "Pasan",
            "Pipariya",
            "Pithampur",
            "Porsa",
            "Prithvipur",
            "Raghogarh-Vijaypur",
            "Rahatgarh",
            "Raisen",
            "Rajgarh",
            "Ratlam",
            "Rau",
            "Rehli",
            "Rewa",
            "Sabalgarh",
            "Sagar",
            "Sanawad",
            "Sarangpur",
            "Sarni",
            "Satna",
            "Sausar",
            "Sehore",
            "Sendhwa",
            "Seoni",
            "Seoni-Malwa",
            "Shahdol",
            "Shajapur",
            "Shamgarh",
            "Sheopur",
            "Shivpuri",
            "Shujalpur",
            "Sidhi",
            "Sihora",
            "Singrauli",
            "Sironj",
            "Sohagpur",
            "Tarana",
            "Tikamgarh",
            "Ujhani",
            "Ujjain",
            "Umaria",
            "Vidisha",
            "Wara Seoni"
        ]
    },
    {
        "state": "Maharashtra",
        "cities": [
            "Ahmednagar",
            "Akola",
            "Amravati",
            "Aurangabad",
            "Baramati",
            "Chalisgaon",
            "Chinchani",
            "Devgarh",
            "Dhule",
            "Dombivli",
            "Durgapur",
            "Ichalkaranji",
            "Jalna",
            "Kalyan",
            "Kolhapur",
            "Latur",
            "Loha",
            "Lonar",
            "Lonavla",
            "Mahad",
            "Mahuli",
            "Malegaon",
            "Malkapur",
            "Manchar",
            "Mangalvedhe",
            "Mangrulpir",
            "Manjlegaon",
            "Manmad",
            "Manwath",
            "Mehkar",
            "Mhaswad",
            "Miraj",
            "Morshi",
            "Mukhed",
            "Mul",
            "Mumbai",
            "Murtijapur",
            "Nagpur",
            "Nalasopara",
            "Nanded-Waghala",
            "Nandgaon",
            "Nandura",
            "Nandurbar",
            "Narkhed",
            "Nashik",
            "Navi Mumbai",
            "Nawapur",
            "Nilanga",
            "Osmanabad",
            "Ozar",
            "Pachora",
            "Paithan",
            "Palghar",
            "Pandharkaoda",
            "Pandharpur",
            "Panvel",
            "Parbhani",
            "Parli",
            "Parola",
            "Partur",
            "Pathardi",
            "Pathri",
            "Patur",
            "Pauni",
            "Pen",
            "Phaltan",
            "Pulgaon",
            "Pune",
            "Purna",
            "Pusad",
            "Rahuri",
            "Rajura",
            "Ramtek",
            "Ratnagiri",
            "Raver",
            "Risod",
            "Sailu",
            "Sangamner",
            "Sangli",
            "Sangole",
            "Sasvad",
            "Satana",
            "Satara",
            "Savner",
            "Sawantwadi",
            "Shahade",
            "Shegaon",
            "Shendurjana",
            "Shirdi",
            "Shirpur-Warwade",
            "Shirur",
            "Shrigonda",
            "Shrirampur",
            "Sillod",
            "Sinnar",
            "Solapur",
            "Soyagaon",
            "Talegaon Dabhade",
            "Talode",
            "Tasgaon",
            "Tirora",
            "Tuljapur",
            "Tumsar",
            "Uchgaon",
            "Udgir",
            "Uran",
            "Uran Islampur",
            "Wadgaon Road",
            "Wai",
            "Wani",
            "Wardha",
            "Warora",
            "Warud",
            "Washim",
            "Yevla"
        ]
    },
    {
        "state": "Manipur",
        "cities": [
            "Imphal",
            "Kakching",
            "Lilong",
            "Mayang Imphal",
            "Thoubal"
        ]
    },
    {
        "state": "Meghalaya",
        "cities": [
            "Jowai",
            "Nongstoin",
            "Shillong",
            "Tura"
        ]
    },
    {
        "state": "Mizoram",
        "cities": [
            "Aizawl",
            "Champhai",
            "Lunglei",
            "Saiha"
        ]
    },
    {
        "state": "Nagaland",
        "cities": [
            "Dimapur",
            "Kohima",
            "Mokokchung",
            "Tuensang",
            "Wokha",
            "Zunheboto"
        ]
    },
    {
        "state": "Orissa",
        "cities": [
            "Anandapur",
            "Anugul",
            "Asika",
            "Balangir",
            "Balasore",
            "Baleshwar",
            "Bamra",
            "Barbil",
            "Bargarh",
            "Baripada",
            "Basudebpur",
            "Belpahar",
            "Bhadrak",
            "Bhawanipatna",
            "Bhuban",
            "Bhubaneswar",
            "Biramitrapur",
            "Brahmapur",
            "Brajrajnagar",
            "Byasanagar",
            "Cuttack",
            "Debagarh",
            "Dhenkanal",
            "Gunupur",
            "Hinjilicut",
            "Jagatsinghapur",
            "Jajapur",
            "Jaleswar",
            "Jatani",
            "Jeypur",
            "Jharsuguda",
            "Joda",
            "Kantabanji",
            "Karanjia",
            "Kendrapara",
            "Kendujhar",
            "Khordha",
            "Koraput",
            "Malkangiri",
            "Nabarangapur",
            "Paradip",
            "Parlakhemundi",
            "Pattamundai",
            "Phulabani",
            "Puri",
            "Rairangpur",
            "Rajagangapur",
            "Raurkela",
            "Rayagada",
            "Sambalpur",
            "Soro",
            "Sunabeda",
            "Sundargarh",
            "Talcher",
            "Titlagarh",
            "Umarkote"
        ]
    },
    {
        "state": "Punjab",
        "cities": [
            "Ahmedgarh",
            "Amritsar",
            "Barnala",
            "Batala",
            "Bathinda",
            "Bhagha Purana",
            "Budhlada",
            "Chandigarh",
            "Dasua",
            "Dhuri",
            "Dinanagar",
            "Faridkot",
            "Fazilka",
            "Firozpur",
            "Firozpur Cantt.",
            "Giddarbaha",
            "Gobindgarh",
            "Gurdaspur",
            "Hoshiarpur",
            "Jagraon",
            "Jaitu",
            "Jalalabad",
            "Jalandhar",
            "Jalandhar Cantt.",
            "Jandiala",
            "Kapurthala",
            "Karoran",
            "Kartarpur",
            "Khanna",
            "Kharar",
            "Kot Kapura",
            "Kurali",
            "Longowal",
            "Ludhiana",
            "Malerkotla",
            "Malout",
            "Mansa",
            "Maur",
            "Moga",
            "Mohali",
            "Morinda",
            "Mukerian",
            "Muktsar",
            "Nabha",
            "Nakodar",
            "Nangal",
            "Nawanshahr",
            "Pathankot",
            "Patiala",
            "Patran",
            "Patti",
            "Phagwara",
            "Phillaur",
            "Qadian",
            "Raikot",
            "Rajpura",
            "Rampura Phul",
            "Rupnagar",
            "Samana",
            "Sangrur",
            "Sirhind Fatehgarh Sahib",
            "Sujanpur",
            "Sunam",
            "Talwara",
            "Tarn Taran",
            "Urmar Tanda",
            "Zira",
            "Zirakpur"
        ]
    },
    {
        "state": "Rajasthan",
        "cities": [
            "Ajmer",
            "Alwar",
            "Bali",
            "Bandikui",
            "Baran",
            "Barmer",
            "Bikaner",
            "Fatehpur",
            "Jaipur",
            "Jaisalmer",
            "Jodhpur",
            "Kota",
            "Lachhmangarh",
            "Ladnu",
            "Lakheri",
            "Lalsot",
            "Losal",
            "Makrana",
            "Malpura",
            "Mandalgarh",
            "Mandawa",
            "Mangrol",
            "Merta city",
            "Mount Abu",
            "Nadbai",
            "Nagar",
            "Nagaur",
            "Nargund",
            "Nasirabad",
            "Nathdwara",
            "Navalgund",
            "Nawalgarh",
            "Neem-Ka-Thana",
            "Nelamangala",
            "Nimbahera",
            "Nipani",
            "Niwai",
            "Nohar",
            "Nokha",
            "Pali",
            "Phalodi",
            "Phulera",
            "Pilani",
            "Pilibanga",
            "Pindwara",
            "Pipar city",
            "Prantij",
            "Pratapgarh",
            "Raisinghnagar",
            "Rajakhera",
            "Rajaldesar",
            "Rajgarh (Alwar)",
            "Rajgarh (Churu",
            "Rajsamand",
            "Ramganj Mandi",
            "Ramngarh",
            "Ratangarh",
            "Rawatbhata",
            "Rawatsar",
            "Reengus",
            "Sadri",
            "Sadulshahar",
            "Sagwara",
            "Sambhar",
            "Sanchore",
            "Sangaria",
            "Sardarshahar",
            "Sawai Madhopur",
            "Shahpura",
            "Sheoganj",
            "Sikar",
            "Sirohi",
            "Sojat",
            "Sri Madhopur",
            "Sujangarh",
            "Sumerpur",
            "Suratgarh",
            "Taranagar",
            "Todabhim",
            "Todaraisingh",
            "Tonk",
            "Udaipur",
            "Udaipurwati",
            "Vijainagar"
        ]
    },
    {
        "state": "Sikkim",
        "cities": [
            "Gangtok"
        ]
    },
    {
        "state": "Tamil Nadu",
        "cities": [
            "Arakkonam",
            "Arcot",
            "Aruppukkottai",
            "Bhavani",
            "Chengalpattu",
            "Chennai",
            "Chinna salem",
            "Coimbatore",
            "Coonoor",
            "Cuddalore",
            "Dharmapuri",
            "Dindigul",
            "Erode",
            "Gudalur",
            "Kanchipuram",
            "Karaikudi",
            "Karungal",
            "Karur",
            "Kollankodu",
            "Lalgudi",
            "Madurai",
            "Nagapattinam",
            "Nagercoil",
            "Namagiripettai",
            "Namakkal",
            "Nandivaram-Guduvancheri",
            "Nanjikottai",
            "Natham",
            "Nellikuppam",
            "Neyveli",
            "O Valley",
            "Oddanchatram",
            "P.N.Patti",
            "Pacode",
            "Padmanabhapuram",
            "Palani",
            "Palladam",
            "Pallapatti",
            "Pallikonda",
            "Panagudi",
            "Panruti",
            "Paramakudi",
            "Parangipettai",
            "Pattukkottai",
            "Perambalur",
            "Peravurani",
            "Periyakulam",
            "Periyasemur",
            "Pernampattu",
            "Pollachi",
            "Polur",
            "Ponneri",
            "Pudukkottai",
            "Pudupattinam",
            "Puliyankudi",
            "Punjaipugalur",
            "Rajapalayam",
            "Ramanathapuram",
            "Rameshwaram",
            "Rasipuram",
            "Salem",
            "Sankarankoil",
            "Sankari",
            "Sathyamangalam",
            "Sattur",
            "Shenkottai",
            "Sholavandan",
            "Sholingur",
            "Sirkali",
            "Sivaganga",
            "Sivagiri",
            "Sivakasi",
            "Srivilliputhur",
            "Surandai",
            "Suriyampalayam",
            "Tenkasi",
            "Thammampatti",
            "Thanjavur",
            "Tharamangalam",
            "Tharangambadi",
            "Theni Allinagaram",
            "Thirumangalam",
            "Thirunindravur",
            "Thiruparappu",
            "Thirupuvanam",
            "Thiruthuraipoondi",
            "Thiruvallur",
            "Thiruvarur",
            "Thoothukudi",
            "Thuraiyur",
            "Tindivanam",
            "Tiruchendur",
            "Tiruchengode",
            "Tiruchirappalli",
            "Tirukalukundram",
            "Tirukkoyilur",
            "Tirunelveli",
            "Tirupathur",
            "Tiruppur",
            "Tiruttani",
            "Tiruvannamalai",
            "Tiruvethipuram",
            "Tittakudi",
            "Udhagamandalam",
            "Udumalaipettai",
            "Unnamalaikadai",
            "Usilampatti",
            "Uthamapalayam",
            "Uthiramerur",
            "Vadakkuvalliyur",
            "Vadalur",
            "Vadipatti",
            "Valparai",
            "Vandavasi",
            "Vaniyambadi",
            "Vedaranyam",
            "Vellakoil",
            "Vellore",
            "Vikramasingapuram",
            "Viluppuram",
            "Virudhachalam",
            "Virudhunagar",
            "Viswanatham"
        ]
    },
    {
        "state": "Tripura",
        "cities": [
            "Agartala",
            "Badharghat",
            "Dharmanagar",
            "Indranagar",
            "Jogendranagar",
            "Kailasahar",
            "Khowai",
            "Pratapgarh",
            "Udaipur"
        ]
    },
    {
        "state": "Uttar Pradesh",
        "cities": [
            "Achhnera",
            "Adari",
            "Agra",
            "Aligarh",
            "Allahabad",
            "Amroha",
            "Azamgarh",
            "Bahraich",
            "Ballia",
            "Balrampur",
            "Banda",
            "Bareilly",
            "Chandausi",
            "Dadri",
            "Deoria",
            "Etawah",
            "Fatehabad",
            "Fatehpur",
            "Greater Noida",
            "Hamirpur",
            "Hardoi",
            "Jajmau",
            "Jaunpur",
            "Jhansi",
            "Kalpi",
            "Kanpur",
            "Kota",
            "Laharpur",
            "Lakhimpur",
            "Lal Gopalganj Nindaura",
            "Lalganj",
            "Lalitpur",
            "Lar",
            "Loni",
            "Lucknow",
            "Mathura",
            "Meerut",
            "Modinagar",
            "Muradnagar",
            "Muzaffarnagar",
            "Nagina",
            "Najibabad",
            "Nakur",
            "Nanpara",
            "Naraura",
            "Naugawan Sadat",
            "Nautanwa",
            "Nawabganj",
            "Nehtaur",
            "NOIDA",
            "Noorpur",
            "Obra",
            "Orai",
            "Padrauna",
            "Palia Kalan",
            "Parasi",
            "Phulpur",
            "Pihani",
            "Pilibhit",
            "Pilkhuwa",
            "Powayan",
            "Pukhrayan",
            "Puranpur",
            "Purquazi",
            "Purwa",
            "Rae Bareli",
            "Rampur",
            "Rampur Maniharan",
            "Rasra",
            "Rath",
            "Renukoot",
            "Reoti",
            "Robertsganj",
            "Rudauli",
            "Rudrapur",
            "Sadabad",
            "Safipur",
            "Saharanpur",
            "Sahaspur",
            "Sahaswan",
            "Sahawar",
            "Sahjanwa",
            "Sambhal",
            "Samdhan",
            "Samthar",
            "Sandi",
            "Sandila",
            "Sardhana",
            "Seohara",
            "Shahganj",
            "Shahjahanpur",
            "Shamli",
            "Sherkot",
            "Shikohabad",
            "Shishgarh",
            "Siana",
            "Sikanderpur",
            "Sikandra Rao",
            "Sikandrabad",
            "Sirsaganj",
            "Sirsi",
            "Sitapur",
            "Soron",
            "Suar",
            "Sultanpur",
            "Sumerpur",
            "Tanda",
            "Tetri Bazar",
            "Thakurdwara",
            "Thana Bhawan",
            "Tilhar",
            "Tirwaganj",
            "Tulsipur",
            "Tundla",
            "Unnao",
            "Utraula",
            "Varanasi",
            "Vrindavan",
            "Warhapur",
            "Zaidpur",
            "Zamania"
        ]
    },
    {
        "state": "Uttarakhand",
        "cities": [
            "Almora",
            "Bazpur",
            "Chamba",
            "Dehradun",
            "Haldwani",
            "Haridwar",
            "Jaspur",
            "Kashipur",
            "kichha",
            "Kotdwara",
            "Manglaur",
            "Mussoorie",
            "Nagla",
            "Nainital",
            "Pauri",
            "Pithoragarh",
            "Ramnagar",
            "Rishikesh",
            "Roorkee",
            "Rudrapur",
            "Sitarganj",
            "Tehri"
        ]
    },
    {
        "state": "West Bengal",
        "cities": [
            "Alipurduar",
            "Arambagh",
            "Asansol",
            "Baharampur",
            "Bally",
            "Balurghat",
            "Bankura",
            "Barakar",
            "Barasat",
            "Bardhaman",
            "Bidhan Nagar",
            "Calcutta",
            "Chinsura",
            "Contai",
            "Cooch Behar",
            "Darjeeling",
            "Durgapur",
            "Haldia",
            "Howrah",
            "Islampur",
            "Jhargram",
            "Kharagpur",
            "Kolkata",
            "Mainaguri",
            "Mal",
            "Mathabhanga",
            "Medinipur",
            "Memari",
            "Monoharpur",
            "Murshidabad",
            "Nabadwip",
            "Naihati",
            "Panchla",
            "Pandua",
            "Paschim Punropara",
            "Purulia",
            "Raghunathpur",
            "Raiganj",
            "Rampurhat",
            "Ranaghat",
            "Sainthia",
            "Santipur",
            "Siliguri",
            "Sonamukhi",
            "Srirampore",
            "Suri",
            "Taki",
            "Tamluk",
            "Tarakeswar"
        ]
    }
];
const STATE_OPTIONS = CITY_STATE_OPTIONS.map(_c = (item)=>item.state);
_c1 = STATE_OPTIONS;
function getCitiesByState(state) {
    const match = CITY_STATE_OPTIONS.find((item)=>item.state === state);
    return match ? [
        ...match.cities,
        OTHER_CITY_OPTION
    ] : [];
}
var _c, _c1;
__turbopack_context__.k.register(_c, "STATE_OPTIONS$CITY_STATE_OPTIONS.map");
__turbopack_context__.k.register(_c1, "STATE_OPTIONS");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/StateSelect.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StateSelect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cityStateOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cityStateOptions.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function StateSelect({ value, onChange, variant = "hero", required = true }) {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const filteredStates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "StateSelect.useMemo[filteredStates]": ()=>{
            const needle = query.trim().toLowerCase();
            if (!needle) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cityStateOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATE_OPTIONS"];
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cityStateOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATE_OPTIONS"].filter({
                "StateSelect.useMemo[filteredStates]": (state)=>state.toLowerCase().includes(needle)
            }["StateSelect.useMemo[filteredStates]"]);
        }
    }["StateSelect.useMemo[filteredStates]"], [
        query
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StateSelect.useEffect": ()=>{
            const closeOnOutsideClick = {
                "StateSelect.useEffect.closeOnOutsideClick": (event)=>{
                    if (rootRef.current && !rootRef.current.contains(event.target)) {
                        setOpen(false);
                        setQuery("");
                    }
                }
            }["StateSelect.useEffect.closeOnOutsideClick"];
            document.addEventListener("mousedown", closeOnOutsideClick);
            return ({
                "StateSelect.useEffect": ()=>document.removeEventListener("mousedown", closeOnOutsideClick)
            })["StateSelect.useEffect"];
        }
    }["StateSelect.useEffect"], []);
    const wrapperClass = variant === "sidebar" ? "relative flex items-center border border-gray-300 rounded-md p-3 shadow-sm" : "relative flex items-center gap-3 border border-gray-200 rounded-lg px-3 py-2.5 bg-gray-50/50 focus-within:border-[#7A3EF2] focus-within:ring-1 focus-within:ring-[#7A3EF2]/25 transition";
    const iconClass = variant === "sidebar" ? "text-gray-400 text-xl mr-3 shrink-0" : "text-gray-400 text-lg shrink-0";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: rootRef,
        className: wrapperClass,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMapPin"], {
                className: iconClass,
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/StateSelect.jsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "hidden",
                name: "state",
                value: value,
                required: required
            }, void 0, false, {
                fileName: "[project]/src/components/StateSelect.jsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                "aria-expanded": open,
                "aria-haspopup": "listbox",
                "aria-label": "State",
                onClick: ()=>setOpen((prev)=>!prev),
                className: `w-full min-w-0 bg-transparent text-left outline-none ${variant === "sidebar" ? "text-gray-700" : "text-sm text-gray-700"} ${value ? "" : "text-gray-400"}`,
                children: value || "State*"
            }, void 0, false, {
                fileName: "[project]/src/components/StateSelect.jsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-0 right-0 top-full z-50 mt-1 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 border-b border-gray-100 px-3 py-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiSearch"], {
                                className: "shrink-0 text-gray-400",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/src/components/StateSelect.jsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: query,
                                onChange: (event)=>setQuery(event.target.value),
                                placeholder: "Search state...",
                                className: "w-full text-sm text-gray-700 outline-none placeholder:text-gray-400",
                                autoFocus: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/StateSelect.jsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/StateSelect.jsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        role: "listbox",
                        className: "max-h-48 overflow-y-auto py-1",
                        children: filteredStates.length ? filteredStates.map((state)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    role: "option",
                                    "aria-selected": value === state,
                                    onClick: ()=>{
                                        onChange(state);
                                        setOpen(false);
                                        setQuery("");
                                    },
                                    className: `w-full px-3 py-2 text-left text-sm hover:bg-violet-50 ${value === state ? "bg-violet-50 font-medium text-[#7A3EF2]" : "text-gray-700"}`,
                                    children: state
                                }, void 0, false, {
                                    fileName: "[project]/src/components/StateSelect.jsx",
                                    lineNumber: 77,
                                    columnNumber: 19
                                }, this)
                            }, state, false, {
                                fileName: "[project]/src/components/StateSelect.jsx",
                                lineNumber: 76,
                                columnNumber: 17
                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "px-3 py-2 text-sm text-gray-500",
                            children: "No state found"
                        }, void 0, false, {
                            fileName: "[project]/src/components/StateSelect.jsx",
                            lineNumber: 97,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/StateSelect.jsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/StateSelect.jsx",
                lineNumber: 60,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/StateSelect.jsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(StateSelect, "a7a0uUX4vCAW+xhYJ9RxTLQU074=");
_c = StateSelect;
var _c;
__turbopack_context__.k.register(_c, "StateSelect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/DuplicateLeadThankYouModal.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DuplicateLeadThankYouModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
"use client";
;
;
function DuplicateLeadThankYouModal({ isOpen, onClose }) {
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[60] flex items-center justify-center p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
                onClick: onClose,
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/src/components/DuplicateLeadThankYouModal.jsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": "duplicate-lead-title",
                className: "relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onClose,
                        className: "absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors",
                        "aria-label": "Close",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-6 h-6",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M6 18L18 6M6 6l12 12"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DuplicateLeadThankYouModal.jsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/DuplicateLeadThankYouModal.jsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/DuplicateLeadThankYouModal.jsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCheckCircle"], {
                        className: "text-[#7A3EF2] text-6xl mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DuplicateLeadThankYouModal.jsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        id: "duplicate-lead-title",
                        className: "text-2xl font-bold text-gray-800 mb-3",
                        children: "Thank You!"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DuplicateLeadThankYouModal.jsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 leading-relaxed mb-6",
                        children: "Our sales team already got your query. Shortly they will connect with you."
                    }, void 0, false, {
                        fileName: "[project]/src/components/DuplicateLeadThankYouModal.jsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onClose,
                        className: "inline-block bg-[#7A3EF2] hover:bg-[#612ce0] text-white px-6 py-2.5 rounded-full font-semibold transition",
                        children: "Close"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DuplicateLeadThankYouModal.jsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DuplicateLeadThankYouModal.jsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DuplicateLeadThankYouModal.jsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = DuplicateLeadThankYouModal;
var _c;
__turbopack_context__.k.register(_c, "DuplicateLeadThankYouModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ContactForm.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$leadFormCopy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/leadFormCopy.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$lead$2d$dedupe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/lead-dedupe.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StateSelect$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/StateSelect.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DuplicateLeadThankYouModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DuplicateLeadThankYouModal.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const HeroForm = ({ title, description, serviceName })=>{
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        phone: "",
        email: "",
        state: "",
        description: "",
        pageSource: ""
    });
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showDuplicateThankYou, setShowDuplicateThankYou] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const formCopy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$leadFormCopy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLeadFormCopy"])(pathname);
    const heading = title || formCopy.title;
    const subheading = description || formCopy.description;
    // CMS service pages pass pageTitle so CRM stores the correct service (not default Factory License).
    const resolvedServiceName = String(serviceName || "").trim();
    const phoneRegex = /^\d{10}$/;
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        if (name === "phone" && value && !phoneRegex.test(value)) {
            e.target.setCustomValidity("Phone number must be 10 digits.");
        } else {
            e.target.setCustomValidity("");
        }
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const pageSourceValue = ("TURBOPACK compile-time truthy", 1) ? window.location.href : "TURBOPACK unreachable";
        // Duplicacy check (organic leads only): same phone + same pageUrl + same date
        // already submitted → thank-you popup, do not create another lead.
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$lead$2d$dedupe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasSubmittedLead"])(formData.phone, pageSourceValue)) {
            setShowDuplicateThankYou(true);
            return;
        }
        setIsSubmitting(true);
        try {
            const now = new Date();
            const istOffset = 5.5 * 60 * 60 * 1000;
            const istTime = new Date(now.getTime() + istOffset);
            const timestamp = istTime.toISOString().replace("T", " ").split(".")[0];
            const formBody = new URLSearchParams();
            formBody.append("name", formData.name);
            formBody.append("phone", formData.phone);
            formBody.append("email", formData.email);
            formBody.append("state", formData.state);
            formBody.append("description", formData.description);
            formBody.append("pageSource", pageSourceValue);
            formBody.append("timestamp", timestamp);
            formBody.append("source", "organic");
            if (resolvedServiceName) {
                formBody.append("serviceName", resolvedServiceName);
                formBody.append("service", resolvedServiceName);
            }
            const response = await fetch("/api/submit-contact", {
                method: "POST",
                body: formBody
            });
            if (response.ok) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$lead$2d$dedupe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markLeadSubmitted"])(formData.phone, pageSourceValue);
                router.push("/thankyou");
            } else {
                const err = await response.json();
                console.error("Server error:", err);
                alert("Submission failed. Please try again.");
            }
        } catch (error) {
            console.error("Client error:", error);
            alert("An error occurred. Please try again.");
        } finally{
            setIsSubmitting(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroForm.useEffect": ()=>{
            setFormData({
                "HeroForm.useEffect": (prev)=>({
                        ...prev,
                        pageSource: ("TURBOPACK compile-time truthy", 1) ? window.location.href : "TURBOPACK unreachable"
                    })
            }["HeroForm.useEffect"]);
        }
    }["HeroForm.useEffect"], [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-lg mx-auto bg-white md:p-8 p-5 rounded-2xl shadow-xl",
        "data-cms-skip-heading-icon": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DuplicateLeadThankYouModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showDuplicateThankYou,
                onClose: ()=>setShowDuplicateThankYou(false)
            }, void 0, false, {
                fileName: "[project]/src/components/ContactForm.jsx",
                lineNumber: 113,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-left mb-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "md:text-xl text-lg font-semibold text-[#7A3EF2]",
                        children: heading
                    }, void 0, false, {
                        fileName: "[project]/src/components/ContactForm.jsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 mt-1.5 text-sm leading-relaxed",
                        children: subheading
                    }, void 0, false, {
                        fileName: "[project]/src/components/ContactForm.jsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ContactForm.jsx",
                lineNumber: 117,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: "space-y-2.5",
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 border border-gray-200 rounded-lg px-3 py-2.5 bg-gray-50/50 focus-within:border-[#7A3EF2] focus-within:ring-1 focus-within:ring-[#7A3EF2]/25 transition",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiUser"], {
                                className: "text-gray-400 text-lg shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ContactForm.jsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                name: "name",
                                value: formData.name,
                                onChange: handleInputChange,
                                placeholder: "Your name*",
                                className: "w-full min-w-0 bg-transparent outline-none text-gray-700 text-sm placeholder:text-gray-400",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/ContactForm.jsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ContactForm.jsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 border border-gray-200 rounded-lg px-3 py-2.5 bg-gray-50/50 focus-within:border-[#7A3EF2] focus-within:ring-1 focus-within:ring-[#7A3EF2]/25 transition",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiPhone"], {
                                className: "text-gray-400 text-lg shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ContactForm.jsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "tel",
                                name: "phone",
                                value: formData.phone,
                                onChange: handleInputChange,
                                placeholder: "10-digit mobile number*",
                                className: "w-full min-w-0 bg-transparent outline-none text-gray-700 text-sm placeholder:text-gray-400",
                                pattern: "^\\d{10}$",
                                title: "Phone number must be exactly 10 digits",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/ContactForm.jsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ContactForm.jsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 border border-gray-200 rounded-lg px-3 py-2.5 bg-gray-50/50 focus-within:border-[#7A3EF2] focus-within:ring-1 focus-within:ring-[#7A3EF2]/25 transition",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMail"], {
                                className: "text-gray-400 text-lg shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ContactForm.jsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "email",
                                name: "email",
                                value: formData.email,
                                onChange: handleInputChange,
                                placeholder: "Your email address*",
                                className: "w-full min-w-0 bg-transparent outline-none text-gray-700 text-sm placeholder:text-gray-400",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/ContactForm.jsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ContactForm.jsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StateSelect$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        value: formData.state,
                        onChange: (state)=>setFormData((prev)=>({
                                    ...prev,
                                    state
                                }))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ContactForm.jsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        name: "description",
                        value: formData.description,
                        onChange: handleInputChange,
                        placeholder: "What do you need help with?",
                        className: "w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 bg-gray-50/50 outline-none resize-y min-h-[88px] max-h-32 focus:border-[#7A3EF2] focus:ring-1 focus:ring-[#7A3EF2]/25 transition",
                        rows: 3
                    }, void 0, false, {
                        fileName: "[project]/src/components/ContactForm.jsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: isSubmitting,
                        className: `w-full mt-1 ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-[#7A3EF2] hover:bg-[#612ce0]"} text-white font-semibold py-3 rounded-lg transition duration-300 text-sm`,
                        children: isSubmitting ? "Submitting..." : "Let's Talk"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ContactForm.jsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ContactForm.jsx",
                lineNumber: 126,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ContactForm.jsx",
        lineNumber: 109,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(HeroForm, "CmJOoYI77erztYwvbxQY9eKbvlw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = HeroForm;
const __TURBOPACK__default__export__ = HeroForm;
var _c;
__turbopack_context__.k.register(_c, "HeroForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ContactFormModal.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactFormModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactForm$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ContactForm.jsx [app-client] (ecmascript)");
"use client";
;
;
;
function ContactFormModal({ isOpen, onClose, title, description, serviceName }) {
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4",
        role: "dialog",
        "aria-modal": "true",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-lg max-w-md w-full relative shadow-lg",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "absolute top-2 right-3 text-gray-500 text-3xl hover:text-gray-700 transition",
                    "aria-label": "Close contact form",
                    children: "×"
                }, void 0, false, {
                    fileName: "[project]/src/components/ContactFormModal.jsx",
                    lineNumber: 20,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                    fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-10 text-center",
                        children: "Loading form..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/ContactFormModal.jsx",
                        lineNumber: 29,
                        columnNumber: 25
                    }, void 0),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactForm$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: title,
                        description: description,
                        serviceName: serviceName
                    }, void 0, false, {
                        fileName: "[project]/src/components/ContactFormModal.jsx",
                        lineNumber: 32,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ContactFormModal.jsx",
                    lineNumber: 27,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ContactFormModal.jsx",
            lineNumber: 16,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ContactFormModal.jsx",
        lineNumber: 10,
        columnNumber: 9
    }, this);
}
_c = ContactFormModal;
var _c;
__turbopack_context__.k.register(_c, "ContactFormModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/FloatingGetStartedButton.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FloatingGetStartedButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactFormModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ContactFormModal.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneCall$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone-call.js [app-client] (ecmascript) <export default as PhoneCall>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const PHONE_NUMBER = "+919999704687";
const PHONE_DISPLAY = "+91 99997 04687";
function FloatingGetStartedButton() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-gray-200 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setIsOpen(true),
                            className: "flex-1 bg-[#7A3EF2] text-white font-semibold py-3.5 rounded-full shadow-lg hover:bg-[#6b2ee8] transition-colors focus:outline-none focus:ring-2 focus:ring-[#7A3EF2] focus:ring-offset-2",
                            "aria-label": "Get Started - Open contact form",
                            children: "Get Started"
                        }, void 0, false, {
                            fileName: "[project]/src/components/FloatingGetStartedButton.jsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: `tel:${PHONE_NUMBER}`,
                            className: "flex-shrink-0 w-12 h-12 bg-[#7A3EF2] text-white rounded-full shadow-lg hover:bg-[#6b2ee8] transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#7A3EF2] focus:ring-offset-2",
                            "aria-label": `Call ${PHONE_DISPLAY}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneCall$3e$__["PhoneCall"], {
                                size: 22
                            }, void 0, false, {
                                fileName: "[project]/src/components/FloatingGetStartedButton.jsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/FloatingGetStartedButton.jsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/FloatingGetStartedButton.jsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/FloatingGetStartedButton.jsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: `tel:${PHONE_NUMBER}`,
                className: "hidden md:flex fixed bottom-6 right-0 z-40 bg-[#7A3EF2] text-white rounded-l-full shadow-lg hover:bg-[#6b2ee8] transition-colors items-center justify-center w-14 h-14 focus:outline-none focus:ring-2 focus:ring-[#7A3EF2] focus:ring-offset-2",
                "aria-label": `Call ${PHONE_DISPLAY}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneCall$3e$__["PhoneCall"], {
                    size: 24
                }, void 0, false, {
                    fileName: "[project]/src/components/FloatingGetStartedButton.jsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/FloatingGetStartedButton.jsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactFormModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isOpen,
                onClose: ()=>setIsOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/components/FloatingGetStartedButton.jsx",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(FloatingGetStartedButton, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");
_c = FloatingGetStartedButton;
var _c;
__turbopack_context__.k.register(_c, "FloatingGetStartedButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/TrackingScript.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TrackingScript
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function TrackingScript() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TrackingScript.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const popStateEvent = new PopStateEvent('popstate', {
                    state: null
                });
                window.dispatchEvent(popStateEvent);
            }
        }
    }["TrackingScript.useEffect"], [
        pathname
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TrackingScript.useEffect": ()=>{
            if (("TURBOPACK compile-time value", "object") === "undefined" || document.getElementById("lawfinity-monitor-script")) {
                return;
            }
            // Keep analytics off the critical path; PageSpeed counts early third-party work against LCP/TBT.
            const loadTracking = {
                "TrackingScript.useEffect.loadTracking": ()=>{
                    const script = document.createElement("script");
                    script.id = "lawfinity-monitor-script";
                    script.src = "https://monitor.lawfinity.in/track.js";
                    script.async = true;
                    script.dataset.siteId = "6989a124a57940eaf353783f";
                    script.dataset.siteName = "http://factorylicence.in/";
                    script.dataset.debug = "false";
                    document.body.appendChild(script);
                }
            }["TrackingScript.useEffect.loadTracking"];
            const timer = window.setTimeout(loadTracking, 4500);
            return ({
                "TrackingScript.useEffect": ()=>window.clearTimeout(timer)
            })["TrackingScript.useEffect"];
        }
    }["TrackingScript.useEffect"], []);
    return null;
}
_s(TrackingScript, "tjXKfJWuFDa0epp0CJaCeazyqhM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = TrackingScript;
var _c;
__turbopack_context__.k.register(_c, "TrackingScript");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_dc651ad3._.js.map