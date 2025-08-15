import MainLayout from '../../components/MainLayout/index.js';
import CompetenceGrid from '../../components/CompetenceGrid/index.js';
import ContactUs from '../../components/ContactUs/index.js';
import Banner from '../../components/Banner/index.js';
import policyRecords from "../../../data/policyContents.js";
import { useEffect, useState } from 'react';
import { ElfsightWidget } from 'react-elfsight-widget';

function PolicyBanner(props) {
  const policyContent = props.items;
  return (
    <Banner record={policyContent} />
  );
}

function PolicyWhy(props) { 
  const policyWhyContent = props.items;
  return (
    <CompetenceGrid record={policyWhyContent} />
  );
}

function PolicyWhat(props) {
  const policyWhatContent = props.items;
  return (
    <CompetenceGrid record={policyWhatContent} />
  );
}

function PolicyContactus() {
  return (
   <ContactUs/>
  );
}


// Policy page
export default function Policy() {

  const [policy , setPolicyContent] = useState({})
  const [policyWhy , setPolicyWhy] = useState({})
  const [policyWhat , setPolicyWhat] = useState({})
  useEffect(() => {
    let ignore = false;
      if (!ignore) {
        setPolicyContent(policyRecords.policyBannerData);
        setPolicyWhy(policyRecords.policyWhyData);
        setPolicyWhat(policyRecords.policyWhatData);
      }
  
    return () => { 
      ignore = true;
    }
   
  }, [policy, policyWhy, policyWhat]);

  return (
    <MainLayout>
      {policy && <PolicyBanner items={policy}/>}
      {policyWhy && <PolicyWhy items={policyWhy}/>}
      {policyWhat && <PolicyWhat items={policyWhat}/>}
      <ElfsightWidget widgetId="954fa691-f581-4d70-a48d-6ba7822b0756" style={{padding: "10px 1rem 0"}}/>
      <PolicyContactus />
    </MainLayout>
  );
}
