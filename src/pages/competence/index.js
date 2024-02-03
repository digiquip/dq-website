import MainLayout from '../../components/MainLayout';
import fakeData from '../../../data/datarecord.js'
import CompetenceGrid from '../../components/CompetenceGrid/index.js';
import ContactUs from '../../components/ContactUs/index.js';
import Banner from '../../components/Banner/index.js';

function CompetenceBanner() {
  return (
    <Banner record={fakeData.competenceBannerData} />
  );
}

function PracticalTraining() {
  return (
    <CompetenceGrid record={fakeData.practicalTrainingData} />
  );
}

function IssueQRCode() {
  return (
    <CompetenceGrid record={fakeData.issueQRCodeData} />
  );
}

function GroupHelp() {

  return (
    <CompetenceGrid record={fakeData.groupHelpData} />
  );
}


function CompetenceContactus() {
  return (
   <ContactUs/>
  );
}


// Competence page
export default function Competence() {

  return (
    <MainLayout>
      <CompetenceBanner />
      <PracticalTraining />
      <IssueQRCode />
      <GroupHelp />
      <CompetenceContactus />
    </MainLayout>
  );
}
