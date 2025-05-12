import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Xan Amire — Quantum AI Engineer',
  description: 'Building the future of Quantum Artificial Intelligence through models, frameworks, and applications.',
  openGraph: {
    title: 'Xan Amire — Quantum AI Engineer',
    description: 'Explore my work in Quantum AI: papers, products, and the QuantumGPTMini chatbot.',
    url: 'https://xanamire.com',
    siteName: 'Xan Amire',
    images: [
      {
        url: 'https://xanamire.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Xan Amire Quantum AI',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xan Amire — Quantum AI Engineer',
    description: 'Building next-gen AI using quantum systems.',
    images: ['https://xanamire.com/og-image.png'],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
