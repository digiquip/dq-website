import MainLayout from '../../components/MainLayout/index.js';
import CompetenceGrid from '../../components/CompetenceGrid/index.js';
import ContactUs from '../../components/ContactUs/index.js';
import Banner from '../../components/Banner/index.js';
import bedriftRecords from "../../../data/bedriftContents.js";
import { useEffect, useState } from 'react';
import { ElfsightWidget } from 'react-elfsight-widget';

function BedriftBanner(props) {
  const bedriftContent = props.items;
  return (
    <Banner record={bedriftContent} />
  );
}

function BedriftBenefits(props) {
  const bedriftbenefitsContent = props.items;
  return (
    <CompetenceGrid record={bedriftbenefitsContent} />
  );
}

function BedriftGroups(props) {
  const bedriftgroupsContent = props.items;
  return (
    <CompetenceGrid record={bedriftgroupsContent} />
  );
}

function BedriftIntegrations(props) {
  const bedriftIntegrationsContent = props.items;
  return (
    <CompetenceGrid record={bedriftIntegrationsContent} />
  );
}

function CompetenceContactus() {
  return (
   <ContactUs/>
  );
}


// Bedrift page
export default function Bedrift() {

  const [bedrift , setBedriftContent] = useState({})
  const [bedriftbenefits , setBedriftBenefits] = useState({})
  const [bedriftgroups , setBedriftGroups] = useState({})
  const [bedriftintegrations , setBedriftIntegrations] = useState({})
  useEffect(() => {
    let ignore = false;
      if (!ignore) {
        setBedriftContent(bedriftRecords.bedriftBannerData);
        setBedriftBenefits(bedriftRecords.bedriftbenefitsData);
        setBedriftGroups(bedriftRecords.bedriftgroupsData);
        setBedriftIntegrations(bedriftRecords.bedriftIntegrationsData);
      }
  
    return () => { 
      ignore = true;
    }
   
  }, [bedrift, bedriftbenefits, bedriftgroups, bedriftintegrations]);

  return (
    <MainLayout>
      {bedrift && <BedriftBanner items={bedrift}/>}
      {bedriftgroups && <BedriftGroups items={bedriftgroups}/>}
      {bedriftbenefits && <BedriftBenefits items={bedriftbenefits}/>}
      {bedriftintegrations && <BedriftIntegrations items={bedriftintegrations}/>}
      <ElfsightWidget widgetId="954fa691-f581-4d70-a48d-6ba7822b0756" style={{padding: "20px 1rem 0"}}/>
      <CompetenceContactus />
    </MainLayout>
  );
}
