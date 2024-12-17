import ContactUs from '../../components/ContactUs/index.js';
import MainLayout from '../../components/MainLayout/index.js';
import CompetenceGrid from '../../components/CompetenceGrid/index.js';
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
function MachineInsights(props) {
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
  const [machineinsights, setMachineInsightsContent] = useState({})
  useEffect(() => {
    let ignore = false;
      if (!ignore) {
        setWorkEquipmentContent(workequipmentRecords.workEquipmentBannerData);
        setMachinesContent(workequipmentRecords.machinesEquipmentData);
        setDocumentationContent(workequipmentRecords.systematizedDocumentationData);
        setMachineInsightsContent(workequipmentRecords.machineinsightsData);
      }
  
    return () => { 
      ignore = true;
    }
   
  }, [workEquipment, documentation, machines]);

  return (
    <MainLayout>
        {workEquipment && <WorkeQuipmentBanner items={workEquipment} />}
        {machines &&  <MachinesEquipment items={machines} />}
        {documentation && <SystematizedDocumentation items={documentation}/>}
        {machineinsights && <MachineInsights items={machineinsights}/>}
        <CompetenceContactus />
    </MainLayout> 
  );
}
