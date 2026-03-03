import Head from '@docusaurus/Head';
import styles from './styles.module.css';

const subscriptions = [
  // Already European
  { category: 'Collaboration Suite', service: 'kSuite by Infomaniak', country: 'Switzerland 🇨🇭', plan: 'Switched in Dec. 25. Replaced Microsoft 365, Mailchimp, Kagi and Slack', status: 'done' },
  { category: 'Documents/Office Suite', service: 'ONLYOffice', country: 'Open Source 🌎', plan: 'Switched in Dec. 25. Replaced Microsoft Office', status: 'done' },
  { category: 'Newsletter', service: 'Newsletter by Infomaniak', country: 'Switzerland 🇨🇭', plan: 'Replaced by Infomaniak, Jan. 26, replaced Mailchimp', status: 'done' },
  { category: 'CRM', service: 'AIFlow CRM', country: 'Norway 🇳🇴', plan: 'Happy customer since early 2025', status: 'done' },
  { category: 'Error Tracking', service: 'BugSink', country: 'The Netherlands 🇳🇱', plan: 'Switched from Sentry in Feb. 19', status: 'done' },
  { category: 'AI web search', service: 'Linkup', country: 'France 🇫🇷', plan: 'Switched from OpenAI in Feb. 28', status: 'done' },
  { category: 'AI Image Recognition', service: 'Mistral', country: 'France 🇫🇷', plan: 'Switched from OpenAI in Feb. 28', status: 'done' },
  { category: 'Accounting', service: 'Tripletex', country: 'Norway 🇳🇴', plan: 'Happy customer since 2024', status: 'keeping' },
  { category: 'Freight management', service: 'Profrakt', country: 'Norway 🇳🇴', plan: 'Happy customer since 2024', status: 'keeping' },
  { category: 'Accounting', service: 'Cardboard', country: 'Norway 🇳🇴', plan: 'Happy customer since mid 2025', status: 'keeping' },
  { category: 'Video Editor', service: 'Veed.io', country: 'UK 🇬🇧', plan: 'Happy customer since late 2024', status: 'keeping' },
  { category: 'Sketching', service: 'Excalidraw', country: 'Czech Republic 🇨🇿', plan: 'Happy customer since 2024', status: 'keeping' },
  { category: 'CI/CD', service: 'Semaphore', country: 'Serbia 🇷🇸', plan: 'Happy customer since 2022', status: 'keeping' },
  { category: 'Elfsight', service: 'Elfsight', country: 'Armenia 🇦🇲', plan: 'Already European', status: 'keeping' },

  // Non-European - evaluating alternatives
  { category: 'VPN', service: 'Border0', country: 'Canada 🇨🇦', plan: 'Canada is practically European 🥰', status: 'keeping' },
  { category: 'SMS', service: 'ClickSend', country: 'Australia 🇦🇺', plan: 'Australia is practically European 🥰', status: 'keeping' },
  { category: 'Cloud App Hosting', service: 'DigitalOcean', country: 'USA 🇺🇸', plan: 'Evaluating alternatives', status: 'evaluating...' },
  { category: 'Cloud Storage', service: 'DigitalOcean', country: 'USA 🇺🇸', plan: 'Evaluating service by service. Moving to Infomaniak, Feb. 26', status: 'in-progress' },
  { category: 'Cloud Database', service: 'DigitalOcean', country: 'USA 🇺🇸', plan: 'Evaluating alternatives', status: 'evaluating...' },
  { category: 'Cloud Kubernetes', service: 'DigitalOcean', country: 'USA 🇺🇸', plan: 'Evaluating alternatives', status: 'evaluating...' },
  { category: 'Storage', service: 'Google Storage', country: 'USA 🇺🇸', plan: 'Moving to Infomaniak, Feb. 26', status: 'in-progress' },
  { category: 'Video Hosting', service: 'DynTube', country: 'USA 🇺🇸', plan: 'Switching to Infomaniak VOD, Feb. 26', status: 'in-progress' },
  { category: 'CDN', service: 'Cloudflare', country: 'USA 🇺🇸', plan: 'Evaluating alternatives', status: 'evaluating...' },
  { category: 'AI', service: 'Claude', country: 'USA 🇺🇸', plan: 'Evaluating alternatives', status: 'evaluating...' },
  { category: 'Email', service: 'SendGrid', country: 'USA 🇺🇸', plan: 'Evaluating alternatives', status: 'evaluating...' },
  { category: 'Project Management', service: 'Basecamp', country: 'USA 🇺🇸', plan: 'Evaluating alternatives', status: 'evaluating...' },
  { category: 'Code Editor', service: 'Cursor', country: 'USA 🇺🇸', plan: 'Evaluating alternatives', status: 'evaluating...' },
  { category: 'Email', service: 'Mailtrap', country: 'USA 🇺🇸', plan: 'Evaluating alternatives', status: 'evaluating...' },
  { category: 'VPN', service: 'UTunnel', country: 'USA 🇺🇸', plan: 'Replaced by Border0, Aug. 25', status: 'replaced' },
  { category: 'Authentication', service: 'Logto', country: 'USA 🇺🇸', plan: 'Evaluating alternatives', status: 'evaluating...' },
  { category: 'Social Media', service: 'Facebook', country: 'USA 🇺🇸', plan: 'Evaluating alternatives', status: 'evaluating...' },
  { category: 'Social Media', service: 'LinkedIn', country: 'USA 🇺🇸', plan: 'Evaluating alternatives', status: 'evaluating...' },
  { category: 'Error Tracking', service: 'Sentry', country: 'USA 🇺🇸', plan: 'Replaced by BugSink, Feb. 19', status: 'replaced' },
  { category: 'Version Control', service: 'GitHub', country: 'USA 🇺🇸', plan: 'Evaluating alternatives', status: 'evaluating...' },
  { category: 'Communication', service: 'Slack', country: 'USA 🇺🇸', plan: 'Replaced by Infomaniak, Dec. 25', status: 'replaced' },
  { category: 'AI web search', service: 'OpenAI', country: 'USA 🇺🇸', plan: 'Replaced by Linkup, Feb. 28', status: 'replaced' },
  { category: 'AI Image Recognition', service: 'OpenAI', country: 'USA 🇺🇸', plan: 'Replaced by Mistral, Feb. 28', status: 'replaced' },
  { category: 'Collaboration Suite', service: 'Microsoft 365', country: 'USA 🇺🇸', plan: 'Replaced by Infomaniak, Dec. 25', status: 'replaced' },
  { category: 'Container Orchestration', service: 'Google Kubernetes', country: 'USA 🇺🇸', plan: 'Evaluating alternatives', status: 'evaluating...' },
  { category: 'Generic Cloud', service: 'Google Cloud Services', country: 'USA 🇺🇸', plan: 'Evaluating alternatives', status: 'evaluating...' },
  { category: 'SMS', service: 'Twilio', country: 'USA 🇺🇸', plan: 'Evaluating alternatives', status: 'evaluating...' },
  { category: 'Payment', service: 'Stripe', country: 'USA 🇺🇸', plan: 'Evaluating alternatives', status: 'evaluating...' },
];

