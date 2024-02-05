import clsx from 'clsx';
import Layout1 from '@site/src/components/Layout1';
import { useEffect, useState } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/all';
import MainLayout from '../components/MainLayout';
import Translate from '@docusaurus/Translate';

function PageLoader() {
  return (

    <div class="loader">
      <div class="loder-logo">
        <img src="img/loader-img/logo-left.png"></img>
        <img src="img/loader-img/d.png"></img>
        <img src="img/loader-img/i.png"></img>
        <img src="img/loader-img/g.png"></img>
        <img src="img/loader-img/i.png"></img>
        <img src="img/loader-img/q.png"></img>
        <img src="img/loader-img/u.png"></img>
        <img src="img/loader-img/i.png"></img>
        <img src="img/loader-img/p.png"></img>
      </div>
    </div>


  );
}

function HomepageHeader() {
  return (
    <section className='homepage-banner'>
      <div className={clsx('hero hero--primary heroBanner')}>
        <div className="container">
          <h1 className='section-title'><Translate>home.banner.title1</Translate> <br /><Translate>home.banner.title2</Translate><span className='orange'>.</span></h1>
          <div className='banner-img'><img src='img/home-banner.webp'></img></div>
        </div>
        <span className="bg"></span>
      </div>
    </section>
  );
}

// Home component
export default function Home() {
  const [loader, setLoader] = useState(true)
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const showAnim = gsap.from('.navbar', {
      yPercent: -100,
      paused: true,
      duration: 0.2
    }).progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        let element = document.querySelector('.navbar');
        if (element) {
          if (self.direction === 1) {
            element.classList.add("my-class");
          }
          if (self.direction === -1) {
            element.classList.add("up");
          }
          if (self.progress === 0) {
            element.classList.remove("up");
            element.classList.remove("my-class");
          }
        }
        self.direction === -1 ? showAnim.play() : showAnim.reverse()
      }
    });




    let ignore = false;
    if (!ignore) {
      setTimeout(() => {
        setLoader(false)
      }, 3000)
    }
    // cleanup code
    return () => {
      ignore = true;
    }



  })

  return (
    <>
      {loader && <PageLoader />}
      {!loader && <MainLayout>
        <HomepageHeader />

        <Layout1 />
      </MainLayout>}
    </>

  );
}
