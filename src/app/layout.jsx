import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import WaFloat from '@/components/WaFloat';
import Head from 'next/head';

export const metadata = {
  title: 'Vialane Homes',
  description: 'Your complete Marrakech experience. Accommodation, airport transfers, car hire, curated experiences, and expert real estate investment guidance.',
  openGraph: {
    title: 'Vialane Homes — Marrakech, Done Right.',
    description: 'You just show up. We handle everything else.',
    url: 'https://vialanehomes.com',
    siteName: 'Vialane Homes',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/new%20logo-modified.png" type="image/png" />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <WaFloat />
      </body>
    </html>
  );
}