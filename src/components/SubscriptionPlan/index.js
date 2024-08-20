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
        </div>
      </div>


      <div className={clsx("col col--4 margin-bottom--md")}>
        <div className="package-list">
          <div className='package-title'>
            <h4>DigiQuip</h4>
            <p>Løsning for opplæring og kontroll av maskiner. Utstyrsspesifikk opplæring, oversikt og ulike type kontroller av arbeidsutstyr. </p>
          </div>
          <div className='package-price'> fra 1280 kroner </div>
          <ul>
            <li><img src='img/tik.svg' /> Utstyrsspesifikk opplæring. </li>
            <li><img src='img/tik.svg' /> Kompetanseoversikt. </li>
            <li><img src='img/tik.svg' /> Kontroll på arbeidsutstyr. </li>
          </ul>
        </div>
      </div>
    </>

  )
}
