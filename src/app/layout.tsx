import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LIGHT BUCKET — Where Light Finds Form",
  description: "Crafting Architectural Light for Modern Living. Collectible architectural light objects made from wood, linen, and floating calm.",
  keywords: ["Architectural Lighting", "Luxury Lighting", "Light Bucket", "Floating Sculptures", "Linen Lamp", "Sri Lanka Design"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F9F6EF] text-[#595552] font-sans selection:bg-[#D8CFC7] selection:text-[#595552]">
        {children}
      </body>
    </html>
  );
}

