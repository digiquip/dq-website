import MainLayout from '../../components/MainLayout/index.js';
import CompetenceGrid from '../../components/CompetenceGrid/index.js';
import ContactUs from '../../components/ContactUs/index.js';
import Banner from '../../components/Banner/index.js';
import servicesRecords from "../../../data/servicesContents.js";
import { useEffect, useState } from 'react';
import { ElfsightWidget } from 'react-elfsight-widget';

function ServicesBanner(props) {
  const servicesContent = props.items;
  return (
    <Banner record={servicesContent} />
  );
}

function ServicesWhy(props) { 
  const servicesWhyContent = props.items;
  return (
    <CompetenceGrid record={servicesWhyContent} />
  );
}

function ServicesWhat(props) {
  const servicesWhatContent = props.items;
  return (
    <CompetenceGrid record={servicesWhatContent} />
  );
}
function ServicesHow(props) {
  const servicesHowContent = props.items;
  return (
    <CompetenceGrid record={servicesHowContent} />
  );
}

function CompetenceContactus() {
  return (
   <ContactUs/>
  );
}


// Services page
export default function Services() {

  const [services , setServicesContent] = useState({})
  const [servicesWhy , setServicesWhy] = useState({})
  const [servicesWhat , setServicesWhat] = useState({})
  const [servicesHow , setServicesHow] = useState({})
  useEffect(() => {
    let ignore = false;
      if (!ignore) {
        setServicesContent(servicesRecords.servicesBannerData);
        setServicesWhy(servicesRecords.servicesWhyData);
        setServicesWhat(servicesRecords.servicesWhatData);
        setServicesHow(servicesRecords.servicesHowData);
      }
  
    return () => { 
      ignore = true;
    }
   
  }, [services, servicesWhy, servicesWhat, servicesHow]);

  return (
    <MainLayout>
      {services && <ServicesBanner items={services}/>}
      {servicesWhy && <ServicesWhy items={servicesWhy}/>}
      {servicesWhat && <ServicesWhat items={servicesWhat}/>}
      {servicesHow && <ServicesHow items={servicesHow}/>}
      <ElfsightWidget widgetId="954fa691-f581-4d70-a48d-6ba7822b0756" style={{padding: "50px 1rem 0"}}/>
      <CompetenceContactus />
    </MainLayout>
  );
}
