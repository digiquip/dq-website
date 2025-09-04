import React, { useEffect } from 'react';
import MainLayout from '../components/MainLayout';
import orderKRegForm from '../../data/OrderKRegForm.js';
import { useLocation } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import BrandLogo from '../components/BrandLogo';
import facebookIcon from '../../static/icons/facebook-icon.png';
import linkedinIcon from '../../static/icons/linkedin-icon.png';
import Translate from '@docusaurus/Translate';

function OrderKRegSection() {
  const location = useLocation();
  const { siteConfig } = useDocusaurusContext();
  const shareUrl = siteConfig.url + location.pathname;
  const title = 'Integrasjon med K-REG';

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
                               <div className='aboutus-story-text bestill-kreg-container'>
            <h2 className='bestill-kreg-heading'>
              <Translate id="kreg.integration.title" description="Title for K-REG integration page">
                Integrasjon med K-REG
              </Translate>
            </h2>
            
            <p className='bestill-kreg-text'>
              <Translate id="kreg.integration.description" description="Description of K-REG integration">
                Utstyrsspesifikk opplæring kan lastes direkte opp i K-REG. Videre deler K-REG kompetanse med HMSREG.
              </Translate>
            </p>
            
            <div className='integration-option' style={{ backgroundColor: 'rgba(240, 90, 9, 0.03)', padding: '15px', borderRadius: '8px', margin: '0 0 30px 0' }}>
              <p className='bestill-kreg-text' style={{ margin: '0' }}>
                ✓ <Translate id="kreg.integration.benefit1" description="First benefit of K-REG integration">Synlig i HMSREG via Kompetanseregisteret</Translate><br />
                ✓ <Translate id="kreg.integration.benefit2" description="Second benefit of K-REG integration">Ingen manuell dataregistrering kreves</Translate><br />
                ✓ <Translate id="kreg.integration.benefit3" description="Third benefit of K-REG integration">Løpende dokumentasjon av utstyrsspesifikk opplæring</Translate>
              </p>
            </div>

            <div className='how-it-works-section' style={{ marginBottom: '30px' }}>
              <h4 style={{ marginBottom: '20px' }}>
                <Translate id="kreg.integration.how.title" description="How it works section title">
                  Slik gjør du det
                </Translate>
              </h4>
              
              <div style={{ marginBottom: '20px' }}>
                <p className='bestill-kreg-text' style={{ margin: '0 0 10px 0' }}>
                  <strong><Translate id="kreg.integration.how.scanCard.title" description="Scan HMS card section title">SKANN HMS-KORT:</Translate></strong> <Translate id="kreg.integration.how.scanCard.description" description="Scan HMS card description">Automatisk kobling til virksomhet. Via Arbeidstilsynets API henter Kvipp riktig navn, fødselsdato og virksomhet. Slik blir dokumentasjonen riktig med en gang!</Translate>
                </p>
                <p className='bestill-kreg-text' style={{ margin: '0 0 20px 0' }}>
                  <strong><Translate id="kreg.integration.how.scanEquipment.title" description="Scan equipment section title">SKANN UTSTYR:</Translate></strong> <Translate id="kreg.integration.how.scanEquipment.description" description="Scan equipment description">Skann QR-kode (Reginn, DigiQuip) eller ta bilde av utstyret. Fra bilde tolker kunstig intelligens merke og modell. Det eneste du trenger å gjøre er å bekrefte eller endre på navn. PS: Pass på å ta bilde der både merke og modell fanges opp.</Translate>
                </p>
              </div>
              
              <p className='bestill-kreg-text'>
                <Translate id="kreg.integration.how.description" description="How it works description">
                  Når opplæring er gitt, overføres ALL nødvendig informasjon og dokumentasjon (PDF) til K-REG. Hvem som har fått og gitt opplæring, hvilket utstyr (merke og modell) og dato.
                </Translate>
              </p>
              
              <p className='bestill-kreg-text'>
                <Translate id="kreg.integration.how.note" description="How it works note">
                  Det er kun praktiske opplæringer gitt av personer med rollen instruktør som oversendes. Dette fikser vi når dere skal aktivere integrasjonen.
                </Translate>
              </p>
            </div>

            <div className='pricing-section' style={{ marginBottom: '30px' }}>
              <h4 style={{ marginBottom: '20px' }}>
                <Translate id="kreg.integration.pricing.title" description="Pricing section title">
                  Priser
                </Translate>
              </h4>
              
              <div style={{ overflowX: 'auto' }}>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '1fr 1fr 1fr', 
                  gap: '1px', 
                  backgroundColor: '#ddd',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  overflow: 'hidden'
                }}>
                  {/* Header Row */}
                  <div style={{ 
                    backgroundColor: '#f5f5f5', 
                    padding: '8px', 
                    textAlign: 'center', 
                    fontWeight: 'bold',
                    borderRight: '1px solid #ddd',
                    fontSize: '17px'
                  }}>
                    <Translate id="kreg.integration.pricing.column1" description="First pricing column header">
                      Kvipp Småbedrift
                    </Translate>
                  </div>
                  <div style={{ 
                    backgroundColor: '#f5f5f5', 
                    padding: '8px', 
                    textAlign: 'center', 
                    fontWeight: 'bold',
                    borderRight: '1px solid #ddd',
                    fontSize: '17px'
                  }}>
                    <Translate id="kreg.integration.pricing.column2" description="Second pricing column header">
                      Kvipp Bedrift
                    </Translate>
                  </div>
                  <div style={{ 
                    backgroundColor: '#f5f5f5', 
                    padding: '8px', 
                    textAlign: 'center', 
                    fontWeight: 'bold',
                    fontSize: '17px'
                  }}>
                    <Translate id="kreg.integration.pricing.column3" description="Third pricing column header">
                      Frittstående
                    </Translate>
                  </div>
                  
                  {/* Data Row */}
                  <div style={{ 
                    backgroundColor: 'white', 
                    padding: '8px', 
                    textAlign: 'center',
                    borderRight: '1px solid #ddd',
                    borderTop: '1px solid #ddd',
                    fontSize: '17px'
                  }}>
                    <Translate id="kreg.integration.pricing.price1" description="First pricing option">
                      Inkludert
                    </Translate>
                  </div>
                  <div style={{ 
                    backgroundColor: 'white', 
                    padding: '8px', 
                    textAlign: 'center',
                    borderRight: '1px solid #ddd',
                    borderTop: '1px solid #ddd',
                    fontSize: '17px'
                  }}>
                    <Translate id="kreg.integration.pricing.price2" description="Second pricing option">
                      500 kr
                    </Translate>
                  </div>
                  <div style={{ 
                    backgroundColor: 'white', 
                    padding: '8px', 
                    textAlign: 'center',
                    borderTop: '1px solid #ddd',
                    fontSize: '17px'
                  }}>
                    <Translate id="kreg.integration.pricing.price3" description="Third pricing option">
                      990 kr
                    </Translate>
                  </div>
                </div>
              </div>
              
            </div>
            

            

            
            <p className='bestill-kreg-text'>
                              <strong>
                  <Translate id="kreg.integration.cta" description="Call to action text">
                    For å bestille kan du enten ringe oss på 69 83 85 00, sende e-post til Tom Freddy tfb@digiquip.no eller fylle ut skjemaet.
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
          <div className='aboutus-story-img'>
            <div className='about-contact-form-embed bestill-kreg-form-container'>
              <div dangerouslySetInnerHTML={{ __html: orderKRegForm }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function BestillKRegIntegrasjonPage() {
  useEffect(() => {
    let element = document.querySelector('.navbar');
    element.classList.add('white-header')
    return () => {
      element.classList.remove('white-header')
    }
  }, [])

  return (
    <MainLayout>
      <OrderKRegSection />
    </MainLayout>
  );
}


