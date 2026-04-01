'use client';

import { useState } from 'react';

// AdSense placeholder
const AdSlot = ({ size = '728x90' }) => (
  <div
    className="adsense-placeholder"
    style={{
      width: '100%',
      maxWidth: size === '300x250' ? '300px' : '728px',
      height: size === '300x250' ? '250px' : '90px',
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
      ADSENSE {size}
    </span>
  </div>
);

// ── Loan EMI ────────────────────────────────────────────────────────────────
function LoanEMI() {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const P = parseFloat(principal);
    const R = parseFloat(rate) / 12 / 100;
    const N = parseFloat(tenure);
    if (!P || !R || !N) return;
    const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    setResult({
      emi: emi.toFixed(2),
      total: (emi * N).toFixed(2),
      interest: (emi * N - P).toFixed(2),
    });
  };

  return (
    <CalcCard title="Loan EMI Calculator">
      <Field label="Principal Amount ($)" value={principal} onChange={setPrincipal} placeholder="e.g. 10000" />
      <Field label="Annual Interest Rate (%)" value={rate} onChange={setRate} placeholder="e.g. 8.5" />
      <Field label="Tenure (months)" value={tenure} onChange={setTenure} placeholder="e.g. 24" />
      <CalcButton onClick={calculate} />
      {result && (
        <Results rows={[
          ['Monthly EMI', `$${result.emi}`],
          ['Total Payment', `$${result.total}`],
          ['Total Interest', `$${result.interest}`],
        ]} />
      )}
    </CalcCard>
  );
}

// ── Mortgage ────────────────────────────────────────────────────────────────
function Mortgage() {
  const [home, setHome] = useState('');
  const [down, setDown] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const P = parseFloat(home) - parseFloat(down || 0);
    const R = parseFloat(rate) / 12 / 100;
    const N = parseFloat(years) * 12;
    if (!P || !R || !N) return;
    const m = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    setResult({
      monthly: m.toFixed(2),
      total: (m * N).toFixed(2),
      interest: (m * N - P).toFixed(2),
    });
  };

  return (
    <CalcCard title="Mortgage Calculator">
      <Field label="Home Price ($)" value={home} onChange={setHome} placeholder="e.g. 350000" />
      <Field label="Down Payment ($)" value={down} onChange={setDown} placeholder="e.g. 70000" />
      <Field label="Annual Interest Rate (%)" value={rate} onChange={setRate} placeholder="e.g. 6.5" />
      <Field label="Loan Term (years)" value={years} onChange={setYears} placeholder="e.g. 30" />
      <CalcButton onClick={calculate} />
      {result && (
        <Results rows={[
          ['Monthly Payment', `$${result.monthly}`],
          ['Total Payment', `$${result.total}`],
          ['Total Interest', `$${result.interest}`],
        ]} />
      )}
    </CalcCard>
  );
}

// ── Compound Interest ────────────────────────────────────────────────────────
function CompoundInterest() {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');
  const [n, setN] = useState('12');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const P = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(years);
    const freq = parseFloat(n);
    if (!P || !r || !t || !freq) return;
    const A = P * Math.pow(1 + r / freq, freq * t);
    setResult({ amount: A.toFixed(2), interest: (A - P).toFixed(2) });
  };

  return (
    <CalcCard title="Compound Interest Calculator">
      <Field label="Principal ($)" value={principal} onChange={setPrincipal} placeholder="e.g. 5000" />
      <Field label="Annual Rate (%)" value={rate} onChange={setRate} placeholder="e.g. 7" />
      <Field label="Years" value={years} onChange={setYears} placeholder="e.g. 10" />
      <Field label="Compounding/Year" value={n} onChange={setN} placeholder="12" />
      <CalcButton onClick={calculate} />
      {result && (
        <Results rows={[
          ['Final Amount', `$${result.amount}`],
          ['Interest Earned', `$${result.interest}`],
        ]} />
      )}
    </CalcCard>
  );
}

// ── US Tax Bracket 2024 ──────────────────────────────────────────────────────
const BRACKETS_2024 = [
  { min: 0,       max: 11600,  rate: 0.10 },
  { min: 11600,   max: 47150,  rate: 0.12 },
  { min: 47150,   max: 100525, rate: 0.22 },
  { min: 100525,  max: 191950, rate: 0.24 },
  { min: 191950,  max: 243725, rate: 0.32 },
  { min: 243725,  max: 609350, rate: 0.35 },
  { min: 609350,  max: Infinity, rate: 0.37 },
];

function TaxBracket() {
  const [income, setIncome] = useState('');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const inc = parseFloat(income);
    if (!inc) return;
    let tax = 0;
    let marginalRate = 0;
    for (const b of BRACKETS_2024) {
      if (inc > b.min) {
        const taxable = Math.min(inc, b.max) - b.min;
        tax += taxable * b.rate;
        marginalRate = b.rate * 100;
      }
    }
    setResult({
      tax: tax.toFixed(2),
      effective: ((tax / inc) * 100).toFixed(2),
      marginal: marginalRate.toFixed(0),
    });
  };

  return (
    <CalcCard title="US Tax Bracket 2024">
      <Field label="Annual Income ($)" value={income} onChange={setIncome} placeholder="e.g. 75000" />
      <CalcButton onClick={calculate} />
      {result && (
        <Results rows={[
          ['Estimated Tax', `$${result.tax}`],
          ['Effective Rate', `${result.effective}%`],
          ['Marginal Rate', `${result.marginal}%`],
        ]} />
      )}
    </CalcCard>
  );
}

// ── Currency Converter ───────────────────────────────────────────────────────
const RATES = { USD: 1, GBP: 0.79, EUR: 0.92, CAD: 1.36 };

