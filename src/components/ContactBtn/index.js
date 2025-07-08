import Translate from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useLocation } from '@docusaurus/router';

export default function ContactUsButton() {
  const location = useLocation();
  // Hide on any /contact page (including /en/contact, /nb/contact, etc)
  if (location.pathname.match(/\/contact$/)) {
    return null;
  }
  return (
    <a href='https://digiquip.no/contact' className='floating-contact-btn floating-contact-icon-btn' aria-label='Kontakt oss'>
      <img src={useBaseUrl('/icons/contact.svg')} alt='' style={{width: 32, height: 32}} />
    </a>
  );
}
