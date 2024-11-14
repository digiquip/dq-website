import clsx from "clsx";

export default function SubscriptionPlan() {
  return (
    <>
      <div className={clsx("col col--4 margin-bottom--md")}>
        <div className="package-list">
          <div className='package-title'>
            <h4>Kvipp</h4>
            <p>Superenkel løsning for gjennomføring og dokumentasjon av utstyrsspesifikk opplæring. Ingen krav til innlogging eller registrering av utstyr. <a href="https://kvipp.it/" target="_blank">Klikk HER for å teste selv.</a></p>
          </div>
          <div className='package-price'> GRATIS </div>
          <ul>
            <li><img src='img/tik.svg' /> Egenerklæring. </li>
            <li><img src='img/tik.svg' /> Praktisk opplæring. </li>
            <li><img src='img/tik.svg' /> Dokumentasjon (pdf). </li>
          </ul>
        </div>
      </div>
      <div className={clsx("col col--4 margin-bottom--md")}>
        <div className="package-list">
          <div className='package-title'>
            <h4>Kvipp bedrift</h4>
            <p>Oversikt over utstyrsspesifikk opplæring. I denne løsningen vil virksomheten få oversikt over hvem som kan/ikke kan bruke hvilket utstyr. Kommer snart!
            </p>
          </div>
          <div className='package-price'> 1390 kroner </div>
          <ul>
            <li><img src='img/tik.svg' /> Dashboard og rapporter. </li>
            <li><img src='img/tik.svg' /> Gruppering av mennesker og utstyr. </li>
            <li><img src='img/tik.svg' /> Kunstig intelligens! </li>
          </ul>
        </div>
      </div>      <div className={clsx("col col--4 margin-bottom--md")}>
        <div className="package-list">
          <div className='package-title'>
            <h4>Full pakke</h4>
            <p>Løsning for både opplæring, registrering av ulik kompetanse og kontroll av maskiner ved hjelp av sjekklister. Støtter både daglig og årlig kontroll samt vedlikehold.</p>
          </div>
          <div className='package-price'> fra 1590 kroner </div>
          <ul>
            <li><img src='img/tik.svg' /> Utstyrsspesifikk opplæring. </li>
            <li><img src='img/tik.svg' /> Kompetanseoversikt. </li>
            <li><img src='img/tik.svg' /> Daglig og årlig kontroll av arbeidsutstyr. </li>
          </ul>
        </div>
      </div>
    </>

  )
}
