import clsx from "clsx";
import { useState } from "react";

// SafetyWork component
export default function SafetyWork({ URL, title, description }) {
  let playVideo =
    "https://www.youtube.com/embed/HHi45YCFPBc?autoplay=1&cc_load_policy=0&controls=2&disablekb=0&enablejsapi=1&fs=1&iv_load_policy=3&modestbranding=0&origin=https%3A%2F%2Fstg.digiquip.com&playsinline=1&rel=0&wmode=opaque&start=0&widgetid=1";

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
              {value ? "" : <img src="img/iframe-banner.jpg"></img>}
              <iframe
                src={value ? playVideo : URL}
                title="Understanding DigiQuip"
              ></iframe>
              {value ? (
                ""
              ) : (
                <button type="button" onClick={() => setValue("play")}>
                  <svg
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.66666 4L25.3333 16L6.66666 28V4Z"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}