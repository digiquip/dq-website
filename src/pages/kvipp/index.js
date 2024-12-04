import MainLayout from '../../components/MainLayout/index.js';
import CompetenceGrid from '../../components/CompetenceGrid/index.js';
import ContactUs from '../../components/ContactUs/index.js';
import Banner from '../../components/Banner/index.js';
import competenceRecords from "../../../data/competenceContents.js";
import { useEffect, useState } from 'react';

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
function KvippSituation(props) {
  const kvippSituationContent = props.items;
  return (
    <CompetenceGrid record={kvippSituationContent} />
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
  const [kvippSituation , setKvippSituation] = useState({})
  useEffect(() => {
    let ignore = false;
      if (!ignore) {
        setCompetenceContent(competenceRecords.competenceBannerData);
        setKvippBenefits(competenceRecords.kvippBenefitsData);
        setKvippGetStarted(competenceRecords.kvippGetStartedData);
        setKvippSituation(competenceRecords.kvippSituationData);
      }
  
    return () => { 
      ignore = true;
    }
   
  }, [competence, kvippBenefits, kvippGetStarted, kvippSituation]);

  return (
    <MainLayout>
      {competence && <CompetenceBanner items={competence}/>}
      {kvippBenefits && <KvippBenefits items={kvippBenefits}/>}
      {kvippGetStarted && <KvippGetStarted items={kvippGetStarted}/>}
      {kvippSituation && <KvippSituation items={kvippSituation}/>}
      <CompetenceContactus />
    </MainLayout>
  );
}
