import React, { useEffect } from 'react';
import MainLayout from '../components/MainLayout';
import bookDemoForm from '../../data/BookDemoForm.js';
import { useLocation } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from '@docusaurus/useBaseUrl';
import Translate from '@docusaurus/Translate';
import BrandLogo from '../components/BrandLogo';
import facebookIcon from '../../static/icons/facebook-icon.png';
import linkedinIcon from '../../static/icons/linkedin-icon.png';
import styles from './book-demo-kvipp.module.css';

function BookDemoSection() {
  const location = useLocation();
  const { siteConfig } = useDocusaurusContext();
  const shareUrl = siteConfig.url + location.pathname;
  const title = 'Book demo av Kvipp';
  const byggImage = useBaseUrl('/img/bygg.jpg');

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
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section className={styles.bookDemoSection}>
      <div className='container'>
        <div className={styles.bookDemoGrid}>
          <div className={styles.bookDemoContent}>
            <div className={styles.bookDemoHero} style={{ backgroundImage: `url(${byggImage})` }}>
              <div className={styles.bookDemoOverlay}></div>
              <div className={styles.bookDemoTextContent}>
                <h1 className={styles.bookDemoTitle}>
                  <Translate id="book-demo.title" description="Book demo page title">
                    Book demo av Kvipp
                  </Translate>
                </h1>
                <p className={styles.bookDemoSubtitle}>
                  <Translate id="book-demo.subtitle" description="Book demo page subtitle">
                    Se hvordan Kvipp kan gi deg full kontroll på dokumentasjon av opplæring fra a til å.
                  </Translate>
                </p>

                <div className={styles.bookDemoBenefits}>
                  <h3>
                    <Translate id="book-demo.benefits.title" description="Benefits title">
                      Demo av Kvipp
                    </Translate>
                  </h3>
                  <p className={styles.bookDemoBenefitsText}>
                    <Translate id="book-demo.benefits.text" description="Demo description text">
                      Uforpliktende samtale og demonstrasjon av løsningen i praksis. Agendaen er typisk: Behovsavklaring, presentasjon og gjennomgang av selve produktet og tips til hvordan komme i gang. Til slutt avtaler vi veien videre.
                    </Translate>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.bookDemoFormContainer}>
            <div className={styles.bookDemoFormWrapper}>
              <div className={styles.bookDemoFormEmbed}>
                <div dangerouslySetInnerHTML={{ __html: bookDemoForm }} />
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.bookDemoShare}>
          <div className="blog-share text-center">
            <div className="is-divider medium"></div>
            <div className="social-icons">
              <button 
                onClick={copyToClipboard}
                className={styles.bookDemoShareButton}
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

export default function BookDemoPage() {
  useEffect(() => {
    let element = document.querySelector('.navbar');
    element.classList.add('white-header')
    return () => {
      element.classList.remove('white-header')
    }
  }, [])

  return (
    <MainLayout>
      <BookDemoSection />
    </MainLayout>
  );
}

