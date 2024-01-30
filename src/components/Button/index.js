/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx';

const FeatureList = [
  {
    title: 'Safety at work',
    URL: 'https://www.youtube.com/embed/HHi45YCFPBc?autoplay=0&cc_load_policy=0&controls=2&disablekb=0&enablejsapi=1&fs=1&iv_load_policy=3&modestbranding=0&origin=https%3A%2F%2Fstg.digiquip.com&playsinline=1&rel=0&wmode=opaque&start=0&widgetid=1',
    description: (
      <>
       <p>We are developing a platform for training, control, and monitoring of machinery.</p>
        <p>Our software is designed to make it easier to facilitate an efficient and safe workplace.</p>
      </>
    ),
  },
];


function SafetyWork({URL, title, description}) {
  return (
    <section className='saferyworksection'>
      <div className='container'>
        <div className="row">
          <div className={clsx('col col--4')}>
            <h2 className='section-title'>{title}<span className='orange'>.</span></h2>
            {description}
          </div>
          <div className={clsx('col col--7 col--offset-1')}>
            <div className='videosection'>
              <iframe src={URL} title="W3Schools Free Online Web Tutorials">
              </iframe>
              <button type="button"><svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.66666 4L25.3333 16L6.66666 28V4Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




export default function Button(props) {

  let label = props.label;
  let isIcon = props.isIcon;
  return (
    <a href='#' className='white-btn btn'>
            <span className="btn_wrapper">
              <span className="btn_text">{label}</span>
              <span className="btn_text">{label}</span>
              {isIcon && <span className="btn_icon"><svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 6H12M12 6L7.2 1M12 6L7.2 11" stroke="#E96847"></path></svg></span>}
            </span>
    </a>
  );
}
