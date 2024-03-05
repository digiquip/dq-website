import clsx from 'clsx';
import MainLayout from '../../components/MainLayout';
import Translate from '@docusaurus/Translate';
import ContactUsButton from '../../components/ContactBtn';
import { useEffect } from 'react';


function MeetTeam() {

  return (
    <section className='ourteamsec'>
      <div class="container">
        <div class="row">
          <div className={clsx("col col--12")}>
            <h1 className='section-title'>Meet Our Team<span className='orange'>.</span></h1>
          </div>
        </div>

        <div className="team-row">
          <div className="team-item margin-bottom--lg">
            <div class="team-member text--center">
              <div class="team-img">
                <img src="img/competence-images/tom_freddy.webp" alt="" />
              </div>
              <div className='team-details'>
              <h6 class="team-title">John Marshall</h6>
              <p>Designer</p>
              <div className='detail-email'>
                <a href="mailto:webmaster@gmail.com"> <img src="img/email-icon.svg" alt="" />webmaster@gmail.com</a>
                <a href="tel:+4733378901"> <img src="img/call-icon.svg" alt="" /> +47 333 78 901</a>
               </div>
              <a href='#' className='btn-book' title='book-meeting'>book a meeting</a>
            </div>
            </div>
          </div>

          

          <div className="team-item margin-bottom--lg">
            <div class="team-member text--center">
              <div class="team-img">
                <img src="img/competence-images/tom_freddy.webp" alt="" />
              </div>
              <div className='team-details'>
              <h6 class="team-title">John Marshall</h6>
              <p>Designer</p>
              <div className='detail-email'>
                <a href="mailto:webmaster@gmail.com"> <img src="img/email-icon.svg" alt="" />webmaster@gmail.com</a>
                <a href="tel:+4733378901"> <img src="img/call-icon.svg" alt="" /> +47 333 78 901</a>
               </div>
              <a href='#' className='btn-book' title='book-meeting'>book a meeting</a>
            </div>
            </div>
          </div>


          <div className="team-item margin-bottom--lg">
            <div class="team-member text--center">
              <div class="team-img">
                <img src="img/competence-images/tom_freddy.webp" alt="" />
              </div>
              <div className='team-details'>
              <h6 class="team-title">John Marshall</h6>
              <p>Designer</p>
              <div className='detail-email'>
                <a href="mailto:webmaster@gmail.com"> <img src="img/email-icon.svg" alt="" />webmaster@gmail.com</a>
                <a href="tel:+4733378901"> <img src="img/call-icon.svg" alt="" /> +47 333 78 901</a>
               </div>
              <a href='#' className='btn-book' title='book-meeting'>book a meeting</a>
            </div>
            </div>
          </div>


          <div className="team-item margin-bottom--lg">
            <div class="team-member text--center">
              <div class="team-img">
                <img src="img/competence-images/tom_freddy.webp" alt="" />
              </div>
              <div className='team-details'>
              <h6 class="team-title">John Marshall</h6>
              <p>Designer</p>
              <div className='detail-email'>
                <a href="mailto:webmaster@gmail.com"> <img src="img/email-icon.svg" alt="" />webmaster@gmail.com</a>
                <a href="tel:+4733378901"> <img src="img/call-icon.svg" alt="" /> +47 333 78 901</a>
               </div>
              <a href='#' className='btn-book' title='book-meeting'>book a meeting</a>
            </div>
            </div>
          </div>




          

          

        </div>
      </div>
    </section>
  )
}

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
      <MeetTeam />
      <HomepageHeader />
      <Contact />
    </MainLayout>
  );
}
