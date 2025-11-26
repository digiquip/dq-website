import MainLayout from '../../../components/MainLayout/index.js';
import ContactUs from '../../../components/ContactUs/index.js';
import Banner from '../../../components/Banner/index.js';
import CompetenceGrid from '../../../components/CompetenceGrid/index.js';
import Button from '../../../components/Button/index.js';
import Translate from '@docusaurus/Translate';

// Custom styles for employer page list
const employerListStyles = `
  .kvipp-background-section .section-list li {
    line-height: 1.6 !important;
    display: flex !important;
    align-items: center !important;
    padding-left: 0 !important;
  }
  .kvipp-background-section .section-list li::after {
    position: relative !important;
    top: auto !important;
    left: auto !important;
    margin-right: 0.75rem !important;
    margin-left: 0 !important;
    flex-shrink: 0 !important;
    align-self: center !important;
    order: -1 !important;
  }
  .kvipp-free-tier-section .section-list li,
  .kvipp-plus-tier-section .section-list li,
  .kvipp-pro-tier-section .section-list li {
    border-bottom: none !important;
    margin-bottom: 0.5rem !important;
    padding: 0.25rem 0 0.25rem 1.5rem !important;
    display: flex !important;
    align-items: center !important;
  }
  .kvipp-free-tier-section .section-list li::after,
  .kvipp-plus-tier-section .section-list li::after,
  .kvipp-pro-tier-section .section-list li::after {
    position: relative !important;
    top: auto !important;
    left: auto !important;
    margin-right: 0.75rem !important;
    margin-left: -1.5rem !important;
    flex-shrink: 0 !important;
    align-self: center !important;
    order: -1 !important;
  }
  .kvipp-tier-badge {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    border-radius: 999px !important;
    font-size: 0.62rem !important;
    font-weight: 600 !important;
    letter-spacing: 0.04em !important;
    padding: 0.05rem 0.85rem !important;
    margin: 0 0 0.32rem 0 !important;
    text-transform: uppercase !important;
    white-space: nowrap !important;
    border: none !important;
    background-color: #FFEFE7 !important;
    color: #FF7A3C !important;
    gap: 0.35rem !important;
  }
  .kvipp-tier-badge__divider {
    opacity: 0.65 !important;
  }
  .kvipp-tier-badge__text {
    display: inline-flex !important;
    align-items: center !important;
  }
  .kvipp-tier-badge__plan {
    text-decoration: underline !important;
    text-decoration-thickness: 2px !important;
    text-underline-offset: 0.08rem !important;
  }
  .kvipp-tier-heading {
    display: inline-flex !important;
    flex-direction: column !important;
    align-items: flex-start !important;
  }
`;

// Banner data for employer page - will be set in component
let employerBannerData = {};

// Background section - will be set in component
let backgroundSectionData = {};

// Arbeidstilsynet section - will be set in component
let arbeidstilsynetSectionData = {};

// Solutions introduction section - will be set in component
let solutionsIntroSectionData = {};

// FREE tier section - will be set in component
let freeTierSectionData = {};

// PLUS tier section - will be set in component
let plusTierSectionData = {};

// PRO tier section - will be set in component
let proTierSectionData = {};

// Integrations section - will be set in component
let integrationsSectionData = {};

