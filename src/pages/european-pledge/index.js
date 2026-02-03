import Head from '@docusaurus/Head';
import styles from './styles.module.css';

const subscriptions = [
  // Already European
  { service: 'Infomaniak', provider: 'Infomaniak (Switzerland)', plan: 'Switched in Dec. 25. Replaced Microsoft 365, Mailchimp, Kagi and Slack', status: 'done' },
  { service: 'AIFlow CRM', provider: 'AIFlow (Norway)', plan: 'Already European', status: 'done' },
  { service: 'Tripletex', provider: 'Tripletex (Norway)', plan: 'Already European', status: 'keeping' },
  { service: 'Profrakt', provider: 'Profrakt (Norway)', plan: 'Already European', status: 'keeping' },
  { service: 'Cardboard', provider: 'Cardboard (Norway)', plan: 'Already European', status: 'keeping' },
  { service: 'Veed.io', provider: 'Veed.io (UK)', plan: 'Already European', status: 'keeping' },
  { service: 'Excalidraw+', provider: 'Excalidraw (Czech Republic)', plan: 'Already European', status: 'keeping' },
  { service: 'Semaphore', provider: 'Semaphore (Serbia)', plan: 'Already European', status: 'keeping' },
  { service: 'Elfsight', provider: 'Elfsight (Armenia)', plan: 'Already European', status: 'keeping' },

  // Non-European - evaluating alternatives
  { service: 'Border0', provider: 'Border0 Inc (Canada)', plan: 'Canada is practically European 🥰', status: 'keeping' },
  { service: 'ClickSend', provider: 'ClickSend (Australia)', plan: 'Australia is practically European 🥰', status: 'keeping' },
  { service: 'DigitalOcean', provider: 'DigitalOcean (USA)', plan: 'Evaluating service by service. Storage moving to Infomaniak, Feb. 26', status: 'in-progress' },
  { service: 'Google Storage', provider: 'Google (USA)', plan: 'Moving to Infomaniak, Feb. 26', status: 'in-progress' },
  { service: 'DynTube', provider: 'DynTube (USA)', plan: 'Switching to Infomaniak VOD, Feb. 26', status: 'in-progress' },
  { service: 'Claude', provider: 'Anthropic (USA)', plan: 'Evaluating alternatives', status: 'evaluating...' },
  { service: 'SendGrid', provider: 'Twilio (USA)', plan: 'Evaluating alternatives', status: 'evaluating...' },
  { service: 'Basecamp', provider: 'Basecamp (USA)', plan: 'Evaluating alternatives', status: 'evaluating...' },
  { service: 'Cursor', provider: 'Cursor (USA)', plan: 'Evaluating alternatives', status: 'evaluating...' },
  { service: 'Mailtrap', provider: 'Mailtrap (USA)', plan: 'Evaluating alternatives', status: 'evaluating...' },
  { service: 'UTunnel', provider: 'UTunnel (USA)', plan: 'Replaced by Border0, Aug. 25', status: 'replaced' },
  { service: 'Logto', provider: 'Logto (USA)', plan: 'Evaluating alternatives', status: 'evaluating...' },
  { service: 'SqlBak', provider: 'SqlBak (USA)', plan: 'Evaluating alternatives', status: 'evaluating...' },
  { service: 'Kagi', provider: 'Kagi (USA)', plan: 'Replaced by Qwant and Infomaniak Euria, Dec. 25', status: 'replaced' },
  { service: 'Mailchimp', provider: 'Mailchimp (USA)', plan: 'Replaced by Infomaniak, Dec. 25', status: 'replaced' },
  { service: 'SparkPost', provider: 'SparkPost (USA)', plan: 'Evaluating alternatives', status: 'evaluating...' },
  { service: 'Facebook', provider: 'Meta (USA)', plan: 'Evaluating alternatives', status: 'evaluating...' },
  { service: 'LinkedIn', provider: 'LinkedIn (USA)', plan: 'Evaluating alternatives', status: 'evaluating...' },
  { service: 'Sentry', provider: 'Sentry (USA)', plan: 'Evaluating alternatives', status: 'evaluating...' },
  { service: 'GitHub', provider: 'GitHub (USA)', plan: 'Evaluating alternatives', status: 'evaluating...' },
  { service: 'Slack', provider: 'Slack (USA)', plan: 'Replaced by Infomaniak, Dec. 25', status: 'replaced' },
  { service: 'OpenAI', provider: 'OpenAI (USA)', plan: 'Evaluating alternatives', status: 'evaluating...' },
  { service: 'Microsoft 365', provider: 'Microsoft (USA)', plan: 'Replaced by Infomaniak, Dec. 25', status: 'replaced' },
  { service: 'Google Kubernetes', provider: 'Google (USA)', plan: 'Evaluating alternatives', status: 'evaluating...' },
  { service: 'Other Google Cloud Services', provider: 'Google (USA)', plan: 'Evaluating alternatives', status: 'evaluating...' },
  { service: 'Twilio', provider: 'Twilio (USA)', plan: 'Evaluating alternatives', status: 'evaluating...' },
  { service: 'Stripe', provider: 'Stripe (USA)', plan: 'Evaluating alternatives', status: 'evaluating...' },
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
                <th>Service</th>
                <th>Current Provider</th>
                <th>Plan</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {subscriptions.map((sub, idx) => (
                <tr key={idx}>
                  <td>{sub.service}</td>
                  <td>{sub.provider}</td>
                  <td>{sub.plan}</td>
                  <td><StatusBadge status={sub.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className={styles.updated}>Last updated: February 2025</p>
        </main>

        <footer className={styles.footer}>
          <a href="/">Back to digiquip.no</a>
        </footer>
      </div>
    </>
  );
}
