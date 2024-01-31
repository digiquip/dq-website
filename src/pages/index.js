import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Layout1 from '@site/src/components/Layout1';
import styles from './index.module.css';
import { useEffect } from 'react';
import { Lenis as ReactLenis } from '@studio-freight/react-lenis'
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/all';


function HomepageHeader() {
  return (
    <div className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className='section-title'>Solutions for safe use of <br></br>work equipment<span className='orange'>.</span></h1>
        <div className='banner-img'><img src='img/home-banner.webp'></img></div>
      </div>
      <span className="bg"></span>
    </div>
  );
}


export default function Home() {

  const { siteConfig } = useDocusaurusContext();

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


    let navLink = document.querySelectorAll('.navbar');
    let navLink1 = document.querySelector('.navbar');
    if (navLink) {
      navLink.forEach(function (link) {
        link.addEventListener('click', function (e) {
          e.preventDefault();
          console.log(navLink)
          setTimeout(() => {
            navLink1.classList.add("my-class");
            navLink1.classList.add("up");
          })


        })
      })

    }

  })
  // scroll ? "main-header scrolled" :
  return (
    <ReactLenis root>
      <Layout
        title={`Hello from ${siteConfig.title}`}
        description="Description will go into a meta tag in <head />"
        className={"main-header"}>
        <HomepageHeader />

        <main>
          <Layout1 />
        </main>
      </Layout>
    </ReactLenis>
  );
}
