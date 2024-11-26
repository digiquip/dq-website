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
            <h4>Kontroll av utstyr</h4>
            <p>Løsning for registrering og kontroll av utstyr. Bruk QR-koder/tags for å gjøre det enkelt å identifisere utstyret og gjennomføre ulike handlinger.</p>
          </div>
          <div className='package-price'> Ta kontakt for pris </div>
          <ul>
            <li><img src='img/tik.svg' /> Utstyrsoversikt. </li>
            <li><img src='img/tik.svg' /> Daglig og årlig kontroll. </li>
            <li><img src='img/tik.svg' /> Sjekklister. </li>
          </ul>
        </div>
      </div>
    </>

  )
}
