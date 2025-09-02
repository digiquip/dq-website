import MainLayout from '../../components/MainLayout/index.js';
import CompetenceGrid from '../../components/CompetenceGrid/index.js';
import ContactUs from '../../components/ContactUs/index.js';
import Banner from '../../components/Banner/index.js';
import competenceRecords from "../../../data/competenceContents.js";
import { useEffect, useState } from 'react';
import { ElfsightWidget } from 'react-elfsight-widget';

function CompetenceBanner(props) {
  const competenceContent = props.items;
  return (
    <Banner record={competenceContent} />
  );
}

function KvippBenefits(props) {
  const kvippBenefitsContent = props.items;
  return (
    <CompetenceGrid record={kvippBenefitsContent} />
  );
}

function KvippGetStarted(props) {
  const kvippGetStartedContent = props.items;
  return (
    <CompetenceGrid record={kvippGetStartedContent} />
  );
}
function KvippKreg(props) {
  const kvippKregContent = props.items;
  return (
    <CompetenceGrid record={kvippKregContent} />
  );
}

function CompetenceContactus() {
  return (
   <ContactUs/>
  );
}


// Competence page
export default function Competence() {

  const [competence , setCompetenceContent] = useState({})
  const [kvippBenefits , setKvippBenefits] = useState({})
  const [kvippGetStarted , setKvippGetStarted] = useState({})
  const [kvippKreg , setKvippKreg] = useState({})
  useEffect(() => {
    let ignore = false;
      if (!ignore) {
        setCompetenceContent(competenceRecords.competenceBannerData);
        setKvippBenefits(competenceRecords.kvippBenefitsData);
        setKvippGetStarted(competenceRecords.kvippGetStartedData);
        setKvippKreg(competenceRecords.kvippKregData);
      }
  
    return () => { 
      ignore = true;
    }
   
  }, [competence, kvippBenefits, kvippGetStarted, kvippKreg]);

  return (
    <MainLayout>
      {competence && <CompetenceBanner items={competence}/>}
      {kvippBenefits && <KvippBenefits items={kvippBenefits}/>}
      {kvippGetStarted && <KvippGetStarted items={kvippGetStarted}/>}
      {kvippKreg && <KvippKreg items={kvippKreg}/>}
      <ElfsightWidget widgetId="954fa691-f581-4d70-a48d-6ba7822b0756" style={{padding: "50px 1rem 0"}}/>
      <CompetenceContactus />
    </MainLayout>
  );
}
