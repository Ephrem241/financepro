'use client';

// AdSense placeholder helper
const AdSlot = ({ size = '728x90', label }) => (
  <div
    className="adsense-placeholder"
    style={{
      width: '100%',
      maxWidth: size === '336x280' ? '336px' : '728px',
      height: size === '336x280' ? '280px' : '90px',
      border: '1px dashed rgba(201,168,76,0.25)',
      borderRadius: '6px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(201,168,76,0.02)',
      margin: '0 auto',
    }}
  >
    <span style={{ fontSize: '0.6rem', color: '#334455', letterSpacing: '0.1em' }}>
      {label || `ADSENSE ${size}`}
    </span>
  </div>
);

export default function FinanceProLanding() {
  return (
    <div style={{ background: '#080d16', minHeight: '100vh', color: '#fff' }}>
      {/* Hero */}
      <section
        style={{
          maxWidth: '960px',
          margin: '0 auto',
          padding: '80px 24px 60px',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 600,
            color: '#c9a84c',
            lineHeight: 1.1,
            marginBottom: '1.5rem',
          }}
        >
          Free Finance Calculators
        </h1>
        <p style={{ fontSize: '1.125rem', color: '#8899aa', maxWidth: '560px', margin: '0 auto 2rem' }}>
          Loan EMI, Mortgage, Compound Interest, Tax Brackets, Currency Converter — instant results, no signup.
        </p>
        <a
          href="/calculators"
          style={{
            display: 'inline-block',
            background: '#c9a84c',
            color: '#080d16',
            padding: '0.75rem 2rem',
            borderRadius: '6px',
            fontWeight: 600,
            textDecoration: 'none',
            fontFamily: 'var(--font-dm-mono)',
            fontSize: '0.875rem',
            letterSpacing: '0.05em',
          }}
        >
          Open Calculators →
        </a>
      </section>

      {/* Ad — below hero */}
      <div style={{ padding: '0 24px 40px' }}>
        <AdSlot size="728x90" />
      </div>

      {/* Calculator grid preview */}
      <section style={{ maxWidth: '960px', margin: '0 auto', padding: '0 24px 60px' }}>
        <h2
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: '2rem',
            color: '#c9a84c',
            marginBottom: '2rem',
            textAlign: 'center',
          }}
        >
          Our Calculators
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '1rem',
          }}
        >
          {[
            { name: 'Loan EMI', desc: 'Monthly instalment on any loan' },
            { name: 'Mortgage', desc: 'Home loan repayment schedule' },
            { name: 'Compound Interest', desc: 'Grow savings over time' },
            { name: 'Tax Bracket 2024', desc: 'US federal tax estimator' },
            { name: 'Currency Converter', desc: 'Live FX rates (USD/GBP/EUR/CAD)' },
          ].map((calc) => (
            <a
              key={calc.name}
              href="/calculators"
              style={{
                display: 'block',
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '10px',
                padding: '1.25rem',
                textDecoration: 'none',
                transition: 'border-color 0.2s',
              }}
            >
              <div style={{ color: '#c9a84c', fontWeight: 600, marginBottom: '0.4rem' }}>{calc.name}</div>
              <div style={{ color: '#556677', fontSize: '0.875rem' }}>{calc.desc}</div>
            </a>
          ))}
        </div>
      </section>

      {/* Ad — between grid and FAQ */}
      <div style={{ padding: '0 24px 40px' }}>
        <AdSlot size="336x280" />
      </div>

      {/* FAQ */}
      <section style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px 60px' }}>
        <h2
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: '2rem',
            color: '#c9a84c',
            marginBottom: '2rem',
            textAlign: 'center',
          }}
        >
          Frequently Asked Questions
        </h2>
        {[
          { q: 'Are these calculators free?', a: 'Yes — 100% free, no account required.' },
          { q: 'How accurate are the results?', a: 'Results are based on standard financial formulas used by banks worldwide.' },
          { q: 'Which countries are supported?', a: 'Calculators support USD, GBP, CAD, and EUR. Tax brackets follow US 2024 rates.' },
          { q: 'Is my data stored?', a: 'No data is sent to any server. All calculations run in your browser.' },
        ].map(({ q, a }) => (
          <div
            key={q}
            style={{
              borderBottom: '1px solid rgba(201,168,76,0.15)',
              padding: '1.25rem 0',
            }}
          >
            <div style={{ color: '#c9a84c', fontWeight: 600, marginBottom: '0.4rem' }}>{q}</div>
            <div style={{ color: '#8899aa', fontSize: '0.9375rem' }}>{a}</div>
          </div>
        ))}
      </section>

      {/* Ad — above footer */}
      <div style={{ padding: '0 24px 40px' }}>
        <AdSlot size="728x90" />
      </div>

      {/* Footer */}
      <footer
        style={{
          borderTop: '1px solid rgba(255,255,255,0.07)',
          padding: '2rem 24px',
          textAlign: 'center',
          color: '#334455',
          fontSize: '0.8125rem',
          fontFamily: 'var(--font-dm-mono)',
        }}
      >
        © {new Date().getFullYear()} FinancePro — Free Finance Tools
      </footer>
    </div>
  );
}
