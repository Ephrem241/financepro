import PolicyLayout from '../../components/PolicyLayout';

export const metadata = {
  title: 'About FinancePro | Free Finance Calculators',
  description: 'Learn about FinancePro — who we are, our mission to make financial planning accessible to everyone, and the free tools we provide.',
  alternates: { canonical: 'https://financepro.io/about' },
};

const S = {
  h2: {
    fontFamily: 'var(--font-cormorant)',
    fontSize: '1.5rem',
    fontWeight: 600,
    color: '#c9a84c',
    margin: '2.5rem 0 0.75rem',
  },
  p: {
    color: '#8899aa',
    lineHeight: 1.8,
    fontSize: '0.9375rem',
    marginBottom: '1rem',
  },
  a: { color: '#c9a84c', textDecoration: 'none' },
};

const TOOLS = [
  { name: 'Loan EMI Calculator',        desc: 'Calculate monthly instalments for personal, auto, or student loans.' },
  { name: 'Mortgage Calculator',        desc: 'Plan home loan repayments with full amortisation breakdown.' },
  { name: 'Compound Interest',          desc: 'Visualise savings and investment growth over time with bar chart.' },
  { name: 'Tax Bracket 2024',           desc: 'Estimate US federal income tax for single and married filers.' },
  { name: 'Currency Converter',         desc: 'Convert between 10 currencies including USD, EUR, GBP, AED, and ETB.' },
  { name: 'Savings Goal Planner',       desc: 'Find the monthly contribution needed to reach a savings target.' },
  { name: 'Retirement Calculator',      desc: 'Project retirement balance and monthly income using the 4% rule.' },
  { name: 'Net Worth Calculator',       desc: 'Summarise assets vs liabilities and track your financial position.' },
];

export default function AboutPage() {
  return (
    <PolicyLayout title="About FinancePro" subtitle="Making financial clarity accessible to everyone">

      <h2 style={S.h2}>Who We Are</h2>
      <p style={S.p}>
        FinancePro is a free, browser-based suite of financial calculators designed to help everyday people
        make sense of their money. We believe that powerful financial tools should not be locked behind
        paywalls, subscriptions, or sign-up forms.
      </p>
      <p style={S.p}>
        Whether you're planning a mortgage, estimating your tax bill, tracking your net worth, or figuring
        out how much to save each month — FinancePro gives you instant, clear answers with no friction.
      </p>

      <h2 style={S.h2}>Our Mission</h2>
      <p style={S.p}>
        Our mission is simple: <strong style={{ color: '#f0f4f8' }}>make financial planning accessible to
        everyone</strong>, regardless of income, background, or financial literacy. We strip away complexity
        and give you the numbers you need to make informed decisions.
      </p>
      <p style={S.p}>
        All calculations run entirely in your browser. We never collect, store, or share your financial
        data — ever.
      </p>

      <h2 style={S.h2}>Our Tools</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1rem',
          marginTop: '0.25rem',
        }}
      >
        {TOOLS.map(({ name, desc }) => (
          <div
            key={name}
            style={{
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '10px',
              padding: '1.1rem 1.25rem',
            }}
          >
            <div style={{ color: '#c9a84c', fontWeight: 600, marginBottom: '0.35rem', fontSize: '0.9375rem' }}>
              {name}
            </div>
            <div style={{ color: '#556677', fontSize: '0.85rem', lineHeight: 1.55 }}>{desc}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '1.5rem' }}>
        <a
          href="/calculators"
          style={{
            display: 'inline-block',
            background: '#c9a84c',
            color: '#080d16',
            padding: '0.7rem 1.75rem',
            borderRadius: '6px',
            fontWeight: 700,
            fontFamily: 'var(--font-dm-mono)',
            fontSize: '0.875rem',
            letterSpacing: '0.05em',
            textDecoration: 'none',
          }}
        >
          OPEN FREE CALCULATORS →
        </a>
      </div>

      <h2 style={S.h2}>How We're Funded</h2>
      <p style={S.p}>
        FinancePro is completely free to use and is supported by non-intrusive display advertising served
        by <strong style={{ color: '#f0f4f8' }}>Google AdSense</strong>. We do not charge for any feature,
        show pop-ups, or sell your data. Advertising revenue allows us to keep the Site running and
        continually improve our tools.
      </p>

      <h2 style={S.h2}>Accuracy &amp; Disclaimer</h2>
      <p style={S.p}>
        Our calculators use standard financial formulas and published data (e.g. IRS 2024 tax brackets).
        Results are <strong style={{ color: '#f0f4f8' }}>estimates for informational purposes only</strong> and
        do not constitute financial, legal, or tax advice. Always verify important financial decisions with
        a qualified professional or your financial institution.
      </p>

      <h2 style={S.h2}>Contact Us</h2>
      <p style={S.p}>
        We'd love to hear from you — whether it's a bug report, a calculator suggestion, or a general
        question.
      </p>
      <p style={S.p}>
        Email: <a href="mailto:hello@financepro.io" style={S.a}>hello@financepro.io</a>
      </p>
      <p style={S.p}>
        For privacy-related enquiries: <a href="mailto:privacy@financepro.io" style={S.a}>privacy@financepro.io</a>
        <br />
        For legal matters: <a href="mailto:legal@financepro.io" style={S.a}>legal@financepro.io</a>
      </p>
    </PolicyLayout>
  );
}
