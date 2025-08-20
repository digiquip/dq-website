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

  useEffect(() => {
    // Load the Dyntube script when the component mounts
    if (typeof window !== 'undefined' && !window._dyntube_v1_init) {
      window._dyntube_v1_init = true;
      const script = document.createElement('script');
      script.src = "https://embed.dyntube.com/v1.0/dyntube.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <section className='aboutus-story-section section-pd section-bg-gray'>
      <div className='container'>
        <div className='aboutus-story-grid'>
          <div className='aboutus-story-text bestill-policy-container'>
            <h2 className='bestill-policy-heading'>Vi gir nå de første 100 små håndverksbedriftene policy og risikovurdering helt gratis!</h2>
            
            <div style={{marginTop: '2rem', marginBottom: '2rem'}}>
              <div className="videosection" style={{position: 'relative', width: '100%', paddingBottom: '56.25%'}}>
                <iframe
                    src="https://videos.dyntube.com/iframes/pmbvDNwg7keZ9CmVj4sSQ"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      border: 'none'
                    }}
                    allowFullScreen
                ></iframe>
              </div>
            </div>
            
            <p className='bestill-policy-text'>Bedre med spiker enn med penn? Er du en liten håndverksbedrift som heller vil få jobben gjort enn å sitte med kontorarbeid? Bruker du maskiner og utstyr? Vi fikser papirarbeidet så du kan få jobben gjort!</p>
            <p className='bestill-policy-text'>Vi gjør hverdagen din enklere! DU tar kontakt med oss og så sørger VI for at du får på plass et dokument for policy og risikovurdering av arbeidsutstyr. Dokumentet konkluderer hvilke opplæringskrav som stilles for å bruke arbeidsutstyret.</p>
            <p className='bestill-policy-text'>Etter at policyen er laget, blir den tilgjengelig for alle dine ansatte i <a href="https://kvipp.it" target="_blank" rel="noopener noreferrer">Kvipp</a>. Magisk? Nei, egentlig veldig enkelt. Når dine ansatte skanner HMS-kortet sitt fanger systemet opp hvor personen jobber og dokumentet kan vises.</p>
            <p className='bestill-policy-text'><em>Vi definerer små håndverksbedrifter som bedrifter med færre enn ti ansatte, men ta uansett kontakt så finner vi en hyggelig pris!</em></p>
            
          </div>
          <div className='aboutus-story-img'>
            <div className='about-contact-form-embed bestill-policy-form-container'>
              <div dangerouslySetInnerHTML={{ __html: orderPolicyForm }} />
            </div>
          </div>
        </div>
      </div>
      
      <div className='container'>
        <details className='bestill-policy-accordion'>
          <summary>Les mer om policy og risikovurdering</summary>
          <div>
            <p className='bestill-policy-text'>Som arbeidsgiver må du risikovurdere arbeidsutstyr og konkludere om det kan være farlig å bruke. Dersom risikovurderingen tilsier at utstyret kan føre til skade, må den ansatte ha opplæring før bruk. For like håndholdt verktøy kan det være nok det med én opplæring, selv om de er fra forskjellige merker. Dette forutsetter at du har gjort en risikovurdering og dokumentert dette. Uten dokumentasjon, kreves det opplæring på alle.</p>
            <p className='bestill-policy-text'><strong>Har du?</strong></p>
            <ul className='bestill-policy-text' style={{marginLeft: '1.5rem', marginBottom: '1rem', listStyleType: 'disc'}}>
              <li><strong>Dokumentasjon som viser hvilke krav som stilles til de personer som kan bruke arbeidsutstyr som kan medføre særlig fare for skade på liv eller helse</strong></li>
              <li><strong>Dokumentasjon som viser at arbeidstakerne har gjennomgått opplæring på det spesifikke arbeidsutstyret vedkommende settes til å bruke</strong></li>
            </ul>
            <p className='bestill-policy-text'>Med dokumentert policy sikrer du deg full oversikt over når opplæring trengs - og når det ikke er nødvendig. Resultatet? Smidigere hverdag for alle og null stress ved tilsyn.</p>
            <p className='bestill-policy-text'><strong>Med policy og risikovurdering får dere:</strong></p>
            <ul className='bestill-policy-text' style={{marginLeft: '1.5rem', marginBottom: '1rem', listStyleType: 'disc'}}>
              <li><strong>Full kontroll på hvilken opplæring som skal gis på diverse arbeidsutstyr</strong></li>
              <li><strong>Solid dokumentasjon, som for eksempel kan vises ved tilsyn</strong></li>
            </ul>
            <p className='bestill-policy-text'>Les mer om risikovurdering og opplæring her: <a href="https://www.arbeidstilsynet.no/arbeidstid-og-organisering/opplaring/" target="_blank" rel="noopener noreferrer">https://www.arbeidstilsynet.no/arbeidstid-og-organisering/opplaring/</a></p>
          </div>
        </details>
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
