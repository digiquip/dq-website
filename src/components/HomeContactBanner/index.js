import Translate from '@docusaurus/Translate';
import ContactUsButton from '../ContactBtn';

// HomeContactBanner Component
export default function HomeContactBanner() {

  return (
    <section className='home-contact-banner text--center'>
      <div className='home-contact-img'><img src='img/home-contact.webp'></img></div>
      <div className='home-contact-content'>
        <h2><Translate>home.contact.title</Translate></h2>
        <div className='home-contact-btn'>
          <ContactUsButton />
        </div>
      </div>
    </section>
  );
}
