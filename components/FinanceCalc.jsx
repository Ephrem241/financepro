'use client';

import { useState, useMemo } from 'react';

// ── Brand tokens ──────────────────────────────────────────────────────────────
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

// ── Formatters ────────────────────────────────────────────────────────────────
const fmtUSD = (v) => '$' + Math.round(v).toLocaleString('en-US');
const fmtPct = (v, d = 2) => v.toFixed(d) + '%';

// ── Shared Slider ─────────────────────────────────────────────────────────────
function Slider({ label, value, min, max, step = 1, format, onChange }) {
  return (
    <div style={{ marginBottom: '1.25rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
        <label style={{ fontSize: '0.8125rem', color: C.sub, fontFamily: 'var(--font-dm-mono)' }}>{label}</label>
        <span style={{ fontSize: '0.875rem', color: C.gold, fontFamily: 'var(--font-dm-mono)', fontWeight: 500 }}>
          {format(value)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ width: '100%' }}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.2rem' }}>
        <span style={{ fontSize: '0.65rem', color: C.muted, fontFamily: 'var(--font-dm-mono)' }}>{format(min)}</span>
        <span style={{ fontSize: '0.65rem', color: C.muted, fontFamily: 'var(--font-dm-mono)' }}>{format(max)}</span>
      </div>
    </div>
  );
}

// ── Shared Result Row ─────────────────────────────────────────────────────────
function ResultRow({ label, value, accent }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.55rem 0',
        borderBottom: '1px solid rgba(201,168,76,0.08)',
      }}
    >
      <span style={{ color: C.sub, fontSize: '0.875rem' }}>{label}</span>
      <span
        style={{
          color: accent ? C.gold : C.white,
          fontFamily: 'var(--font-dm-mono)',
          fontWeight: accent ? 700 : 500,
          fontSize: '0.9375rem',
        }}
      >
        {value}
      </span>
    </div>
  );
}

// ── Results Container ─────────────────────────────────────────────────────────
function Results({ children }) {
  return (
    <div
      style={{
        background: 'rgba(201,168,76,0.05)',
        border: '1px solid rgba(201,168,76,0.18)',
        borderRadius: '10px',
        padding: '0.75rem 1.25rem',
        marginTop: '1.5rem',
      }}
    >
      {children}
    </div>
  );
}

// ── Calculator Card ───────────────────────────────────────────────────────────
function CalcCard({ children }) {
  return (
    <div
      style={{
        background: C.cardBg,
        border: `1px solid ${C.cardBorder}`,
        borderRadius: '14px',
        padding: '1.75rem',
      }}
    >
      {children}
    </div>
  );
}

// ── Loan EMI ──────────────────────────────────────────────────────────────────
function LoanEMI() {
  const [principal, setPrincipal] = useState(25000);
  const [rate, setRate] = useState(8.5);
  const [months, setMonths] = useState(60);

  const { emi, totalPayment, totalInterest } = useMemo(() => {
    const P = principal;
    const R = rate / 100 / 12;
    const N = months;
    if (R === 0) return { emi: P / N, totalPayment: P, totalInterest: 0 };
    const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    return { emi, totalPayment: emi * N, totalInterest: emi * N - P };
  }, [principal, rate, months]);

  return (
    <CalcCard>
      <Slider label="Loan Amount" value={principal} min={1000} max={500000} step={1000} format={fmtUSD} onChange={setPrincipal} />
      <Slider label="Annual Interest Rate" value={rate} min={0.5} max={30} step={0.1} format={(v) => fmtPct(v, 1)} onChange={setRate} />
      <Slider label="Loan Term" value={months} min={6} max={360} step={6} format={(v) => `${v} months`} onChange={setMonths} />
      <Results>
        <ResultRow label="Monthly EMI" value={fmtUSD(emi)} accent />
        <ResultRow label="Total Payment" value={fmtUSD(totalPayment)} />
        <ResultRow label="Total Interest" value={fmtUSD(totalInterest)} />
        <ResultRow label="Interest % of Loan" value={fmtPct((totalInterest / principal) * 100)} />
      </Results>
    </CalcCard>
  );
}

