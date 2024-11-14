import clsx from 'clsx';
import Layout1 from '@site/src/components/Layout1';
import { useEffect } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/all';
import MainLayout from '../components/MainLayout';
import Translate from '@docusaurus/Translate';

function HomepageHeader() {
    return (
        <section className='homepage-banner'>
            <div className={clsx('hero hero--primary heroBanner')}>
                <div className="container">
                    <div className="row">
                        <div className={clsx("col col--150")}>
                            <h1 className='section-title'><Translate>home.safety.title</Translate><span
                                className='orange'>.</span>
                            </h1>
                            <p><Translate>home.safety.what</Translate></p>
                            <p><Translate>home.safety.how</Translate></p>
                        </div>
                        <div className={clsx("col col--")}>                        </div>
                    </div>
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
    <>
     <MainLayout>
        <HomepageHeader />
        <Layout1 />
      </MainLayout>
    </>

    );
}
