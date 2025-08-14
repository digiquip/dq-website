import React, { useEffect } from 'react';
import MainLayout from '../components/MainLayout';
import orderPolicyForm from '../../data/OrderPolicyForm.js';

function PolicySection() {
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
          <div className='aboutus-story-text bestill-policy-container'>
            <h2 className='bestill-policy-heading'>Bestill policy og risikovurdering<span className='orange'>.</span></h2>
            <p className='bestill-policy-text'>Som arbeidsgiver må du risikovurdere arbeidsutstyr og konkludere om det kan være farlig å bruke. Dersom risikovurderingen tilsier at utstyret kan føre til skade, må den ansatte ha opplæring før bruk.</p>
            <p className='bestill-policy-text'>For like håndholdt verktøy holder det med én opplæring, selv om de er fra forskjellige merker.</p>
            <p className='bestill-policy-text'>BÅDE risikovurderingen og opplæringen må dokumenteres. Dette trenger du hvis:</p>
            <ul className='bestill-policy-list'>
              <li>Arbeidstilsynet kommer på tilsyn</li>
              <li>Det skjer en ulykke og det blir granskning</li>
            </ul>
            <p className='bestill-policy-text'>Vi gjør jobben for eller sammen med deg!</p>
            <p className='bestill-policy-text'><strong>Bestill komplett policy og risikovurdering: Vi ordner alt papirarbeidet! GRATIS for de 10 første som bestiller!</strong></p>
            
            <div className='bestill-policy-contact-section'>
              <p className='bestill-policy-contact-text'>Vi kan også kontaktes på telefon eller e-post:</p>
              <div className='bestill-policy-contact-info'>
                <img src='img/competence-images/tom_freddy.webp' alt='Tom Freddy Braathen' className='bestill-policy-contact-image' />
                <div>
                  <h3 className='bestill-policy-contact-name'>Tom Freddy Braathen</h3>
                  <div className='bestill-policy-contact-link'>
                    <span className='bestill-policy-contact-arrow'>→</span>
                    <a href="mailto:tfb@digiquip.no" className='bestill-policy-contact-email'>tfb@digiquip.no</a>
                  </div>
                  <div className='bestill-policy-contact-phone'>+47 45 48 85 25</div>
                </div>
              </div>
            </div>
          </div>
          <div className='aboutus-story-img'>
            <div className='about-contact-form-embed bestill-policy-form-container'>
              <div dangerouslySetInnerHTML={{ __html: orderPolicyForm }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function BestillPolicyPage() {
  useEffect(() => {
    let element = document.querySelector('.navbar');
    element.classList.add('white-header')
    return () => {
      element.classList.remove('white-header')
    }
  }, [])

  return (
    <MainLayout>
      <PolicySection />
    </MainLayout>
  );
}
