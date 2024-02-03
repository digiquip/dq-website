import clsx from 'clsx';
import Layout1 from '@site/src/components/Layout1';
import styles from './index.module.css';
import { useEffect } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/all';
import MainLayout from '../components/MainLayout';
import Translate from '@docusaurus/Translate';


function HomepageHeader() {
  return (
    <section className='homepage-banner'>
      <div className={clsx('hero hero--primary', styles.heroBanner)}>
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
  })

  return (
    <MainLayout>
      <HomepageHeader />
      <Layout1 />
    </MainLayout>
  );
}