const changelog = [
  { date: '2026-02-05', description: 'Separated out the services from DigitalOcean. Recording our plan to go from Sentry to BugSink.' },
  { date: '2026-02-19', description: 'Switched from Sentry to BugSink' },
  { date: '2026-02-28', description: 'Separated our usage of OpenAI services. Switched from OpenAI to Linkup for AI web search and from OpenAI to Mistral for AI image recognition' },
];

function StatusBadge({ status }) {
  const labels = {
    'done': '🎉 Switched',
    'in-progress': '🔄 In progress',
    'planned': 'Planned',
    'keeping': 'Keeping',
    'replaced': '👋 Replaced',
    'evaluating...': 'Evaluating...',
  };
  const cssClass = status.replace('...', '');
  return <span className={`${styles.badge} ${styles[cssClass]}`}>{labels[status]}</span>;
}

export default function EuropeanPledge() {
  return (
    <>
      <Head>
        <title>European Software Pledge | DigiQuip</title>
        <meta name="description" content="Our commitment to switching to European software companies" />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.euBadge}>
            <div className={styles.euStars}>
              {[...Array(12)].map((_, i) => (
                <span key={i} className={styles.star}>★</span>
              ))}
            </div>
            <span className={styles.euText}>Made in Europe</span>
          </div>

          <h1>Our European Software Pledge</h1>

          <p className={styles.intro}>
            Europe has a lot to be proud of, and we are proud to be part of it.
            After years of building software and mindlessly subscribing to SaaS services, we are now taking a step back and evaluating our choices.
            The result is that <a href="/" >DigiQuip AS</a> is actively working to switch our SaaS subscriptions to European alternatives
            wherever possible. This is a work in progress, and we will update this page as we switch services.
          </p>

          <h2>Current Status</h2>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>Category</th>
                <th>Service</th>
                <th>Country</th>
                <th>Plan</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {subscriptions.map((sub, idx) => (
                <tr key={idx}>
                  <td>{sub.category}</td>
                  <td>{sub.service}</td>
                  <td>{sub.country}</td>
                  <td>{sub.plan}</td>
                  <td><StatusBadge status={sub.status} /></td>
                </tr> 
              ))}
            </tbody>
          </table>

          <h2>Changelog</h2>
          <ul className={styles.changelog}>
            {changelog.map((entry, idx) => (
              <li key={idx}>
                <strong>{entry.date}</strong> &mdash; {entry.description}
              </li>
            ))}
          </ul>
        </main>

        <footer className={styles.footer}>
          <a href="/">Back to digiquip.no</a>
        </footer>
      </div>
    </>
  );
}
