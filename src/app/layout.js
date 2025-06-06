import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import { Poppins, Nunito } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000'],
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kenil Shah & Co, Chartered Accountant",
  description: "Kenil Shah & Co is a Mumbai-based chartered accountancy firm offering expert financial services across auditing, taxation, and compliance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
 
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${nunito.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
