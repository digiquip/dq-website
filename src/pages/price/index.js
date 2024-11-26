import clsx from 'clsx';
import MainLayout from '../../components/MainLayout';
import { useEffect, useState } from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Translate from '@docusaurus/Translate';
import SubscriptionPlan from '../../components/SubscriptionPlan';
import ContactUs from '../../components/ContactUs';

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
        </div>
      </div>
    </section>
  )
}


function PricePageBanner() {
  return (
    <>
      <section className='homepage-banner'>
        <div className={clsx('hero-25 hero hero--primary heroBanner')}>
          <div className="container">
            <h1 className='section-title'>Priser<span className='orange'>.</span></h1>
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


