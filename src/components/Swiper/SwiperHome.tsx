import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'


export const SwiperHome = () => {
  return (
    <Swiper
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '90%', width: '80%' }}

      modules={[Navigation, Autoplay]}
      loop={true}
      speed={500}
      autoplay
      navigation
      centeredSlides={true}
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img className='swiperHomeImg' width='100%' height='100%' src='https://placehold.co/600x600' />
      </SwiperSlide>
      <SwiperSlide>
        <img width='100%' height='100%' src='https://placehold.co/600x400' />
      </SwiperSlide>
      <SwiperSlide>
        <img width='100%' height='100%' src='https://placehold.co/600x400' />
      </SwiperSlide>
      <SwiperSlide>
        <img width='100%' height='100%' src='https://placehold.co/600x400' />
      </SwiperSlide>
    </Swiper>
  );
};
