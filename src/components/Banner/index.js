import clsx from "clsx";
import BrandLogo from "../BrandLogo";
import VideoSection from "../VideoSection";

// Banner component
export default function Banner(props) {
  let data = props.record
  return (

    <div className={clsx(`${data.className} hero hero--primary heroBanner`)}>
      <div className="container">
        <h1 className='section-title'>{data.titleWithHTML}</h1>
        {data.img
          ?
          <div className='banner-img'>
            <BrandLogo Img={data.img} width={''} height={''} alt={''} />
          </div>
          :
         data.withPlay && <VideoSection withoutAutoPlay={data.withoutAutoPlay} withPlay={data.withPlay} poster={data.youtubeVideoBanner} />
        }
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
