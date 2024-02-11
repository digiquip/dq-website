import HomepageFeatures from "../HomepageFeatures";
import BrandLogo from "../BrandLogo";
import HomeContactBanner from "../HomeContactBanner";
import SafetyWork from "../SafetyWork";
import Translate from '@docusaurus/Translate';
import mainPageContentRecords from "../../../data/mainPageContents";
import { useState } from "react";
import { useEffect } from "react";


function Safeuse(props) {
  const safeuseContent = props.items;
  return <HomepageFeatures record={safeuseContent} />;
}

function ConsolidateWork(props) {
  const consolidateWorkSection = props.items;
  return <HomepageFeatures record={consolidateWorkSection} />;
}

function ShareInformation(props) {
  const shareInformation = props.items;
  return <HomepageFeatures record={shareInformation} />;
}

function ExpertInspections(props) {
  const expertInspections = props.items;
  return <HomepageFeatures record={expertInspections} />;
}


function OurPartners(props) {
  const brandList = props.items;
  return (
    <section className="our-partners-section">
      <h2 className="section-title"><Translate>home.ourpartners.title</Translate>
        <span className="orange">.</span>
      </h2>
      <div className="our-partner-logo">
      {brandList.map((props, idx) => (
          <div className='brand-logo'  key={idx}>
            <BrandLogo key={idx} {...props} />
          </div>
        ))}
        {/* {brandList.map((props, idx) => (
          <div className='brand-logo'>
            <BrandLogo key={idx} {...props} />
          </div>
        ))} */}
      </div>
    </section>
  );
}

// Layout1 components
export default function Layout1() {

const [safetyWorkContent , setSafetyWorkContent] = useState([])
const [brandList , setBrandList] = useState([])
const [safeuseContent , setSafeuseContent] = useState({})
const [consolidateContent , setConsolidateContent] = useState({})
const [shareInfoContent , setShareInfoContent] = useState({})
const [expertInspContent , setExpertInspContent] = useState({})

useEffect(() => {
  let ignore = false;
    if (!ignore) {
      setSafetyWorkContent(mainPageContentRecords.safetyWork);
      setBrandList(mainPageContentRecords.brandLogoPartners);
      setSafeuseContent(mainPageContentRecords.safeuseContent);
      setConsolidateContent(mainPageContentRecords.consolidateWorkContent);
      setShareInfoContent(mainPageContentRecords.shareInfoContent);
      setExpertInspContent(mainPageContentRecords.expertInspContent);
    }

  return () => { 
    ignore = true;
  }
 
}, [safetyWorkContent, brandList, safeuseContent, consolidateContent, shareInfoContent, expertInspContent]);



  return (
    <section>
      {safetyWorkContent && safetyWorkContent.map((props, idx) => (
        <SafetyWork key={idx} {...props} />
      ))}
    
      {safeuseContent && <Safeuse items={safeuseContent}/>}
      {consolidateContent && <ConsolidateWork items={consolidateContent}/>}
      {shareInfoContent && <ShareInformation items={shareInfoContent}/>}
      {expertInspContent && <ExpertInspections items={expertInspContent}/>}
      <HomeContactBanner />
      {brandList  && <OurPartners items={brandList}/> }
    </section>
  );
}
