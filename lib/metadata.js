const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://financepro.io';

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
    url: siteUrl,
    siteName: 'FinancePro',
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630 }],
    type: 'website',
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const calculatorsMetadata = {
  title: 'Finance Calculators — EMI, Mortgage, Tax, Investment | FinancePro',
  description:
    "Use FinancePro's free calculators: Loan EMI, Mortgage, Compound Interest, US Tax Bracket 2024, and Currency Converter. Instant results, no login required.",
  alternates: {
    canonical: `${siteUrl}/calculators`,
  },
};
