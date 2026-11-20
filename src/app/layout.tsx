import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rajan Patel — Software Developer & B.Tech CSE Student',
  description:
    'Personal developer portfolio of Rajan Patel — B.Tech Computer Science student specializing in DSA, Problem Solving, and Software Development.',
  keywords: [
    'Rajan Patel',
    'Software Developer',
    'B.Tech CSE',
    'Ambalika Institute of Management and Technology',
    'DSA',
    'Full-Stack Developer',
    'Portfolio',
  ],
  authors: [{ name: 'Rajan Patel' }],
};

export const viewport: Viewport = {
  themeColor: '#050A09',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#050A09] text-[#F2F5F3] font-sans antialiased selection:bg-[#48E7A8]/20 selection:text-[#63F0B9] min-h-screen relative overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
