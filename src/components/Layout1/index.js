import HomepageFeatures from "../HomepageFeatures";
import clsx from 'clsx';

import BrandLogo from "../BrandLogo";
import SafetyWork from "../SafetyWork";
import News from "../News";
import Translate from '@docusaurus/Translate';
import mainPageContentRecords from "../../../data/mainPageContents";
import { useState } from "react";
import { useEffect } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';







function OurPartners(props) {
  const brandList = props.items;
  return (
    <section className="our-partners-section light-bg-grey">
      <div className="container">
      <h2 className="section-title"><Translate>home.ourpartners.title</Translate>
        <span className="orange">.</span>
      </h2>
      <div className="">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={6}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            disabledClass: 'swiper-button-disabled'
          }}
          pagination={{ 
            clickable: true,
            el: '.swiper-pagination',
            type: 'bullets'
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            580: {
              slidesPerView: 4,
              spaceBetween: 30
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 30
            }
          }}
          aria-label="Partner brands carousel"
        >
            {brandList.map((props, idx) => (
              <SwiperSlide key={idx}>
                <div className='brand-logo brand-carousel-item'>
                  <a href={props.link} target="_blank">
                    <BrandLogo key={idx} {...props} />
                  </a>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
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
const [brandList , setBrandList] = useState([])


useEffect(() => {
  setNewsContent(mainPageContentRecords.newsContent);
  // setSafetyWorkContent(mainPageContentRecords.safetyWork);
  setBrandList(mainPageContentRecords.brandLogoPartners);
}, []); // ✅ Simplified and added empty dependency array

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
      </section>
);
}
