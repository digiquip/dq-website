import Translate from '@docusaurus/Translate';

export default function HomeContactBanner() {

  return (
    <section className='home-contact-banner text--center'>
      <div className='home-contact-img'><img src='img/home-contact.webp'></img></div>
      <div className='home-contact-content'>
        <h2><Translate>home.contact.title</Translate></h2>
        <div className='home-contact-btn'>
          <a href='#' className='white-btn red-btn btn'>
            <span className="btn_wrapper">
              <span className="btn_text"><Translate>home.contact.button</Translate></span>
              <span className="btn_text"><Translate>home.contact.button</Translate></span>
              <span className="btn_icon"><svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 6H12M12 6L7.2 1M12 6L7.2 11" stroke="#E96847"></path></svg></span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
