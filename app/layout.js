import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "LensLegacy | Creating Life's Fleeting Moments",
  description: "Through a technology, I transform ordinary scenes into extraordinary memories.",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>LensLegacy | Creating Life&apos;s Fleeting Moments</title>
        <meta name="description" content="Through my lens, I transform ordinary scenes into extraordinary memories." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="photography, portfolio, gallery, about, contact, images, photos, ai generated, ai generated photos, ai, aigenerated best photos, ai generated best photos, ai generated images, ai generated images best, ai generated images best photos, pixels, pixel, pinterest, pixabay, free images, free photos, free images, free photos for commercial use, free images for commercial use, free photos for personal use, free images for personal use, free ai generated images" />

      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
