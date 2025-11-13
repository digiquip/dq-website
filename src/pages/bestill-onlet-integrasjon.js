import React, { useEffect } from 'react';
import MainLayout from '../components/MainLayout';
import orderOnletForm from '../../data/OrderOnletForm.js';
import { useLocation } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import BrandLogo from '../components/BrandLogo';
import facebookIcon from '../../static/icons/facebook-icon.png';
import linkedinIcon from '../../static/icons/linkedin-icon.png';
import Translate from '@docusaurus/Translate';

function OrderOnletSection() {
  const location = useLocation();
  const { siteConfig } = useDocusaurusContext();
  const shareUrl = siteConfig.url + location.pathname;
  const title = 'Integrasjon med Onlet';

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      // You could add a toast notification here
      alert(<Translate id="common.copyUrlAlert" description="Copy URL success alert message">URL kopiert til utklippstavlen!</Translate>);
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
    <section className='aboutus-story-section section-pd section-bg-gray'>
      <div className='container'>
        <div className='aboutus-story-grid'>
          <div className='aboutus-story-text bestill-onlet-container'>
            <h2 className='bestill-onlet-heading'>
              <Translate id="onlet.integration.title" description="Title for Onlet integration page">
                Integrasjon med Onlet
              </Translate>
            </h2>
            
            <p className='bestill-onlet-text'>
              <Translate id="onlet.integration.description" description="Description of Onlet integration">
                Med integrasjonen mellom DigiQuip og Onlet får du automatisk oppdatering av kontrolldata. Når en kontroll er gjennomført i DigiQuip eller når vi mottar kontroller fra M-REG eller Digitool, blir Onlet oppdatert neste dag med status, neste kontrolldato og kontrollrapport.
              </Translate>
            </p>
            
            <div className='integration-option' style={{ backgroundColor: 'rgba(240, 90, 9, 0.03)', padding: '15px', borderRadius: '8px', margin: '0' }}>
              <p className='bestill-onlet-text' style={{ margin: '0' }}>
                ✓ <Translate id="onlet.integration.benefit1" description="First benefit of Onlet integration">Spar tid – unngå dobbelregistrering</Translate><br />
                ✓ <Translate id="onlet.integration.benefit2" description="Second benefit of Onlet integration">Alltid oppdatert neste kontroll-dato</Translate><br />
                ✓ <Translate id="onlet.integration.benefit3" description="Third benefit of Onlet integration">Bedre kvalitet og færre feil</Translate>
              </p>
            </div>
            
            
            
            <div className='faq-section'>
              <h4>
                <Translate id="onlet.integration.faq.title" description="FAQ section title">
                  Hvordan fungerer integrasjonen?
                </Translate>
              </h4>
              <p className='bestill-onlet-text'>
                <Translate id="onlet.integration.faq.description1" description="FAQ first answer">
                  Når en kontroll er gjennomført i DigiQuip eller når vi mottar kontroller fra M-REG eller Digitool, blir Onlet automatisk oppdatert neste dag med status, neste kontrolldato og kontrollrapport.
                </Translate>
              </p>
              
              <p className='bestill-onlet-text'>
                <Translate id="onlet.integration.faq.description2" description="FAQ second answer">
                  Dette eliminerer behovet for manuell dataregistrering og sikrer at all informasjon er oppdatert og synkronisert mellom systemene.
                </Translate>
              </p>
            </div>
            
            <p className='bestill-onlet-text'>
              <strong>
                <Translate id="onlet.integration.cta" description="Call to action text">
                Pris for tjenesten er 25 kr per kontroll. For å bestille kan du enten ringe oss på 69 83 85 00, sende e-post til Tom Freddy tom-freddy@digiquip.no eller fylle ut skjemaet.
                </Translate>
              </strong>
            </p>
              
            <div className="blog-share text-center" style={{ marginTop: '30px' }}>
              <div className="is-divider medium"></div>
              <div className="social-icons">
                <button 
                  onClick={copyToClipboard}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '0',
                    width: '33px',
                    filter: 'grayscale(1)',
                    opacity: '0.4',
                    transition: '0.5s'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.filter = 'grayscale(0)';
                    e.target.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.filter = 'grayscale(1)';
                    e.target.style.opacity = '0.4';
                  }}
                  title={<Translate id="onlet.integration.copyUrl" description="Copy URL button title">Kopier URL</Translate>}
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
          <div className='aboutus-story-img'>
            <div className='about-contact-form-embed bestill-onlet-form-container'>
              <div dangerouslySetInnerHTML={{ __html: orderOnletForm }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function BestillOnletIntegrasjonPage() {
  useEffect(() => {
    let element = document.querySelector('.navbar');
    element.classList.add('white-header')
    return () => {
      element.classList.remove('white-header')
    }
  }, [])

  return (
    <MainLayout>
      <OrderOnletSection />
    </MainLayout>
  );
}
