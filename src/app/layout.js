import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import Script from "next/script";
import HeroFormModal from "@/components/HeroFormModal";

export const metadata = {
  icons: {
    icon: "/fav2.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="../../public/fav2.png" />

        {/* Meta Pixel Script */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '777415601527541');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* Noscript Fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=777415601527541&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body>
        <Header />
        {children}
        {/* <HeroFormModal /> */}
        <Footer />
      </body>
    </html>
  );
}
