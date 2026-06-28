import { Geist, Geist_Mono, Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/navbar";
import Container from "./components/packageContainers";
import LenisProvider from "./components/lenisProvider";
import Footer from "./components/footer";
import NavProvider from "./components/navProvider";
import PdfProvider from "./components/pdfProvider";
import VideoBackground from "./components/videoBackground";
import { getActiveTheme } from "@/lib/theme";

export const arminGrotesk = localFont({
  src: [
    {
      path: "./fonts/Armin-Grotesk/ArminGrotesk-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/Armin-Grotesk/ArminGrotesk-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Armin-Grotesk/ArminGrotesk-SemiBold.woff2",
      weight: "500 600",
      style: "normal",
    },
    {
      path: "./fonts/Armin-Grotesk/ArminGrotesk-UltraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Armin-Grotesk/ArminGrotesk-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-armin",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://mohammad-yasin.vercel.app"),

  title: {
    default: "Mohammad Yasin | Full Stack Web Developer",
    template: "%s | Mohammad Yasin",
  },

  description:
    "Mohammad Yasin is a Full Stack MERN Developer from Bangladesh specializing in React, Next.js, Express.js, MongoDB, PostgreSQL, Prisma, and modern web applications.",

  keywords: [
    "Mohammad Yasin",
    "Yasin Developer",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Frontend Developer",
    "Backend Developer",
    "Bangladesh Web Developer",
    "Chittagong Web Developer",
    "Chattogram Web Developer",
    "Freelance MERN Developer",
    "MongoDB Developer",
    "Express.js Developer",
    "Prisma Developer",
    "PostgreSQL Developer",
    "JWT Authentication",
    "REST API Developer",
    "Portfolio Website",
    "Web Application Developer",
    "Tailwind CSS Developer",
    "mohammad yasin portfolio",
    "mohammad yasin portfolio bangladesh",
    "md yasin portfolio bangladesh",
  ],

  authors: [
    {
      name: "Mohammad Yasin",
      url: "https://mohammad-yasin.vercel.app",
    },
  ],

  creator: "Mohammad Yasin",
  publisher: "Mohammad Yasin",

  category: "technology",

  alternates: {
    canonical: "https://mohammad-yasin.vercel.app",
  },

  openGraph: {
    title: "Mohammad Yasin | Full Stack Web Developer",
    description:
      "Portfolio of Mohammad Yasin — Full Stack MERN Developer specializing in modern web applications, REST APIs, responsive UI, and scalable backend systems.",
    url: "https://mohammad-yasin.vercel.app",
    siteName: "Mohammad Yasin Portfolio",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mohammad Yasin Portfolio Website",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mohammad Yasin | Full Stack MERN Developer",
    description:
      "Explore the portfolio of Mohammad Yasin — MERN Stack Developer focused on React, Next.js, Express.js, MongoDB, and scalable web applications.",
    images: ["/images/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "R8ibiYEdlNJujxHHJjqEgAuHE5jX2f9THA0_hLzQUko",
  },

  icons: {
    icon: "/logo/logo1.ico",
    shortcut: "/logo/logo1.ico",
    // apple: "/apple-touch-icon.png",
  },
};


export default async function RootLayout({ children }) {
  let theme = await getActiveTheme();
  return (
    <html lang="en" data-scroll-behavior="smooth" data-theme={theme?.themeName || "light"} className="overflow-y-scrolls">
      <NavProvider>
        <PdfProvider>
          <body
            className={`${arminGrotesk.variable} ${geistSans.variable} ${geistMono.variable} antialiased font-armin max-w-[2000px] mx-auto selection:bg-info/50`}
          >
            {/* <VideoBackground /> */}
            <LenisProvider>
              <main className="md:flex bg-base-300">
                <Navbar />
                <div className="flex-1 -order-1">
                  {children}
                  <Footer />
                </div>
              </main>
              <Container />
            </LenisProvider>

            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Person",
                  name: "Mohammad Yasin",
                  url: "https://mohammad-yasin.vercel.app",
                  image: "https://mohammad-yasin.vercel.app/images/og-image.png",
                  jobTitle: "Full Stack Web Developer",
                  nationality: "Bangladeshi",
                  knowsAbout: [
                    "React",
                    "Next.js",
                    "MongoDB",
                    "Express.js",
                    "PostgreSQL",
                    "Prisma",
                    "Tailwind CSS",
                    "JWT Authentication",
                    "AuthJS",
                    "REST APIs",
                  ],
                  sameAs: [
                    "https://github.com/MohammadYasin74630",
                    "https://www.linkedin.com/in/mohammadyasin74630",
                  ],
                }),
              }}
            />
          </body>
        </PdfProvider>
      </NavProvider>
    </html>
  );
}