// ── Mortgage ──────────────────────────────────────────────────────────────────
function Mortgage() {
  const [homePrice, setHomePrice] = useState(400000);
  const [downPct, setDownPct] = useState(20);
  const [rate, setRate] = useState(6.5);
  const [years, setYears] = useState(30);

  const { loanAmount, monthly, totalPayment, totalInterest } = useMemo(() => {
    const loanAmount = homePrice * (1 - downPct / 100);
    const R = rate / 100 / 12;
    const N = years * 12;
    if (R === 0) return { loanAmount, monthly: loanAmount / N, totalPayment: loanAmount, totalInterest: 0 };
    const monthly = (loanAmount * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    return { loanAmount, monthly, totalPayment: monthly * N, totalInterest: monthly * N - loanAmount };
  }, [homePrice, downPct, rate, years]);

  return (
    <CalcCard>
      <Slider label="Home Price" value={homePrice} min={50000} max={2000000} step={10000} format={fmtUSD} onChange={setHomePrice} />
      <Slider label="Down Payment" value={downPct} min={0} max={50} step={1} format={(v) => `${v}%`} onChange={setDownPct} />
      <Slider label="Annual Interest Rate" value={rate} min={1} max={15} step={0.1} format={(v) => fmtPct(v, 1)} onChange={setRate} />

      {/* Term selector */}
      <div style={{ marginBottom: '1.25rem' }}>
        <div style={{ fontSize: '0.8125rem', color: C.sub, fontFamily: 'var(--font-dm-mono)', marginBottom: '0.5rem' }}>
          Loan Term: <span style={{ color: C.gold }}>{years} years</span>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {[10, 15, 20, 25, 30].map((y) => (
            <button
              key={y}
              onClick={() => setYears(y)}
              style={{
                flex: 1,
                padding: '0.45rem 0',
                borderRadius: '6px',
                border: `1px solid ${years === y ? C.gold : C.cardBorder}`,
                background: years === y ? C.goldDim : 'transparent',
                color: years === y ? C.gold : C.sub,
                fontFamily: 'var(--font-dm-mono)',
                fontSize: '0.8125rem',
                cursor: 'pointer',
                transition: 'all 0.15s',
              }}
            >
              {y}yr
            </button>
          ))}
        </div>
      </div>

      <Results>
        <ResultRow label="Monthly Payment" value={fmtUSD(monthly)} accent />
        <ResultRow label="Loan Amount" value={fmtUSD(loanAmount)} />
        <ResultRow label="Total Payment" value={fmtUSD(totalPayment)} />
        <ResultRow label="Total Interest" value={fmtUSD(totalInterest)} />
      </Results>
    </CalcCard>
  );
}

// ── Compound Interest ─────────────────────────────────────────────────────────
function CompoundInterest() {
  const [principal, setPrincipal] = useState(10000);
  const [rate, setRate] = useState(8);
  const [years, setYears] = useState(20);
  const [monthly, setMonthly] = useState(200);

  const { finalAmount, totalContributions, interestEarned, chartData } = useMemo(() => {
    const r = rate / 100 / 12;
    const chartData = [];
    for (let yr = 1; yr <= years; yr++) {
      const n = yr * 12;
      const principalGrowth = r === 0 ? principal : principal * Math.pow(1 + r, n);
      const contribGrowth = r === 0 ? monthly * n : monthly * ((Math.pow(1 + r, n) - 1) / r);
      const totalContrib = principal + monthly * n;
      chartData.push({ year: yr, total: principalGrowth + contribGrowth, contributions: totalContrib });
    }
    const last = chartData[chartData.length - 1] || { total: principal, contributions: principal };
    return {
      finalAmount: last.total,
      totalContributions: last.contributions,
      interestEarned: last.total - last.contributions,
      chartData,
    };
  }, [principal, rate, years, monthly]);

  const maxAmount = chartData.length > 0 ? Math.max(...chartData.map((d) => d.total)) : 1;

  return (
    <CalcCard>
      <Slider label="Initial Principal" value={principal} min={100} max={100000} step={100} format={fmtUSD} onChange={setPrincipal} />
      <Slider label="Annual Return Rate" value={rate} min={0.5} max={20} step={0.5} format={(v) => fmtPct(v, 1)} onChange={setRate} />
      <Slider label="Time Period" value={years} min={1} max={40} step={1} format={(v) => `${v} yr${v !== 1 ? 's' : ''}`} onChange={setYears} />
      <Slider label="Monthly Contribution" value={monthly} min={0} max={5000} step={50} format={fmtUSD} onChange={setMonthly} />

      {/* Bar Chart */}
      <div
        style={{
          border: `1px solid ${C.cardBorder}`,
          borderRadius: '8px',
          padding: '1rem',
          marginTop: '0.5rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            height: '100px',
            gap: '1px',
            borderBottom: `1px solid ${C.cardBorder}`,
          }}
        >
          {chartData.map(({ year, total, contributions }) => {
            const totalH = Math.round((total / maxAmount) * 98);
            const contribH = Math.round((Math.min(contributions, total) / maxAmount) * 98);
            const interestH = Math.max(0, totalH - contribH);
            return (
              <div
                key={year}
                title={`Year ${year}: ${fmtUSD(total)}`}
                style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%', cursor: 'pointer' }}
              >
                {interestH > 0 && (
                  <div style={{ height: `${interestH}px`, background: C.gold, opacity: 0.7, borderRadius: '1px 1px 0 0', transition: 'height 0.35s ease', minHeight: '1px' }} />
                )}
                <div style={{ height: `${contribH}px`, background: 'rgba(201,168,76,0.28)', transition: 'height 0.35s ease', minHeight: '2px' }} />
              </div>
            );
          })}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.35rem' }}>
          <span style={{ fontSize: '0.65rem', color: C.muted, fontFamily: 'var(--font-dm-mono)' }}>Year 1</span>
          <span style={{ fontSize: '0.65rem', color: C.muted, fontFamily: 'var(--font-dm-mono)' }}>Year {years}</span>
        </div>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
          {[{ color: C.gold, opacity: 0.7, label: 'Interest Earned' }, { color: 'rgba(201,168,76,0.28)', opacity: 1, label: 'Contributions' }].map(({ color, opacity, label }) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <div style={{ width: '8px', height: '8px', background: color, opacity, borderRadius: '2px', flexShrink: 0 }} />
              <span style={{ fontSize: '0.7rem', color: C.muted, fontFamily: 'var(--font-dm-mono)' }}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <Results>
        <ResultRow label="Final Amount" value={fmtUSD(finalAmount)} accent />
        <ResultRow label="Total Contributions" value={fmtUSD(totalContributions)} />
        <ResultRow label="Interest Earned" value={fmtUSD(interestEarned)} />
        <ResultRow label="Return Multiple" value={`${(finalAmount / Math.max(totalContributions, 1)).toFixed(2)}×`} />
      </Results>
    </CalcCard>
  );
}

// ── Tax Bracket 2024 ──────────────────────────────────────────────────────────
const BRACKETS = {
  single: [
    { min: 0,       max: 11600,   rate: 0.10 },
    { min: 11600,   max: 47150,   rate: 0.12 },
    { min: 47150,   max: 100525,  rate: 0.22 },
    { min: 100525,  max: 191950,  rate: 0.24 },
    { min: 191950,  max: 243725,  rate: 0.32 },
    { min: 243725,  max: 609350,  rate: 0.35 },
    { min: 609350,  max: null,    rate: 0.37 },
  ],
  married: [
    { min: 0,       max: 23200,   rate: 0.10 },
    { min: 23200,   max: 94300,   rate: 0.12 },
    { min: 94300,   max: 201050,  rate: 0.22 },
    { min: 201050,  max: 383900,  rate: 0.24 },
    { min: 383900,  max: 487450,  rate: 0.32 },
    { min: 487450,  max: 731200,  rate: 0.35 },
    { min: 731200,  max: null,    rate: 0.37 },
  ],
};

function TaxBracket() {
  const [income, setIncome] = useState(75000);
  const [filing, setFiling] = useState('single');

  const { totalTax, effectiveRate, marginalRate, breakdown } = useMemo(() => {
    const brackets = BRACKETS[filing];
    let totalTax = 0;
    let marginalRate = 0;
    const breakdown = [];
    for (const b of brackets) {
      if (income <= b.min) break;
      const cap = b.max === null ? income : Math.min(income, b.max);
      const taxable = cap - b.min;
      const tax = taxable * b.rate;
      totalTax += tax;
      marginalRate = b.rate * 100;
      breakdown.push({
        rate: `${(b.rate * 100).toFixed(0)}%`,
        range: b.max === null
          ? `$${(b.min / 1000).toFixed(0)}k+`
          : `$${(b.min / 1000).toFixed(0)}k – $${(b.max / 1000).toFixed(0)}k`,
        tax,
      });
    }
    return { totalTax, effectiveRate: income > 0 ? (totalTax / income) * 100 : 0, marginalRate, breakdown };
  }, [income, filing]);

  return (
    <CalcCard>
      {/* Filing toggle */}
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ fontSize: '0.8125rem', color: C.sub, fontFamily: 'var(--font-dm-mono)', marginBottom: '0.5rem' }}>
          Filing Status
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {[{ id: 'single', label: 'Single' }, { id: 'married', label: 'Married Filing Jointly' }].map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setFiling(id)}
              style={{
                padding: '0.45rem 1rem',
                borderRadius: '6px',
                border: `1px solid ${filing === id ? C.gold : C.cardBorder}`,
                background: filing === id ? C.goldDim : 'transparent',
                color: filing === id ? C.gold : C.sub,
                fontFamily: 'var(--font-dm-mono)',
                fontSize: '0.8125rem',
                cursor: 'pointer',
                transition: 'all 0.15s',
                whiteSpace: 'nowrap',
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <Slider label="Annual Gross Income" value={income} min={0} max={1000000} step={1000} format={fmtUSD} onChange={setIncome} />

      <Results>
        <ResultRow label="Estimated Federal Tax" value={fmtUSD(totalTax)} accent />
        <ResultRow label="Effective Tax Rate" value={fmtPct(effectiveRate)} />
        <ResultRow label="Marginal Rate" value={fmtPct(marginalRate, 0)} />
        <ResultRow label="After-Tax Income" value={fmtUSD(income - totalTax)} />
      </Results>

      {/* Bracket breakdown */}
      {breakdown.length > 0 && (
        <div style={{ marginTop: '1.5rem' }}>
          <div style={{ fontSize: '0.7rem', color: C.muted, fontFamily: 'var(--font-dm-mono)', letterSpacing: '0.1em', marginBottom: '0.6rem' }}>
            BRACKET BREAKDOWN
          </div>
          {breakdown.map(({ rate: r, range, tax }, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '0.4rem 0',
                borderBottom: `1px solid ${C.cardBorder}`,
                fontSize: '0.8125rem',
              }}
            >
              <span style={{ color: C.gold, fontFamily: 'var(--font-dm-mono)', width: '2.5rem' }}>{r}</span>
              <span style={{ color: C.sub, flex: 1, paddingLeft: '0.5rem' }}>{range}</span>
              <span style={{ color: C.white, fontFamily: 'var(--font-dm-mono)' }}>{fmtUSD(tax)}</span>
            </div>
          ))}
        </div>
      )}
      <p style={{ fontSize: '0.7rem', color: C.muted, marginTop: '1rem', fontFamily: 'var(--font-dm-mono)' }}>
        * US federal income tax only. Excludes FICA, state tax. For filing year 2024.
      </p>
    </CalcCard>
  );
}

// ── Currency Converter ────────────────────────────────────────────────────────
const CURRENCIES = {
  USD: { name: 'US Dollar',          symbol: '$',    rate: 1       },
  EUR: { name: 'Euro',               symbol: '€',    rate: 0.918   },
  GBP: { name: 'British Pound',      symbol: '£',    rate: 0.791   },
  CAD: { name: 'Canadian Dollar',    symbol: 'CA$',  rate: 1.357   },
  AED: { name: 'UAE Dirham',         symbol: 'AED',  rate: 3.673   },
  ETB: { name: 'Ethiopian Birr',     symbol: 'ETB',  rate: 130.5   },
  JPY: { name: 'Japanese Yen',       symbol: '¥',    rate: 149.5   },
  AUD: { name: 'Australian Dollar',  symbol: 'A$',   rate: 1.528   },
  INR: { name: 'Indian Rupee',       symbol: '₹',    rate: 83.2    },
  CHF: { name: 'Swiss Franc',        symbol: 'CHF',  rate: 0.895   },
};

const CURRENCY_KEYS = Object.keys(CURRENCIES);

const selectStyle = {
  width: '100%',
  background: '#0d1520',
  border: '1px solid rgba(255,255,255,0.07)',
  borderRadius: '8px',
  color: '#f0f4f8',
  padding: '0.6rem 0.75rem',
  fontFamily: 'var(--font-dm-mono)',
  fontSize: '0.875rem',
  cursor: 'pointer',
  outline: 'none',
};

function CurrencyConverter() {
  const [amount, setAmount] = useState('100');
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('ETB');

  const { converted, exchangeRate } = useMemo(() => {
    const amt = parseFloat(amount);
    if (!amt || isNaN(amt)) return { converted: null, exchangeRate: null };
    const rate = CURRENCIES[to].rate / CURRENCIES[from].rate;
    return { converted: amt * rate, exchangeRate: rate };
  }, [amount, from, to]);

  const swap = () => {
    const tmp = from;
    setFrom(to);
    setTo(tmp);
  };

  return (
    <CalcCard>
      {/* Amount */}
      <div style={{ marginBottom: '1.25rem' }}>
        <label style={{ display: 'block', fontSize: '0.8125rem', color: C.sub, fontFamily: 'var(--font-dm-mono)', marginBottom: '0.5rem' }}>
          Amount
        </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          style={{
            width: '100%',
            background: 'rgba(201,168,76,0.07)',
            border: `1px solid ${C.goldBorder}`,
            borderRadius: '8px',
            color: C.white,
            padding: '0.75rem 1rem',
            fontSize: '1.25rem',
            fontFamily: 'var(--font-dm-mono)',
            outline: 'none',
            boxSizing: 'border-box',
          }}
        />
      </div>

      {/* From / Swap / To */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '0.75rem', alignItems: 'end', marginBottom: '1.5rem' }}>
        <div>
          <label style={{ display: 'block', fontSize: '0.8125rem', color: C.sub, fontFamily: 'var(--font-dm-mono)', marginBottom: '0.4rem' }}>From</label>
          <select value={from} onChange={(e) => setFrom(e.target.value)} style={selectStyle}>
            {CURRENCY_KEYS.map((c) => (
              <option key={c} value={c}>{c} — {CURRENCIES[c].name}</option>
            ))}
          </select>
        </div>
        <button
          onClick={swap}
          title="Swap currencies"
          style={{
            background: C.goldDim,
            border: `1px solid ${C.goldBorder}`,
            borderRadius: '8px',
            color: C.gold,
            padding: '0.6rem 0.8rem',
            cursor: 'pointer',
            fontSize: '1.1rem',
            lineHeight: 1,
          }}
        >
          ⇄
        </button>
        <div>
          <label style={{ display: 'block', fontSize: '0.8125rem', color: C.sub, fontFamily: 'var(--font-dm-mono)', marginBottom: '0.4rem' }}>To</label>
          <select value={to} onChange={(e) => setTo(e.target.value)} style={selectStyle}>
            {CURRENCY_KEYS.map((c) => (
              <option key={c} value={c}>{c} — {CURRENCIES[c].name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Result */}
      {converted !== null ? (
        <div
          style={{
            background: 'rgba(201,168,76,0.05)',
            border: '1px solid rgba(201,168,76,0.18)',
            borderRadius: '10px',
            padding: '1.5rem',
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: '0.875rem', color: C.sub, fontFamily: 'var(--font-dm-mono)', marginBottom: '0.5rem' }}>
            {parseFloat(amount).toLocaleString('en-US')} {from} =
          </div>
          <div style={{ fontSize: '2.25rem', fontWeight: 700, color: C.gold, fontFamily: 'var(--font-dm-mono)', lineHeight: 1 }}>
            {converted.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
          <div style={{ fontSize: '1rem', color: C.sub, marginTop: '0.4rem' }}>
            {CURRENCIES[to].symbol} {CURRENCIES[to].name}
          </div>
          <div style={{ borderTop: `1px solid rgba(201,168,76,0.1)`, marginTop: '1rem', paddingTop: '1rem', display: 'flex', justifyContent: 'space-around' }}>
            <div>
              <div style={{ fontSize: '0.7rem', color: C.muted, fontFamily: 'var(--font-dm-mono)', marginBottom: '0.2rem' }}>RATE</div>
              <div style={{ fontSize: '0.875rem', color: C.white, fontFamily: 'var(--font-dm-mono)' }}>1 {from} = {exchangeRate.toFixed(4)} {to}</div>
            </div>
            <div>
              <div style={{ fontSize: '0.7rem', color: C.muted, fontFamily: 'var(--font-dm-mono)', marginBottom: '0.2rem' }}>INVERSE</div>
              <div style={{ fontSize: '0.875rem', color: C.white, fontFamily: 'var(--font-dm-mono)' }}>1 {to} = {(1 / exchangeRate).toFixed(4)} {from}</div>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '2rem', color: C.muted, fontFamily: 'var(--font-dm-mono)', fontSize: '0.875rem' }}>
          Enter an amount above to convert
        </div>
      )}
      <p style={{ fontSize: '0.7rem', color: C.muted, marginTop: '0.75rem', fontFamily: 'var(--font-dm-mono)' }}>
        * Static indicative rates as of early 2025. Integrate a live FX API for real-time rates.
      </p>
    </CalcCard>
  );
}

// ── Tab config ────────────────────────────────────────────────────────────────
const TABS = [
  { id: 'emi',      label: 'Loan EMI',          Component: LoanEMI },
  { id: 'mortgage', label: 'Mortgage',           Component: Mortgage },
  { id: 'compound', label: 'Compound Interest',  Component: CompoundInterest },
  { id: 'tax',      label: 'Tax Bracket',        Component: TaxBracket },
  { id: 'currency', label: 'Currency',           Component: CurrencyConverter },
];

// ── Main export ───────────────────────────────────────────────────────────────
export default function FinanceCalc() {
  const [activeTab, setActiveTab] = useState('emi');
  const active = TABS.find((t) => t.id === activeTab) || TABS[0];
  const { Component: ActiveCalc } = active;

  return (
    <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 24px 3rem' }}>
      {/* Header */}
      <div
        style={{
          padding: '1.5rem 0 1.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: `1px solid ${C.cardBorder}`,
          marginBottom: '1.75rem',
        }}
      >
        <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.625rem', fontWeight: 600, color: C.gold }}>
          FinancePro
        </span>
        <a
          href="/"
          style={{
            color: C.sub,
            fontSize: '0.8125rem',
            fontFamily: 'var(--font-dm-mono)',
            textDecoration: 'none',
            letterSpacing: '0.04em',
            transition: 'color 0.15s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = C.gold)}
          onMouseLeave={(e) => (e.currentTarget.style.color = C.sub)}
        >
          ← Back to Home
        </a>
      </div>

      <h1
        style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
          fontWeight: 600,
          color: C.white,
          marginBottom: '1.75rem',
          lineHeight: 1.1,
        }}
      >
        Free <span style={{ color: C.gold }}>Finance Calculators</span>
      </h1>

      {/* Tab bar */}
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
        {TABS.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            style={{
              padding: '0.4rem 1rem',
              borderRadius: '20px',
              border: `1px solid ${activeTab === id ? C.gold : C.cardBorder}`,
              background: activeTab === id ? C.goldDim : 'transparent',
              color: activeTab === id ? C.gold : C.sub,
              fontFamily: 'var(--font-dm-mono)',
              fontSize: '0.8125rem',
              cursor: 'pointer',
              letterSpacing: '0.02em',
              transition: 'all 0.15s',
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Active calculator */}
      <ActiveCalc />
    </div>
  );
}
