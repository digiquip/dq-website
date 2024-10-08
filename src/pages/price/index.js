import clsx from 'clsx';
import MainLayout from '../../components/MainLayout';
import { useEffect, useState } from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Translate from '@docusaurus/Translate';
import SubscriptionPlan from '../../components/SubscriptionPlan';
import ContactUs from '../../components/ContactUs';


function PriceComponent() {
  const [equipment, setEquipment] = useState(55);
  const [people, setPeople] = useState(25);
  const [inspectors, setInspectors] = useState(2);
  const [equipmentMaxValue, setEquipmentMaxValue] = useState(7501);
  const [peopleMaxValue, setpeopleMaxValue] = useState(1001);
  const [inspectorsMaxValue, setInspectorsMaxValue] = useState(32);
  const [equipmentCost, setEquipmentCost] = useState(0);
  const [peopleCost, setPeopleCost] = useState(0);
  const [inspectorsCost, setInspectorsCost] = useState(0);
  const [estimatedTotal, setEstimatedTotal] = useState(0);
  const [isCustomPrice, setCustomPrice] = useState(false);
  const [isMaintenance, setIsMaintenance] = useState(false);
  const [additionalCost, setAdditionalCost] = useState(0);


  const rendeInspectorsSwitch = (param) => {

    switch (true) {
      case (param < 1):
        return 0;
      case (param >= 1 && param <= 1):
        return 990;
      case (param > 1 && param <= 2):
        return 1790;
      case (param > 2 && param <= 4):
        return 3000;
      case (param > 4 && param <= 8):
        return 3600;
      case (param > 8 && param <= 16):
        return 4200;
      case (param > 16 && param <= 31):
        return 7000;
      default:
        setCustomPrice(true)
        return 7000;
    }
  }

  const rendePeopleSwitch = (param) => {

    switch (true) {
      case (param < 1):
        return 0;
      case (param >= 1 && param <= 25):
        return 1590;
        case (param > 25 && param <= 50):
          return 2490;
      case (param > 50 && param <= 100):
        return 4190;
      case (param > 100 && param <= 175):
        return 6290;
      case (param > 175 && param <= 250):
        return 8290;
      case (param > 250 && param <= 325):
        return 10190;
      case (param > 325 && param <= 400):
        return 11990;
      case (param > 400 && param <= 475):
        return 13990;
      case (param > 475 && param <= 550):
        return 14990;
      case (param > 550 && param <= 625):
        return 16390;
      case (param > 625 && param <= 700):
        return 17690;
      case (param > 700 && param <= 1000):
        return 22690;
      default:
        setCustomPrice(true)
        return 18090;
    }
  }

  const renderEquipmentSwitch = (param) => {

    switch (true) {
      case (param < 1):
        return 0;
      case (param >= 1 && param <= 50):
        return 490;
      case (param > 50 && param <= 100):
        return 890;
      case (param > 100 && param <= 500):
        return 1890;
      case (param > 500 && param <= 1500):
        return 3190;
      case (param > 1500 && param <= 2500):
        return 5690;
      case (param > 2500 && param <= 5000):
        return 6890;
      case (param > 5000 && param <= 7500):
        return 9390;
      default:
       setCustomPrice(true)
       setEquipment(param)
        return 9390;
    }
  }


  const settings = {
    fill: 'rgb(240 90 8)',
    background: 'rgb(222, 226, 230)'
  }


  const onTodoChange = (value, inputValType, indexPostion) => {

    if (inputValType == 'people') {

      setPeople(value)
      setPeopleCost(rendePeopleSwitch(value));
      setEstimatedTotal(peopleCost + equipmentCost);

    } else if (inputValType == 'equipment') {

      setEquipment(value)
      setEquipmentCost(renderEquipmentSwitch(value));
      setEstimatedTotal(peopleCost + equipmentCost);

      if(value >= equipmentMaxValue) {
      
        console.log(value , equipment, equipmentMaxValue + 'Value greter equipment >= equipmentMaxValue')
       }
      if ( isMaintenance ) {
       setAdditionalCost(rendeAdditionalCostSwitch(value))
      }

    } else if (inputValType == 'inspectors') {

      setInspectors(value)
      setInspectorsCost(rendeInspectorsSwitch(value));
      setEstimatedTotal(inspectorsCost);
    }

    let isPriceHaveCastumValue =  checkIsCustomPrice(value);
    setCustomPrice(isPriceHaveCastumValue)
  }

  const checkIsCustomPrice = (value) => {

    let showCustomPopup = false;
    if(equipment == equipmentMaxValue) {
      showCustomPopup = true;
    }

    if(people == peopleMaxValue) {
      showCustomPopup = true;
    }

    if(inspectors == inspectorsMaxValue) {
      showCustomPopup = true;
    }
    
    return showCustomPopup

  }

  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      setPeopleCost(rendePeopleSwitch(people));
      setEquipmentCost(renderEquipmentSwitch(equipment));
      setInspectorsCost(rendeInspectorsSwitch(inspectors));
      setEstimatedTotal(rendePeopleSwitch(people) + renderEquipmentSwitch(equipment));
    }

    return () => {
      ignore = true;
    }

  }, [equipment,people, inspectors]);

  const returnValOfRangeBgColor = (min, max) => {

    return 100 * (min) / (max);

  }

  const handleMaintenanceChange = (e) => {
    setIsMaintenance(e.target.checked);
    if ( e.target.checked ) {
      setAdditionalCost(rendeAdditionalCostSwitch(equipment))
    } else {
     setAdditionalCost(0);
    }
  };

  const rendeAdditionalCostSwitch = (param) => {
    switch (true) {
      case (param < 1):
        return 0;
        case (param >= 1 && param <= 50):
          return 290;
      case (param >= 50 && param <= 100):
        return 690;
      case (param > 100 && param <= 500):
        return 1490;
      case (param > 500 && param <= 1500):
        return 2690;
      case (param > 1500 && param <= 2500):
        return 4990;
      case (param > 2500 && param <= 5000):
        return 5890;
      case (param > 5000 && param <= 7500):
        return 7690;
      default:
        return 0;
    }
  }

  return (
    <>
      <section className="pricing_calculator_section section-pd">
        <div className="container">
            <h2>Priskalkulator<span className='orange'>.</span></h2>
          <div className="pricing-center">
            <div className="tab-container">
              <Tabs className="tabs-menu">
                <TabItem value="digiQuip" label="DigiQuip" default>
                  <div className="w-tab-content">
                    <div className="w-tab-pane w--tab-active">

                      <div className='tab-nav-dis'>Pris beregnes ut fra mengde arbeidsutstyr og antall personer.</div>
                      <div className="calculator-html w-embed">
                        <div className="pricing-row">

                          <div className="pricing-left">
                            <div className="slider-container">
                              <div className="ui-set">
                                <span className="sub-heading"> Arbeidsutstyr </span>
                                <span className="input-container">
                                  <input type="number" min="0" value={equipment} onChange={e => onTodoChange(e.target.value, 'equipment', 0)} className="calculator-input" />
                                  {equipment > equipmentMaxValue ? <div className="tooltip">
                                    <span className="tooltiparrow"></span>
                                    <span className="tooltiptext">Choose a value less than {equipmentMaxValue}</span>
                                  </div> : ''}
                                </span>
                              </div>
                              <div className="calculator-slider">
                                <span className="slider-track" style={{ background: `linear-gradient(to right, ${settings.fill} ${returnValOfRangeBgColor(equipment, equipmentMaxValue)}%, ${settings.background} ${returnValOfRangeBgColor(equipment, equipmentMaxValue) + 0.1}%)` }}></span>
                                <input type="range" min="0" max={equipmentMaxValue} value={equipment} onChange={e => onTodoChange(e.target.value, 'equipment', 0)} id="equipmentSlider" className="calculator-input calculator-range" />

                              </div>
                            </div>


                            <div className="slider-container">
                              <div className="ui-set">
                                <span className="sub-heading"> Personer </span>
                                <span className="input-container">
                                  <input type="number" min="0" value={people} onChange={e => onTodoChange(e.target.value, 'people', 1)} id="participantsInput" className="calculator-input" />
                                  {people > peopleMaxValue ? <div className="tooltip">
                                    <span className="tooltiparrow"></span>
                                    <span className="tooltiptext">Choose a value less than {peopleMaxValue}</span>
                                  </div> : ''}
                                </span>
                              </div>
                              <div className="calculator-slider">
                                <span className="slider-track" style={{ background: `linear-gradient(to right, ${settings.fill} ${returnValOfRangeBgColor(people, peopleMaxValue)}%, ${settings.background} ${returnValOfRangeBgColor(people, peopleMaxValue) + 0.1}%)` }}></span>
                                <input type="range" min="0" max={peopleMaxValue} value={people} onChange={e => onTodoChange(e.target.value, 'people', 1)} id="peopleSlider" className="calculator-input calculator-range" />

                              </div>
                              <div className="price-additional-main">
                                <div className="ui-set">
                                  <span className="sub-heading"> Ytterligere alternativer: </span>
                                </div>
                                <div className="price-additional-options">
                                <label className="checkbox-container checkbox cursor-pointer">Vedlikehold
                                      <input type="checkbox"
                                        checked={isMaintenance}
                                        onChange={handleMaintenanceChange}
                                      />
                                      <span className="checkmark"></span>
                                    </label>
                                
                                    {/* <label className="checkbox cursor-pointer">
                                      <input type="checkbox"
                                      checked={isMaintenance}
                                      onChange={handleMaintenanceChange}
                                      />
                                      Vedlikehold
                                    </label> */}
                                  </div>
                              </div>

                            </div>

                            <p>
                              Etableringskostnad 5000 kroner. Alle priser er eks. mva. For ytterligere detaljer se vår detaljerte <a href="https://digiquip.no/docs/prices/detailed-price-list">prisliste</a>
                            </p>
                          </div>



                          <div className="pricing-right">
                            {!isCustomPrice && <div className='calculator-one'>
                              <div className='calculator-view'>
                                <h6>
                                  <img src='img/estimated-cost.svg' /> Beregnet månedlig kostnad
                                </h6>
                              </div>
                              <div className='calculator-price'>

                                {equipmentCost > 0 && <div className="ui-set cost-section">
                                  <span className="sub-heading">Arbeidsutstyr</span>
                                  <span id="confCost">kr {equipmentCost}</span>
                                  {equipment > 0 && <div className="conferencing-cost-text">
                                  </div>}
                                  <hr className="calculator-hr" />
                                </div>}


                                {peopleCost > 0 && <div className="ui-set cost-section">
                                  <span className="sub-heading">Personer</span>
                                  <span id="confCost">kr {peopleCost}</span>
                                  {people > 0 && <div className="conferencing-cost-text">
                                  </div>}
                                  <hr className="calculator-hr" />
                                </div>}

                                {isMaintenance && <div className="ui-set cost-section">
                                  <span className="sub-heading">Vedlikehold</span>
                                  <span id="confCost">kr {additionalCost}</span>
                                  <hr className="calculator-hr" />
                                </div>}


                                <div className="ui-set est">
                                  <span className="est-text">Beregnet månedlig kostnad</span>
                                  <span className="total-cost-text" id="videototalCost">kr {equipmentCost + peopleCost + additionalCost}</span>
                                </div>
                              </div>
                            </div>}

                            {/* popup calculator */}

                            {isCustomPrice && <CustomPricePopUp />}
                           
          

                          </div>

                        </div>
                      </div>
                    </div>

                  </div>
                </TabItem>
              </Tabs>
            </div>
           
          </div>
        </div>
      </section>
    </>
  )
}



