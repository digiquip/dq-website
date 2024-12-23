import { useEffect, useState } from 'react';

import ContactUs from '../../components/ContactUs';
import MainLayout from '../../components/MainLayout';
import SubscriptionPlan from '../../components/SubscriptionPlan';
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
import Translate from '@docusaurus/Translate';
import clsx from 'clsx';

function AboutIntegrations() {
  return (
    <section className='about-integrations section-pd'>
      <div className="container">
        <div className='integrations-center'>
          <h2>Integrasjoner<span className='orange'>.</span> </h2>
          <p>Integrasjoner er et av våre viktigste satsningsområder.</p>
          <div className="row">
            <div className={clsx("col col--4 margin-bottom--lg")}>
                <div className='call-action'>
                <h3>Skreddersøm</h3>
                <p>Vi kan integrasjoner! <a href="https://digiquip.no/about" target="_blank">Ta kontakt med Andreas eller Olav for en prat</a> .</p>
                </div>
              </div>
              
              <div className={clsx("col col--4 margin-bottom--lg")}>
                <div className='call-action'>
                <h3>Kompetanseregisteret</h3>
                <p>Sentralregisterets Kompetanseregister (K-reg) lagrer og utsteder kompetansebevis. Snart kan du hente kompetansebevis fra K-reg til DigiQuip. Se <a href="https://sentralregisteret.no/kompetanseregisteret/" target="_blank">Kompetanseregisteret</a> for mer informasjon.</p>  
                </div>
              </div>

              <div className={clsx("col col--4 margin-bottom--lg")}>
                <div className='call-action'>
                <h3>Maskinregisteret</h3>
                <p>Sentralregisterets Maskinregister (M-reg) er et register for arbeidsmaskiner og utstyr. Hent arbeidsutstyr og sakkyndig kontroll fra M-reg til DigiQuip. Se <a href="" target="_blank">Maskinregisteret</a> for mer informasjon.</p>
                </div>
                
              </div>
            </div>
            <div class="elfsight-app-6030280a-de24-4c4c-bb05-b9a0c60cb56e" data-elfsight-app-lazy />
        </div>
      </div>
    </section>
  )
}


function PricePageBanner() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <section className='homepage-banner'>
        <div className={clsx('hero-25 hero hero--primary heroBanner')}>
          <div className="container">
            <h1 className='section-title'>Priser<span className='orange'>.</span></h1>
            <div className="elfsight-app-81cbe388-1724-4e56-b24d-e9cbcb69c3f4" data-elfsight-app-lazy />
            <div className="row">
              <SubscriptionPlan />
            </div>
          </div>
          <span className="bg"></span>
        </div>
      </section>
    </>

  );
}

// Price page
export default function About() {
  return (
    <MainLayout>

      <PricePageBanner />
      <AboutIntegrations />
      <ContactUs />
    </MainLayout>
  );
}


