import { useEffect } from 'react';
import MainLayout from '../../components/MainLayout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useLocation } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import BrandLogo from '../../components/BrandLogo';
import facebookIcon from '../../../static/icons/facebook-icon.png';
import linkedinIcon from '../../../static/icons/linkedin-icon.png';
import styles from './kvipp-lunsj.module.css';

function KvippLunsjSection() {
  const location = useLocation();
  const { siteConfig } = useDocusaurusContext();
  const shareUrl = siteConfig.url + location.pathname;
  const title = 'Kvipp Lunsj';

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
    <section className={styles.kvippLunsjSection}>
      <div className='container'>
        <div className={styles.kvippLunsjHeroText}>
          <h1 className={styles.kvippLunsjTitle}>Kvipp Lunsj</h1>
        </div>
        {/* Main content grid */}
        <div className={styles.kvippLunsjGrid}>
          <div className={styles.kvippLunsjContent}>
            <div className={styles.kvippLunsjBenefits}>
              <h3>Betonmast tok på rekordtid kontroll på dokumentasjon av opplæring!</h3>
              <div className={styles.kvippLunsjImageWrapper}>
                <img 
                  src={useBaseUrl('/img/kvipp-lunsj/Kvipp Lunsj.png')}
                  className={styles.kvippLunsjBenefitImage}
                />
              </div>
              <p className={styles.kvippLunsjBenefitsText}>
                Betonmast Innlandet tok på rekordtid kontroll på tusenvis av opplæringer og dokumentasjon. Hvordan klarte de dette? Og hvordan sikrer de fokus fremover? Håvard Olsen Vibe (HMS-sjef Betonmast) og John Bratteng (HMSK-sjef Betonmast Innlandet) deler sine erfaringer. Velkommen til Kvipp Lunsj!
              </p>

              <div className={styles.kvippLunsjEventInfo}>
                <div className={styles.kvippLunsjInfoItem}>
                  <span className={styles.kvippLunsjInfoIcon}>🕐</span>
                  <span className={styles.kvippLunsjInfoText}>Tid: 30. januar kl. 12.00-12.45</span>
                </div>
                <div className={styles.kvippLunsjInfoItem}>
                  <span className={styles.kvippLunsjInfoIcon}>📍</span>
                  <span className={styles.kvippLunsjInfoText}>Sted: Digitalt </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.kvippLunsjFormContainer}>
            <div className={styles.kvippLunsjFormWrapper}>
              <div className={styles.kvippLunsjFormEmbed}>
                <div className="elfsight-app-1774357e-e44f-4135-95da-be1910aad291" data-elfsight-app-lazy></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.kvippLunsjShare}>
          <div className="blog-share text-center">
            <div className="is-divider medium"></div>
            <div className="social-icons">
              <button 
                onClick={copyToClipboard}
                className={styles.kvippLunsjShareButton}
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

// Kvipp Lunsj page
export default function KvippLunsj() {
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
      <KvippLunsjSection />
    </MainLayout>
  );
}
