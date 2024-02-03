import clsx from 'clsx';
import Translate from '@docusaurus/Translate';

// ContactUs component
export default function ContactUs() {
  return (
    <section className="competence-contactu-sec section-pd">
      <div className="container">
        <div className="row">
          <div className={clsx("col col--12")}>
            <h2 className='section-title'><Translate>general.contactus.title</Translate> <span className='orange'>.</span>
            </h2>
            <div className='rightcontact'>
              <ul>
                <li>
                  <div className='contact_people__item'>
                    <p className='orange'>Chief Commercial Officer</p>
                    <div className='contact_item-content'>
                      <div className='contact-people-detail'>
                        <h3>Tom Freddy Braathen</h3>
                        <a href="mailto:salg@digiquip.no" class="btn__lined" aria-label="salg@digiquip.no" target="_self">
                          <span class="btn__wrapper">
                            <span class="btn__text">salg@digiquip.no</span>
                            <span class="btn__icon">
                              <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 10.1667L10.1667 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M1 1H10.1667V10.1667" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg>
                            </span>
                          </span>
                        </a>
                        <a href="tel:+47 90 77 35 24" aria-label="+47 90 77 35 24" target="_self">
                          <span class="btn__wrapper">
                            <span class="btn__text">+47 90 77 35 24</span>
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
               <a href='#' className='white-btn red-btn btn'>
                  <span className="btn_wrapper">
                    <span className="btn_text"><Translate>home.contact.button</Translate></span>
                    <span className="btn_text"><Translate>home.contact.button</Translate></span>
                  </span>
                </a> 
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
