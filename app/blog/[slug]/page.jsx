import { notFound } from 'next/navigation';
import { ARTICLES } from '../../../lib/articles';

export async function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: `${article.title} | FinancePro Blog`,
    description: article.metaDescription,
    alternates: { canonical: `https://financepro.io/blog/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      url: `https://financepro.io/blog/${article.slug}`,
      type: 'article',
    },
  };
}

// ── Shared style tokens ───────────────────────────────────────────────────────
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

const prose = {
  h2: {
    fontFamily: 'var(--font-cormorant)',
    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
    fontWeight: 600,
    color: C.gold,
    margin: '2.5rem 0 0.875rem',
    lineHeight: 1.2,
  },
  h3: {
    fontFamily: 'var(--font-cormorant)',
    fontSize: '1.25rem',
    fontWeight: 600,
    color: C.white,
    margin: '1.75rem 0 0.5rem',
  },
  p: { color: C.sub, lineHeight: 1.85, fontSize: '0.9375rem', marginBottom: '1.1rem' },
  ul: { color: C.sub, lineHeight: 1.85, fontSize: '0.9375rem', paddingLeft: '1.5rem', marginBottom: '1.1rem' },
  li: { marginBottom: '0.35rem' },
  strong: { color: C.white },
  code: {
    background: C.goldDim,
    border: `1px solid ${C.goldBorder}`,
    borderRadius: '4px',
    padding: '0.15em 0.5em',
    fontFamily: 'var(--font-dm-mono)',
    fontSize: '0.875em',
    color: C.gold,
  },
  callout: {
    background: C.goldDim,
    border: `1px solid ${C.goldBorder}`,
    borderRadius: '10px',
    padding: '1.25rem 1.5rem',
    marginBottom: '1.5rem',
    color: C.white,
    lineHeight: 1.7,
    fontSize: '0.9375rem',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '1.5rem',
    fontSize: '0.875rem',
    fontFamily: 'var(--font-dm-mono)',
  },
  th: {
    background: C.goldDim,
    color: C.gold,
    padding: '0.6rem 1rem',
    textAlign: 'left',
    border: `1px solid ${C.goldBorder}`,
    letterSpacing: '0.05em',
    fontSize: '0.75rem',
  },
  td: {
    color: C.sub,
    padding: '0.6rem 1rem',
    border: `1px solid ${C.cardBorder}`,
    verticalAlign: 'top',
  },
};

// ── Article content components ─────────────────────────────────────────────────

