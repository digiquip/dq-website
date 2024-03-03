import clsx from 'clsx';
import MainLayout from '../../components/MainLayout';
import Translate from '@docusaurus/Translate';
import ContactUsButton from '../../components/ContactBtn';
import { useEffect } from 'react';


function HomepageHeader() {
    return (
        <section className='aboutus-banner'>
            <div className={clsx('hero hero--primary heroBanner')}>
                <div className="container">
                    <h1 className='section-title'><Translate>aboutus.banner.title1</Translate><span className='orange'>.</span></h1>
                    <div className='banner-img'><img src='img/about_us_image01.webp'></img></div>
                    <div className="row">
                        <div className={clsx("col col--6")}>
                            <h3><Translate>aboutus.banner.title2</Translate></h3>
                        </div>
                        <div className={clsx("col col--6")}>
                            <p><Translate>aboutus.banner.arg1</Translate></p>
                            <p><Translate>aboutus.banner.arg2</Translate></p>
                            <p><Translate>aboutus.banner.arg3</Translate></p>
                        </div>
                    </div>
                </div>
                <span className="bg"></span>
            </div>
        </section>
    );
}

function Contact() {
    return (
        <section className='about-contact section-pd'>
            <div className="container">
                <div className='home-contact-img'><img src='img/home-contact.webp'></img></div>
            </div>

        </section>
    );
}


// About page
export default function About() {
    
    useEffect(() => {

        let element = document.querySelector('.navbar');
        element.classList.add('white-header')
        return () => {
            element.classList.remove('white-header')
        }
    }, [])



    return (
        <MainLayout>
            <HomepageHeader />
            <Contact />
        </MainLayout>
    );
}
