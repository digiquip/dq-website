import { useState } from "react";
import BrandLogo from "../BrandLogo";
import PlayButton from "../PlayVideoBtn";

export default function VideoSection({ withoutAutoPlay, withPlay, poster }) {
  const [value, setValue] = useState(null);
  return (
    <div className="videosection">
      {value ? "" : <BrandLogo Img={poster}  width={''} height={''} alt={''} /> }
     <iframe
       src={value ? withPlay : withoutAutoPlay}
       title="Understanding DigiQuip"
       allow="autoplay"
     ></iframe>
     {value ? (
       ""
     ) : (
       <PlayButton onClick={() => setValue("play")} />
     )}
   </div>
  );
}
