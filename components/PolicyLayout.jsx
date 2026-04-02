// Server component — no 'use client' needed

const C = {
  bg: '#080d16',
  gold: '#c9a84c',
  goldBorder: 'rgba(201,168,76,0.25)',
  cardBorder: 'rgba(255,255,255,0.07)',
  muted: '#556677',
  sub: '#8899aa',
  white: '#f0f4f8',
};

export default function PolicyLayout({ title, subtitle, children }) {
  return (
    <div style={{ background: C.bg, minHeight: '100vh', color: C.white }}>
      {/* Header */}
      <header
        style={{
          borderBottom: `1px solid ${C.cardBorder}`,
          padding: '1.25rem 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <a
          href="/"
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: '1.5rem',
            fontWeight: 600,
            color: C.gold,
            textDecoration: 'none',
          }}
        >
          FinancePro
        </a>
        <a
          href="/"
          style={{
            color: C.sub,
            fontSize: '0.8125rem',
            fontFamily: 'var(--font-dm-mono)',
            textDecoration: 'none',
            letterSpacing: '0.04em',
          }}
        >
          ← Back to Home
        </a>
      </header>

      {/* Page title */}
      <div
        style={{
          borderBottom: `1px solid ${C.cardBorder}`,
          background: 'rgba(201,168,76,0.03)',
          padding: '3rem 24px 2.5rem',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 600,
            color: C.gold,
            marginBottom: '0.5rem',
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p style={{ color: C.muted, fontSize: '0.875rem', fontFamily: 'var(--font-dm-mono)' }}>
            {subtitle}
          </p>
        )}
      </div>

      {/* Body */}
      <main style={{ maxWidth: '780px', margin: '0 auto', padding: '3rem 24px 5rem' }}>
        {children}
      </main>

      {/* Footer */}
      <footer
        style={{
          borderTop: `1px solid ${C.cardBorder}`,
          padding: '2rem 24px',
          textAlign: 'center',
          color: C.muted,
          fontSize: '0.8125rem',
          fontFamily: 'var(--font-dm-mono)',
        }}
      >
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
          {[
            { label: 'Home', href: '/' },
            { label: 'Calculators', href: '/calculators' },
            { label: 'Privacy Policy', href: '/privacy' },
            { label: 'Terms of Service', href: '/terms' },
            { label: 'About', href: '/about' },
          ].map(({ label, href }) => (
            <a key={label} href={href} style={{ color: C.muted, textDecoration: 'none' }}>
              {label}
            </a>
          ))}
        </div>
        © {new Date().getFullYear()} FinancePro — Free Finance Tools
      </footer>
    </div>
  );
}
