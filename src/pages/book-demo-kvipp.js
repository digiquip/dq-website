import React, { useEffect } from 'react';
import MainLayout from '../components/MainLayout';
import bookDemoForm from '../../data/BookDemoForm.js';
import { useLocation } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
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
        {/* Title section on top */}
        <div className={styles.bookDemoHeroText}>
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
        </div>

        {/* Main content grid */}
        <div className={styles.bookDemoGrid}>
          <div className={styles.bookDemoContent}>
            <div className={styles.bookDemoBenefits}>
              <h3>
                <Translate id="book-demo.benefits.title" description="Benefits title">
                  Demo
                </Translate>
              </h3>
              <p className={styles.bookDemoBenefitsText}>
                <Translate id="book-demo.benefits.text" description="Demo description text">
                  Uforpliktende samtale og demonstrasjon av løsningen i praksis.
                </Translate>
              </p>
              <div className={styles.bookDemoBenefitsText}>
                <Translate id="book-demo.benefits.agenda" description="Demo agenda text">
                  Agendaen er typisk:
                </Translate>
                <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: '1rem' }}>
                  <li style={{ marginBottom: '0.5rem', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#f05c09', fontWeight: 'bold' }}>✓</span>
                    <Translate id="book-demo.benefits.agenda1" description="Agenda item 1">
                      Behovsavklaring
                    </Translate>
                  </li>
                  <li style={{ marginBottom: '0.5rem', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#f05c09', fontWeight: 'bold' }}>✓</span>
                    <Translate id="book-demo.benefits.agenda2" description="Agenda item 2">
                      Presentasjon og gjennomgang av selve produktet
                    </Translate>
                  </li>
                  <li style={{ marginBottom: '0.5rem', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#f05c09', fontWeight: 'bold' }}>✓</span>
                    <Translate id="book-demo.benefits.agenda3" description="Agenda item 3">
                      Tips til hvordan komme i gang
                    </Translate>
                  </li>
                  <li style={{ marginBottom: '0.5rem', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#f05c09', fontWeight: 'bold' }}>✓</span>
                    <Translate id="book-demo.benefits.agenda4" description="Agenda item 4">
                      Avtale veien videre
                    </Translate>
                  </li>
                </ul>
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

