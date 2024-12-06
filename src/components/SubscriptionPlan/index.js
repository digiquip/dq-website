import clsx from "clsx";

export default function SubscriptionPlan() {
  return (
    <>
      <div className={clsx("col col--4 margin-bottom--md")}>
        <div className="package-list">
          <div className='package-title'>
            <h4>Kvipp</h4>
            <p>Superenkel løsning for gjennomføring og dokumentasjon av utstyrsspesifikk opplæring, uten innlogging eller administrasjon. <a href="https://kvipp.it/" target="_blank">Klikk HER for å teste selv.</a></p>
          </div>
          <div className='package-price'> GRATIS </div>
          <ul>
            <li><img src='img/tik.svg' /> Gjennomfør opplæring </li>
            <li><img src='img/tik.svg' /> Last ned egne opplæringsbevis (pdf) </li>
          </ul>
        </div>
      </div>
      <div className={clsx("col col--4 margin-bottom--md")}>
        <div className="package-list">
          <div className='package-title'>
            <h4>Kvipp Bedrift</h4>
            <p>Oversikt utstyrsspesifikk opplæring og dokumentasjon. Lanseres i januar. Vil du ha en gratis prøveperiode? <a href="https://digiquip.no/bedrift" target="_blank">Gå hit og registrer deg og så tar vi kontakt!</a></p>
          </div>
          <div className='package-price'> 1390 kroner </div>
          <ul>
            <li><img src='img/tik.svg' /> Oversikt og gapanalyser. </li>
            <li><img src='img/tik.svg' /> Opplæringsbevis (digitale og pdf). </li>
          </ul>
        </div>
      </div>      <div className={clsx("col col--4 margin-bottom--md")}>
        <div className="package-list">
          <div className='package-title'>
            <h4>Trygg Maskin</h4>
            <p>Løsning for registrering og kontroll av utstyr. Bruk QR-koder/tags for å gjøre det enkelt å identifisere utstyret og gjennomføre ulike handlinger.</p>
          </div>
          <div className='package-price'> 3990 kroner </div>
          <ul>
            <li><img src='img/tik.svg' /> Utstyrsoversikt. </li>
            <li><img src='img/tik.svg' /> Daglig kontroll med eller uten sjekklister. </li>
          </ul>
        </div>
      </div>
    </>

  )
}
