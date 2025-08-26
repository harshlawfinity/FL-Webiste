// app/pages/layout.jsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PagesLayout({ children }) {
  return (
    <html lang="en">
      <body>
         <main>{children}</main>
       </body>
    </html>
  );
}
