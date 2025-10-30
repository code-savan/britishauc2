// import { Metadata } from "next";
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
})

export const metadata = {
    title: "British AUC",
    description: "British AUC",
    icons: {
      icon: "/logoicon.png",
      shortcut: "/logoicon.png",
      apple: "/logoicon.png",
    },
  };

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} antialiased`}
      >
        <div className='bg-[#faf9fb] w-full min-h-[100dvh] overflow-auto'>
          <header>
            <Nav />
          </header>
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
