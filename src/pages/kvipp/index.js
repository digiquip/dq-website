import MainLayout from '../../components/MainLayout/index.js';
import CompetenceGrid from '../../components/CompetenceGrid/index.js';
import ContactUs from '../../components/ContactUs/index.js';
import Banner from '../../components/Banner/index.js';
import TwoColumnSection from '../../components/TwoColumnSection/index.js';
import competenceRecords from "../../../data/kvippContents.js";
import { useEffect, useState } from 'react';
import { ElfsightWidget } from 'react-elfsight-widget';

function CompetenceBanner(props) {
  const competenceContent = props.items;
  return (
    <Banner record={competenceContent} />
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

function BedriftBenefits(props) {
  const bedriftbenefitsContent = props.items;
  return (
    <CompetenceGrid record={bedriftbenefitsContent} />
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
  const [kvippRoleSection , setKvippRoleSection] = useState({})
  const [kvippGetStartedKregSection , setKvippGetStartedKregSection] = useState({})
  useEffect(() => {
    let ignore = false;
      if (!ignore) {
        setCompetenceContent(competenceRecords.competenceBannerData);
        setKvippRoleSection(competenceRecords.kvippRoleSectionData);
        setKvippGetStartedKregSection(competenceRecords.kvippGetStartedKregSectionData);
      }
  
    return () => { 
      ignore = true;
    }
   
  }, [competence, kvippRoleSection, kvippGetStartedKregSection]);

  return (
    <MainLayout>
      {competence && <CompetenceBanner items={competence}/>}
      {kvippRoleSection && kvippRoleSection.leftSection && kvippRoleSection.rightSection && <TwoColumnSection {...kvippRoleSection}/>}
      {kvippGetStartedKregSection && kvippGetStartedKregSection.leftSection && kvippGetStartedKregSection.rightSection && <TwoColumnSection {...kvippGetStartedKregSection}/>}
      <ElfsightWidget widgetId="954fa691-f581-4d70-a48d-6ba7822b0756" style={{padding: "50px 1rem 0"}}/>
      <CompetenceContactus />
    </MainLayout>
  );
}
