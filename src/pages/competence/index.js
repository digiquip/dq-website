import MainLayout from '../../components/MainLayout';
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

function PracticalTraining(props) {
  const practicalTrainingContent = props.items;
  return (
    <CompetenceGrid record={practicalTrainingContent} />
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
  const [practicalTraining , setPracticalTraining] = useState({})
  useEffect(() => {
    let ignore = false;
      if (!ignore) {
        setCompetenceContent(competenceRecords.competenceBannerData);
        setPracticalTraining(competenceRecords.practicalTrainingData);
      }
  
    return () => { 
      ignore = true;
    }
   
  }, [competence, practicalTraining]);

  return (
    <MainLayout>
      {competence && <CompetenceBanner items={competence}/>}
      {practicalTraining && <PracticalTraining items={practicalTraining}/>}
      <CompetenceContactus />
    </MainLayout>
  );
}
