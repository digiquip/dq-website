import { useState } from "react";
import BrandLogo from "../BrandLogo";
import PlayButton from "../PlayVideoBtn";
import { useEffect } from "react";

export default function VideoSection({ withoutAutoPlay, withPlay, poster }) {
  const [value, setValue] = useState(null);

  useEffect(() => {
    let ignore = false;
      if (!ignore) {
       if(withoutAutoPlay === '') {
        setValue('play')
       }
      }
  
    return () => { 
      ignore = true;
    }
   
  }, []);

  return (
    <div className="videosection">
      {value ? "" : <BrandLogo Img={poster}  width={''} height={''} alt={''} /> }
     <iframe
       src={value ? withPlay : withoutAutoPlay}
       title="Understanding DigiQuip"
       allow="autoplay"
       referrerPolicy="strict-origin-when-cross-origin"
     ></iframe>
     {value ? (
       ""
     ) : (
       <PlayButton onClick={() => setValue("play")} />
     )}
   </div>
  );
}
