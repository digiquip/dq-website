import MainLayout from '../../components/MainLayout/index.js';
import CompetenceGrid from '../../components/CompetenceGrid/index.js';
import ContactUs from '../../components/ContactUs/index.js';
import Banner from '../../components/Banner/index.js';
import bedriftRecords from "../../../data/bedriftContents.js";
import { useEffect, useState } from 'react';

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

function BedriftCampaign(props) {
  const bedriftcampaignContent = props.items;
  return (
    <CompetenceGrid record={bedriftcampaignContent} />
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
  const [bedriftcampaign , setBedriftCampaign] = useState({})
  useEffect(() => {
    let ignore = false;
      if (!ignore) {
        setBedriftContent(bedriftRecords.bedriftBannerData);
        setBedriftBenefits(bedriftRecords.bedriftbenefitsData);
        setBedriftCampaign(bedriftRecords.bedriftcampaignData);
      }
  
    return () => { 
      ignore = true;
    }
   
  }, [bedrift, bedriftbenefits, bedriftcampaign]);

  return (
    <MainLayout>
      {bedrift && <BedriftBanner items={bedrift}/>}
      {bedriftbenefits && <BedriftBenefits items={bedriftbenefits}/>}
      {bedriftcampaign && <BedriftCampaign items={bedriftcampaign}/>}
      <CompetenceContactus />
    </MainLayout>
  );
}
