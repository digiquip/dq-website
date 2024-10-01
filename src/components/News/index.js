import clsx from "clsx";
import { useState } from "react";
import BrandLogo from "../BrandLogo";
import PlayButton from "../PlayVideoBtn";

// SafetyWork component
export default function News({title, description, withoutAutoPlay, withPlay, youtubeVideoBanner, isVideo, imageBanner }) {

    const [value, setValue] = useState(null);

    return (<section className="news-section">
        <div className="card">
            <div className="videosection">
                {isVideo ? <>
                    {value ? "" : <BrandLogo Img={youtubeVideoBanner} width={''} height={''} alt={''}/>}
                    <iframe
                        src={value ? withPlay : withoutAutoPlay}
                        title="Understanding DigiQuip"
                        referrerPolicy="strict-origin-when-cross-origin w-100"
                    ></iframe>
                    {value ? ("") : (<PlayButton onClick={() => setValue("play")}/>)}
                </> : <>
                    <BrandLogo Img={imageBanner} width={''} height={''} alt={''}/>
                </>}
            </div>
            <div className="news-section-detail">
                <h3 className="news-title">
                    {title}
                    <span className="orange">.</span>
                </h3>
                <p className="news-detail">{description}</p>
            </div>
        </div>
    </section>);
}
