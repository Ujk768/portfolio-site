import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Ujk Portfolio Site",
  description: "Projects and work done by Utkarsh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}