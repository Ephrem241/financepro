// app/blog/what-is-a-good-interest-rate-for-a-mortgage/page.jsx

import { useEffect } from "react";

export const metadata = {
  title: "What Is a Good Interest Rate for a Mortgage? | FinancePro",
  description:
    "Discover what constitutes a good mortgage interest rate in 2026, how lenders determine your rate, and actionable tips to secure the lowest rate possible on your home loan.",
  keywords:
    "good interest rate for mortgage, mortgage rates 2026, best mortgage rate, home loan interest rate, fixed rate mortgage, refinance mortgage rate, mortgage APR, low mortgage rate, compare mortgage rates, mortgage lender",
};

export default function BlogPost() {
  useEffect(() => {
    const link1 = document.createElement("link");
    link1.rel = "preconnect";
    link1.href = "https://fonts.googleapis.com";
    document.head.appendChild(link1);

    const link2 = document.createElement("link");
    link2.rel = "preconnect";
    link2.href = "https://fonts.gstatic.com";
    link2.crossOrigin = "anonymous";
    document.head.appendChild(link2);

    const link3 = document.createElement("link");
    link3.rel = "stylesheet";
    link3.href =
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=DM+Mono:wght@300;400;500&display=swap";
    document.head.appendChild(link3);

    return () => {
      document.head.removeChild(link1);
      document.head.removeChild(link2);
      document.head.removeChild(link3);
    };
  }, []);

  const styles = {
    page: {
      backgroundColor: "#080d16",
      minHeight: "100vh",
      fontFamily: "'DM Mono', monospace",
      color: "#e2e8f0",
      lineHeight: "1.8",
    },
    nav: {
      position: "sticky",
      top: 0,
      zIndex: 100,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "16px 40px",
      backgroundColor: "rgba(8, 13, 22, 0.85)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid rgba(201, 168, 76, 0.2)",
    },
    logo: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: "24px",
      fontWeight: "700",
      color: "#c9a84c",
      textDecoration: "none",
      letterSpacing: "0.05em",
    },
    backLink: {
      fontFamily: "'DM Mono', monospace",
      fontSize: "13px",
      color: "#8899aa",
      textDecoration: "none",
      border: "1px solid rgba(201, 168, 76, 0.3)",
      padding: "6px 16px",
      borderRadius: "4px",
      transition: "all 0.2s ease",
    },
    hero: {
      maxWidth: "800px",
      margin: "0 auto",
      padding: "80px 24px 48px",
      textAlign: "center",
    },
    tagRow: {
      display: "flex",
      justifyContent: "center",
      gap: "10px",
      marginBottom: "24px",
      flexWrap: "wrap",
    },
    tag: {
      fontSize: "11px",
      fontFamily: "'DM Mono', monospace",
      color: "#c9a84c",
      border: "1px solid rgba(201, 168, 76, 0.4)",
      padding: "4px 12px",
      borderRadius: "2px",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
    },
    h1: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: "clamp(32px, 5vw, 52px)",
      fontWeight: "700",
      color: "#ffffff",
      lineHeight: "1.2",
      margin: "0 0 24px",
    },
    meta: {
      fontSize: "13px",
      color: "#8899aa",
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      marginBottom: "36px",
      flexWrap: "wrap",
    },
    divider: {
      width: "80px",
      height: "2px",
      background: "linear-gradient(90deg, transparent, #c9a84c, transparent)",
      margin: "0 auto 48px",
      border: "none",
    },
    adPlaceholder: {
      maxWidth: "800px",
      margin: "0 auto 56px",
      padding: "0 24px",
    },
    adBox: {
      width: "100%",
      maxWidth: "728px",
      height: "90px",
      margin: "0 auto",
      border: "2px dashed rgba(201, 168, 76, 0.5)",
      borderRadius: "4px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#8899aa",
      fontSize: "12px",
      letterSpacing: "0.1em",
      fontFamily: "'DM Mono', monospace",
      backgroundColor: "rgba(201, 168, 76, 0.03)",
    },
    article: {
      maxWidth: "800px",
      margin: "0 auto",
      padding: "0 24px 80px",
    },
    h2: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: "clamp(24px, 3.5vw, 34px)",
      fontWeight: "600",
      color: "#c9a84c",
      margin: "56px 0 20px",
      lineHeight: "1.3",
    },
    p: {
      fontSize: "15px",
      color: "#c8d6e5",
      marginBottom: "20px",
      lineHeight: "1.9",
    },
    tableWrapper: {
      overflowX: "auto",
      margin: "32px 0",
      borderRadius: "8px",
      border: "1px solid rgba(201, 168, 76, 0.2)",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      backgroundColor: "#0d1420",
      fontSize: "14px",
    },
    th: {
      backgroundColor: "rgba(201, 168, 76, 0.12)",
      color: "#c9a84c",
      padding: "14px 20px",
      textAlign: "left",
      fontFamily: "'DM Mono', monospace",
      fontSize: "12px",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      borderBottom: "1px solid rgba(201, 168, 76, 0.2)",
    },
    td: {
      padding: "13px 20px",
      color: "#c8d6e5",
      borderBottom: "1px solid rgba(255,255,255,0.05)",
      fontFamily: "'DM Mono', monospace",
      fontSize: "14px",
    },
    tdHighlight: {
      padding: "13px 20px",
      color: "#4ade80",
      borderBottom: "1px solid rgba(255,255,255,0.05)",
      fontFamily: "'DM Mono', monospace",
      fontSize: "14px",
      fontWeight: "500",
    },
    tipsBox: {
      backgroundColor: "#0d1420",
      border: "1px solid rgba(201, 168, 76, 0.2)",
      borderRadius: "8px",
      padding: "32px 36px",
      margin: "32px 0",
    },
    tipsTitle: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: "22px",
      color: "#c9a84c",
      marginBottom: "20px",
      fontWeight: "600",
    },
    tipItem: {
      display: "flex",
      gap: "16px",
      marginBottom: "18px",
      alignItems: "flex-start",
    },
    tipNumber: {
      minWidth: "28px",
      height: "28px",
      borderRadius: "50%",
      backgroundColor: "rgba(201, 168, 76, 0.15)",
      border: "1px solid rgba(201, 168, 76, 0.4)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#c9a84c",
      fontSize: "12px",
      fontWeight: "500",
      marginTop: "2px",
    },
    tipText: {
      fontSize: "14px",
      color: "#c8d6e5",
      lineHeight: "1.8",
    },
    ctaBox: {
      background: "linear-gradient(135deg, #0d1420 0%, #111827 100%)",
      border: "1px solid rgba(201, 168, 76, 0.35)",
      borderRadius: "10px",
      padding: "40px 36px",
      margin: "48px 0",
      textAlign: "center",
    },
    ctaTitle: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: "26px",
      color: "#ffffff",
      marginBottom: "12px",
      fontWeight: "700",
    },
    ctaText: {
      fontSize: "14px",
      color: "#8899aa",
      marginBottom: "28px",
      lineHeight: "1.7",
    },
    ctaButton: {
      display: "inline-block",
      padding: "14px 36px",
      background: "linear-gradient(135deg, #c9a84c 0%, #a07830 100%)",
      color: "#080d16",
      fontFamily: "'DM Mono', monospace",
      fontSize: "13px",
      fontWeight: "500",
      letterSpacing: "0.08em",
      textDecoration: "none",
      borderRadius: "4px",
      textTransform: "uppercase",
    },
    highlight: {
      color: "#c9a84c",
      fontWeight: "500",
    },
    disclaimer: {
      marginTop: "56px",
      paddingTop: "24px",
      borderTop: "1px solid rgba(255,255,255,0.07)",
      fontSize: "12px",
      color: "#556677",
      lineHeight: "1.7",
    },
    footer: {
      backgroundColor: "#060b13",
      borderTop: "1px solid rgba(201, 168, 76, 0.15)",
      padding: "48px 40px 32px",
    },
    footerInner: {
      maxWidth: "1100px",
      margin: "0 auto",
    },
    footerTop: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "wrap",
      gap: "32px",
      marginBottom: "40px",
    },
    footerLogo: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: "26px",
      fontWeight: "700",
      color: "#c9a84c",
      textDecoration: "none",
    },
    footerTagline: {
      fontSize: "12px",
      color: "#8899aa",
      marginTop: "6px",
      fontFamily: "'DM Mono', monospace",
    },
    footerNav: {
      display: "flex",
      gap: "28px",
      flexWrap: "wrap",
      alignItems: "center",
    },
    footerLink: {
      fontSize: "13px",
      color: "#8899aa",
      textDecoration: "none",
      fontFamily: "'DM Mono', monospace",
    },
    footerCopy: {
      fontSize: "12px",
      color: "#445566",
      textAlign: "center",
      paddingTop: "24px",
      borderTop: "1px solid rgba(255,255,255,0.05)",
      fontFamily: "'DM Mono', monospace",
    },
  };

  const tableData = [
    { credit: "760–850 (Exceptional)", rate30: "5.85%", rate15: "5.20%", monthly: "$1,183", label: "excellent" },
    { credit: "720–759 (Very Good)", rate30: "6.10%", rate15: "5.45%", monthly: "$1,216", label: "good" },
    { credit: "680–719 (Good)", rate30: "6.45%", rate15: "5.75%", monthly: "$1,258", label: "average" },
    { credit: "640–679 (Fair)", rate30: "7.10%", rate15: "6.35%", monthly: "$1,342", label: "below" },
    { credit: "580–639 (Poor)", rate30: "7.95%", rate15: "7.20%", monthly: "$1,461", label: "poor" },
  ];

  return (
    <div style={styles.page}>
      {/* NAV */}
      <nav style={styles.nav}>
        <a href="/" style={styles.logo}>FinancePro</a>
        <a href="/blog" style={styles.backLink}>← Back to Blog</a>
      </nav>

      {/* HERO */}
      <header style={styles.hero}>
        <div style={styles.tagRow}>
          <span style={styles.tag}>Mortgage</span>
          <span style={styles.tag}>Home Loans</span>
          <span style={styles.tag}>Interest Rates</span>
        </div>
        <h1 style={styles.h1}>What Is a Good Interest Rate for a Mortgage?</h1>
        <div style={styles.meta}>
          <span>April 3, 2026</span>
          <span>·</span>
          <span>7 min read</span>
          <span>·</span>
          <span style={{ color: "#c9a84c" }}>FinancePro Editorial</span>
        </div>
        <hr style={styles.divider} />
      </header>

      {/* ADSENSE PLACEHOLDER */}
      <div style={styles.adPlaceholder}>
        <div style={styles.adBox}>ADVERTISEMENT — 728×90</div>
      </div>

      {/* ARTICLE */}
      <article style={styles.article}>

        <p style={styles.p}>
          If you're shopping for a home loan in 2026, one of the first questions you'll ask is: <span style={styles.highlight}>what is a good interest rate for a mortgage?</span> The honest answer is that "good" is relative — it depends on your credit score, loan type, down payment, and the broader economic environment. However, by understanding the benchmarks lenders use and knowing exactly which levers to pull, you can position yourself to secure a mortgage rate that saves you tens of thousands of dollars over the life of your loan.
        </p>

        <h2 style={styles.h2}>Understanding Mortgage Rate Benchmarks in 2026</h2>
        <p style={styles.p