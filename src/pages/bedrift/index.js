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

function BedriftGroups(props) {
  const bedriftgroupsContent = props.items;
  return (
    <CompetenceGrid record={bedriftgroupsContent} />
  );
}

function BedriftEquipment(props) {
  const bedriftequipmentContent = props.items;
  return (
    <CompetenceGrid record={bedriftequipmentContent} />
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
  const [bedriftequipment , setBedriftEquipment] = useState({})
  useEffect(() => {
    let ignore = false;
      if (!ignore) {
        setBedriftContent(bedriftRecords.bedriftBannerData);
        setBedriftBenefits(bedriftRecords.bedriftbenefitsData);
        setBedriftGroups(bedriftRecords.bedriftgroupsData);
        setBedriftEquipment(bedriftRecords.bedriftequipmentData);
      }
  
    return () => { 
      ignore = true;
    }
   
  }, [bedrift, bedriftbenefits, bedriftequipment, bedriftgroups]);

  return (
    <MainLayout>
      {bedrift && <BedriftBanner items={bedrift}/>}
      {bedriftbenefits && <BedriftBenefits items={bedriftbenefits}/>}
      {bedriftgroups && <BedriftGroups items={bedriftgroups}/>}
      {bedriftequipment && <BedriftEquipment items={bedriftequipment}/>}
      <CompetenceContactus />
    </MainLayout>
  );
}
