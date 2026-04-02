// app/blog/how-to-pay-off-debt-quickly/page.jsx
'use client';

import { useEffect } from 'react';

export const metadata = {
  title: 'How to Pay Off Debt Quickly | FinancePro',
  description: 'Learn proven strategies to pay off debt fast, reduce interest payments, and achieve financial freedom. Expert tips on debt avalanche, debt snowball, balance transfers, and more.',
  keywords: 'pay off debt quickly, debt repayment strategies, debt avalanche method, debt snowball method, balance transfer, personal loan refinancing, credit card debt, financial freedom, debt consolidation, high interest debt',
};

export default function BlogPost() {
  useEffect(() => {
    const link1 = document.createElement('link');
    link1.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&display=swap';
    link1.rel = 'stylesheet';
    document.head.appendChild(link1);

    const link2 = document.createElement('link');
    link2.href = 'https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&display=swap';
    link2.rel = 'stylesheet';
    document.head.appendChild(link2);

    return () => {
      document.head.removeChild(link1);
      document.head.removeChild(link2);
    };
  }, []);

  const styles = {
    page: {
      backgroundColor: '#080d16',
      minHeight: '100vh',
      color: '#cdd6e0',
      fontFamily: "'DM Mono', monospace",
      fontSize: '15px',
      lineHeight: '1.8',
    },
    nav: {
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backdropFilter: 'blur(14px)',
      backgroundColor: 'rgba(8, 13, 22, 0.85)',
      borderBottom: '1px solid rgba(201, 168, 76, 0.2)',
      padding: '0 32px',
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    navLogo: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: '22px',
      fontWeight: '700',
      color: '#c9a84c',
      textDecoration: 'none',
      letterSpacing: '0.04em',
    },
    navLink: {
      fontFamily: "'DM Mono', monospace",
      fontSize: '13px',
      color: '#8899aa',
      textDecoration: 'none',
      letterSpacing: '0.06em',
      border: '1px solid rgba(201, 168, 76, 0.3)',
      padding: '6px 16px',
      borderRadius: '4px',
      transition: 'color 0.2s, border-color 0.2s',
    },
    hero: {
      textAlign: 'center',
      padding: '80px 24px 60px',
      maxWidth: '820px',
      margin: '0 auto',
    },
    tagRow: {
      display: 'flex',
      justifyContent: 'center',
      gap: '10px',
      marginBottom: '28px',
      flexWrap: 'wrap',
    },
    tag: {
      backgroundColor: 'rgba(201, 168, 76, 0.12)',
      border: '1px solid rgba(201, 168, 76, 0.35)',
      color: '#c9a84c',
      padding: '4px 14px',
      borderRadius: '20px',
      fontSize: '12px',
      fontFamily: "'DM Mono', monospace",
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
    },
    h1: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: 'clamp(36px, 5vw, 58px)',
      fontWeight: '700',
      color: '#f0e6cc',
      lineHeight: '1.2',
      marginBottom: '24px',
      letterSpacing: '-0.01em',
    },
    metaRow: {
      display: 'flex',
      justifyContent: 'center',
      gap: '24px',
      color: '#8899aa',
      fontSize: '13px',
      marginBottom: '36px',
      flexWrap: 'wrap',
    },
    divider: {
      width: '80px',
      height: '2px',
      background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)',
      margin: '0 auto',
    },
    adPlaceholder: {
      width: '100%',
      maxWidth: '728px',
      height: '90px',
      border: '2px dashed rgba(201, 168, 76, 0.45)',
      borderRadius: '6px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 60px',
      color: '#8899aa',
      fontSize: '12px',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      backgroundColor: 'rgba(201, 168, 76, 0.04)',
    },
    article: {
      maxWidth: '780px',
      margin: '0 auto',
      padding: '0 24px',
    },
    h2: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: 'clamp(24px, 3vw, 34px)',
      fontWeight: '600',
      color: '#e8d9b8',
      marginTop: '56px',
      marginBottom: '20px',
      letterSpacing: '0.01em',
    },
    p: {
      marginBottom: '22px',
      color: '#b8c8d8',
    },
    highlight: {
      color: '#c9a84c',
      fontWeight: '500',
    },
    tableWrapper: {
      overflowX: 'auto',
      marginBottom: '40px',
      marginTop: '32px',
      borderRadius: '10px',
      border: '1px solid rgba(201, 168, 76, 0.2)',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      backgroundColor: '#0d1521',
      borderRadius: '10px',
      overflow: 'hidden',
    },
    th: {
      backgroundColor: 'rgba(201, 168, 76, 0.15)',
      color: '#c9a84c',
      padding: '14px 20px',
      textAlign: 'left',
      fontSize: '12px',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      fontFamily: "'DM Mono', monospace",
      borderBottom: '1px solid rgba(201, 168, 76, 0.2)',
    },
    td: {
      padding: '13px 20px',
      fontSize: '14px',
      color: '#b8c8d8',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      fontFamily: "'DM Mono', monospace",
    },
    tdStrong: {
      color: '#e8d9b8',
      fontWeight: '500',
    },
    tipsBox: {
      backgroundColor: '#0d1521',
      border: '1px solid rgba(201, 168, 76, 0.2)',
      borderRadius: '10px',
      padding: '36px 40px',
      marginBottom: '40px',
      marginTop: '32px',
    },
    tipsTitle: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: '22px',
      fontWeight: '600',
      color: '#e8d9b8',
      marginBottom: '24px',
    },
    tipItem: {
      display: 'flex',
      gap: '18px',
      marginBottom: '20px',
      alignItems: 'flex-start',
    },
    tipNumber: {
      minWidth: '32px',
      height: '32px',
      borderRadius: '50%',
      backgroundColor: 'rgba(201, 168, 76, 0.15)',
      border: '1px solid rgba(201, 168, 76, 0.4)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#c9a84c',
      fontSize: '13px',
      fontWeight: '500',
      flexShrink: 0,
      marginTop: '2px',
    },
    tipText: {
      color: '#b8c8d8',
      fontSize: '14px',
      lineHeight: '1.75',
    },
    ctaBox: {
      background: 'linear-gradient(135deg, #0f1c2e 0%, #0d1521 60%, #111a0d 100%)',
      border: '1px solid rgba(201, 168, 76, 0.35)',
      borderRadius: '12px',
      padding: '44px 40px',
      textAlign: 'center',
      margin: '52px 0',
    },
    ctaTitle: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: '28px',
      fontWeight: '700',
      color: '#f0e6cc',
      marginBottom: '14px',
    },
    ctaText: {
      color: '#8899aa',
      fontSize: '14px',
      marginBottom: '28px',
      maxWidth: '480px',
      margin: '0 auto 28px',
    },
    ctaButton: {
      display: 'inline-block',
      background: 'linear-gradient(90deg, #b8922e, #c9a84c, #d4b866)',
      color: '#080d16',
      padding: '14px 36px',
      borderRadius: '6px',
      textDecoration: 'none',
      fontFamily: "'DM Mono', monospace",
      fontSize: '13px',
      fontWeight: '500',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
    },
    disclaimer: {
      backgroundColor: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: '8px',
      padding: '20px 24px',
      marginTop: '52px',
      marginBottom: '60px',
      fontSize: '12px',
      color: '#8899aa',
      lineHeight: '1.7',
    },
    footer: {
      borderTop: '1px solid rgba(201, 168, 76, 0.15)',
      padding: '48px 32px 36px',
      textAlign: 'center',
    },
    footerLogo: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: '26px',
      fontWeight: '700',
      color: '#c9a84c',
      display: 'block',
      marginBottom: '20px',
      textDecoration: 'none',
    },
    footerLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '28px',
      flexWrap: 'wrap',
      marginBottom: '24px',
    },
    footerLink: {
      color: '#8899aa',
      textDecoration: 'none',
      fontSize: '13px',
      letterSpacing: '0.04em',
    },
    footerCopy: {
      color: '#4a5a6a',
      fontSize: '12px',
    },
  };

  const tableData = [
    { method: 'Debt Avalanche', focus: 'Highest interest first', bestFor: 'Minimizing total interest', savings: 'Maximum', speed: 'Fast' },
    { method: 'Debt Snowball', focus: 'Smallest balance first', bestFor: 'Motivation & momentum', savings: 'Moderate', speed: 'Moderate' },
    { method: 'Balance Transfer', focus: '0% intro APR card', bestFor: 'Credit card debt', savings: 'High (short term)', speed: 'Very Fast' },
    { method: 'Debt Consolidation Loan', focus: 'Single lower-rate loan', bestFor: 'Multiple debts', savings: 'High', speed: 'Fast' },
    { method: 'Debt Management Plan', focus: 'Negotiated rates via agency', bestFor: 'Severe credit card debt', savings: 'Moderate-High', speed: 'Slow' },
  ];

  return (
    <div style={styles.page}>
      {/* NAV */}
      <nav style={styles.nav}>
        <a href="https://financepro.io" style={styles.navLogo}>FinancePro</a>
        <a href="/blog" style={styles.navLink}>← Back to Blog</a>
      </nav>

      {/* HERO */}
      <div style={styles.hero}>
        <div style={styles.tagRow}>
          <span style={styles.tag}>Debt Management</span>
          <span style={styles.tag}>Personal Finance</span>
          <span style={styles.tag}>Financial Freedom</span>
        </div>
        <h1 style={styles.h1}>How to Pay Off Debt Quickly: Proven Strategies That Actually Work</h1>
        <div style={styles.metaRow}>
          <span>April 2, 2026</span>
          <span>·</span>
          <span>8 min read</span>
          <span>·</span>
          <span style={{ color: '#c9a84c' }}>FinancePro Editorial</span>
        </div>
        <div style={styles.divider}></div>
      </div>

      {/* AD PLACEHOLDER */}
      <div style={styles.adPlaceholder}>
        Advertisement 728×90
      </div>

      {/* ARTICLE */}
      <article style={styles.article}>

        <p style={styles.p}>
          The average American household carries over <span style={styles.highlight}>$104,000 in total debt</span>, including mortgages, auto loans, student loans, and credit cards. If you're feeling buried under monthly minimum payments and compounding interest, you are absolutely not alone — and more importantly, there is a clear path out. Paying off debt quickly is not just about discipline; it's about applying the right strategy to your specific financial situation and executing it with consistency.
        </p>

        <p style={styles.p}>
          In this guide, we break down the most effective debt repayment strategies, compare them side by side, and give you concrete action steps you can implement this week. Whether you're dealing with high-interest credit card debt at <span style={styles.highlight}>24.99% APR</span>, student loans at <span style={styles.highlight}>6.5%</span>, or a personal loan at <span style={styles.highlight}>12%</span>, there's a tailored approach that can save you thousands of dollars and shave years off your repayment timeline.
        </p>

        <h2 style={styles.h2}>Understanding the True Cost of Debt</h2>

        <p style={styles.p}>
          Before choosing a repayment strategy, it