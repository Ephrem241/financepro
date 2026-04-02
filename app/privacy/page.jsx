import PolicyLayout from '../../components/PolicyLayout';

export const metadata = {
  title: 'Privacy Policy | FinancePro',
  description: 'Privacy Policy for FinancePro — how we handle your data, cookies, and Google AdSense advertising.',
  alternates: { canonical: 'https://financepro.io/privacy' },
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
};

export default function PrivacyPage() {
  return (
    <PolicyLayout title="Privacy Policy" subtitle="Last updated: April 2, 2026">
      <p style={S.p}>
        Welcome to FinancePro ("we", "us", or "our"). This Privacy Policy explains how we collect, use,
        and protect information when you visit <strong style={{ color: '#f0f4f8' }}>financepro.io</strong> (the "Site").
        By using the Site, you agree to the terms described below.
      </p>

      <h2 style={S.h2}>1. Information We Collect</h2>
      <p style={S.p}>
        <strong style={{ color: '#f0f4f8' }}>We do not collect any personally identifiable information (PII).</strong> All
        financial calculations on FinancePro run entirely in your browser using JavaScript. No numbers you
        enter into any calculator are ever transmitted to our servers.
      </p>
      <p style={S.p}>
        We may collect non-personal, aggregated data through third-party services (described below),
        including:
      </p>
      <ul style={S.ul}>
        <li>Browser type and version</li>
        <li>Pages visited and time spent</li>
        <li>Referring URL</li>
        <li>General geographic region (country/city level)</li>
      </ul>

      <h2 style={S.h2}>2. Cookies</h2>
      <p style={S.p}>
        FinancePro uses cookies — small text files stored on your device — to support advertising and
        analytics. We do not use cookies to store personal data.
      </p>
      <p style={S.p}>
        Cookies used on this Site include those set by:
      </p>
      <ul style={S.ul}>
        <li><strong style={{ color: '#f0f4f8' }}>Google AdSense</strong> — for serving and measuring advertisements</li>
        <li><strong style={{ color: '#f0f4f8' }}>Google Analytics</strong> (if enabled) — for understanding site traffic</li>
      </ul>
      <p style={S.p}>
        You can control cookies through your browser settings. Disabling cookies may affect ad
        personalisation but will not affect the functionality of any calculator.
      </p>

      <h2 style={S.h2}>3. Google AdSense &amp; Advertising</h2>
      <p style={S.p}>
        We use <strong style={{ color: '#f0f4f8' }}>Google AdSense</strong> to display advertisements on this Site.
        Google uses the DoubleClick DART cookie to serve ads based on your prior visits to this Site and
        other sites on the internet.
      </p>
      <p style={S.p}>
        Google's use of advertising cookies enables it and its partners to serve ads based on your visit to
        our Site and/or other sites on the internet. You may opt out of personalised advertising by visiting{' '}
        <a href="https://www.google.com/settings/ads" style={S.a} target="_blank" rel="noopener noreferrer">
          Google Ads Settings
        </a>
        . You can also opt out via the{' '}
        <a href="https://optout.networkadvertising.org/" style={S.a} target="_blank" rel="noopener noreferrer">
          Network Advertising Initiative opt-out page
        </a>
        .
      </p>
      <p style={S.p}>
        For more information on how Google collects and uses data, please review{' '}
        <a href="https://policies.google.com/privacy" style={S.a} target="_blank" rel="noopener noreferrer">
          Google's Privacy &amp; Terms
        </a>
        .
      </p>

      <h2 style={S.h2}>4. Third-Party Links</h2>
      <p style={S.p}>
        The Site may contain links to third-party websites. We have no control over the content or privacy
        practices of those sites and accept no responsibility for them. We encourage you to read the privacy
        policies of any external site you visit.
      </p>

      <h2 style={S.h2}>5. Children's Privacy</h2>
      <p style={S.p}>
        FinancePro is not directed at children under the age of 13. We do not knowingly collect personal
        information from children. If you believe a child has provided personal information through our
        Site, please contact us immediately.
      </p>

      <h2 style={S.h2}>6. GDPR — Rights of EU Residents</h2>
      <p style={S.p}>
        If you are located in the European Economic Area (EEA), you have the right to access, rectify, or
        erase any personal data we hold about you. Since we do not collect PII directly, the primary data
        you may wish to manage relates to Google's advertising cookies. Please use the opt-out links in
        Section 3 above, or contact us and we will assist you.
      </p>

      <h2 style={S.h2}>7. CCPA — Rights of California Residents</h2>
      <p style={S.p}>
        California residents have the right to know what personal information is collected, to request
        deletion, and to opt out of the sale of personal information. We do not sell personal information.
        For any CCPA requests, please contact us at the address below.
      </p>

      <h2 style={S.h2}>8. Changes to This Policy</h2>
      <p style={S.p}>
        We may update this Privacy Policy from time to time. Changes will be posted on this page with an
        updated revision date. Continued use of the Site after changes constitutes acceptance of the
        revised policy.
      </p>

      <h2 style={S.h2}>9. Contact Us</h2>
      <p style={S.p}>
        If you have any questions about this Privacy Policy, please contact us at:{' '}
        <a href="mailto:privacy@financepro.io" style={S.a}>privacy@financepro.io</a>
      </p>
    </PolicyLayout>
  );
}
