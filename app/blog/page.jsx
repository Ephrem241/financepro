import { ARTICLES } from '../../lib/articles';
import BlogCard from '../../components/BlogCard';

export const metadata = {
  title: 'Blog — Finance Guides & Calculator Tips | FinancePro',
  description:
    'Free personal finance guides from FinancePro — understand loan EMI, US tax brackets, compound interest, and more.',
  alternates: { canonical: 'https://financepro.io/blog' },
};

const C = {
  bg: '#080d16',
  gold: '#c9a84c',
  goldDim: 'rgba(201,168,76,0.12)',
  goldBorder: 'rgba(201,168,76,0.25)',
  cardBg: 'rgba(255,255,255,0.025)',
  cardBorder: 'rgba(255,255,255,0.07)',
  muted: '#556677',
  sub: '#8899aa',
  white: '#f0f4f8',
};

export default function BlogPage() {
  return (
    <div style={{ background: C.bg, minHeight: '100vh', color: C.white }}>
      {/* Nav */}
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
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <a href="/calculators" style={{ color: C.sub, fontSize: '0.8125rem', fontFamily: 'var(--font-dm-mono)', textDecoration: 'none' }}>
            Calculators
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
            ← Home
          </a>
        </div>
      </header>

      {/* Hero */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          padding: '5rem 24px 4rem',
          textAlign: 'center',
          borderBottom: `1px solid ${C.cardBorder}`,
        }}
      >
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 60% 60% at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            display: 'inline-block',
            background: C.goldDim,
            border: `1px solid ${C.goldBorder}`,
            borderRadius: '20px',
            padding: '0.25rem 1rem',
            marginBottom: '1.25rem',
            fontSize: '0.7rem',
            color: C.gold,
            fontFamily: 'var(--font-dm-mono)',
            letterSpacing: '0.1em',
            position: 'relative',
          }}
        >
          FINANCE GUIDES
        </div>
        <h1
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 600,
            color: C.white,
            marginBottom: '1rem',
            position: 'relative',
          }}
        >
          The FinancePro <span style={{ color: C.gold }}>Blog</span>
        </h1>
        <p
          style={{
            color: C.sub,
            maxWidth: '480px',
            margin: '0 auto',
            lineHeight: 1.7,
            fontSize: '1.0625rem',
            position: 'relative',
          }}
        >
          Plain-English guides on loans, tax, investing and personal finance — with free calculator tools for every topic.
        </p>
      </div>

      {/* Article grid */}
      <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '3.5rem 24px 5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {ARTICLES.map((article) => (
            <BlogCard key={article.slug} article={article} />
          ))}
        </div>

        {/* CTA strip */}
        <div
          style={{
            marginTop: '4rem',
            padding: '2rem',
            background: C.goldDim,
            border: `1px solid ${C.goldBorder}`,
            borderRadius: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div>
            <div style={{ color: C.gold, fontFamily: 'var(--font-cormorant)', fontSize: '1.375rem', fontWeight: 600, marginBottom: '0.25rem' }}>
              Ready to run the numbers?
            </div>
            <div style={{ color: C.sub, fontSize: '0.9rem' }}>
              All 8 free calculators — no signup required.
            </div>
          </div>
          <a
            href="/calculators"
            style={{
              background: C.gold,
              color: C.bg,
              padding: '0.7rem 1.75rem',
              borderRadius: '6px',
              fontWeight: 700,
              fontFamily: 'var(--font-dm-mono)',
              fontSize: '0.875rem',
              letterSpacing: '0.05em',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            OPEN CALCULATORS →
          </a>
        </div>
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
            { label: 'Privacy', href: '/privacy' },
            { label: 'Terms', href: '/terms' },
            { label: 'About', href: '/about' },
          ].map(({ label, href }) => (
            <a key={label} href={href} style={{ color: C.muted, textDecoration: 'none' }}>{label}</a>
          ))}
        </div>
        © {new Date().getFullYear()} FinancePro — Free Finance Tools
      </footer>
    </div>
  );
}
