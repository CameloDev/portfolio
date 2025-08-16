import "./globals.css";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

import { ThemeProvider } from "@/components/theme";
import { env } from "@/env";

export const metadata: Metadata = {
  title: {
    template: "%s | Victor de Paula",
    default: "Victor de Paula | Desenvolvedor Back-end",
  },
  description:
    "Desenvolvedor Back-end com habilidades sólidas em Java, C++, Golang e C#.",
  metadataBase: new URL(env.APP_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${GeistSans.variable} scroll-smooth rounded-full antialiased scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-500`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
