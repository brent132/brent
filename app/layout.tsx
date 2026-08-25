import type { Metadata } from "next";
import { Geist_Mono, Poppins } from "next/font/google";

import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const directionContract = `<!--
THESIS: The first viewport presents the developer inside a real blue-lit building environment, not a generic centered portfolio card.
OWN-WORLD: Near-black navy surfaces, electric blue light, Poppins typography, cool-gray borders, translucent dark chrome, and restrained rectangular controls.
STORY: Visitors identify Brent's role, understand the value proposition, see future portfolio routes, and know contact is available.
FIRST VIEWPORT: A floating navbar sits above left-weighted copy and controls while the workstation dominates the right and a scroll cue anchors the bottom.
FORM: Faithful layered reference recreation; seed key user-pinned-section1-reference.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
-->`;

export const metadata: Metadata = {
  title: "Brent | Full-Stack Developer",
  description:
    "Full-stack developer and web designer building fast, modern, and user-focused digital solutions.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${geistMono.variable} h-full font-sans antialiased`}
    >
      <body className="min-h-svh bg-slate-950 text-slate-50">
        <template
          data-impeccable-direction-contract
          dangerouslySetInnerHTML={{ __html: directionContract }}
        />
        {children}
      </body>
    </html>
  );
}
