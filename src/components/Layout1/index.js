import HomepageFeatures from "../HomepageFeatures";
import EventBlock from '../EventBlock';

import BrandLogo from "../BrandLogo";
import HomeContactBanner from "../HomeContactBanner";
import SafetyWork from "../SafetyWork";
import Translate from '@docusaurus/Translate';
import mainPageContentRecords from "../../../data/mainPageContents";
import { useState } from "react";
import { useEffect } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 580 },
      items: 4,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 580, min: 0 },
      items: 2,
      slidesToSlide: 1,
    },
  };

  const brandList = props.items;
  return (
    <section className="our-partners-section">
      <h2 className="section-title"><Translate>home.ourpartners.title</Translate>
        <span className="orange">.</span>
      </h2>
      <div className="">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={2000}
          infinite={true}
          arrows={false}
        >
            {brandList.map((props, idx) => (
              <div className='brand-logo brand-carousel-item'  key={idx}>
                <a href={props.link} target="_blank">
                  <BrandLogo key={idx} {...props} />
                </a>
              </div>
            ))}

        </Carousel>
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
const [eventBlockContent , setEventBlockContent] = useState([])
const [brandList , setBrandList] = useState([])
const [safeuseContent , setSafeuseContent] = useState({})
const [consolidateContent , setConsolidateContent] = useState({})
const [shareInfoContent , setShareInfoContent] = useState({})
const [expertInspContent , setExpertInspContent] = useState({})

useEffect(() => {
  let ignore = false;
    if (!ignore) {
      setSafetyWorkContent(mainPageContentRecords.safetyWork);
      setEventBlockContent(mainPageContentRecords.eventBlock);
      setBrandList(mainPageContentRecords.brandLogoPartners);
      setSafeuseContent(mainPageContentRecords.safeuseContent);
      setConsolidateContent(mainPageContentRecords.consolidateWorkContent);
      setShareInfoContent(mainPageContentRecords.shareInfoContent);
      setExpertInspContent(mainPageContentRecords.expertInspContent);
    }

  return () => { 
    ignore = true;
  }
 
}, [safetyWorkContent, eventBlockContent, brandList, safeuseContent, consolidateContent, shareInfoContent, expertInspContent]);

// {eventBlockContent && <EventBlock record={eventBlockContent}/>}

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
