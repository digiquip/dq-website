import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import ContactUsButton from '../ContactBtn';

// ContactUs component
export default function ContactUs() {
  return (
    <section className="competence-contactu-sec section-pd">
      <div className="container">
        <div className="row">
          <div className={clsx("col col--12")}>
            <h2 className='section-title'><Translate>general.contactus.title</Translate><span className='orange'>.</span>
            </h2>
            <div className='rightcontact'>
              <ul>
                <li>
                  <div className='contact_people__item'>
                    <p className='orange'>Chief Commercial Officer</p>
                    <div className='contact_item-content'>
                      <div className='contact-people-detail'>
                        <h3>Tom Freddy Braathen</h3>
                        <a href="mailto:salg@digiquip.no" className="btn__lined" aria-label="salg@digiquip.no" target="_self">
                          <span className="btn__wrapper">
                            <span className="btn__text">tfb@digiquip.no</span>
                            <span className="btn__icon">
                              <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 10.1667L10.1667 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M1 1H10.1667V10.1667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                              </svg>
                            </span>
                          </span>
                        </a>
                        <a href="tel:+47 90 77 35 24" aria-label="+47 90 77 35 24" target="_self">
                          <span className="btn__wrapper">
                            <span className="btn__text">+47 45 48 85 25</span>
                          </span>
                        </a>
                      </div>
                      <div className='people-profile'>
                        <img src='img/competence-images/tom_freddy.webp'></img>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div>

                      
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
