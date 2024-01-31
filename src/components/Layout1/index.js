import HomepageFeatures from "../HomepageFeatures";
import BrandLogo from "../BrandLogo";
import HomeContactBanner from "../HomeContactBanner";
import SafetyWork from "../SafetyWork";

const FeatureList = [
  {
    title: "Safety at work",
    URL: "https://www.youtube.com/embed/HHi45YCFPBc?autoplay=0&cc_load_policy=0&controls=2&disablekb=0&enablejsapi=1&fs=1&iv_load_policy=3&modestbranding=0&origin=https%3A%2F%2Fstg.digiquip.com&playsinline=1&rel=0&wmode=opaque&start=0&widgetid=1",
    description: (
      <>
        <p>
          We are developing a platform for training, control, and monitoring of
          machinery.
        </p>
        <p>
          Our software is designed to make it easier to facilitate an efficient
          and safe workplace.
        </p>
      </>
    ),
  },
];

const brandList = [
  {
    Img: "img/H-H-logo.svg",
    width: 94,
    height: 71,
    alt: "",
  },
  {
    Img: "img/fosby-logo.svg",
    width: 64,
    height: 64,
    alt: "",
  },
  {
    Img: "img/hesselberg-logo.svg",
    width: 184,
    height: 24,
    alt: "",
  },
  {
    Img: "img/af-logo.svg",
    width: 64,
    height: 64,
    alt: "",
  },
  {
    Img: "img/brubakken-logo.svg",
    width: 128,
    height: 24,
    alt: "",
  },
  {
    Img: "img/brodrene-odegard-logo.svg",
    width: 122,
    height: 41,
    alt: "",
  },
  {
    Img: "img/hybeko-logo.svg",
    width: 104,
    height: 24,
    alt: "",
  },
  {
    Img: "img/cramo-logo.svg",
    width: 141,
    height: 24,
    alt: "",
  },
];

const SikkerBrukList = {
  className: "SikkerBruk",
  title: (
    <h2 className="section-title">
      Safe use of work equipment requires necessary <br></br> training and
      expertise<span className="orange">.</span>
    </h2>
  ),
  Img: require("@site/static/img/SikkerBruk.webp").default,
  description: (
    <>
      <p>
        DigiQuip simplifies the management of competence, training, and
        documentation for businesses. The software provides a complete overview
        of courses, competency certificates, training, project experience, and
        professional qualifications.
      </p>
      <p>
        With DigiQuip, the only software offering equipment-specific training,
        it becomes easier for employers to administer the required training.
      </p>
      <p>
        By placing QR codes on machines or equipment, users gain immediate
        access to their own competency status for the specific work equipment.
      </p>
    </>
  ),
};

const ConsolidateWorkSectionList = {
  className: "ConsolidateWorkSection",
  title: (
    <h2 className="section-title">
      Consolidate all work equipment and documentation <br></br> into one
      platform<span className="orange">.</span>
    </h2>
  ),
  Img: require("@site/static/img/platform-img.webp").default,
  description: (
    <>
      <p>
        DigiQuip makes it easy for businesses to gather and share crucial
        information such as user manuals, CE documents, competency requirements,
        and inspection status.
      </p>
      <p>
        By scanning the QR code on the machine or equipment, the user easily
        accesses relevant information, including inspection status, user manual,
        training, and most importantly, competency.
      </p>

      <ul>
        <li>Consolidate and make important documents accessible.</li>
        <li>Keep track of both daily and annual inspections.</li>
        <li>Gain control over competency requirements.</li>
      </ul>
    </>
  ),
};

const ShareInformationList = {
  className: "SikkerBruk",
  title: (
    <h2 className="section-title">
      Suppliers efficiently share information and content <br></br> through our
      model registry<span className="orange">.</span>
    </h2>
  ),
  Img: require("@site/static/img/share-information-img.webp").default,
  description: (
    <>
      <p>
        For easy sharing of product information, documents, competency
        requirements, and training, we have built a model library.
      </p>
      <p>
        With information and content in one place, everyone has access to
        updated information on various models at all times.
      </p>
      <p>
        Our model library is free and open to all. This is how we facilitate
        better, simpler, and faster information sharing for everyone working
        with machinery and equipment.
      </p>
      <ul>
        <li>User manuals and instructions.</li>
        <li>Product specifications.</li>
        <li>Videos, images, and training.</li>
      </ul>
    </>
  ),
};

const ExpertInspectionsList = {
  className: "ConsolidateWorkSection",
  title: (
    <h2 className="section-title">
      Efficient execution and documentation of expert <br></br> inspections
      <span className="orange">.</span>
    </h2>
  ),
  Img: require("@site/static/img/last.png").default,
  description: (
    <>
      <p>
        With our solution, inspectors can efficiently carry out their work from
        planning to follow-up, including thorough documentation.
      </p>
      <p>
        Machine owners also gain complete visibility into the status, inspection
        deadlines, and necessary documentation.
      </p>

      <ul>
        <li>Streamline planning with a comprehensive machine overview.</li>
        <li>Save time with flexible checklists.</li>
        <li>Easily conduct and document annual inspections.</li>
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
      <h2 className="section-title">
        Some of our partners<span className="orange">.</span>
      </h2>
      <div className="our-partner-logo">
        {brandList.map((props, idx) => (
          <BrandLogo key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

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
