'use client';

const C = {
  gold: '#c9a84c',
  goldBorder: 'rgba(201,168,76,0.25)',
  cardBg: 'rgba(255,255,255,0.025)',
  cardBorder: 'rgba(255,255,255,0.07)',
  muted: '#556677',
  sub: '#8899aa',
  white: '#f0f4f8',
};

const CATEGORY_COLORS = {
  Loans:     { bg: 'rgba(201,168,76,0.12)', border: 'rgba(201,168,76,0.3)',  text: '#c9a84c' },
  Tax:       { bg: 'rgba(80,160,220,0.1)',  border: 'rgba(80,160,220,0.3)', text: '#60aadd' },
  Investing: { bg: 'rgba(80,200,140,0.1)',  border: 'rgba(80,200,140,0.3)', text: '#55cc88' },
};

export default function BlogCard({ article }) {
  const cat = CATEGORY_COLORS[article.category] || CATEGORY_COLORS.Loans;

  return (
    <a
      href={`/blog/${article.slug}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: C.cardBg,
        border: `1px solid ${C.cardBorder}`,
        borderRadius: '14px',
        padding: '2rem',
        textDecoration: 'none',
        transition: 'border-color 0.2s, background 0.2s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = C.goldBorder;
        e.currentTarget.style.background = 'rgba(201,168,76,0.04)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = C.cardBorder;
        e.currentTarget.style.background = C.cardBg;
      }}
    >
      {/* Category badge */}
      <span
        style={{
          display: 'inline-block',
          alignSelf: 'flex-start',
          background: cat.bg,
          border: `1px solid ${cat.border}`,
          color: cat.text,
          fontSize: '0.6875rem',
          fontFamily: 'var(--font-dm-mono)',
          letterSpacing: '0.1em',
          padding: '0.2rem 0.7rem',
          borderRadius: '20px',
          marginBottom: '1rem',
        }}
      >
        {article.category.toUpperCase()}
      </span>

      {/* Title */}
      <h2
        style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)',
          fontWeight: 600,
          color: C.white,
          lineHeight: 1.2,
          marginBottom: '0.875rem',
          flex: 1,
        }}
      >
        {article.title}
      </h2>

      {/* Excerpt */}
      <p style={{ color: C.sub, fontSize: '0.9375rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
        {article.excerpt}
      </p>

      {/* Footer meta */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: `1px solid ${C.cardBorder}`,
          paddingTop: '1rem',
          marginTop: 'auto',
        }}
      >
        <span style={{ fontSize: '0.75rem', color: C.muted, fontFamily: 'var(--font-dm-mono)', letterSpacing: '0.04em' }}>
          {article.date} · {article.readTime}
        </span>
        <span style={{ color: C.gold, fontSize: '0.8125rem', fontFamily: 'var(--font-dm-mono)', letterSpacing: '0.04em' }}>
          Read Article →
        </span>
      </div>
    </a>
  );
}
