import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { useEffect } from 'react';
import { Lenis as ReactLenis } from 'lenis/react'
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/all';
import ContactUsButton from '../ContactBtn';
import { useLocation } from 'react-router-dom';

// MainLayout component
export default function MainLayout({ children }) {

  const { siteConfig } = useDocusaurusContext();
  const location = useLocation();

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
    <ReactLenis root>
      <Layout
        title={`${siteConfig.title}`}
        description={`${siteConfig.tagline}`}
        className={"main-header"}>
        <main>
          {children}
        </main>
      </Layout>
      {location.pathname !== '/contact' && (
        <div className="floating-contact-btn">
          <ContactUsButton />
        </div>
      )}
    </ReactLenis>
  );
}
