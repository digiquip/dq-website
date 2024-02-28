import clsx from "clsx";

export default function SubscriptionPlan() {
  return (
    <>
      <div className={clsx("col col--4 margin-bottom--md")}>
        <div className="package-list">
          <div className='package-title'>
            <h4>Model Register</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitet dolore magna aliqua. </p>
          </div>
          <div className='package-price'> Free </div>
          <ul>
            <li><img src='img/tik.svg' /> Lorem Ipsum is simply dummy</li>
            <li><img src='img/tik.svg' />established fact that a reader will be distracted</li>
            <li><img src='img/tik.svg' />Many desktop publishing packages and web page editors</li>
          </ul>
          <a className="btn" href="#" title=''>Contact us</a>
        </div>
      </div>


      <div className={clsx("col col--4 margin-bottom--md")}>
        <div className="package-list">
          <div className='package-title'>
            <h4>DigiQuip</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitet dolore magna aliqua. </p>
          </div>
          <div className='package-price'> 320 Kroner </div>
          <ul>
            <li><img src='img/tik.svg' /> Lorem Ipsum is simply dummy</li>
            <li><img src='img/tik.svg' />established fact that a reader will be distracted</li>
            <li><img src='img/tik.svg' />Many desktop publishing packages and web page editors</li>
          </ul>
          <a className="btn" href="#" title=''>Contact us</a>
        </div>
      </div>

      <div className={clsx("col col--4 margin-bottom--md")}>
        <div className="package-list">
          <div className='package-title'>
            <h4>Brareg</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elitet dolore magna aliqua. </p>
          </div>
          <div className='package-price'> 4199 Kroner </div>
          <ul>
            <li><img src='img/tik.svg' /> Lorem Ipsum is simply dummy</li>
            <li><img src='img/tik.svg' />established fact that a reader will be distracted</li>
            <li><img src='img/tik.svg' />Many desktop publishing packages and web page editors</li>
          </ul>
          <a className="btn" href="#" title=''>Contact us</a>
        </div>
      </div>

    </>

  )
}
