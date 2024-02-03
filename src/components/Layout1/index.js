import HomepageFeatures from "../HomepageFeatures";
import BrandLogo from "../BrandLogo";
import HomeContactBanner from "../HomeContactBanner";
import SafetyWork from "../SafetyWork";
import Translate, {translate} from '@docusaurus/Translate';

const FeatureList = [
  {
    title: translate({message: "home.safety.title"}),
    URL: "https://www.youtube.com/embed/HHi45YCFPBc?autoplay=0&cc_load_policy=0&controls=2&disablekb=0&enablejsapi=1&fs=1&iv_load_policy=3&modestbranding=0&origin=https%3A%2F%2Fstg.digiquip.com&playsinline=1&rel=0&wmode=opaque&start=0&widgetid=1",
    description: (
      <>
        <p><Translate>home.safety.what</Translate></p>
        <p><Translate>home.safety.how</Translate></p>
      </>
    ),
  },
];

const brandList = [
  {
    Img: "img/partner-logos/H-H-logo.svg",
    width: 94,
    height: 71,
    alt: "",
  },
  {
    Img: "img/partner-logos/fosby-logo.svg",
    width: 64,
    height: 64,
    alt: "",
  },
  {
    Img: "img/partner-logos/hesselberg-logo.svg",
    width: 184,
    height: 24,
    alt: "",
  },
  {
    Img: "img/partner-logos/af-logo.svg",
    width: 64,
    height: 64,
    alt: "",
  },
  {
    Img: "img/partner-logos/brubakken-logo.svg",
    width: 128,
    height: 24,
    alt: "",
  },
  {
    Img: "img/partner-logos/brodrene-odegard-logo.svg",
    width: 122,
    height: 41,
    alt: "",
  },
  {
    Img: "img/partner-logos/hybeko-logo.svg",
    width: 104,
    height: 24,
    alt: "",
  },
  {
    Img: "img/partner-logos/cramo-logo.svg",
    width: 141,
    height: 24,
    alt: "",
  },
];

const SikkerBrukList = {
  className: "SikkerBruk",
  title: (
    <h2 className="section-title"><Translate>home.safeuse.title</Translate>
      <span className="orange">.</span>
    </h2>
  ),
  Img: require("@site/static/img/SikkerBruk.webp").default,
  description: (
    <>
      <p><Translate>home.safeuse.arg1</Translate></p>
      <p><Translate>home.safeuse.arg2</Translate></p>
      <p><Translate>home.safeuse.arg3</Translate></p>
    </>
  ),
};

const ConsolidateWorkSectionList = {
  className: "ConsolidateWorkSection",
  title: (
    <h2 className="section-title"><Translate>home.consolidate.title</Translate>
      <span className="orange">.</span>
    </h2>
  ),
  Img: require("@site/static/img/platform-img.webp").default,
  description: (
    <>
      <p><Translate>home.consolidate.arg1</Translate></p>
      <p><Translate>home.consolidate.arg2</Translate></p>
      <ul>
        <li><Translate>home.consolidate.point1</Translate></li>
        <li><Translate>home.consolidate.point2</Translate></li>
        <li><Translate>home.consolidate.point3</Translate></li>
      </ul>
    </>
  ),
};

const ShareInformationList = {
  className: "SikkerBruk",
  title: (
    <h2 className="section-title"><Translate>home.share.title</Translate>
      <span className="orange">.</span>
    </h2>
  ),
  Img: require("@site/static/img/share-information-img.webp").default,
  description: (
    <>
      <p><Translate>home.share.arg1</Translate></p>
      <p><Translate>home.share.arg2</Translate></p>
      <p><Translate>home.share.arg3</Translate></p>
      <ul>
        <li><Translate>home.share.point1</Translate></li>
        <li><Translate>home.share.point2</Translate></li>
        <li><Translate>home.share.point3</Translate></li>
      </ul>
    </>
  ),
};

const ExpertInspectionsList = {
  className: "ConsolidateWorkSection",
  title: (
    <h2 className="section-title"><Translate>home.expert.title</Translate>
      <span className="orange">.</span>
    </h2>
  ),
  Img: require("@site/static/img/last.png").default,
  description: (
    <>
      <p><Translate>home.expert.arg1</Translate></p>
      <p><Translate>home.expert.arg2</Translate></p>
      <ul>
        <li><Translate>home.expert.point1</Translate></li>
        <li><Translate>home.expert.point2</Translate></li>
        <li><Translate>home.expert.point3</Translate></li>
      </ul>
    </>
  ),
};

function SikkerBruk() {
  return <HomepageFeatures record={SikkerBrukList} />;
}

function ConsolidateWork() {
  return <HomepageFeatures record={ConsolidateWorkSectionList} />;
}

function ShareInformation() {
  return <HomepageFeatures record={ShareInformationList} />;
}

function ExpertInspections() {
  return <HomepageFeatures record={ExpertInspectionsList} />;
}


function OurPartners() {
  return (
    <section className="our-partners-section">
      <h2 className="section-title"><Translate>home.ourpartners.title</Translate>
        <span className="orange">.</span>
      </h2>
      <div className="our-partner-logo">
        {brandList.map((props, idx) => (
          <BrandLogo key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

// Layout1 component
export default function Layout1() {
  return (
    <section>
      {FeatureList.map((props, idx) => (
        <SafetyWork key={idx} {...props} />
      ))}

      <SikkerBruk />
      <ConsolidateWork />
      <ShareInformation />
      <ExpertInspections />
      <HomeContactBanner />
      <OurPartners />
    </section>
  );
}
