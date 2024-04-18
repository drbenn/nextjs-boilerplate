import type { Metadata } from "next";
import { Inter, Noto_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from './providers'
import Header from "./components/header";
import Footer from "./components/footer";

// Nextjs implementation of fonts
const inter = Inter({ subsets: ["latin"] });
const notoSans = Noto_Sans({ subsets: ["latin"]});

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
    // <html lang="en">
    //   <body className={inter.className}>{children}</body>
    // </html>

    // <html lang="en" className={inter.className}>
    //   <body className="flex flex-col min-h-screen bg-pink-100">
    //     <Providers>
    //       <Navbar />
    //       <main className="flex-grow bg-pink-700">
    //         {children}
    //       </main>
    //       <Footer />
    //     </Providers>
    //   </body>
    // </html>
    <html lang="en" className={inter.className}>
      <body className="flex flex-col min-h-screen bg-rose-100">
        
          <Header />
          <main className="flex flex-grow bg-green-200 w-full">
            {children}
          </main>
          <Footer />

      </body>


    </html>
  );
}
