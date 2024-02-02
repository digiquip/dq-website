import clsx from 'clsx';
import styles from './index.module.css';
import ContactUs from '../../components/ContactUs';
import MainLayout from '../../components/MainLayout';
import CompetenceGrid from '../../components/CompetenceGrid';
import fakeData from '../../../data/datarecord.js'
import Banner from '../../components/Banner/index.js';

function WorkeQuipmentBanner() {
  return (
    <Banner record={fakeData.workeQuipmentBannerData} />
  );
}


function SystematizedDocumentation() {
  return (
    <CompetenceGrid record={fakeData.systematizedDocumentationData} />
  );
}


function MachinesEquipment() {
  return (
    <CompetenceGrid record={fakeData.machinesEquipmentData} />
  );
}



function SpecificCompetence() {
  
  return (
<CompetenceGrid record={fakeData.specificCompetenceData} />
  );
}



function CompetenceContactus() {
  return (
<ContactUs/>
  );
}

export default function Workequipment() {

  return (
    <MainLayout>
      <WorkeQuipmentBanner />
        <SystematizedDocumentation />
        <MachinesEquipment />
        <SpecificCompetence />
        <CompetenceContactus />
    </MainLayout> 
  );
}
