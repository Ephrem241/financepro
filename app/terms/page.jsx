import PolicyLayout from '../../components/PolicyLayout';

export const metadata = {
  title: 'Terms of Service | FinancePro',
  description: 'Terms of Service for FinancePro. Our calculators are for informational purposes only and do not constitute financial advice.',
  alternates: { canonical: 'https://financepro.io/terms' },
};

const S = {
  h2: {
    fontFamily: 'var(--font-cormorant)',
    fontSize: '1.5rem',
    fontWeight: 600,
    color: '#c9a84c',
    margin: '2.5rem 0 0.75rem',
  },
  p: {
    color: '#8899aa',
    lineHeight: 1.8,
    fontSize: '0.9375rem',
    marginBottom: '1rem',
  },
  ul: {
    color: '#8899aa',
    lineHeight: 1.8,
    fontSize: '0.9375rem',
    paddingLeft: '1.5rem',
    marginBottom: '1rem',
  },
  a: { color: '#c9a84c', textDecoration: 'none' },
  box: {
    background: 'rgba(201,168,76,0.06)',
    border: '1px solid rgba(201,168,76,0.25)',
    borderRadius: '8px',
    padding: '1.25rem 1.5rem',
    marginBottom: '1.5rem',
    color: '#f0f4f8',
    lineHeight: 1.7,
    fontSize: '0.9375rem',
  },
};

export default function TermsPage() {
  return (
    <PolicyLayout title="Terms of Service" subtitle="Last updated: April 2, 2026">
      <div style={S.box}>
        <strong>Important:</strong> FinancePro provides financial calculators for <strong>informational and
        educational purposes only</strong>. Nothing on this Site constitutes financial, investment, tax, or
        legal advice. Always consult a qualified professional before making financial decisions.
      </div>

      <p style={S.p}>
        Please read these Terms of Service ("Terms") carefully before using{' '}
        <strong style={{ color: '#f0f4f8' }}>financepro.io</strong> (the "Site") operated by FinancePro ("we",
        "us", or "our"). By accessing or using the Site, you agree to be bound by these Terms.
      </p>

      <h2 style={S.h2}>1. Acceptance of Terms</h2>
      <p style={S.p}>
        By accessing the Site, you confirm that you are at least 13 years of age, have read and understood
        these Terms, and agree to be bound by them. If you do not agree, please do not use the Site.
      </p>

      <h2 style={S.h2}>2. Description of Service</h2>
      <p style={S.p}>
        FinancePro provides free, browser-based financial calculators including Loan EMI, Mortgage,
        Compound Interest, Tax Bracket, Currency Converter, Savings Goal Planner, Retirement Calculator,
        and Net Worth Calculator. All calculations are performed locally in your browser; no data is
        transmitted to our servers.
      </p>

      <h2 style={S.h2}>3. Financial Disclaimer — Not Professional Advice</h2>
      <p style={S.p}>
        <strong style={{ color: '#f0f4f8' }}>The results produced by FinancePro calculators are estimates only.</strong>{' '}
        They are based on the inputs you provide and standard mathematical formulas. Results may differ
        from those provided by banks, lenders, tax authorities, or financial advisers due to:
      </p>
      <ul style={S.ul}>
        <li>Compounding conventions (daily vs. monthly vs. annual)</li>
        <li>Fees, insurance, and other charges not included in our models</li>
        <li>Changes in interest rates, tax laws, or exchange rates</li>
        <li>Individual financial circumstances</li>
      </ul>
      <p style={S.p}>
        <strong style={{ color: '#f0f4f8' }}>Nothing on this Site is financial, investment, legal, or tax advice.</strong>{' '}
        Always verify results with your bank, lender, or a qualified financial professional before making
        any financial decision.
      </p>

      <h2 style={S.h2}>4. Intellectual Property</h2>
      <p style={S.p}>
        All content on the Site — including text, design, code, graphics, and calculators — is owned by
        FinancePro or its licensors and is protected by applicable copyright and intellectual property
        laws. You may not reproduce, distribute, or create derivative works without our express written
        permission.
      </p>

      <h2 style={S.h2}>5. Permitted Use</h2>
      <p style={S.p}>You may use the Site for personal, non-commercial purposes. You agree not to:</p>
      <ul style={S.ul}>
        <li>Use the Site for any unlawful purpose</li>
        <li>Attempt to reverse-engineer, scrape, or copy our calculators for commercial use</li>
        <li>Interfere with the proper functioning of the Site</li>
        <li>Misrepresent calculator outputs as professional financial advice</li>
        <li>Frame or mirror any part of the Site without prior written consent</li>
      </ul>

      <h2 style={S.h2}>6. Disclaimer of Warranties</h2>
      <p style={S.p}>
        The Site is provided on an <strong style={{ color: '#f0f4f8' }}>"as is" and "as available"</strong> basis
        without warranties of any kind, either express or implied. We do not warrant that:
      </p>
      <ul style={S.ul}>
        <li>The Site will be uninterrupted or error-free</li>
        <li>Calculation results are accurate, complete, or up to date</li>
        <li>The Site is free of viruses or other harmful components</li>
      </ul>

      <h2 style={S.h2}>7. Limitation of Liability</h2>
      <p style={S.p}>
        To the fullest extent permitted by law, FinancePro shall not be liable for any indirect,
        incidental, special, consequential, or punitive damages arising from your use of, or inability
        to use, the Site or any calculator results — including financial losses, loss of data, or loss of
        profits — even if we have been advised of the possibility of such damages.
      </p>

      <h2 style={S.h2}>8. Third-Party Services</h2>
      <p style={S.p}>
        The Site uses Google AdSense for advertising. Your use of the Site is also governed by{' '}
        <a href="https://policies.google.com/terms" style={S.a} target="_blank" rel="noopener noreferrer">
          Google's Terms of Service
        </a>
        . We are not responsible for the content of third-party advertisements.
      </p>

      <h2 style={S.h2}>9. Changes to These Terms</h2>
      <p style={S.p}>
        We reserve the right to modify these Terms at any time. Changes take effect immediately upon
        posting. Your continued use of the Site after any changes constitutes your acceptance of the
        revised Terms.
      </p>

      <h2 style={S.h2}>10. Governing Law</h2>
      <p style={S.p}>
        These Terms are governed by and construed in accordance with applicable law. Any disputes arising
        from these Terms or your use of the Site shall be subject to the exclusive jurisdiction of the
        competent courts.
      </p>

      <h2 style={S.h2}>11. Contact Us</h2>
      <p style={S.p}>
        For questions about these Terms, please contact us at:{' '}
        <a href="mailto:legal@financepro.io" style={S.a}>legal@financepro.io</a>
      </p>
    </PolicyLayout>
  );
}
