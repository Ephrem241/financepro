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

// ── JSON-LD: WebSite ──────────────────────────────────────────────────────────
const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'FinancePro',
  url: 'https://financepro.io',
  description:
    'Free online finance calculators for loans, mortgages, compound interest, tax brackets and currency. No signup. Instant results.',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://financepro.io/calculators',
    'query-input': 'required name=search_term_string',
  },
};

// ── JSON-LD: FAQPage (matches the 6 FAQs in FinanceProLanding.jsx) ────────────
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Are all the calculators completely free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — every tool on FinancePro is 100% free with no premium tier, no trial period, and no account required. The site is supported by non-intrusive display advertising.',
      },
    },
    {
      '@type': 'Question',
      name: 'How accurate are the calculations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Results are based on standard financial formulas used by banks and financial institutions worldwide. For mortgage and loan calculations we use the standard reducing-balance (amortisation) formula. Tax estimates follow IRS 2024 published brackets. Results are indicative — always confirm with your lender or tax adviser before making financial decisions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you store my data?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No data is ever sent to our servers. All calculations run entirely in your browser using JavaScript. When you close the tab, the numbers are gone.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which countries are supported?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our tools are built for a global audience with a focus on the US, UK, and Canada. The Tax Bracket calculator uses 2024 US federal rates. Mortgage and loan calculators work with any currency. The Currency Converter supports USD, GBP, EUR, and CAD.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use these on mobile?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. FinancePro is fully responsive and optimised for all screen sizes — from mobile phones to desktop monitors. No app download required.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I calculate compound interest monthly vs. annually?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In our Compound Interest calculator, set "Compounding Frequency" to 12 for monthly or 1 for annual. Monthly compounding yields a slightly higher return because interest is added to the principal 12 times per year rather than once.',
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <FinanceProLanding />
    </>
  );
}
