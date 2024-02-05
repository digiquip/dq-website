import clsx from "clsx";
import VideoSection from "../VideoSection";

// CompetenceGrid component
export default function CompetenceGrid(props) {
  let data = props.record;
  return (
    <section className={`${data.className} section-pd`}>
      <div className="container">
        <div className="row">
          <div className={clsx("col col--6")}>
            <div className='product-content-left'>
              <h3 className='section-title'>{data.titleWithHTML}</h3>
              {data.descriptionWithHTML}
            </div>

            {data.isUnorderedList &&
              data.unorderedListData
            }
          </div>
          <div className={clsx("col col--6")}>
            <div className='sikker-img'>
              {data.img
                ?
                <img src={data.img}></img>
                :
                <VideoSection withoutAutoPlay={data.withoutAutoPlay} withPlay={data.withPlay} poster={data.youtubeVideoBanner} />
              }

            </div>
            <p className='image-title'>{data.imgDescriptions}</p>

          </div>
        </div>
      </div>
    </section>
  );
}
