import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import SlideOne from "./Slides/SlideOne";
import SlideTow from "./Slides/SlideTow";
import SlideThree from "./Slides/SlideThree";

import "swiper/css/pagination";

const Banner = () => {
  return (
    <div>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
        }}
      >
        <SwiperSlide>
          <SlideOne />
        </SwiperSlide>
        <SwiperSlide>
          <SlideTow />
        </SwiperSlide>
        <SwiperSlide>
          <SlideThree />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
