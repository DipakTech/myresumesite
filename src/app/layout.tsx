import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";
import { SheetMenu } from "@/components/SheetMenu";
import Header from "@/components/Header";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Dipak Giri - Developer",
  description: "Dipak Giri is a developer,.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          inter.className,
          " antialiased  bg-gray-100 dark:bg-slate-950",
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div>
            <div className="lg:pl-2 mx-auto container lg:pt-2 bg-gray-100 dark:bg-slate-950 flex-1 overflow-y-auto">
              <div className="flex-1 bg-white dark:bg-slate-950 min-h-screen lg:rounded-tl-xl border border-transparent lg:border-neutral-200 lg:border-transparent overflow-y-auto">
                <div className="flex items-end w-full justify-end p-4"></div>
                {children}
                <Footer />
              </div>
            </div>
          </div>
          <GoogleAnalytics gaId="G-ZSM3T3YV9V" />
        </ThemeProvider>
      </body>
      <Script
        defer
        src="https://analytics.oneclickresult.com/script.js"
        data-website-id="1fbce566-c2de-4831-96f9-e1558987bce5"
      />
    </html>
  );
}
