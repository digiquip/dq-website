import clsx from 'clsx';
import MainLayout from '../../components/MainLayout';
import Translate from '@docusaurus/Translate';
import ContactUsButton from '../../components/ContactBtn';
import { useEffect, useState } from 'react';
import TeamList from "../../../data/teamList.js";
import BrandLogo from '../../components/BrandLogo/index.js';
import embeddedForm from '../../../data/EmbeddedForm.js';
import useBaseUrl from '@docusaurus/useBaseUrl';

function MeetTeam() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers(TeamList.teamDataSource);
  }, []);
  return (
    <section className='ourteamsec kvipp-benefits-section'>
      <div className="container">
        <div className="team-header-container">
          <h1 className='about-main-heading'> <Translate>aboutus.team.title</Translate><span className='orange'>.</span></h1>
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
    <section className='aboutus-story-section section-pd kvipp-benefits-section'>
      <div className='container'>
        <div className='aboutus-story-grid'>
          <div className='aboutus-story-text'>
            <h2 className='about-main-heading'><Translate>aboutus.banner.title1</Translate><span className='orange'>.</span></h2>
            <h3><Translate>aboutus.banner.title2</Translate></h3>
            <p><Translate>aboutus.banner.arg1</Translate></p>
            <p><Translate>aboutus.banner.arg2</Translate></p>
            <p><Translate>aboutus.banner.arg3</Translate></p>
          </div>
          <div className='aboutus-story-img'>
            <img src='img/about_us_image01.webp' alt='Slik startet det' />
          </div>
        </div>
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

function ContactInfoHorizontal() {
  return (
    <div className="contact-info-horizontal">
      <div className="contact-info-item">
        <div className="contact-info-icon">
          <img src={useBaseUrl('/icons/phone.svg')} alt="Telefon" width="40" height="40" />
        </div>
        <div className="contact-info-value"><a href="tel:+4769838500">69 83 85 00</a></div>
      </div>
      <div className="contact-info-item">
        <div className="contact-info-icon">
          <img src={useBaseUrl('/img/email-icon.svg')} alt="E-post" width="40" height="40" />
        </div>
        <div className="contact-info-value"><a href="mailto:support@digiquip.no">support@digiquip.no</a></div>
      </div>
      <div className="contact-info-item">
        <div className="contact-info-icon">
          <span style={{fontSize: '2.5rem', display: 'inline-block', lineHeight: 1}}>📍</span>
        </div>
        <div className="contact-info-value">Holtskogen 7, 1825 Tomter</div>
      </div>
    </div>
  );
}

function AboutContactFormSection() {
  return (
    <section className="about-contact-form-section section-pd">
      <div className="container">
        <div className="about-contact-form-grid">
          <div className="about-contact-form-text">
            <h2 className='about-main-heading'>Kontakt oss</h2>
            <p style={{marginBottom: '2rem'}}>Usikker på hvem du vil prate med eller har du en sak som skal til support? Se kontaktinformasjonen under eller fyll ut skjemaet.</p>
            <ContactInfoHorizontal />
          </div>
          <div className="about-contact-form-embed" style={{width: '100%'}}>
            <div dangerouslySetInnerHTML={{ __html: embeddedForm }} />
          </div>
        </div>
      </div>
    </section>
  );
}

// Contact page
export default function ContactPage() {
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
      <AboutContactFormSection />
      <HomepageHeader />
    </MainLayout>
  );
} 