import FinanceCalc from '../../components/FinanceCalc';

export const metadata = {
  title: 'Finance Calculators — EMI, Mortgage, Tax, Investment | FinancePro',
  description:
    "Use FinancePro's free calculators: Loan EMI, Mortgage, Compound Interest, US Tax Bracket 2024, and Currency Converter. Instant results, no login required.",
  keywords:
    'EMI calculator, mortgage calculator, compound interest calculator, tax bracket 2024, currency converter, free finance tools',
  openGraph: {
    title: 'Finance Calculators — EMI, Mortgage, Tax, Investment | FinancePro',
    description:
      "Free calculators: Loan EMI, Mortgage, Compound Interest, US Tax Bracket 2024, Currency Converter. No login.",
    url: 'https://financepro.io/calculators',
    siteName: 'FinancePro',
    type: 'website',
  },
  alternates: {
    canonical: 'https://financepro.io/calculators',
  },
};

// ── JSON-LD: WebApplication ───────────────────────────────────────────────────
const webAppJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'FinancePro Calculator',
  url: 'https://financepro.io/calculators',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  browserRequirements: 'Requires JavaScript',
  description:
    "Use FinancePro's free calculators: Loan EMI, Mortgage, Compound Interest, US Tax Bracket 2024, and Currency Converter. Instant results, no login required.",
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  author: {
    '@type': 'Organization',
    name: 'FinancePro',
    url: 'https://financepro.io',
  },
};

function AdPlaceholder({ width, height }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '1.5rem 24px 0' }}>
      <div
        style={{
          width: '100%',
          maxWidth: `${width}px`,
          height: `${height}px`,
          border: '1px dashed rgba(201,168,76,0.25)',
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(201,168,76,0.02)',
        }}
      >
        <span
          style={{
            fontSize: '0.6rem',
            color: '#2a3a4a',
            letterSpacing: '0.12em',
            fontFamily: 'monospace',
          }}
        >
          ADSENSE {width}×{height}
        </span>
      </div>
    </div>
  );
}

export default function CalculatorsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }}
      />

      {/* Ad: above calculator card */}
      <AdPlaceholder width={728} height={90} />

      <FinanceCalc />

      {/* Ad: below results */}
      <div style={{ display: 'flex', justifyContent: 'center', padding: '0 24px 3rem' }}>
        <div
          style={{
            width: '100%',
            maxWidth: '300px',
            height: '250px',
            border: '1px dashed rgba(201,168,76,0.25)',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(201,168,76,0.02)',
          }}
        >
          <span style={{ fontSize: '0.6rem', color: '#2a3a4a', letterSpacing: '0.12em', fontFamily: 'monospace' }}>
            ADSENSE 300×250
          </span>
        </div>
      </div>
    </>
  );
}
