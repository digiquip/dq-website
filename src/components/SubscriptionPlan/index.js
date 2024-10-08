import clsx from "clsx";

export default function SubscriptionPlan() {
  return (
    <>
      <div className={clsx("col col--4 margin-bottom--md")}>
        <div className="package-list">
          <div className='package-title'>
            <h4>Priseksempel</h4>
            <p>Løsning for opplæring og kontroll av maskiner.</p>
          </div>
          <div className='package-price'> fra 1480 kroner </div>
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
