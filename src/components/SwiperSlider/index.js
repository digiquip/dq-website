// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function SwiperSlider() {
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
          <iframe id="ytplayer-133075" frameborder="0" allowfullscreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Husqvarna K535i Liten kappsag - Hvordan bruke" src="https://www.youtube.com/embed/WWZ7bptGkA8?autoplay=0&amp;cc_load_policy=0&amp;controls=2&amp;disablekb=0&amp;enablejsapi=1&amp;fs=1&amp;iv_load_policy=3&amp;modestbranding=0&amp;origin=https%3A%2F%2Fstg.digiquip.com&amp;playsinline=1&amp;rel=0&amp;wmode=opaque&amp;start=0&amp;widgetid=1"></iframe>
          <button type="button" >
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
          <img className="video-poster" src='img/model-library/slider-video-poster.jpg'></img>

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
