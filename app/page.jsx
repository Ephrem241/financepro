import FinanceProLanding from '../components/FinanceProLanding';

export const metadata = {
  title: 'Free Finance Calculator — Loan, Mortgage, Tax & Investment Tools | FinancePro',
  description:
    'Free online finance calculators for loans, mortgages, compound interest, tax brackets and currency. No signup. Instant results. Trusted by thousands.',
  keywords:
    'loan calculator, mortgage calculator, compound interest calculator, tax bracket calculator 2024, currency converter, EMI calculator',
  openGraph: {
    title: 'Free Finance Calculator — Loan, Mortgage, Tax & Investment Tools | FinancePro',
    description:
      'Free online finance calculators for loans, mortgages, compound interest, tax brackets and currency. No signup. Instant results. Trusted by thousands.',
    url: 'https://financepro.io',
    siteName: 'FinancePro',
    images: [
      {
        url: 'https://financepro.io/og-image.png',
        width: 1200,
        height: 630,
        alt: 'FinancePro — Free Finance Calculators',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Finance Calculator — Loan, Mortgage, Tax & Investment Tools | FinancePro',
    description:
      'Free online finance calculators for loans, mortgages, compound interest, tax brackets and currency. No signup. Instant results.',
    images: ['https://financepro.io/og-image.png'],
  },
  alternates: {
    canonical: 'https://financepro.io',
  },
};

export default function Home() {
  return <FinanceProLanding />;
}
