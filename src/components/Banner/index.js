import clsx from "clsx";
import BrandLogo from "../BrandLogo";
import VideoSection from "../VideoSection";
import useBaseUrl from '@docusaurus/useBaseUrl';

// Banner component
export default function Banner(props) {
  let data = props.record
  return (

    <div className={clsx(`${data.className} hero hero--primary heroBanner`)}>
      <div className="container">
        <h1 className='section-title'>{data.titleWithHTML}</h1>
        {data.descriptionWithHTML && (
          <div className='hero-content'>
            {data.descriptionWithHTML}
          </div>
        )}
        {data.img
          ?
          <div className='banner-img'>
            <BrandLogo Img={useBaseUrl(data.img)} width={''} height={''} alt={''} />
          </div>
          :
         data.withPlay && <VideoSection withoutAutoPlay={data.withoutAutoPlay} withPlay={data.withPlay} poster={data.youtubeVideoBanner} />
        }
      </div>
    </div>
  );
}
