import MainLayout from '../../components/MainLayout';
import Banner from '../../components/Banner/index.js';
import { useEffect, useState } from 'react';
import ExpertControlRecords from '../../../data/expertControlContent.js';
import CompetenceGrid from '../../components/CompetenceGrid/index.js';
import ContactUs from '../../components/ContactUs';

function ExpertControlBanner(props) {
  const expertControlBannerContent = props.items;
  return (
    <Banner record={expertControlBannerContent} />
  );
}

function EasyFlow(props) {
  const data = props.items;
  return (
    <CompetenceGrid record={data} />
  );
}

function Inspection(props) {
  const data = props.items;
  return (
    <CompetenceGrid record={data} />
  );
}
function Logs(props) {
  const data = props.items;
  return (
    <CompetenceGrid record={data} />
  );
}

// ExpertControl component
export default function ExpertControl() {

  const [expertControl , setExpertControlContent] = useState({})
  const [easyFlow , setEasyFlowContent] = useState({})
  const [inspection , setInspectionContent] = useState({})
  const [logs , setLogsContent] = useState({})
  useEffect(() => {
    let ignore = false;
      if (!ignore) {
        setExpertControlContent(ExpertControlRecords.expertControlBannerData);
        setEasyFlowContent(ExpertControlRecords.easyFlowData);
        setInspectionContent(ExpertControlRecords.inspectionData);
        setLogsContent(ExpertControlRecords.logsData);
      }
  
    return () => { 
      ignore = true;
    }
   
  }, [expertControl, easyFlow, inspection, logs]);

  return (
    <MainLayout>
      {expertControl && <ExpertControlBanner items={expertControl}/>}
      {easyFlow && <EasyFlow items={easyFlow}/>}
      {inspection && <Inspection items={inspection}/>}
      {logs && <Logs items={logs}/>}
<ContactUs />
    </MainLayout>

  );
}
