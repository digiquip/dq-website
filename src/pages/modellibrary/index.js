import clsx from 'clsx';
import ContactUs from '../../components/ContactUs';
import MainLayout from '../../components/MainLayout';
import CompetenceGrid from '../../components/CompetenceGrid';
import fakeData from '../../../data/datarecord.js'
import SwiperSlider from '../../components/SwiperSlider/index.js';
import Banner from '../../components/Banner/index.js';


function ModelRegister() {
  return (
    <Banner record={fakeData.modelRegisterData} />
  );
}


function CompetenceContactus() {
  return (
    <ContactUs />
  );
}

function LibraryContent() {
  return (
    <CompetenceGrid record={fakeData.libraryContentData} />
  );
}

function EasyTraining() {
  return (
    <section className="machines-equipment-section section-pd">
      <div className="container">
        <div className="row">
          <div className={clsx("col col--6")}>
            <div className='product-content-left'>
              <h3 className='section-title'>Use videos for easy training</h3>
              <p>Videos are an easy way to educate users about equipment and machinery. For rental companies and suppliers, training videos minimize support and ensure proper usage.</p>
              <p>The challenge with producing good videos is that it can be resource-intensive. The content needs to be planned, filmed, edited, and often requires multiple rounds of adjustments. Therefore, we can assist in this process.</p>
              <p>We work closely with our clients - such as <a target="_blank" href='https://www.husqvarna.com/no/?gad_source=1&gclid=CjwKCAiAqNSsBhAvEiwAn_tmxR0CsqRUUVQjIObtyAq8osa7etLF8pwgwBBfLcI6NWsDcZKfFSYzMBoCrhYQAvD_BwE&gclsrc=aw.ds'>Husqvarna</a> and <a href='https://stubbeservice.no/'>Stubbeservice</a>   - and our partner <a href="https://www.urusmedia.no/">Urus Media</a> to ensure a successful outcome with optimal use of time and resources.</p>
              <p><a href='#'>Contact</a>  us for a non-binding discussion about your needs, and we’ll find a good solution together.</p>
            </div>
          </div>
          <div className={clsx("col col--6")}>
            <SwiperSlider/>
          </div>
        </div>
      </div>
    </section>
  );
}


export default function Modellibrary() {

  return (
    <MainLayout>
      <ModelRegister />
      <LibraryContent />
      <EasyTraining />
      <CompetenceContactus />
    </MainLayout>

  );
}
