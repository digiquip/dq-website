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
                        <a href="mailto:tom-freddy@digiquip.no" className="contact-link" aria-label="tom-freddy@digiquip.no" target="_self">
                          tom-freddy@digiquip.no
                        </a>
                        <a href="tel:+47 45 48 85 25" className="contact-link" aria-label="+47 45 48 85 25" target="_self">
                          +47 45 48 85 25
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
