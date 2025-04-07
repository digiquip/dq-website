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
  useEffect(() => {
    let ignore = false;
      if (!ignore) {
        setBedriftContent(bedriftRecords.bedriftBannerData);
        setBedriftBenefits(bedriftRecords.bedriftbenefitsData);
        setBedriftGroups(bedriftRecords.bedriftgroupsData);
      }
  
    return () => { 
      ignore = true;
    }
   
  }, [bedrift, bedriftbenefits, bedriftgroups]);

  return (
    <MainLayout>
      {bedrift && <BedriftBanner items={bedrift}/>}
      {bedriftgroups && <BedriftGroups items={bedriftgroups}/>}
      {bedriftbenefits && <BedriftBenefits items={bedriftbenefits} />}
      <ElfsightWidget widgetId="8601984d-0d6c-4f1a-bb3f-495f303d2c44" style={{padding: "50px 1rem 0"}}/>
      <CompetenceContactus />
    </MainLayout>
  );
}
