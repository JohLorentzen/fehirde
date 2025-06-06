import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
const spaceGrotesk = localFont({
  src: [{
    path: "../public/fonts/SpaceGrotesk-Regular.ttf",
    weight: "400",
    style: "normal",
  },
  {
    path: "../public/fonts/SpaceGrotesk-Medium.ttf",
    weight: "500",
    style: "medium",
  },
  {
    path: "../public/fonts/SpaceGrotesk-Bold.ttf",
    weight: "700",
    style: "bold",
  },
  {
    path: "../public/fonts/SpaceGrotesk-SemiBold.ttf",
    weight: "600",
    style: "semibold",
  },
  {
    path: "../public/fonts/SpaceGrotesk-Light.ttf",
    weight: "300",
    style: "light",
  },
],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