function CustomPricePopUp() {
  return (
    <>
      <div className="calculator-count">
        <div className="c2-v2-content">
          <img alt="build" src="img/calc-edit.svg" />
          <div className="alt-view-heading">Oi sann på utsiden av kalkulatoren! <br /> Det ordner vi. </div>
          <div className="alt-view-content">Ta kontakt så blir vi enige om en god pris.</div>
          <div className="btn-container">
            <a href="https://digiquip.no/about" target="kontakt">
              <button className="btn-t-1 calculator-button">Kontakt oss</button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

function AboutIntegrations() {
  return (
    <section className='about-integrations section-pd'>
      <div className="container">
        <div className='integrations-center'>
          <h2>Integrasjoner<span className='orange'>.</span> </h2>
          <p>Integrasjoner er et av våre viktigste satsningsområder.</p>
          <div className="row">
            <div className={clsx("col col--4 margin-bottom--lg")}>
                <div className='call-action'>
                <h3>Skreddersøm</h3>
                <p>I 2024 setter vi fart på integrasjonsarbeidet. For størst mulig fleksibilitet bruker vi integrasjonsplattformen <a href="https://www.snaplogic.com/" target="_blank">Snaplogic</a>, og flere av kundene våre har allerede benyttet seg av muligheten for skreddersydde integrasjoner.</p>
                <p>Pris på forespørsel.</p> 
                </div>
              </div>
              
              <div className={clsx("col col--4 margin-bottom--lg")}>
                <div className='call-action'>
                <h3>Kompetanseregisteret</h3>
                <p>Sentralregisterets Kompetanseregister (K-reg) lagrer og utsteder kompetansebevis. Snart kan du hente kompetansebevis fra K-reg til DigiQuip. Se <a href="https://sentralregisteret.no/kompetanseregisteret/" target="_blank">Kompetanseregisteret</a> for mer informasjon.</p> 
                <p>Integrasjonen har ingen ekstra kostnad.</p> 
                </div>
              </div>

              <div className={clsx("col col--4 margin-bottom--lg")}>
                <div className='call-action'>
                <h3>Maskinregisteret</h3>
                <p>Sentralregisterets Maskinregister (M-reg) er et register for arbeidsmaskiner og utstyr. Hent arbeidsutstyr og sakkyndig kontroll fra M-reg til DigiQuip. Se <a href="" target="_blank">Maskinregisteret</a> for mer informasjon.</p>
                <p>Integrasjonen har ingen ekstra kostnad.</p> 
                </div>
                
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}



function PricePageBanner() {
  return (
    <>
      <section className='homepage-banner'>
        <div className={clsx('hero-25 hero hero--primary heroBanner')}>
          <div className="container">
            <h1 className='section-title'>Priser<span className='orange'>.</span></h1>
            <p>Beregn månedlig kostnad i priskalkulatoren nedenfor.</p>
            <div className="row">
              <SubscriptionPlan />
            </div>
          </div>
          <span className="bg"></span>
        </div>
      </section>
    </>


  );
}

// Price page
export default function About() {
  return (
    <MainLayout>

      <PricePageBanner />
      <PriceComponent />
      <AboutIntegrations />
      <ContactUs />
    </MainLayout>
  );
}
