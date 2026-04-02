'use client';

import { useState } from 'react';

// ── Brand tokens ─────────────────────────────────────────────────────────────
const C = {
  bg: '#080d16',
  gold: '#c9a84c',
  goldDim: 'rgba(201,168,76,0.12)',
  goldBorder: 'rgba(201,168,76,0.25)',
  goldHover: 'rgba(201,168,76,0.35)',
  cardBg: 'rgba(255,255,255,0.025)',
  cardBorder: 'rgba(255,255,255,0.07)',
  muted: '#556677',
  sub: '#8899aa',
  white: '#f0f4f8',
};

// ── AdSense placeholder ───────────────────────────────────────────────────────
function AdSlot({ width = 728, height = 90, label }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '0 auto', padding: '0 24px' }}>
      <div
        style={{
          width: '100%',
          maxWidth: `${width}px`,
          height: `${height}px`,
          border: `1px dashed ${C.goldBorder}`,
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(201,168,76,0.02)',
        }}
      >
        <span style={{ fontSize: '0.6rem', color: '#2a3a4a', letterSpacing: '0.12em', fontFamily: 'var(--font-dm-mono)' }}>
          {label || `ADSENSE ${width}×${height}`}
        </span>
      </div>
    </div>
  );
}

// ── Sticky Nav ────────────────────────────────────────────────────────────────
function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ['Blog', 'Calculators', 'How It Works', 'FAQ'];

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(8,13,22,0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${C.cardBorder}`,
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 24px',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a
          href="/"
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: '1.625rem',
            fontWeight: 600,
            color: C.gold,
            textDecoration: 'none',
            letterSpacing: '0.02em',
          }}
        >
          Finance<span style={{ color: C.white }}>Pro</span>
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {links.map((l) => (
            <a
              key={l}
              href={l === 'Calculators' ? '/calculators' : l === 'Blog' ? '/blog' : `#${l.toLowerCase().replace(/ /g, '-')}`}
              style={{
                color: C.sub,
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontFamily: 'var(--font-dm-mono)',
                letterSpacing: '0.04em',
                transition: 'color 0.15s',
              }}
              onMouseEnter={(e) => (e.target.style.color = C.gold)}
              onMouseLeave={(e) => (e.target.style.color = C.sub)}
            >
              {l}
            </a>
          ))}
          <a
            href="/calculators"
            style={{
              background: C.gold,
              color: C.bg,
              padding: '0.45rem 1.25rem',
              borderRadius: '4px',
              fontWeight: 700,
              fontFamily: 'var(--font-dm-mono)',
              fontSize: '0.8125rem',
              letterSpacing: '0.05em',
              textDecoration: 'none',
            }}
          >
            OPEN CALCULATOR →
          </a>
        </div>
      </div>
    </nav>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: '100px 24px 80px',
        textAlign: 'center',
      }}
    >
      {/* Radial glow */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', maxWidth: '780px', margin: '0 auto' }}>
        <div
          style={{
            display: 'inline-block',
            background: C.goldDim,
            border: `1px solid ${C.goldBorder}`,
            borderRadius: '20px',
            padding: '0.3rem 1rem',
            marginBottom: '1.5rem',
            fontSize: '0.75rem',
            color: C.gold,
            fontFamily: 'var(--font-dm-mono)',
            letterSpacing: '0.1em',
          }}
        >
          FREE · NO SIGNUP · INSTANT RESULTS
        </div>

        <h1
          className="hero-headline"
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(2.75rem, 7vw, 5.5rem)',
            fontWeight: 600,
            lineHeight: 1.05,
            marginBottom: '1.5rem',
            color: C.white,
          }}
        >
          Every Finance Calculator<br />
          <span style={{ color: C.gold }}>You'll Ever Need</span>
        </h1>

        <p
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: C.sub,
            maxWidth: '520px',
            margin: '0 auto 2.5rem',
            lineHeight: 1.7,
          }}
        >
          Loan EMI, Mortgage, Compound Interest, US Tax Brackets, Currency Converter and more — all in one place, completely free.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="/calculators"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: C.gold,
              color: C.bg,
              padding: '0.8rem 2rem',
              borderRadius: '6px',
              fontWeight: 700,
              fontFamily: 'var(--font-dm-mono)',
              fontSize: '0.875rem',
              letterSpacing: '0.06em',
              textDecoration: 'none',
            }}
          >
            START CALCULATING →
          </a>
          <a
            href="#how-it-works"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '0.8rem 2rem',
              borderRadius: '6px',
              border: `1px solid ${C.goldBorder}`,
              color: C.gold,
              fontFamily: 'var(--font-dm-mono)',
              fontSize: '0.875rem',
              letterSpacing: '0.06em',
              textDecoration: 'none',
            }}
          >
            HOW IT WORKS
          </a>
        </div>
      </div>
    </section>
  );
}

