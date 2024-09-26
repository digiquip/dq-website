import ContactUs from '../../components/ContactUs';
import MainLayout from '../../components/MainLayout';
import CompetenceGrid from '../../components/CompetenceGrid';
import Banner from '../../components/Banner/index.js';
import { useEffect, useState } from 'react';
import workequipmentRecords from "../../../data/workequipmentContents.js";


function WorkeQuipmentBanner(props) {
  const workeQuipment = props.items;
  return (
    <Banner record={workeQuipment} />
  );
}

function SystematizedDocumentation(props) {
  const data = props.items;
  return (
    <CompetenceGrid record={data} />
  );
}

function MachinesEquipment(props) {
  const data = props.items;
  return (
    <CompetenceGrid record={data} />
  );
}

function CompetenceContactus() {
  return (
<ContactUs/>
  );
}

// Workequipment component
export default function Workequipment() {

  const [workEquipment , setWorkEquipmentContent] = useState({})
  const [documentation , setDocumentationContent] = useState({})
  const [machines , setMachinesContent] = useState({})
  useEffect(() => {
    let ignore = false;
      if (!ignore) {
        setWorkEquipmentContent(workequipmentRecords.workEquipmentBannerData);
        setDocumentationContent(workequipmentRecords.systematizedDocumentationData);
        setMachinesContent(workequipmentRecords.machinesEquipmentData);
      }
  
    return () => { 
      ignore = true;
    }
   
  }, [workEquipment, documentation, machines]);

  return (
    <MainLayout>
        {workEquipment && <WorkeQuipmentBanner items={workEquipment} />}
        {documentation && <SystematizedDocumentation items={documentation}/>}
        {machines &&  <MachinesEquipment items={machines} />}
        <CompetenceContactus />
    </MainLayout> 
  );
}
