import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer-new';
import WaFloat from '@/components/WaFloat';
import ScrollToTop from '@/components/ScrollToTop';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: 'Vialane',
  description: 'Your complete Marrakech experience. Accommodation, airport transfers, car hire, curated experiences, and expert real estate investment guidance.',
  openGraph: {
    title: 'Vialane Homes — Marrakech, Done Right.',
    description: 'You just show up. We handle everything else.',
    url: 'https://vialanehomes.com',
    siteName: 'Vialane',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="icon" href="/new%20logo-modified.png" type="image/png" />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <WaFloat />
        <ScrollToTop />
      </body>
    </html>
  );
}
