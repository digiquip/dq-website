// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from 'react';

import youtubePlayList from '../../../data/youtubePlayList'

// SwiperSlider component
export default function SwiperSlider() {
  const [playVideo, setPlayVideo] = useState(null);
  return (
    <div className='swiper-slider-right'>
      <Swiper
        navigation={true} modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className='slider-item'>
            <iframe id="ytplayer-133075" frameBorder="0"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              title="Husqvarna K535i Liten kappsag - Hvordan bruke"
              referrerPolicy="strict-origin-when-cross-origin"
              src={playVideo ? youtubePlayList.easyTraining.withPlay : youtubePlayList.easyTraining.withoutAutoPlay}>

            </iframe>
            {playVideo ? (
              ""
            ) : (<><button type="button" onClick={() => setPlayVideo("play")}>
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
            </button><img className="video-poster" src='img/model-library/slider-video-poster.jpg'></img></>
            )}

          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='slider-item'>
            <img src='img/model-library/slider-banner.webp'></img>
          </div>
        </SwiperSlide>

      </Swiper>

    </div>
  );
}