// ── Stats Bar ─────────────────────────────────────────────────────────────────
function StatsBar() {
  const stats = [
    { value: '8+', label: 'Free Calculators' },
    { value: '0', label: 'Sign-ups Required' },
    { value: '100%', label: 'Browser-based' },
    { value: 'US/UK/CA', label: 'Supported Regions' },
  ];

  return (
    <div
      style={{
        borderTop: `1px solid ${C.cardBorder}`,
        borderBottom: `1px solid ${C.cardBorder}`,
        background: C.cardBg,
        padding: '1.5rem 24px',
        margin: '0',
      }}
    >
      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1rem',
          textAlign: 'center',
        }}
      >
        {stats.map(({ value, label }) => (
          <div key={label}>
            <div
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: '2rem',
                fontWeight: 600,
                color: C.gold,
                lineHeight: 1,
              }}
            >
              {value}
            </div>
            <div style={{ fontSize: '0.75rem', color: C.muted, marginTop: '0.25rem', fontFamily: 'var(--font-dm-mono)', letterSpacing: '0.05em' }}>
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Calculator Grid ────────────────────────────────────────────────────────────
const TOOLS = [
  {
    name: 'Loan EMI',
    desc: 'Calculate monthly instalment on any loan — personal, auto, or student.',
    tag: 'Popular',
  },
  {
    name: 'Mortgage',
    desc: 'Plan your home loan repayment schedule with full amortisation breakdown.',
    tag: 'Popular',
  },
  {
    name: 'Compound Interest',
    desc: 'See how your savings or investments grow with compounding over time.',
    tag: null,
  },
  {
    name: 'Tax Bracket 2024',
    desc: 'Estimate US federal income tax liability and your effective tax rate.',
    tag: 'US',
  },
  {
    name: 'Currency Converter',
    desc: 'Convert between USD, GBP, EUR, and CAD with indicative exchange rates.',
    tag: null,
  },
  {
    name: 'Savings Goal Planner',
    desc: 'Find the monthly contribution needed to reach any savings target on time.',
    tag: null,
  },
  {
    name: 'Retirement Calculator',
    desc: 'Project your retirement balance and monthly income using the 4% rule.',
    tag: null,
  },
  {
    name: 'Net Worth Calculator',
    desc: 'Track total assets vs liabilities and visualise your financial position.',
    tag: null,
  },
];

function CalculatorGrid() {
  return (
    <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '72px 24px 48px' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 600,
            color: C.white,
            marginBottom: '0.75rem',
          }}
        >
          8 Powerful <span style={{ color: C.gold }}>Finance Tools</span>
        </h2>
        <p style={{ color: C.sub, maxWidth: '500px', margin: '0 auto', lineHeight: 1.6 }}>
          Everything from daily budgeting to long-term investment planning.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '1rem',
        }}
      >
        {TOOLS.map(({ name, desc, tag }) => (
          <a
            key={name}
            href="/calculators"
            style={{
              display: 'block',
              background: C.cardBg,
              border: `1px solid ${C.cardBorder}`,
              borderRadius: '12px',
              padding: '1.5rem',
              textDecoration: 'none',
              transition: 'border-color 0.2s, background 0.2s',
              position: 'relative',
              overflow: 'hidden',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = C.goldBorder;
              e.currentTarget.style.background = C.goldDim;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = C.cardBorder;
              e.currentTarget.style.background = C.cardBg;
            }}
          >
            {tag && (
              <span
                style={{
                  position: 'absolute',
                  top: '0.75rem',
                  right: '0.75rem',
                  background: C.goldDim,
                  border: `1px solid ${C.goldBorder}`,
                  color: C.gold,
                  fontSize: '0.6rem',
                  padding: '0.15rem 0.5rem',
                  borderRadius: '10px',
                  fontFamily: 'var(--font-dm-mono)',
                  letterSpacing: '0.08em',
                }}
              >
                {tag}
              </span>
            )}
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: C.goldDim,
                border: `1px solid ${C.goldBorder}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
                fontSize: '1rem',
              }}
            >
              💰
            </div>
            <div style={{ color: C.gold, fontWeight: 600, marginBottom: '0.5rem', fontSize: '1rem' }}>{name}</div>
            <div style={{ color: C.muted, fontSize: '0.85rem', lineHeight: 1.55 }}>{desc}</div>
          </a>
        ))}
      </div>
    </section>
  );
}

// ── How It Works ──────────────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    { n: '01', title: 'Choose a Calculator', body: 'Pick from 8 tools covering every personal finance scenario — loan repayment, tax, investments and more.' },
    { n: '02', title: 'Enter Your Numbers', body: 'Fill in the simple form fields. All inputs are clearly labelled with examples so you never guess.' },
    { n: '03', title: 'Get Instant Results', body: 'See your results immediately — no ads blocking the output, no loading spinners, no email required.' },
  ];

  return (
    <section id="how-it-works" style={{ padding: '72px 24px', background: 'rgba(201,168,76,0.025)', borderTop: `1px solid ${C.cardBorder}`, borderBottom: `1px solid ${C.cardBorder}` }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 600,
              color: C.white,
              marginBottom: '0.75rem',
            }}
          >
            Simple as <span style={{ color: C.gold }}>1 — 2 — 3</span>
          </h2>
          <p style={{ color: C.sub, maxWidth: '440px', margin: '0 auto' }}>
            No tutorials needed. Results in seconds.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {steps.map(({ n, title, body }) => (
            <div
              key={n}
              style={{
                background: C.cardBg,
                border: `1px solid ${C.cardBorder}`,
                borderRadius: '12px',
                padding: '2rem',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-dm-mono)',
                  fontSize: '2.5rem',
                  color: C.goldBorder,
                  lineHeight: 1,
                  marginBottom: '1rem',
                }}
              >
                {n}
              </div>
              <h3 style={{ color: C.gold, fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.6rem' }}>{title}</h3>
              <p style={{ color: C.sub, fontSize: '0.9rem', lineHeight: 1.65 }}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── SEO Content Block ─────────────────────────────────────────────────────────
function SeoContent() {
  const sections = [
    {
      title: 'Loan & EMI Calculator',
      body: 'Our loan EMI calculator uses the standard reducing-balance formula to show exactly what you owe each month. Enter your loan amount, interest rate, and tenure to see your monthly instalment, total repayment amount, and total interest charged. Works for personal loans, auto loans, student loans, and more.',
    },
    {
      title: 'Mortgage Repayment Calculator',
      body: 'Planning a home purchase? Our mortgage calculator breaks down your monthly payment into principal and interest, shows a full amortisation schedule, and compares the effect of different down payment sizes. Supports 15-year and 30-year fixed-rate terms used in the US, UK, and Canada.',
    },
    {
      title: 'Compound Interest Calculator',
      body: 'Albert Einstein reportedly called compound interest the eighth wonder of the world. Use our tool to see how savings or investments grow exponentially over time. Adjust compounding frequency (daily, monthly, quarterly, annually) and compare growth curves across different interest rates.',
    },
    {
      title: 'US Tax Bracket Calculator 2024',
      body: 'The United States federal income tax is a progressive system with seven brackets ranging from 10% to 37% for 2024. Our calculator takes your gross income and tells you your total estimated federal tax, effective rate, and marginal rate — helping you understand which bracket you fall in.',
    },
  ];

  return (
    <section style={{ maxWidth: '960px', margin: '0 auto', padding: '72px 24px' }}>
      <h2
        style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
          fontWeight: 600,
          color: C.white,
          marginBottom: '2.5rem',
          textAlign: 'center',
        }}
      >
        About Our <span style={{ color: C.gold }}>Finance Calculators</span>
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {sections.map(({ title, body }) => (
          <div key={title}>
            <h3 style={{ color: C.gold, fontSize: '1.0625rem', fontWeight: 600, marginBottom: '0.6rem', fontFamily: 'var(--font-cormorant)', fontSize: '1.25rem' }}>
              {title}
            </h3>
            <p style={{ color: C.sub, fontSize: '0.9rem', lineHeight: 1.75 }}>{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── FAQ Accordion ─────────────────────────────────────────────────────────────
const FAQS = [
  { q: 'Are all the calculators completely free?', a: 'Yes — every tool on FinancePro is 100% free with no premium tier, no trial period, and no account required. The site is supported by non-intrusive display advertising.' },
  { q: 'How accurate are the calculations?', a: "Results are based on standard financial formulas used by banks and financial institutions worldwide. For mortgage and loan calculations we use the standard reducing-balance (amortisation) formula. Tax estimates follow IRS 2024 published brackets. Results are indicative — always confirm with your lender or tax adviser before making financial decisions." },
  { q: 'Do you store my data?', a: 'No data is ever sent to our servers. All calculations run entirely in your browser using JavaScript. When you close the tab, the numbers are gone.' },
  { q: 'Which countries are supported?', a: 'Our tools are built for a global audience with a focus on the US, UK, and Canada. The Tax Bracket calculator uses 2024 US federal rates. Mortgage and loan calculators work with any currency. The Currency Converter supports USD, GBP, EUR, and CAD.' },
  { q: 'Can I use these on mobile?', a: "Absolutely. FinancePro is fully responsive and optimised for all screen sizes — from mobile phones to desktop monitors. No app download required." },
  { q: 'How do I calculate compound interest monthly vs. annually?', a: 'In our Compound Interest calculator, set "Compounding Frequency" to 12 for monthly or 1 for annual. Monthly compounding yields a slightly higher return because interest is added to the principal 12 times per year rather than once.' },
];

function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" style={{ maxWidth: '760px', margin: '0 auto', padding: '72px 24px 80px' }}>
      <h2
        style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 600,
          color: C.white,
          marginBottom: '2.5rem',
          textAlign: 'center',
        }}
      >
        Frequently Asked <span style={{ color: C.gold }}>Questions</span>
      </h2>

      <div>
        {FAQS.map(({ q, a }, i) => (
          <div
            key={i}
            style={{
              borderBottom: `1px solid ${C.cardBorder}`,
            }}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                width: '100%',
                background: 'none',
                border: 'none',
                padding: '1.25rem 0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer',
                textAlign: 'left',
                gap: '1rem',
              }}
            >
              <span style={{ color: open === i ? C.gold : C.white, fontSize: '1rem', fontWeight: 500, lineHeight: 1.4, transition: 'color 0.15s' }}>
                {q}
              </span>
              <span
                style={{
                  color: C.gold,
                  fontSize: '1.25rem',
                  flexShrink: 0,
                  transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s',
                  fontFamily: 'var(--font-dm-mono)',
                }}
              >
                +
              </span>
            </button>
            {open === i && (
              <div style={{ padding: '0 0 1.25rem', color: C.sub, fontSize: '0.9375rem', lineHeight: 1.75 }}>
                {a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

// ── CTA Section ───────────────────────────────────────────────────────────────
function CTA() {
  return (
    <section
      style={{
        textAlign: 'center',
        padding: '72px 24px',
        borderTop: `1px solid ${C.cardBorder}`,
        background: 'radial-gradient(ellipse 60% 60% at 50% 100%, rgba(201,168,76,0.06) 0%, transparent 70%)',
      }}
    >
      <h2
        style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: 'clamp(2rem, 4vw, 3.25rem)',
          fontWeight: 600,
          color: C.white,
          marginBottom: '1rem',
        }}
      >
        Ready to <span style={{ color: C.gold }}>take control</span>?
      </h2>
      <p style={{ color: C.sub, maxWidth: '420px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
        Open the app and start calculating in seconds — no account, no install, no cost.
      </p>
      <a
        href="/calculators"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: C.gold,
          color: C.bg,
          padding: '0.9rem 2.5rem',
          borderRadius: '6px',
          fontWeight: 700,
          fontFamily: 'var(--font-dm-mono)',
          fontSize: '0.9rem',
          letterSpacing: '0.06em',
          textDecoration: 'none',
        }}
      >
        OPEN FREE CALCULATORS →
      </a>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer
      style={{
        borderTop: `1px solid ${C.cardBorder}`,
        padding: '2.5rem 24px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '1100px',
        margin: '0 auto',
      }}
    >
      <div>
        <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.25rem', color: C.gold, fontWeight: 600 }}>FinancePro</span>
        <span style={{ color: C.muted, fontSize: '0.8rem', marginLeft: '0.75rem', fontFamily: 'var(--font-dm-mono)' }}>
          © {new Date().getFullYear()} — Free Finance Tools
        </span>
      </div>
      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
        {[
          { label: 'Calculators', href: '/calculators' },
          { label: 'About',       href: '/about' },
          { label: 'Privacy',     href: '/privacy' },
          { label: 'Terms',       href: '/terms' },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            style={{
              color: C.muted,
              fontSize: '0.8125rem',
              textDecoration: 'none',
              fontFamily: 'var(--font-dm-mono)',
              letterSpacing: '0.04em',
              transition: 'color 0.15s',
            }}
            onMouseEnter={(e) => (e.target.style.color = C.gold)}
            onMouseLeave={(e) => (e.target.style.color = C.muted)}
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  );
}

// ── Page composition ──────────────────────────────────────────────────────────
export default function FinanceProLanding() {
  return (
    <div style={{ background: C.bg, minHeight: '100vh', color: C.white }}>
      <Nav />
      <Hero />
      <StatsBar />

      {/* Ad: below hero */}
      <div style={{ padding: '2.5rem 0' }}>
        <AdSlot width={728} height={90} />
      </div>

      <CalculatorGrid />
      <HowItWorks />

      {/* Ad: mid-page */}
      <div style={{ padding: '2.5rem 0' }}>
        <AdSlot width={336} height={280} />
      </div>

      <SeoContent />
      <FAQ />
      <CTA />

      {/* Ad: above footer */}
      <div style={{ padding: '2.5rem 0' }}>
        <AdSlot width={728} height={90} />
      </div>

      <Footer />
    </div>
  );
}
