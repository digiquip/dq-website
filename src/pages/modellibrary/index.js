import clsx from 'clsx';
import ContactUs from '../../components/ContactUs';
import MainLayout from '../../components/MainLayout';
import CompetenceGrid from '../../components/CompetenceGrid';
import SwiperSlider from '../../components/SwiperSlider/index.js';
import Banner from '../../components/Banner/index.js';
import Translate from '@docusaurus/Translate';
import ModelLibraryRecords from '../../../data/modelLibraryContents.js';
import { useEffect, useState } from 'react';

function ModelRegister(props) {
  const data = props.items;
  return (
    <Banner record={data} />
  );
}

function LibraryContent(props) {
  const data = props.items;
  return (
    <CompetenceGrid record={data} />
  );
}

function EasyTraining() {
  return (
    <section className="machines-equipment-section light-bg-grey section-pd">
      <div className="container">
        <div className="row">
          <div className={clsx("col col--6")}>
            <div className='product-content-left'>
              <h3 className='section-title'><Translate>modellibrary.easy_training.title</Translate></h3>
              <p><Translate>modellibrary.easy_training.arg1</Translate></p>
              <p><Translate>modellibrary.easy_training.arg2</Translate></p>
              <p><Translate>modellibrary.easy_training.arg3</Translate></p>
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

function CompetenceContactus() {
  return (
    <ContactUs />
  );
}

// Modellibrary component
export default function Modellibrary() {

  const [modelLibrary , setModelLibraryContent] = useState({})
  const [library , setLibraryContent] = useState({})
  useEffect(() => {
    let ignore = false;
      if (!ignore) {
        setModelLibraryContent(ModelLibraryRecords.modelLibraryBannerData);
        setLibraryContent(ModelLibraryRecords.libraryContentData);
      }
  
    return () => { 
      ignore = true;
    }
   
  }, [modelLibrary, library]);


  return (
    <MainLayout>
      {modelLibrary && <ModelRegister items={modelLibrary}/>}
      {library && <LibraryContent items={library}/>}
      <EasyTraining />
      <CompetenceContactus />
    </MainLayout>

  );
}
