import type { Metadata } from "next";
import { Inter, Poppins, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import BackgroundWrapper from "@/components/background/BackgroundWrapper";
import { ibmVGA, ibmBIOS } from "./fonts";
import CustomCursor from "@/components/custom-cursor";
import BootAnimation from "@/components/boot-animation";
import ScrollAnimationProvider from "@/components/scroll-animation-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Darshan Jijhuvadia | AI Software Engineer",
  description: "Portfolio of Darshan Jijhuvadia, an AI Software Engineer specializing in LLMs, model fine-tuning, and AI-driven solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`
        ${inter.variable} 
        ${poppins.variable} 
        ${robotoMono.variable}
        ${ibmVGA.variable}
        ${ibmBIOS.variable}
        font-ibm-vga
      `} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollAnimationProvider>
            <BackgroundWrapper />
            <BootAnimation />
            <CustomCursor />
            {children}
          </ScrollAnimationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
