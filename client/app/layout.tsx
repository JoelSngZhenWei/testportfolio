import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/contexts/ThemeContext";
import ParticlesBackground from "@/components/ParticlesBackground";
import { FooterComponent } from "@/components/footer-component"; // Updated import

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Joel Sng's Portfolio Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/particles.min.js" as="script"></link>
        {/* Inline script to apply the initial theme based on local storage */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var isDarkMode = localStorage.getItem('darkMode') === 'true';
                  if (isDarkMode) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>

        {/* Wrap your application with ThemeProvider */}
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>

        <div className="hidden">
          <ParticlesBackground />
        </div>

        {/* Include FooterComponent here */}
        <FooterComponent />
      </body>
    </html>
  );
}
