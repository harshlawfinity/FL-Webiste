import Link from "next/link";

export default function BreadcrumbNav({ items, placement = "hero" }) {
  const isHero = placement === "hero";
  const crumbs = items.filter(Boolean);
  const currentPage = crumbs[crumbs.length - 1];

  if (!isHero) {
    return (
      <div className="md:hidden max-w-7xl mx-auto px-4 pt-6 pb-3 bg-gradient-to-b from-white to-[#f9f9ff]">
        <nav aria-label="Breadcrumb" data-cms-breadcrumb-nav="mobile">
          <div
            className="flex items-start gap-1.5 text-xs leading-snug"
            data-cms-breadcrumb-inner
          >
            <Link
              href="/"
              className="shrink-0 font-medium text-[#7A3EF2] hover:underline"
            >
              Home
            </Link>
            {crumbs.length > 1 && (
              <>
                <span className="shrink-0 text-gray-400 pt-px">›</span>
                <span className="min-w-0 text-gray-600 font-medium line-clamp-2">
                  {currentPage?.label}
                </span>
              </>
            )}
          </div>
        </nav>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto md:px-0 px-4 mt-6 hidden md:block">
      <nav
        aria-label="Breadcrumb"
        data-cms-breadcrumb-nav="hero"
        className="flex flex-wrap mb-4 items-center gap-2 text-sm text-white"
      >
        {crumbs.map((item, idx) => (
          <div key={idx} className="flex items-center">
            {idx > 0 && <span className="px-2 text-gray-400">›</span>}
            {item.href ? (
              <Link
                href={item.href}
                className="text-gray-50 hover:underline"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-50">{item.label}</span>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}
