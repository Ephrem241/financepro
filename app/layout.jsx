import { Cormorant_Garamond, DM_Mono } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const dmMono = DM_Mono({
  variable: '--font-dm-mono',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://financepro.io'),
  title: {
    template: '%s | FinancePro',
    default: 'FinancePro — Free Finance Calculators',
  },
  description: 'Free online finance calculators. No signup, instant results.',
  applicationName: 'FinancePro',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmMono.variable}`}>
      <head>
        {/* Plain <script> avoids the data-nscript attribute that AdSense rejects */}
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_ID}`}
          crossOrigin="anonymous"
        />
      </head>
      <body style={{ background: '#080d16', color: '#f0f4f8', minHeight: '100vh' }}>
        {children}
      </body>
    </html>
  );
}
