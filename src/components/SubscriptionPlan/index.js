import clsx from "clsx";

export default function SubscriptionPlan() {
  return (
    <>
      <div className={clsx("col col--4 margin-bottom--md")}>
        <div className="package-list">
          <div className='package-title'>
            <h4>Modellregister</h4>
            <p>For produsenter og leverandører som ønsker en enkel måte å distribuere tekniske detaljer, dokumenter og annet innhold. </p>
          </div>
          <div className='package-price'> Gratis </div>
          <ul>
            <li><img src='img/tik.svg' /> Tekniske detaljer.</li>
            <li><img src='img/tik.svg' /> Dokumenter. </li>
            <li><img src='img/tik.svg' /> Opplæringsmateriell. </li>
          </ul>
          <a className="btn" href="#" title=''>Kontakt oss</a>
        </div>
      </div>


      <div className={clsx("col col--4 margin-bottom--md")}>
        <div className="package-list">
          <div className='package-title'>
            <h4>DigiQuip</h4>
            <p>Løsning for opplæring og kontroll av maskiner. Utstyrsspesifikk opplæring, oversikt og ulike type kontroller av arbeidsutstyr. </p>
          </div>
          <div className='package-price'> 1580 kroner* </div>
          <ul>
            <li><img src='img/tik.svg' /> Utstyrsspesifikk opplæring. </li>
            <li><img src='img/tik.svg' /> Kompetanseoversikt. </li>
            <li><img src='img/tik.svg' /> Kontroll på arbeidsutstyr. </li>
          </ul>
          <a className="btn" href="#" title=''>Kontakt oss</a>
        </div>
      </div>

      <div className={clsx("col col--4 margin-bottom--md")}>
        <div className="package-list">
          <div className='package-title'>
            <h4>BRAREG</h4>
            <p>For sakkyndige kontrollører. BRAREG er et fleksibelt kontrollsystem for planlegging, gjennomføring og oppfølging. </p>
          </div>
          <div className='package-price'> 1790 kroner* </div>
          <ul>
            <li><img src='img/tik.svg' /> Gjennomføring sakkyndig kontroll.</li>
            <li><img src='img/tik.svg' /> Planlegging og oppfølging.</li>
            <li><img src='img/tik.svg' /> Fleksible sjekklister.</li>
          </ul>
          <a className="btn" href="#" title=''>Kontakt oss</a>
        </div>
      </div>

    </>

  )
}
