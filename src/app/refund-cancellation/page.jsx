import Link from "next/link";
import { Suspense } from "react";
import FactoryCmsStaticPage from "@/components/cms/FactoryCmsStaticPage";
import FactoryCmsJsonLd from "@/components/cms/FactoryCmsJsonLd";
import { buildCmsMetadata, getFactoryCmsStaticPage } from "@/lib/cms";

// ISR: cache rendered page for 5 minutes instead of blocking on CMS every request.
export const revalidate = 300;

const fallbackMetadata = {
  title: "Refund Cancellation - Factorylicence",
  description:
    "Transparency, a satisfied customer, and delivering a service efficiently are our top priorities at FactoryLicence.in. Before ordering, please check out our cancellation and refund statements.",
  keywords: ["Refund Cancellation"],
  openGraph: {
    title: "Refund Cancellation - Factorylicence",
    description:
      "Transparency, a satisfied customer, and delivering a service efficiently are our top priorities at FactoryLicence.in. Before ordering, please check out our cancellation and refund statements.",
    url: "https://factorylicence.in/refund-cancellation",
    type: "website",
    siteName: "FactoryLicence.in",
  },
  alternates: {
    canonical: "https://factorylicence.in/refund-cancellation",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export async function generateMetadata() {
  const cmsPage = await getFactoryCmsStaticPage("refund-cancellation");
  return buildCmsMetadata(cmsPage, fallbackMetadata);
}

function RefundCancellationFallback() {
  return (
    <div className="mt-20">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#7A3EF2] to-[#a674f7] text-white md:py-40 py-20 md:px-0 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="mb-4 text-sm text-purple-100 font-medium">
            <Link href="/" className="hover:text-white cursor-pointer">
              Home
            </Link>
            {" >> "}
            <span className="text-white">Refund Cancellation</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Refund Cancellation
          </h1>
          <p className="max-w-4xl text-base md:text-lg leading-relaxed text-purple-50">
            Transparency, a satisfied customer, and delivering a service efficiently are our top priorities at FactoryLicence.in. Before ordering, please check out our cancellation and refund statements.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto text-gray-800 py-8 md:px-0 px-4">
        <h2 className="text-2xl capitalize font-semibold text-[#7A3EF2]">
          Refund &amp; Cancellation Policy
        </h2>

        <section className="space-y-10 text-base leading-relaxed mt-8">
          <p className="text-justify">
            At FactoryLicence.in, they can help you reach your goals and create a solid base on which to build your startup. We promote a consistent and sustainable relationship strategy by adding value to each through mutual trust.
          </p>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#7A3EF2]">Policy Overview</h2>
            <p className="text-justify">
              Transparency, happy customers, and quick service are our motto and what we believe in at FactoryLicence.in. We know that sometimes things might change, and often our clients would like to cancel the service requests that they have opted for. Therefore, we have outlined our cancellation and refund policy below for a fair and level play. Before requesting a cancellation, please read it carefully and thoroughly.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#7A3EF2]">Cancellation within 24 hours</h2>
            <p className="text-justify">
              In case of cancellation within <span className="font-semibold">24 hours</span> after successful payment, the customer can get a <span className="font-semibold">100% refund</span> of the total amount paid. This will be a full refund, and no deductions will be made if it is communicated within the stipulated time frame mentioned.
            </p>
            <p className="text-justify text-sm italic">
              Please note that the costs of any Government fees paid on behalf of the client cannot be recovered in any event. However, the fee receipt, or acknowledgment, from the relevant government department, will be handed over to the client as the proof of payment.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#7A3EF2]">Cancellation within 7 days</h2>
            <p className="text-justify">
              If you cancel your order within <span className="font-semibold">7 calendar days</span> of your payment, a <span className="font-semibold">20% deduction</span> will be applied to the total payment. This is to reflect administration costs, cost of documentation and startup effort of our staff during this period. 80% of the remainder of the funds will be returned to the client via the same payment method that was used to pay, but will be returned within a reasonable time.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#7A3EF2]">Cancellation after 7 days</h2>
            <p className="text-justify">
              In the event of a client&apos;s request to cancel the service from 7 days after the receipt of the payment, the refund payment made will be handled in a pro-rata manner in relation to the work done by our team. In such cases, our internal operations team will make the final determination after a comprehensive review of the refund.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#7A3EF2]">Refund queries</h2>
            <p className="text-justify">
              All queries, concerns, or cancellation requests relating to refund are to be done by email to refunds@factorylicence.in. The date and timestamp of the e-mail received to this address will be deemed as the time of the intimation of refund. For easier processing we suggest clients to provide their order number, registered e-mail address, payment details and a brief reason with regards to the cancellation.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<RefundCancellationFallback />}>
      <RefundCmsContent />
    </Suspense>
  );
}

async function RefundCmsContent() {
  const cmsPage = await getFactoryCmsStaticPage("refund-cancellation");

  if (cmsPage) {
    return (
      <>
        <FactoryCmsJsonLd page={cmsPage} />
        <FactoryCmsStaticPage page={cmsPage} fallbackTitle="Refund Cancellation" />
      </>
    );
  }

  return <RefundCancellationFallback />;
}