function CurrencyConverter() {
  const [amount, setAmount] = useState('');
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('GBP');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const amt = parseFloat(amount);
    if (!amt) return;
    const converted = (amt / RATES[from]) * RATES[to];
    setResult(converted.toFixed(2));
  };

  const currencies = Object.keys(RATES);

  return (
    <CalcCard title="Currency Converter">
      <Field label="Amount" value={amount} onChange={setAmount} placeholder="e.g. 100" />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.75rem' }}>
        {[{ label: 'From', val: from, set: setFrom }, { label: 'To', val: to, set: setTo }].map(({ label, val, set }) => (
          <div key={label}>
            <label style={{ display: 'block', fontSize: '0.75rem', color: '#556677', marginBottom: '0.25rem' }}>{label}</label>
            <select
              value={val}
              onChange={(e) => set(e.target.value)}
              style={{
                width: '100%',
                background: 'rgba(201,168,76,0.08)',
                border: '1px solid rgba(201,168,76,0.25)',
                borderRadius: '6px',
                color: '#fff',
                padding: '0.5rem',
                fontSize: '0.875rem',
              }}
            >
              {currencies.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        ))}
      </div>
      <CalcButton onClick={calculate} />
      {result && (
        <Results rows={[[`${amount} ${from}`, `${result} ${to}`]]} />
      )}
      <p style={{ fontSize: '0.7rem', color: '#334455', marginTop: '0.5rem' }}>
        * Static demo rates. For live rates, integrate an FX API.
      </p>
    </CalcCard>
  );
}

// ── Shared UI primitives ─────────────────────────────────────────────────────
function CalcCard({ title, children }) {
  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.025)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '12px',
        padding: '1.5rem',
        marginBottom: '1.5rem',
      }}
    >
      <h2
        style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: '1.5rem',
          color: '#c9a84c',
          marginBottom: '1.25rem',
        }}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}

function Field({ label, value, onChange, placeholder }) {
  return (
    <div style={{ marginBottom: '0.75rem' }}>
      <label style={{ display: 'block', fontSize: '0.75rem', color: '#556677', marginBottom: '0.25rem' }}>
        {label}
      </label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          width: '100%',
          background: 'rgba(201,168,76,0.08)',
          border: '1px solid rgba(201,168,76,0.25)',
          borderRadius: '6px',
          color: '#fff',
          padding: '0.5rem 0.75rem',
          fontSize: '0.875rem',
          boxSizing: 'border-box',
        }}
      />
    </div>
  );
}

function CalcButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: '#c9a84c',
        color: '#080d16',
        border: 'none',
        borderRadius: '6px',
        padding: '0.6rem 1.5rem',
        fontWeight: 700,
        cursor: 'pointer',
        fontFamily: 'var(--font-dm-mono)',
        fontSize: '0.8125rem',
        letterSpacing: '0.05em',
        marginBottom: '1rem',
      }}
    >
      CALCULATE
    </button>
  );
}

function Results({ rows }) {
  return (
    <div
      style={{
        background: 'rgba(201,168,76,0.06)',
        border: '1px solid rgba(201,168,76,0.2)',
        borderRadius: '8px',
        padding: '1rem',
      }}
    >
      {rows.map(([label, value]) => (
        <div
          key={label}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0.35rem 0',
            borderBottom: '1px solid rgba(201,168,76,0.1)',
          }}
        >
          <span style={{ color: '#8899aa', fontSize: '0.875rem' }}>{label}</span>
          <span style={{ color: '#c9a84c', fontWeight: 600, fontFamily: 'var(--font-dm-mono)' }}>{value}</span>
        </div>
      ))}
    </div>
  );
}

// ── Main export ──────────────────────────────────────────────────────────────
const TABS = ['Loan EMI', 'Mortgage', 'Compound Interest', 'Tax Bracket', 'Currency'];
const COMPONENTS = { 'Loan EMI': LoanEMI, Mortgage, 'Compound Interest': CompoundInterest, 'Tax Bracket': TaxBracket, Currency: CurrencyConverter };

export default function FinanceCalc() {
  const [active, setActive] = useState('Loan EMI');
  const ActiveCalc = COMPONENTS[active];

  return (
    <div style={{ background: '#080d16', minHeight: '100vh', color: '#fff' }}>
      {/* Header */}
      <header
        style={{
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          padding: '1.25rem 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <a href="/" style={{ color: '#c9a84c', textDecoration: 'none', fontFamily: 'var(--font-cormorant)', fontSize: '1.5rem', fontWeight: 600 }}>
          FinancePro
        </a>
        <span style={{ color: '#556677', fontSize: '0.8125rem', fontFamily: 'var(--font-dm-mono)' }}>Free Calculators</span>
      </header>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 24px' }}>
        {/* Ad above calculator */}
        <div style={{ marginBottom: '1.5rem' }}>
          <AdSlot size="728x90" />
        </div>

        {/* Tab bar */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              style={{
                background: active === tab ? 'rgba(201,168,76,0.15)' : 'transparent',
                border: `1px solid ${active === tab ? 'rgba(201,168,76,0.5)' : 'rgba(255,255,255,0.07)'}`,
                borderRadius: '20px',
                color: active === tab ? '#c9a84c' : '#556677',
                padding: '0.35rem 1rem',
                cursor: 'pointer',
                fontSize: '0.8125rem',
                fontFamily: 'var(--font-dm-mono)',
                transition: 'all 0.15s',
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Active calculator */}
        <ActiveCalc />

        {/* Ad below results */}
        <div style={{ marginTop: '1rem' }}>
          <AdSlot size="300x250" />
        </div>
      </div>
    </div>
  );
}
