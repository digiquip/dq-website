import Translate from '@docusaurus/Translate';

export default function ContactUsButton() {

  return (
   
          <a href='https://digiquip.no/about' className='white-btn red-btn btn'>
            <span className="btn_wrapper">
              <span className="btn_text"><Translate>home.contact.button</Translate></span>
              <span className="btn_text"><Translate>home.contact.button</Translate></span>
            </span>
          </a>
  );
}
