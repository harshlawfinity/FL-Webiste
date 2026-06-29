import Link from "next/link";
import { Suspense } from "react";
import FactoryCmsStaticPage from "@/components/cms/FactoryCmsStaticPage";
import { buildCmsMetadata, getFactoryCmsStaticPage } from "@/lib/cms";

// ISR: cache rendered page for 5 minutes instead of blocking on CMS every request.
export const revalidate = 300;

const fallbackMetadata = {
  title: "Payments - Factorylicence",
  description:
    "Securely complete your payment for factory license services on Factorylicence.in. Fast, safe, and transparent payment process with full support.",
  keywords: ["Payments"],
  openGraph: {
    title: "Payments - Factorylicence",
    description:
      "Securely complete your payment for factory license services on Factorylicence.in. Fast, safe, and transparent payment process with full support.",
    url: "https://factorylicence.in/payments",
    type: "website",
    siteName: "FactoryLicence.in",
  },
  alternates: {
    canonical: "https://factorylicence.in/payments",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export async function generateMetadata() {
  const cmsPage = await getFactoryCmsStaticPage("payments");
  return buildCmsMetadata(cmsPage, fallbackMetadata);
}

function PaymentsFallback() {
  return (
    <div>
        <section className="relative bg-[#f4f4fa] py-20 px-4 md:px-0">
          <div className="max-w-7xl mt-10 mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column: Bank Info */}
            <div className="space-y-8">
              <nav className="mb-4 text-sm text-gray-500 font-medium">
                <Link href="/" className="hover:text-[#7A3EF2] cursor-pointer">
                  Home
                </Link>
                {" >> "}
                <span className="text-gray-900">Payments</span>
              </nav>
              <h1 className="text-4xl font-semibold text-[#1A1A1A] leading-tight tracking-tight">
                Payment Information
              </h1>
              <div className="bg-white/70 backdrop-blur-lg p-8 rounded-xl shadow-md border border-gray-200 space-y-4 text-gray-800">
                <div className="flex justify-between text-sm md:text-base">
                  <span className="font-medium text-gray-500 ">Bank Name</span>
                  <span className="font-semibold">ICICI Bank</span>
                </div>
                <div className="flex justify-between text-sm md:text-base">
                  <span className="font-medium text-gray-500 ">
                    Account Holder
                  </span>
                  <span className="font-semibold">
                    LAWFINITY INDIA PRIVATE LIMITED
                  </span>
                </div>
                <div className="flex justify-between text-sm md:text-base">
                  <span className="font-medium text-gray-500 ">
                    Account Number
                  </span>
                  <span className="font-semibold">0332 0500 4966</span>
                </div>
                <div className="flex justify-between text-sm md:text-base">
                  <span className="font-medium text-gray-500 ">IFSC Code</span>
                  <span className="font-semibold">ICIC0000332</span>
                </div>
                <div className="flex justify-between text-sm md:text-base">
                  <span className="font-medium text-gray-500 ">UPI ID</span>
                  <span className="font-semibold">lawfi59928.ibz@icici</span>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<PaymentsFallback />}>
      <PaymentsCmsContent />
    </Suspense>
  );
}

async function PaymentsCmsContent() {
  const cmsPage = await getFactoryCmsStaticPage("payments");

  if (cmsPage) {
    return <FactoryCmsStaticPage page={cmsPage} fallbackTitle="Payment Information" />;
  }

  return <PaymentsFallback />;
}
