import HomepageFeatures from "../HomepageFeatures";
import EventBlock from '../EventBlock';
import clsx from 'clsx';

import BrandLogo from "../BrandLogo";
import HomeContactBanner from "../HomeContactBanner";
import SafetyWork from "../SafetyWork";
import News from "../News";
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
    <section className="our-partners-section light-bg-grey">
      <div className="container">
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
      </div>
    </section>
  );
}

// Layout1 components
export default function Layout1() {

const [newsContent , setNewsContent] = useState([])
// const [safetyWorkContent , setSafetyWorkContent] = useState([])
const [eventBlockContent , setEventBlockContent] = useState([])
const [brandList , setBrandList] = useState([])
const [safeuseContent , setSafeuseContent] = useState({})
const [consolidateContent , setConsolidateContent] = useState({})
const [shareInfoContent , setShareInfoContent] = useState({})

useEffect(() => {
  let ignore = false;
    if (!ignore) {
      setNewsContent(mainPageContentRecords.newsContent);
      // setSafetyWorkContent(mainPageContentRecords.safetyWork);
      setEventBlockContent(mainPageContentRecords.eventBlock);
      setBrandList(mainPageContentRecords.brandLogoPartners);
      setSafeuseContent(mainPageContentRecords.safeuseContent);
      setConsolidateContent(mainPageContentRecords.consolidateWorkContent);
      setShareInfoContent(mainPageContentRecords.shareInfoContent);
    }

  return () => { 
    ignore = true;
  }
 
}, [setNewsContent, eventBlockContent, brandList, safeuseContent, consolidateContent, shareInfoContent]);

  useEffect(() => {
    // Load the Dyntube script when the component mounts
    if (typeof window !== 'undefined' && !window._dyntube_v1_init) {
      window._dyntube_v1_init = true;
      const script = document.createElement('script');
      script.src = "https://embed.dyntube.com/v1.0/dyntube.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

// {eventBlockContent && <EventBlock record={eventBlockContent}/>}

  return (
      <section>
        {newsContent.length ?
            <div className="container">
              <div className="news-section-main">
                <div className="row">
                  {newsContent && newsContent.map((props, idx) => (
                      <div className={clsx("col col--12")} key={idx}>
                        <News {...props} />
                      </div>
                  ))}
                </div>
              </div>
            </div>
            : null}

        {/*{safetyWorkContent && safetyWorkContent.map((props, idx) => (*/}
        {/*    <SafetyWork key={idx} {...props} />*/}
            {/*))}*/}
            {brandList && <OurPartners items={brandList}/>}
            {safeuseContent && <Safeuse items={safeuseContent}/>}
            {consolidateContent && <ConsolidateWork items={consolidateContent}/>}
            {shareInfoContent && <ShareInformation items={shareInfoContent}/>}
            <HomeContactBanner/>
      </section>
);
}
