import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SkyAtmosphere } from "@/components/SkyAtmosphere";
import { site } from "@/data/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description:
    "Tyson Tan makes worlds and pictures — with 2D/3D graphics, motion, and UI/UX in the mix.",
  icons: {
    icon: [
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-48.png", type: "image/png", sizes: "48x48" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${outfit.variable} h-full bg-[#070b1c] antialiased`}
    >
      <body className="relative flex min-h-full flex-col bg-[#070b1c] text-[#f5f5f5]">
        <SkyAtmosphere />
        <div className="relative z-10 flex min-h-full flex-1 flex-col">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
