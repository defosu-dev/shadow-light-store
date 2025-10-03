import type { Metadata } from "next";
import { Work_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ModeToggle } from "@/components/theme/mode-toggle";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shadow Light Store - Premium E-commerce Experience",
  description:
    "Discover our curated collection of premium products with exceptional quality and unbeatable prices. Free shipping, secure payments, and quality guarantee.",
  keywords: [
    "e-commerce",
    "premium products",
    "online shopping",
    "quality guarantee",
    "free shipping",
  ],
  openGraph: {
    title: "Shadow Light Store - Premium E-commerce Experience",
    description:
      "Discover our curated collection of premium products with exceptional quality and unbeatable prices.",
    type: "website",
  },
};

interface IRootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: IRootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${workSans.variable} ${jetBrainsMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <>
            {children}
            <ModeToggle />
          </>
        </ThemeProvider>
      </body>
    </html>
  );
}