function ArticleLoanEMI() {
  return (
    <>
      <p style={prose.p}>
        If you've ever applied for a loan, you've seen the term <strong style={prose.strong}>EMI</strong> — Equated Monthly
        Instalment. It's the fixed amount you pay your lender every month until the loan is fully repaid.
        Understanding how EMI is calculated puts you in control: you can compare offers, spot hidden costs,
        and choose the loan that actually fits your budget.
      </p>

      <h2 style={prose.h2}>What Exactly Is EMI?</h2>
      <p style={prose.p}>
        EMI combines a <strong style={prose.strong}>principal repayment</strong> component and an{' '}
        <strong style={prose.strong}>interest</strong> component in a single monthly payment. In the early months,
        most of your payment goes toward interest. Over time, the balance shifts — more goes toward principal
        and less to interest. This is called a <em>reducing-balance</em> (or amortising) loan.
      </p>

      <h2 style={prose.h2}>The EMI Formula</h2>
      <p style={prose.p}>The standard formula used by virtually every bank and lender worldwide is:</p>
      <div style={prose.callout}>
        <strong>EMI = P × R × (1 + R)ⁿ ÷ [(1 + R)ⁿ − 1]</strong>
        <ul style={{ ...prose.ul, marginBottom: 0, marginTop: '0.75rem' }}>
          <li><strong style={prose.strong}>P</strong> = Principal loan amount</li>
          <li><strong style={prose.strong}>R</strong> = Monthly interest rate (annual rate ÷ 12 ÷ 100)</li>
          <li><strong style={prose.strong}>n</strong> = Total number of monthly payments (years × 12)</li>
        </ul>
      </div>

      <h2 style={prose.h2}>Worked Example</h2>
      <p style={prose.p}>
        Say you borrow <strong style={prose.strong}>$20,000</strong> at an annual interest rate of{' '}
        <strong style={prose.strong}>9%</strong> for <strong style={prose.strong}>3 years</strong> (36 months):
      </p>
      <ul style={prose.ul}>
        <li style={prose.li}>P = $20,000</li>
        <li style={prose.li}>R = 9% ÷ 12 ÷ 100 = 0.0075</li>
        <li style={prose.li}>n = 36</li>
        <li style={prose.li}><strong style={prose.strong}>EMI ≈ $636/month</strong></li>
        <li style={prose.li}>Total payment = $636 × 36 = $22,888</li>
        <li style={prose.li}>Total interest = $22,888 − $20,000 = <strong style={prose.strong}>$2,888</strong></li>
      </ul>

      <h2 style={prose.h2}>Key Factors That Change Your EMI</h2>
      <table style={prose.table}>
        <thead>
          <tr>
            <th style={prose.th}>Factor</th>
            <th style={prose.th}>Effect on EMI</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['Higher loan amount', 'EMI increases proportionally'],
            ['Higher interest rate', 'EMI increases — and total interest rises sharply'],
            ['Longer tenure', 'EMI drops but total interest paid increases'],
            ['Larger down payment', 'Reduces principal → lower EMI'],
          ].map(([factor, effect]) => (
            <tr key={factor}>
              <td style={prose.td}>{factor}</td>
              <td style={prose.td}>{effect}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 style={prose.h2}>5 Ways to Reduce Your EMI</h2>
      <ul style={prose.ul}>
        <li style={prose.li}><strong style={prose.strong}>Negotiate a lower interest rate</strong> — even 0.5% less saves hundreds over the loan life.</li>
        <li style={prose.li}><strong style={prose.strong}>Make a larger down payment</strong> — reduces the principal you borrow.</li>
        <li style={prose.li}><strong style={prose.strong}>Choose a shorter tenure cautiously</strong> — higher EMI but far less total interest paid.</li>
        <li style={prose.li}><strong style={prose.strong}>Prepay when possible</strong> — extra payments reduce principal directly, saving future interest.</li>
        <li style={prose.li}><strong style={prose.strong}>Improve your credit score</strong> — a higher score unlocks better rates from lenders.</li>
      </ul>

      <h2 style={prose.h2}>Common Mistakes to Avoid</h2>
      <p style={prose.p}>
        Many borrowers focus only on the monthly EMI without looking at the{' '}
        <strong style={prose.strong}>total cost of the loan</strong>. A longer tenure feels affordable month-to-month,
        but you could end up paying 40–60% more than you borrowed once interest is totalled. Always compare
        loans using total repayment, not just EMI.
      </p>
      <p style={prose.p}>
        Also watch for processing fees, prepayment penalties, and insurance add-ons that lenders bundle in —
        these are not captured by the EMI formula above but significantly affect the true cost.
      </p>
    </>
  );
}

function ArticleTaxBrackets() {
  const singleBrackets = [
    ['10%', '$0 – $11,600',       '$0 – $1,160'],
    ['12%', '$11,601 – $47,150',  '$1,160 – $5,426'],
    ['22%', '$47,151 – $100,525', '$5,426 – $17,169'],
    ['24%', '$100,526 – $191,950','$17,169 – $39,097'],
    ['32%', '$191,951 – $243,725','$39,097 – $55,672'],
    ['35%', '$243,726 – $609,350','$55,672 – $183,647'],
    ['37%', '$609,351+',          '$183,647+'],
  ];

  return (
    <>
      <p style={prose.p}>
        Every year millions of Americans file their taxes without truly understanding how their bill is
        calculated. The most common misconception: "I got a raise and now I'm in a higher bracket — I'll
        take home less money." This is a myth. Here's how the US tax system actually works.
      </p>

      <h2 style={prose.h2}>How the Progressive Tax System Works</h2>
      <p style={prose.p}>
        The US federal income tax is <strong style={prose.strong}>progressive</strong>: only the income within
        each bracket is taxed at that bracket's rate. Moving into a higher bracket never reduces your
        take-home pay — it only means the additional dollars above the threshold are taxed at a higher rate.
      </p>
      <div style={prose.callout}>
        <strong>Example:</strong> If you earn $50,000 as a single filer in 2024, you do NOT pay 22% on the
        full $50,000. You pay 10% on the first $11,600, 12% on the next $35,550, and 22% only on the
        remaining $2,850. Your total tax is roughly $6,617 — an <strong>effective rate of 13.2%</strong>.
      </div>

      <h2 style={prose.h2}>2024 Tax Brackets — Single Filers</h2>
      <table style={prose.table}>
        <thead>
          <tr>
            <th style={prose.th}>Rate</th>
            <th style={prose.th}>Taxable Income</th>
            <th style={prose.th}>Tax on This Bracket</th>
          </tr>
        </thead>
        <tbody>
          {singleBrackets.map(([rate, income, tax]) => (
            <tr key={rate + income}>
              <td style={{ ...prose.td, color: C.gold, fontWeight: 600 }}>{rate}</td>
              <td style={prose.td}>{income}</td>
              <td style={prose.td}>{tax}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 style={prose.h2}>Married Filing Jointly: Doubled Thresholds</h2>
      <p style={prose.p}>
        For most brackets, Married Filing Jointly (MFJ) thresholds are exactly double the single thresholds —
        this eliminates the so-called "marriage penalty" for couples whose incomes are similar. For 2024,
        the 10% bracket extends to $23,200 and the 12% bracket to $94,300 for MFJ filers.
      </p>

      <h2 style={prose.h2}>Marginal Rate vs Effective Rate</h2>
      <p style={prose.p}>
        These two terms cause more confusion than almost anything else in tax:
      </p>
      <ul style={prose.ul}>
        <li style={prose.li}>
          <strong style={prose.strong}>Marginal rate</strong> — the rate applied to your last dollar of income.
          If you earn $105,000 as a single filer, your marginal rate is 24%. This is the rate you hear
          quoted in the news.
        </li>
        <li style={prose.li}>
          <strong style={prose.strong}>Effective rate</strong> — your total tax divided by total income.
          On $105,000 (single, 2024) the effective rate is roughly 18% — significantly less than the
          marginal 24%.
        </li>
      </ul>
      <p style={prose.p}>
        When planning finances — like whether to take on freelance work or realise a capital gain —
        it's the <strong style={prose.strong}>marginal rate</strong> that matters, since that's the rate
        the extra income will be taxed at.
      </p>

      <h2 style={prose.h2}>Step-by-Step: Calculating Your 2024 Tax Bill</h2>
      <p style={prose.p}>For a single filer earning <strong style={prose.strong}>$80,000</strong>:</p>
      <ul style={prose.ul}>
        <li style={prose.li}>10% on $0–$11,600 = <strong style={prose.strong}>$1,160</strong></li>
        <li style={prose.li}>12% on $11,601–$47,150 ($35,550) = <strong style={prose.strong}>$4,266</strong></li>
        <li style={prose.li}>22% on $47,151–$80,000 ($32,850) = <strong style={prose.strong}>$7,227</strong></li>
        <li style={prose.li}><strong style={prose.strong}>Total federal tax ≈ $12,653</strong></li>
        <li style={prose.li}>Effective rate = 12,653 ÷ 80,000 = <strong style={prose.strong}>15.8%</strong></li>
        <li style={prose.li}>Marginal rate = <strong style={prose.strong}>22%</strong></li>
      </ul>

      <h2 style={prose.h2}>What's Not Included</h2>
      <p style={prose.p}>
        These brackets apply to <strong style={prose.strong}>federal income tax only</strong>. Your total tax
        burden will also include FICA (Social Security 6.2% + Medicare 1.45%), applicable state income tax
        (0% in states like Florida and Texas, up to 13.3% in California), and any local taxes.
        Standard deductions ($14,600 single / $29,200 MFJ for 2024) also reduce your taxable income
        before brackets are applied.
      </p>
    </>
  );
}

function ArticleCompoundInterest() {
  return (
    <>
      <p style={prose.p}>
        Albert Einstein is often — if apocryphally — credited with calling compound interest{' '}
        <em>"the eighth wonder of the world."</em> Whether or not he said it, the math is undeniably
        powerful. The difference between starting to invest at 25 versus 35 can easily amount to hundreds
        of thousands of dollars by retirement, even with the exact same monthly contributions.
      </p>

      <h2 style={prose.h2}>Simple Interest vs Compound Interest</h2>
      <p style={prose.p}>
        With <strong style={prose.strong}>simple interest</strong>, you earn interest only on your original
        principal. Deposit $10,000 at 7% simple interest and after 20 years you have $24,000 — your
        $10,000 plus $14,000 in interest ($700/year × 20).
      </p>
      <p style={prose.p}>
        With <strong style={prose.strong}>compound interest</strong>, you earn interest on your principal{' '}
        <em>and</em> on previously earned interest. The same $10,000 at 7% compounded annually grows to
        over <strong style={prose.strong}>$38,696</strong> — more than $14,000 extra compared to simple
        interest, earned purely by letting interest compound.
      </p>

      <h2 style={prose.h2}>The Compound Interest Formula</h2>
      <div style={prose.callout}>
        <strong>A = P × (1 + r/n)^(n×t)</strong>
        <ul style={{ ...prose.ul, marginBottom: 0, marginTop: '0.75rem' }}>
          <li><strong style={prose.strong}>A</strong> = Final amount</li>
          <li><strong style={prose.strong}>P</strong> = Principal (initial deposit)</li>
          <li><strong style={prose.strong}>r</strong> = Annual interest rate (decimal)</li>
          <li><strong style={prose.strong}>n</strong> = Compounding periods per year (12 = monthly)</li>
          <li><strong style={prose.strong}>t</strong> = Time in years</li>
        </ul>
      </div>
      <p style={prose.p}>
        Monthly compounding (<code style={prose.code}>n = 12</code>) produces slightly more than annual
        compounding because interest is added to the principal 12 times per year instead of once.
        Daily compounding (<code style={prose.code}>n = 365</code>) is marginally better still.
      </p>

      <h2 style={prose.h2}>The Rule of 72</h2>
      <p style={prose.p}>
        A quick mental-maths trick: divide <strong style={prose.strong}>72 by your annual return rate</strong> to
        find roughly how many years it takes to double your money.
      </p>
      <ul style={prose.ul}>
        <li style={prose.li}>At 6%: 72 ÷ 6 = <strong style={prose.strong}>12 years</strong> to double</li>
        <li style={prose.li}>At 8%: 72 ÷ 8 = <strong style={prose.strong}>9 years</strong></li>
        <li style={prose.li}>At 10%: 72 ÷ 10 = <strong style={prose.strong}>7.2 years</strong></li>
      </ul>

      <h2 style={prose.h2}>Why Starting Early Matters So Much</h2>
      <p style={prose.p}>
        Consider two investors, both contributing <strong style={prose.strong}>$300/month</strong> at a{' '}
        <strong style={prose.strong}>7% annual return</strong>:
      </p>
      <table style={prose.table}>
        <thead>
          <tr>
            <th style={prose.th}>Investor</th>
            <th style={prose.th}>Starts at</th>
            <th style={prose.th}>Retires at</th>
            <th style={prose.th}>Years investing</th>
            <th style={prose.th}>Final balance</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['Alex', '25', '65', '40', '$798,000'],
            ['Jamie', '35', '65', '30', '$368,000'],
          ].map(([name, start, retire, years, balance]) => (
            <tr key={name}>
              <td style={{ ...prose.td, color: C.white }}>{name}</td>
              <td style={prose.td}>{start}</td>
              <td style={prose.td}>{retire}</td>
              <td style={prose.td}>{years}</td>
              <td style={{ ...prose.td, color: C.gold, fontWeight: 600 }}>{balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p style={prose.p}>
        Alex ends up with <strong style={prose.strong}>$430,000 more</strong> — not because they contributed
        more per month, but because they gave their money an extra 10 years to compound. That decade of
        extra compounding accounts for 54% of Alex's final balance.
      </p>

      <h2 style={prose.h2}>The Impact of Monthly Contributions</h2>
      <p style={prose.p}>
        Adding a consistent monthly contribution dramatically accelerates growth, especially over long
        periods. Even a small amount — $100/month — invested over 30 years at 7% grows to over{' '}
        <strong style={prose.strong}>$121,000</strong> from just $36,000 in actual contributions.
        The remaining $85,000 is pure compound growth.
      </p>

      <h2 style={prose.h2}>Compounding Works Against You Too</h2>
      <p style={prose.p}>
        The same mathematics that builds wealth through investing works in reverse on debt. Credit card
        balances compounding at 20%+ APR can double in under four years. The Rule of 72 applies equally:
        72 ÷ 20 = 3.6 years to double unpaid debt. This is why paying down high-interest debt delivers
        a guaranteed return equivalent to the interest rate — often better than most investments.
      </p>

      <h2 style={prose.h2}>Key Takeaways</h2>
      <ul style={prose.ul}>
        <li style={prose.li}><strong style={prose.strong}>Start as early as possible</strong> — time in market beats timing the market.</li>
        <li style={prose.li}><strong style={prose.strong}>Reinvest all returns</strong> — compound interest only works if you don't withdraw earnings.</li>
        <li style={prose.li}><strong style={prose.strong}>Increase contributions over time</strong> — even small annual raises in contribution make a huge difference.</li>
        <li style={prose.li}><strong style={prose.strong}>Higher frequency compounding helps</strong> — prefer monthly over annual where possible.</li>
        <li style={prose.li}><strong style={prose.strong}>Avoid high-interest debt</strong> — compound interest working against you is just as powerful.</li>
      </ul>
    </>
  );
}

const ARTICLE_CONTENT = {
  'how-to-calculate-loan-emi': ArticleLoanEMI,
  'us-tax-brackets-2024-explained': ArticleTaxBrackets,
  'power-of-compound-interest': ArticleCompoundInterest,
};

const CATEGORY_COLORS = {
  Loans:     { bg: 'rgba(201,168,76,0.12)', border: 'rgba(201,168,76,0.3)',  text: '#c9a84c' },
  Tax:       { bg: 'rgba(80,160,220,0.1)',  border: 'rgba(80,160,220,0.3)', text: '#60aadd' },
  Investing: { bg: 'rgba(80,200,140,0.1)',  border: 'rgba(80,200,140,0.3)', text: '#55cc88' },
};

const CALC_LINKS = {
  'how-to-calculate-loan-emi':       { label: 'Try the free Loan EMI Calculator →', href: '/calculators' },
  'us-tax-brackets-2024-explained':  { label: 'Try the free Tax Bracket Calculator →', href: '/calculators' },
  'power-of-compound-interest':      { label: 'Try the free Compound Interest Calculator →', href: '/calculators' },
};

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) notFound();

  const ArticleContent = ARTICLE_CONTENT[article.slug];
  const cat = CATEGORY_COLORS[article.category] || CATEGORY_COLORS.Loans;
  const calcLink = CALC_LINKS[article.slug];

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
        <a href="/" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.5rem', fontWeight: 600, color: C.gold, textDecoration: 'none' }}>
          FinancePro
        </a>
        <a href="/blog" style={{ color: C.sub, fontSize: '0.8125rem', fontFamily: 'var(--font-dm-mono)', textDecoration: 'none', letterSpacing: '0.04em' }}>
          ← All Articles
        </a>
      </header>

      {/* Article header */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          padding: '4rem 24px 3rem',
          borderBottom: `1px solid ${C.cardBorder}`,
          textAlign: 'center',
        }}
      >
        <div
          aria-hidden
          style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201,168,76,0.06) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ position: 'relative', maxWidth: '720px', margin: '0 auto' }}>
          <span
            style={{
              display: 'inline-block',
              background: cat.bg,
              border: `1px solid ${cat.border}`,
              color: cat.text,
              fontSize: '0.6875rem',
              fontFamily: 'var(--font-dm-mono)',
              letterSpacing: '0.1em',
              padding: '0.2rem 0.7rem',
              borderRadius: '20px',
              marginBottom: '1.25rem',
            }}
          >
            {article.category.toUpperCase()}
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
              fontWeight: 600,
              color: C.white,
              lineHeight: 1.15,
              marginBottom: '1.25rem',
            }}
          >
            {article.title}
          </h1>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', color: C.muted, fontSize: '0.8125rem', fontFamily: 'var(--font-dm-mono)' }}>
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </div>

      {/* Article body */}
      <main style={{ maxWidth: '720px', margin: '0 auto', padding: '3rem 24px 2rem' }}>
        <ArticleContent />

        {/* Calculator CTA */}
        <div
          style={{
            marginTop: '3rem',
            padding: '1.5rem 2rem',
            background: C.goldDim,
            border: `1px solid ${C.goldBorder}`,
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <span style={{ color: C.sub, fontSize: '0.9375rem' }}>Put these numbers to work instantly.</span>
          <a
            href={calcLink.href}
            style={{
              color: C.gold,
              fontFamily: 'var(--font-dm-mono)',
              fontSize: '0.875rem',
              fontWeight: 700,
              textDecoration: 'none',
              letterSpacing: '0.04em',
              whiteSpace: 'nowrap',
            }}
          >
            {calcLink.label}
          </a>
        </div>
      </main>

      {/* Related articles */}
      <section style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px 4rem' }}>
        <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.5rem', color: C.gold, marginBottom: '1.25rem' }}>
          More Articles
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {ARTICLES.filter((a) => a.slug !== article.slug).map((a) => (
            <a
              key={a.slug}
              href={`/blog/${a.slug}`}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem 1.25rem',
                background: C.cardBg,
                border: `1px solid ${C.cardBorder}`,
                borderRadius: '8px',
                textDecoration: 'none',
                gap: '1rem',
              }}
            >
              <span style={{ color: C.white, fontSize: '0.9375rem', lineHeight: 1.4 }}>{a.title}</span>
              <span style={{ color: C.gold, fontFamily: 'var(--font-dm-mono)', fontSize: '0.8125rem', whiteSpace: 'nowrap' }}>Read →</span>
            </a>
          ))}
        </div>
      </section>

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
          {[['Home','/'],['Blog','/blog'],['Calculators','/calculators'],['Privacy','/privacy'],['Terms','/terms'],['About','/about']].map(([l,h]) => (
            <a key={l} href={h} style={{ color: C.muted, textDecoration: 'none' }}>{l}</a>
          ))}
        </div>
        © {new Date().getFullYear()} FinancePro — Free Finance Tools
      </footer>
    </div>
  );
}
