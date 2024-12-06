import clsx from "clsx";
import VideoSection from "../VideoSection";
import {useEffect, useState} from "react";

// CompetenceGrid component
export default function CompetenceGrid(props) {
  let data = props.record;
  const [value, setValue] = useState(null);

  useEffect(() => {
    // Load the Dyntube script when the component mounts
    if (typeof window !== 'undefined' && !window._dyntube_v1_init) {
      window._dyntube_v1_init = true;
      const script = document.createElement('script');
      script.src = "https://embed.dyntube.com/v1.0/dyntube.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

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
              {data.mediaType === 'image'
                  ?
                  <img src={data.img}></img>
                  : data.mediaType === 'youtube' ?
                      <VideoSection withoutAutoPlay={data.withoutAutoPlay} withPlay={data.withPlay}
                                    poster={data.youtubeVideoBanner}/>
                      : data.mediaType === 'dyntube' ?
                      <div className="videosection">
                        <div
                            data-dyntube-key={data.dyntubeKey}
                            data-controls="false"
                            style={{width: '100%', height: 'auto'}}
                        ></div>
                      </div>
                          : data.mediaType === 'embedded' ? <>
                            <div
                                className="embed-container"
                                dangerouslySetInnerHTML={{__html: data.embedCode}}
                            />
                          </> : null
              }

            </div>
            <p className='image-title'>{data.imgDescriptions}</p>

          </div>
        </div>
      </div>
    </section>
  );
}
