import MainLayout from '../../../components/MainLayout/index.js';
import ContactUs from '../../../components/ContactUs/index.js';
import Banner from '../../../components/Banner/index.js';
import CompetenceGrid from '../../../components/CompetenceGrid/index.js';
import Button from '../../../components/Button/index.js';
import Translate from '@docusaurus/Translate';

// Custom styles for rental page list
const rentalListStyles = `
  .rental-background-section .section-list li,
  .rental-howto-section .section-list li,
  .rental-kvipp-bedrift-section .section-list li {
    line-height: 1.6 !important;
    display: flex !important;
    align-items: center !important;
    padding-left: 0 !important;
  }
  .rental-background-section .section-list li::after,
  .rental-howto-section .section-list li::after,
  .rental-kvipp-bedrift-section .section-list li::after {
    position: relative !important;
    top: auto !important;
    left: auto !important;
    margin-right: 0.75rem !important;
    margin-left: 0 !important;
    flex-shrink: 0 !important;
    align-self: center !important;
    order: -1 !important;
  }
  .rental-kvipp-bedrift-section .section-list li {
    border-bottom: none !important;
    margin-bottom: 0.5rem !important;
    padding: 0.25rem 0 0.25rem 1.5rem !important;
  }
  .rental-kvipp-bedrift-section .section-list li::after {
    margin-left: -1.5rem !important;
  }
`;

// Banner data for rental page - will be set in component
let rentalBannerData = {};
let backgroundSectionData = {};
let howToSectionData = {};
let kvippBedriftSectionData = {};
let findCertificateSectionData = {};

function RentalBanner(props) {
  const bannerContent = props.items;
  return (
    <Banner record={bannerContent} />
  );
}

function BackgroundSection(props) {
  const sectionContent = props.items;
  return (
    <CompetenceGrid record={sectionContent} />
  );
}

function HowToSection(props) {
  const sectionContent = props.items;
  return (
    <CompetenceGrid record={sectionContent} />
  );
}

function KvippBedriftSection(props) {
  const sectionContent = props.items;
  return (
    <CompetenceGrid record={sectionContent} />
  );
}

function FindCertificateSection(props) {
  const sectionContent = props.items;
  return (
    <CompetenceGrid record={sectionContent} />
  );
}

function RentalContactus() {
  return (
    <ContactUs/>
  );
}