function EmployerBanner(props) {
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

function ArbeidstilsynetSection(props) {
  const sectionContent = props.items;
  return (
    <CompetenceGrid record={sectionContent} />
  );
}

function SolutionsIntroSection(props) {
  const sectionContent = props.items;
  return (
    <section className={`${sectionContent.className} section-pd`} style={{ backgroundColor: '#F6F6F6' }}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <div className='product-content-left' style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
              <h3 className='section-title'>{sectionContent.titleWithHTML}</h3>
              {sectionContent.descriptionWithHTML && sectionContent.descriptionWithHTML}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FreeTierSection(props) {
  const sectionContent = props.items;
  return (
    <CompetenceGrid record={sectionContent} />
  );
}

function PlusTierSection(props) {
  const sectionContent = props.items;
  return (
    <CompetenceGrid record={sectionContent} />
  );
}

function ProTierSection(props) {
  const sectionContent = props.items;
  return (
    <CompetenceGrid record={sectionContent} />
  );
}

function IntegrationsSection(props) {
  const sectionContent = props.items;
  return (
    <CompetenceGrid record={sectionContent} />
  );
}

function DocumentationNote() {
  return (
    <section className="section-pd" style={{ backgroundColor: '#F6F6F6' }}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
              <p style={{ fontSize: '17px', lineHeight: '25px', margin: '0' }}>
                <Translate id="kvipp.employer.documentation.note.prefix" description="Documentation note prefix">Mer detaljer kan leses om under</Translate>{' '}
                <a href="/docs/intro" style={{ color: 'var(--ifm-color-orange)', textDecoration: 'underline' }}>
                  <Translate id="kvipp.employer.documentation.note.link" description="Documentation note link">dokumentasjon</Translate>
                </a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EmployerContactus() {
  return (
    <ContactUs/>
  );
}

// Employer page
export default function EmployerPage() {
  const banner = {
    className: "competencebanner",
    titleWithHTML: (
      <>
        <Translate id="kvipp.employer.banner.title1" description="Banner title part 1">Opplæring i bruk av</Translate> <br></br>
        <Translate id="kvipp.employer.banner.title2" description="Banner title part 2">maskiner og verktøy</Translate><span className="orange">.</span>
      </>
    ),
  };
  
  const background = {
        className: "kvipp-background-section",
        titleWithHTML: <Translate id="kvipp.employer.background.title" description="Background section title">For trygg og riktig bruk</Translate>,
        descriptionWithHTML: (
          <>
            <p><Translate id="kvipp.employer.background.description" description="Background section description">Den som skal bruke maskiner og verktøy skal være kjent med utstyret, og vite hvordan bruke det riktig. Opplæring anbefales å inneholde blant annet:</Translate></p>
            <ul className='section-list' style={{ marginBottom: '0.5rem', marginTop: '1rem' }}>
              <li style={{ borderBottom: 'none', padding: '0.25rem 0', lineHeight: '1.6' }}><Translate id="kvipp.employer.background.item1" description="Background item 1">Betjening</Translate></li>
              <li style={{ borderBottom: 'none', padding: '0.25rem 0', lineHeight: '1.6' }}><Translate id="kvipp.employer.background.item2" description="Background item 2">Sikkerhetsutstyr</Translate></li>
              <li style={{ borderBottom: 'none', padding: '0.25rem 0', lineHeight: '1.6' }}><Translate id="kvipp.employer.background.item3" description="Background item 3">Bruksområde</Translate></li>
              <li style={{ borderBottom: 'none', padding: '0.25rem 0', lineHeight: '1.6' }}><Translate id="kvipp.employer.background.item4" description="Background item 4">Funksjonalitet</Translate></li>
              <li style={{ borderBottom: 'none', padding: '0.25rem 0', lineHeight: '1.6' }}><Translate id="kvipp.employer.background.item5" description="Background item 5">Personlig verneutstyr</Translate></li>
              <li style={{ borderBottom: 'none', padding: '0.25rem 0', lineHeight: '1.6' }}><Translate id="kvipp.employer.background.item6" description="Background item 6">Daglig kontroll</Translate></li>
            </ul>
            <p style={{ marginTop: '0.25rem', marginBottom: '0' }}>
              <Translate id="kvipp.employer.background.documentation.prefix" description="Background documentation prefix">og dette skal dokumenteres (se</Translate>{' '}
              <a href="https://www.arbeidstilsynet.no/regelverk/forskrifter/forskrift-om-utforelse-av-arbeid/" target="_blank" rel="noopener noreferrer">
                <Translate id="kvipp.employer.background.documentation.link" description="Background documentation link">forskrift om utførelse av arbeid</Translate>
              </a>).
            </p>
          </>
        ),
    mediaType: 'image',
    img: "/img/trygt-hjem.png",
    isUnorderedList: false
  };
  
  const arbeidstilsynet = {
        className: "kvipp-arbeidstilsynet-section",
        titleWithHTML: <Translate id="kvipp.employer.arbeidstilsynet.title" description="Arbeidstilsynet section title">Hva ber Arbeidstilsynet om?</Translate>,
        descriptionWithHTML: (
          <>
            <p>«<Translate id="kvipp.employer.arbeidstilsynet.requirement1" description="Arbeidstilsynet requirement 1">Dokumentasjon som viser hvilke krav som stilles til de personer som kan bruke arbeidsutstyr som kan medføre særlig fare for skade på liv eller helse.</Translate>»</p>
            <p><Translate id="kvipp.employer.arbeidstilsynet.and" description="And">og</Translate></p>
            <p>«<Translate id="kvipp.employer.arbeidstilsynet.requirement2" description="Arbeidstilsynet requirement 2">Dokumentasjon som viser at arbeidstakerne har gjennomgått opplæring på det spesifikke arbeidsutstyret vedkommende settes til å bruke.</Translate>»</p>
            <p><Translate id="kvipp.employer.arbeidstilsynet.goodToGo" description="Good to go text">Og har du dette på plass, er du good to go.</Translate></p>
          </>
        ),
    mediaType: 'image',
    img: "/img/good.jpg",
    isUnorderedList: false
  };
  
  const solutionsIntro = {
        className: "kvipp-solutions-intro-section",
        titleWithHTML: <Translate id="kvipp.employer.solutions.title" description="Solutions intro title">Velg den løsningen som passer deg</Translate>,
        descriptionWithHTML: null,
    mediaType: null,
    img: null,
    isUnorderedList: false
  };
  
  const freeTier = {
        className: "kvipp-free-tier-section",
        titleWithHTML: (
          <span className="kvipp-tier-heading">
            <span className="kvipp-tier-badge">
              <span className="kvipp-tier-badge__text">Kvipp</span>
              <span className="kvipp-tier-badge__divider">|</span>
              <span className="kvipp-tier-badge__text kvipp-tier-badge__plan">Gratis</span>
            </span>
            <Translate id="kvipp.employer.free.title" description="Free tier title">Utstyrsspesifikk opplæring en gang i blant</Translate>
          </span>
        ),
        descriptionWithHTML: (
          <>
            <p><Translate id="kvipp.employer.free.description" description="Free tier description">Bruk Kvipp helt uforpliktende, og gratis! Det eneste du trenger er mobil og HMS-kort (eventuell annen ID).</Translate></p>
            <ul className='section-list'>
              <li style={{ borderBottom: 'none' }}><a href="https://kvipp.it/" target="_blank" rel="noopener noreferrer"><Translate id="kvipp.employer.free.item1" description="Free tier item 1">Gå til nettsiden kvipp.it</Translate></a></li>
              <li style={{ borderBottom: 'none' }}><Translate id="kvipp.employer.free.item2" description="Free tier item 2">Identifiser person med HMS-kort eller førerkort. Skann QR-koden på HMS-kortet eller ta bilde av førerkort og la kunstig intelligens gjøre jobben</Translate></li>
              <li style={{ borderBottom: 'none' }}><Translate id="kvipp.employer.free.item3" description="Free tier item 3">Skann kjennetegn (QR-kode/NFC tag) eller bruk kunstig intelligens for å gjenkjenne utstyret</Translate></li>
            </ul>
            <p style={{ marginTop: '0.75rem', fontWeight: '600', fontSize: '1.1rem' }}><Translate id="kvipp.employer.free.price" description="Free tier price">Pris: Gratis</Translate></p>
          </>
        ),
    mediaType: 'image',
    img: "/img/skanner-utstyr.jpg",
    isUnorderedList: false
  };
  
  const plusTier = {
        className: "kvipp-plus-tier-section",
        titleWithHTML: (
          <span className="kvipp-tier-heading">
            <span className="kvipp-tier-badge">
              <span className="kvipp-tier-badge__text">Kvipp</span>
              <span className="kvipp-tier-badge__divider">|</span>
              <span className="kvipp-tier-badge__text kvipp-tier-badge__plan">Pluss</span>
            </span>
            <Translate id="kvipp.employer.plus.title" description="Plus tier title">Kontroll på utstyrsspesifikk opplæring</Translate>
          </span>
        ),
        descriptionWithHTML: (
          <>
            <p><Translate id="kvipp.employer.plus.description" description="Plus tier description">Du har kontroll på det meste, men ikke utstyrsspesifikk opplæring? Da kan du benytte deg av Kvipp og den enkleste pakken.</Translate></p>
            <ul className='section-list'>
              <li style={{ borderBottom: 'none' }}><Translate id="kvipp.employer.plus.item1" description="Plus tier item 1">Ansatte legges automatisk, og sikkert, til i Kvipp Bedrift via Arbeidstilsynets HMS-kort API</Translate></li>
              <li style={{ borderBottom: 'none' }}><Translate id="kvipp.employer.plus.item2" description="Plus tier item 2">Utstyr og dokumentasjon registreres automatisk etter utført opplæring</Translate></li>
              <li style={{ borderBottom: 'none' }}><Translate id="kvipp.employer.plus.item3" description="Plus tier item 3">Oversikt og gapanalyser i realtid. Få løpende oversikt over hvem som har eller mangler opplæring</Translate></li>
            </ul>
            <p style={{ marginTop: '0.75rem', fontWeight: '600', fontSize: '1.1rem' }}><Translate id="kvipp.employer.plus.price" description="Plus tier price">Pris: Fra 1390,- per måned</Translate></p>
          </>
        ),
    mediaType: 'image',
    img: "/img/bygg.jpg",
    isUnorderedList: false
  };
  
  const proTier = {
        className: "kvipp-pro-tier-section",
        titleWithHTML: (
          <span className="kvipp-tier-heading">
            <span className="kvipp-tier-badge">
              <span className="kvipp-tier-badge__text">Kvipp</span>
              <span className="kvipp-tier-badge__divider">|</span>
              <span className="kvipp-tier-badge__text kvipp-tier-badge__plan">Pro</span>
            </span>
            <Translate id="kvipp.employer.pro.title" description="Pro tier title">Dokumentert og utstyrsspesifikk opplæring</Translate>
          </span>
        ),
        descriptionWithHTML: (
          <>
            <p><Translate id="kvipp.employer.pro.description" description="Pro tier description">Ende til ende kontroll på opplæring på maskiner og verktøy? Du kan bruke Kvipp til å løse dokumentasjon av hele prosessen fra kategorier til fullført opplæring, både dokumentert sikkerhets- og utstyrsspesifikk opplæring.</Translate></p>
            <p><Translate id="kvipp.employer.pro.controlTitle" description="Pro tier control title">Kontroll fra a til å:</Translate></p>
            <ul className='section-list'>
              <li style={{ borderBottom: 'none' }}><Translate id="kvipp.employer.pro.item1" description="Pro tier item 1">Kategorisering, med eller uten kunstig intelligens</Translate></li>
              <li style={{ borderBottom: 'none' }}><Translate id="kvipp.employer.pro.item2" description="Pro tier item 2">Risikovurdering og tiltak</Translate></li>
              <li style={{ borderBottom: 'none' }}><Translate id="kvipp.employer.pro.item3" description="Pro tier item 3">Vurdering av behovet for utstyrsspesifikk opplæring</Translate></li>
              <li style={{ borderBottom: 'none' }}><Translate id="kvipp.employer.pro.item4" description="Pro tier item 4">Krav til opplæring før bruk av maskiner og verktøy</Translate></li>
              <li style={{ borderBottom: 'none' }}><Translate id="kvipp.employer.pro.item5" description="Pro tier item 5">Gjennomføre og dokumentere sikkerhetsopplæring</Translate></li>
              <li style={{ borderBottom: 'none' }}><Translate id="kvipp.employer.pro.item6" description="Pro tier item 6">Systemet sørger for at de det gjelder automatisk får opp forholdsregler og opplæringskrav i Kvipp</Translate></li>
            </ul>
            <p style={{ marginTop: '0.75rem', fontWeight: '600', fontSize: '1.1rem' }}><Translate id="kvipp.employer.pro.price" description="Pro tier price">Pris: Fra 2490,- per måned</Translate></p>
          </>
        ),
    mediaType: 'image',
    img: "/img/team.jpg",
    isUnorderedList: false
  };
  
  const integrations = {
        className: "kvipp-integrations-section",
        titleWithHTML: <Translate id="kvipp.employer.integrations.title" description="Integrations title">Kompetanseregisteret (K-REG)</Translate>,
        descriptionWithHTML: (
          <>
            <p><Translate id="kvipp.employer.integrations.description" description="Integrations description">Utstyrsspesifikk opplæring kan lastes direkte opp i K-REG, enten som et tilvalg eller frittstående. Videre deler K-REG kompetanse med HMSREG.</Translate></p>
            <div className="integration-benefits" style={{ marginTop: '1.5rem' }}>
              <div className="benefit-item">
                <span className="benefit-icon">✓</span>
                <span><Translate id="kvipp.employer.integrations.benefit1" description="Integration benefit 1">Synlig i HMSREG via Kompetanseregisteret</Translate></span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">✓</span>
                <span><Translate id="kvipp.employer.integrations.benefit2" description="Integration benefit 2">Ingen manuell dataregistrering kreves</Translate></span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">✓</span>
                <span><Translate id="kvipp.employer.integrations.benefit3" description="Integration benefit 3">Løpende dokumentasjon av utstyrsspesifikk opplæring</Translate></span>
              </div>
            </div>
            <p style={{ marginTop: '1.5rem' }}><Translate id="kvipp.employer.integrations.note" description="Integration note">Det er kun praktiske opplæringer gitt av personer med rollen instruktør som oversendes.</Translate></p>
          </>
        ),
    mediaType: 'image',
    img: "/img/kraner.jpeg",
    isUnorderedList: false
  };

  return (
    <MainLayout>
      <style>{employerListStyles}</style>
      {banner && <EmployerBanner items={banner} />}
      {background && <BackgroundSection items={background} />}
      {arbeidstilsynet && <ArbeidstilsynetSection items={arbeidstilsynet} />}
      {solutionsIntro && <SolutionsIntroSection items={solutionsIntro} />}
      {freeTier && <FreeTierSection items={freeTier} />}
      {plusTier && <PlusTierSection items={plusTier} />}
      {proTier && <ProTierSection items={proTier} />}
      {integrations && <IntegrationsSection items={integrations} />}
      <DocumentationNote />
      <EmployerContactus />
    </MainLayout>
  );
}

