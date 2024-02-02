import clsx from "clsx";
import styles from './styles.module.css';
export default function Banner(props) {
  let data = props.record
  return (

    <div className={clsx(`${data.className} hero hero--primary`, styles.heroBanner)}>
      <div className="container">
        <h1 className='section-title'>{data.titleWithHTML}</h1>
        <div className='banner-img'><img src={data.img}></img></div>
        <div className="row">
          <div className={clsx("col col--7")}>
            <div className='hero-content'>
            {data.descriptionWithHTML}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
