import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vynedam Talent Hunt 2026 | India's Largest Technical Talent Discovery Platform",
  description:
    "Join Vynedam Talent Hunt 2026 — India's premier national-level hackathon and talent discovery platform. 10,000+ participants, 40+ paid internships, 100+ industry mentors. Register now and showcase your technical genius.",
  keywords: [
    "Vynedam Talent Hunt",
    "hackathon 2026",
    "India hackathon",
    "technical talent hunt",
    "software internships",
    "AI hackathon",
    "national hackathon India",
    "coding competition",
    "tech challenge",
    "innovation hackathon",
  ],
  authors: [{ name: "Vynedam Technologies" }],
  creator: "Vynedam Technologies",
  publisher: "Vynedam Technologies",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://talenthunt.vynedam.com",
    siteName: "Vynedam Talent Hunt 2026",
    title: "Vynedam Talent Hunt 2026 | India's Largest Technical Talent Discovery Platform",
    description:
      "Join India's premier national-level hackathon. 10,000+ participants, 40+ paid internships, 100+ mentors. Phase-based selection with real internship placements.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vynedam Talent Hunt 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vynedam Talent Hunt 2026",
    description: "India's Largest Technical Talent Discovery Platform",
    images: ["/og-image.png"],
    creator: "@VynedamTech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#050508",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Orbitron:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#050508] text-white overflow-x-hidden">
        <div className="noise-overlay">{children}</div>
      </body>
    </html>
  );
}
