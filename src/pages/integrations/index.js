import MainLayout from '../../components/MainLayout/index.js';
import IntegrationsGrid from '../../components/IntegrationsGrid/index.js';
import ContactUs from '../../components/ContactUs/index.js';
import Banner from '../../components/Banner/index.js';
import integrationsRecords from "../../../data/integrationsContents.js";
import { useEffect, useState } from 'react';
import { ElfsightWidget } from 'react-elfsight-widget';

function IntegrationsBanner(props) {
  const integrationsContent = props.items;
  return (
    <Banner record={integrationsContent} />
  );
}

function IntegrationsContactus() {
  return (
   <ContactUs/>
  );
}

// Integrations page
export default function Integrations() {
  const [integrations, setIntegrationsContent] = useState({})
  const [integrationsCards, setIntegrationsCards] = useState([])
  
  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      setIntegrationsContent(integrationsRecords.integrationsBannerData);
      setIntegrationsCards(integrationsRecords.integrationsCardsData);
    }

    return () => { 
      ignore = true;
    }
   
  }, [integrations, integrationsCards]);

  return (
    <MainLayout>
      {integrations && <IntegrationsBanner items={integrations}/>}
      {integrationsCards && integrationsCards.length > 0 && (
        <IntegrationsGrid integrations={integrationsCards} />
      )}
      <ElfsightWidget widgetId="954fa691-f581-4d70-a48d-6ba7822b0756" style={{padding: "50px 1rem 0"}}/>
      <IntegrationsContactus />
    </MainLayout>
  );
}
