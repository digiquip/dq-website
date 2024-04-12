import clsx from "clsx";
import { useState } from "react";
import BrandLogo from "../BrandLogo";
import PlayButton from "../PlayVideoBtn";

// SafetyWork component
export default function SafetyWork({title, description, withoutAutoPlay, withPlay, youtubeVideoBanner }) {
  
  const [value, setValue] = useState(null);

  return (
    <section className="saferyworksection">
      <div className="container">
        <div className="row">
          <div className={clsx("col col--4")}>
            <h2 className="section-title">
              {title}
              <span className="orange">.</span>
            </h2>
            {description}
          </div>
          <div className={clsx("col col--7 col--offset-1")}>
            <div className="videosection">
               {value ? "" : <BrandLogo Img={youtubeVideoBanner}  width={''} height={''} alt={''} /> }
              <iframe
                src={value ? withPlay : withoutAutoPlay}
                title="Understanding DigiQuip"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
              {value ? (
                ""
              ) : (
                <PlayButton onClick={() => setValue("play")} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}