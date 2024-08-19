import clsx from 'clsx';
import MainLayout from '../../components/MainLayout';
import Translate from '@docusaurus/Translate';
import ContactUsButton from '../../components/ContactBtn';
import { useEffect, useState } from 'react';
import TeamList from "../../../data/teamList.js";
import BrandLogo from '../../components/BrandLogo/index.js';


function MeetTeam() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers(TeamList.teamDataSource);
  }, []);
  return (
    <section className='ourteamsec'>
      <div className="container">
        <div className="row">
          <div className={clsx("col col--12")}>
            <h1 className='section-title'> <Translate>aboutus.team.title</Translate><span className='orange'>.</span></h1>
          </div>
        </div>

        <div className="team-row">
          {users && users?.map((item) => (
            <div key={item.id} className="team-item margin-bottom--lg">
              <div className="team-member text--center">
                <div className="team-img">
                   <BrandLogo Img={item.image} width={''} height={''} alt={''} />
                </div>
                <div className='team-details'>
                  <h6 className="team-title">{item.fullName}</h6>
                  <p>{item.designation}</p>
                  <div className='detail-email'>
                    <a href={`mailto: ${item.emailAddress}`}>
                      <img src="img/email-icon.svg" alt="" />
                      {item.emailAddress}
                    </a>
                    <a href={`tel: ${item.mobileNumber}`}>
                      <img src="img/call-icon.svg" alt="" />
                      {item.mobileNumber}
                    </a>
                  </div>
                  {
                    item.contactLink != '' ? <a href={`${item.contactLink}`} target="_blank" className='btn-book' title='book-meeting'> <Translate>aboutus.team.button_lavel</Translate> </a> : ''
                  }
                </div>
              </div>
            </div>
          ))}
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
