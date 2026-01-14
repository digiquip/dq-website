import { useEffect } from 'react';
import MainLayout from '../../components/MainLayout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useLocation } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import BrandLogo from '../../components/BrandLogo';
import facebookIcon from '../../../static/icons/facebook-icon.png';
import linkedinIcon from '../../../static/icons/linkedin-icon.png';
import styles from './event-maskinforordningen.module.css';

function EventMaskinforordningenSection() {
  const location = useLocation();
  const { siteConfig } = useDocusaurusContext();
  const shareUrl = siteConfig.url + location.pathname;
  const title = 'Hva betyr Maskinforordningen for utleiebransjen?';

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      alert('URL kopiert til utklippstavlen!');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      const existingScript = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');
      if (existingScript && document.body.contains(existingScript)) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section className={styles.eventMaskinforordningenSection}>
      <div className='container'>
        <div className={styles.eventMaskinforordningenHeroText}>
          <h1 className={styles.eventMaskinforordningenTitle}>Seminar om Maskinforordningen</h1>
        </div>
        {/* Main content grid */}
        <div className={styles.eventMaskinforordningenGrid}>
          <div className={styles.eventMaskinforordningenContent}>
            <div className={styles.eventMaskinforordningenBenefits}>
              <div className={styles.eventMaskinforordningenImageWrapper}>
                <img 
                  src={useBaseUrl('/img/kvipp-lunsj/kvipp_lunsj_seminar.jpg')}
                  className={styles.eventMaskinforordningenBenefitImage}
                />
              </div>
              <h3>Hva betyr Maskinforordningen for utleiebransjen?</h3>
              <div className={styles.eventMaskinforordningenBenefitsText}>
                <p>Nå skjer det! Maskinforordningen trer i kraft i 2027. Hva betyr det for utleiebransjen?</p>
                <p>Vi inviterer inn til et gratis seminar på Construction City.</p>
                <ul>
                  <li>Hva er ditt ansvar som utleier?</li>
                  <li>Hva kan du kreve av dine leverandører?</li>
                  <li>Hvordan løser du de nye kravene?</li>
                </ul>
              </div>

              <div className={styles.eventMaskinforordningenEventInfo}>
                <div className={styles.eventMaskinforordningenInfoItem}>
                  <span className={styles.eventMaskinforordningenInfoIcon}>🕐</span>
                  <span className={styles.eventMaskinforordningenInfoText}>Tid: Torsdag 26.februar kl. 10.00 - 12.00. Vi spanderer lunsj!</span>
                </div>
                <div className={styles.eventMaskinforordningenInfoItem}>
                  <span className={styles.eventMaskinforordningenInfoIcon}>📍</span>
                  <span className={styles.eventMaskinforordningenInfoText}>Sted: Construction City </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.eventMaskinforordningenFormContainer}>
            <div className={styles.eventMaskinforordningenFormWrapper}>
              <div className={styles.eventMaskinforordningenFormEmbed}>
                <div className="elfsight-app-0fbfd616-9809-4274-be98-d23fabfaa9c8" data-elfsight-app-lazy></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.eventMaskinforordningenShare}>
          <div className="blog-share text-center">
            <div className="is-divider medium"></div>
            <div className="social-icons">
              <button 
                onClick={copyToClipboard}
                className={styles.eventMaskinforordningenShareButton}
                title="Kopier URL"
              >
                <svg width="33" height="33" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                </svg>
              </button>

              <a href={'https://www.facebook.com/sharer.php?u=' + `${shareUrl}`} 
                data-label="Facebook"
                target="_blank"
                title="Share on Facebook" 
                rel="noopener nofollow">
                <BrandLogo Img={facebookIcon} width={''} height={''} alt={''} />
              </a>

              <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}`}
                target="_blank"
                title="Share on LinkedIn"
                rel="noopener noreferrer nofollow">
                <BrandLogo Img={linkedinIcon} width={''} height={''} alt={''} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Event Maskinforordningen page
export default function EventMaskinforordningen() {
  useEffect(() => {
    let element = document.querySelector('.navbar');
    if (element) {
      element.classList.add('white-header');
    }
    return () => {
      if (element) {
        element.classList.remove('white-header');
      }
    };
  }, []);

  return (
    <MainLayout>
      <EventMaskinforordningenSection />
    </MainLayout>
  );
}

