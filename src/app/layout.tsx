import type { Metadata } from "next";
import { Poppins, Playwrite_US_Modern, EB_Garamond } from "next/font/google";
import "./globals.css";
import Nav from "./(site)/_components/common/nav";
import Footer from "./(site)/_components/common/footer";
// import Wave from "./(site)/_components/wave/wave";
import Contactsec from "./(site)/_components/home/contactsec";
import SecurityProvider from "./providers/SecurityProvider";
import BackToTop from "./(site)/_components/BackToTop";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const playwrite = Playwrite_US_Modern({
  variable: "--font-playwrite",
  weight: ["100", "200", "300", "400"],
});
const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["cyrillic", "cyrillic-ext", "greek", "greek-ext", "latin", "latin-ext", "vietnamese"],
});

export const metadata: Metadata = {
  title: "Rajaa Gharbi",
  description: "The Art of Rajaa Gharbi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';" />
        <meta name="referrer" content="no-referrer" />
      </head>
      <body className={`${poppins.variable} ${playwrite.variable} ${ebGaramond.variable} antialiased`}>
        <SecurityProvider>
          <Nav />
          {/* <Wave /> */}
          {children}
          <Contactsec />
          <Footer />
          <BackToTop />
        </SecurityProvider>
      </body>
    </html>
  );
}