// Rental page
export default function RentalPage() {
  const banner = {
        className: "competencebanner",
        titleWithHTML: (
          <>
            <Translate id="kvipp.rental.banner.title1" description="Rental banner title part 1">Opplæring som en tjeneste,</Translate> <br></br>
            <Translate id="kvipp.rental.banner.title2" description="Rental banner title part 2">for utleiere og leverandører</Translate><span className="orange">.</span>
          </>
    ),
  };
  
  const background = {
        className: "rental-background-section",
        titleWithHTML: <Translate id="kvipp.rental.background.title" description="Rental background title">Opplæring til kunder</Translate>,
        descriptionWithHTML: (
          <>
            <p><Translate id="kvipp.rental.background.description1" description="Rental background description 1">Som utleier eller leverandør kan dere tilby utstyrsspesifikk opplæring og dokumentere opplæringen med Kvipp, uavhengig om kunden er Kvipp kunde. Se avsnittet nederst om hvordan finne opplæringsbeviset.</Translate></p>
            <p><Translate id="kvipp.rental.background.description2" description="Rental background description 2">Som utleier av maskiner og utstyr har utleier ansvar for å sørge for at utstyret er i orden, men det er alltid arbeidsgiver som har det endelige ansvaret for opplæring.</Translate></p>
            <p><strong><Translate id="kvipp.rental.background.remember" description="Rental background remember">Husk:</Translate></strong>{' '}<Translate id="kvipp.rental.background.rememberText" description="Rental background remember text">Du som utleier er også arbeidsgiver for egne ansatte som bruker maskiner og utstyr.</Translate>{' '}<a href="/kvipp/1"><Translate id="kvipp.rental.background.readMore" description="Rental background read more">Les mer</Translate></a>.</p>
          </>
        ),
    mediaType: 'image',
    img: "/img/trygt-hjem.png",
    isUnorderedList: false
  };
  
  const howTo = {
        className: "rental-howto-section",
        titleWithHTML: <Translate id="kvipp.rental.howto.title" description="Rental howto title">Slik gir du opplæring</Translate>,
        descriptionWithHTML: (
          <>
            <p><Translate id="kvipp.rental.howto.goToWebsite" description="Rental howto go to website">Gå til nettsiden</Translate>{' '}<a href="https://kvipp.it/" target="_blank" rel="noopener noreferrer">kvipp.it</a></p>
            <ul className='section-list' style={{ marginBottom: '0.5rem', marginTop: '1rem' }}>
              <li style={{ borderBottom: 'none', padding: '0.25rem 0', lineHeight: '1.6' }}><Translate id="kvipp.rental.howto.item1" description="Rental howto item 1">Identifiser deg selv og utstyret</Translate></li>
              <li style={{ borderBottom: 'none', padding: '0.25rem 0', lineHeight: '1.6' }}><Translate id="kvipp.rental.howto.item2" description="Rental howto item 2">Velg "gi opplæring" og gå gjennom sjekklisten</Translate></li>
            </ul>
            <p style={{ marginTop: '0.5rem', fontStyle: 'italic' }}><Translate id="kvipp.rental.howto.note" description="Rental howto note">NB: Du må registrere egen kompetanse før du får valget "gi opplæring".</Translate></p>
            <ul className='section-list' style={{ marginBottom: '0.5rem', marginTop: '1rem' }}>
              <li style={{ borderBottom: 'none', padding: '0.25rem 0', lineHeight: '1.6' }}><Translate id="kvipp.rental.howto.item3" description="Rental howto item 3">Legg til deltakerne. De trenger HMS-kort eller førerkort/pass. Det er ingen øvre grense for antall deltakere.</Translate></li>
            </ul>
          </>
        ),
    mediaType: 'image',
    img: "/img/skanner-utstyr.jpg",
    isUnorderedList: false
  };
  
  const kvippBedrift = {
        className: "rental-kvipp-bedrift-section",
        titleWithHTML: <Translate id="kvipp.rental.kvippBedrift.title" description="Rental kvipp bedrift title">Lære opp andre på vegne av virksomheten</Translate>,
        descriptionWithHTML: (
          <>
            <p><Translate id="kvipp.rental.kvippBedrift.description" description="Rental kvipp bedrift description">Med Kvipp får dere full oversikt over hvem dere har gitt opplæringer til. Under arkiv og opplæringer blir alle opplæringer gitt av instruktører lagret. Slik at dere kan:</Translate></p>
            <ul className='section-list' style={{ marginBottom: '0.5rem', marginTop: '1rem' }}>
              <li style={{ borderBottom: 'none', padding: '0.25rem 0', lineHeight: '1.6' }}><Translate id="kvipp.rental.kvippBedrift.item1" description="Rental kvipp bedrift item 1">Oversikt over hvem som har gitt og fått</Translate></li>
              <li style={{ borderBottom: 'none', padding: '0.25rem 0', lineHeight: '1.6' }}><Translate id="kvipp.rental.kvippBedrift.item2" description="Rental kvipp bedrift item 2">Ettersende dokumentasjon om behov</Translate></li>
            </ul>
          </>
        ),
    mediaType: 'image',
    img: "/img/good.jpg",
    isUnorderedList: false
  };
  
  const findCertificate = {
        className: "rental-find-certificate-section",
        titleWithHTML: <Translate id="kvipp.rental.findCertificate.title" description="Rental find certificate title">Her finner mottakeren opplæringsbeviset</Translate>,
        descriptionWithHTML: (
          <>
            <div style={{ marginTop: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <div style={{ 
                  width: '2rem', 
                  height: '2rem', 
                  borderRadius: '50%', 
                  backgroundColor: 'var(--ifm-color-orange)', 
                  color: '#fff', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontWeight: 'bold',
                  marginRight: '1rem',
                  flexShrink: 0
                }}>1</div>
                <div>
                  <h4 style={{ marginTop: '0', marginBottom: '0.5rem', fontWeight: '600' }}>Kvipp.it</h4>
                  <p style={{ margin: '0' }}><Translate id="kvipp.rental.findCertificate.item1" description="Rental find certificate item 1">Gå til nettsiden og identifiser deg med HMS-kort. Beviset kan lastes ned eller sendes på e-post.</Translate></p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <div style={{ 
                  width: '2rem', 
                  height: '2rem', 
                  borderRadius: '50%', 
                  backgroundColor: 'var(--ifm-color-orange)', 
                  color: '#fff', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontWeight: 'bold',
                  marginRight: '1rem',
                  flexShrink: 0
                }}>2</div>
                <div>
                  <h4 style={{ marginTop: '0', marginBottom: '0.5rem', fontWeight: '600' }}>Kvipp Bedrift</h4>
                  <p style={{ margin: '0' }}><Translate id="kvipp.rental.findCertificate.item2" description="Rental find certificate item 2">Dokumentasjon tilgjengelig i Kvipp Bedrift.</Translate></p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <div style={{ 
                  width: '2rem', 
                  height: '2rem', 
                  borderRadius: '50%', 
                  backgroundColor: 'var(--ifm-color-orange)', 
                  color: '#fff', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontWeight: 'bold',
                  marginRight: '1rem',
                  flexShrink: 0
                }}>3</div>
                <div>
                  <h4 style={{ marginTop: '0', marginBottom: '0.5rem', fontWeight: '600' }}>K-REG (& HMSREG)</h4>
                  <p style={{ margin: '0' }}><Translate id="kvipp.rental.findCertificate.item3" description="Rental find certificate item 3">Dokumentasjon tilgjengelig i K-REG (og HMSREG).</Translate></p>
                </div>
              </div>
            </div>
          </>
        ),
    mediaType: 'image',
    img: "/img/kraner.jpeg",
    isUnorderedList: false
  };

  return (
    <MainLayout>
      <style>{rentalListStyles}</style>
      {banner && <RentalBanner items={banner} />}
      {background && <BackgroundSection items={background} />}
      {howTo && <HowToSection items={howTo} />}
      {kvippBedrift && <KvippBedriftSection items={kvippBedrift} />}
      {findCertificate && <FindCertificateSection items={findCertificate} />}
      <RentalContactus />
    </MainLayout>
  );
}

