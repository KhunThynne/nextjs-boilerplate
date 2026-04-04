
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { getMessages } from "next-intl/server";

import Providers from "../providers";
import { ThemeProvider } from "@wrksz/themes/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js Starter",
  description: "Next.js Boilerplate with Shadcn, i18n, and more",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Next.js Starter",
  },
  formatDetection: {
    telephone: false,
  },
};

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Providers locale={locale} messages={messages}>
            {children}
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
