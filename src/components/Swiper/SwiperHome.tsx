import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Box } from '@mui/system';
import { useMediaQuery } from '@mui/material';

export const SwiperHome = () => {
  const breakpoint = useMediaQuery('(min-width:850px)');
if(breakpoint){

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      loop={true}
      speed={600}
      autoplay
      navigation
      centeredSlides={true}
      spaceBetween={0}
      slidesPerView={1}
    >
      <SwiperSlide
        style={{
          boxSizing: 'border-box',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Box className='swiperHomeImg'>
          <img
            style={{ display: 'block', marginTop: '45px', objectFit: 'contain', width: '100%' }}
            src='/paints/22.jpg'
          />
        </Box>
      </SwiperSlide>
      <SwiperSlide
        style={{
          boxSizing: 'border-box',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Box className='swiperHomeImg'>
          <img
            style={{
              display: 'flex',
              marginTop: '45px',
              height: '100%',
              maxHeight: '800px',
              width: '100%'
            }}
            src='/paints/23.jpg'
          />
        </Box>
      </SwiperSlide>

      <SwiperSlide
        style={{
          boxSizing: 'border-box',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Box className='swiperHomeImg'>
          <img
            style={{ display: 'block', marginTop: '45px', width: '100%' }}
            src='/paints/17.jpg'
          />
        </Box>
      </SwiperSlide>
    </Swiper>
  );}
  else{
    return(<Swiper
      modules={[Navigation, Autoplay]}
      loop={true}
      speed={600}
      autoplay
      navigation
      centeredSlides={true}
      spaceBetween={0}
      slidesPerView={1}
    >
      <SwiperSlide
        style={{
          boxSizing: 'border-box',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Box className='swiperHomeImg'>
          <img
            style={{ display: 'block', marginTop: '45px', objectFit: 'contain', width: '100%' }}
            src='/paints/28.jpg'
          />
        </Box>
      </SwiperSlide>
      <SwiperSlide
        style={{
          boxSizing: 'border-box',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Box className='swiperHomeImg'>
          <img
            style={{
              display: 'flex',
              marginTop: '45px',
              objectFit: 'contain',
              width: '100%'
            }}
            src='/paints/30.jpg'
          />
        </Box>
      </SwiperSlide>

      <SwiperSlide
        style={{
          boxSizing: 'border-box',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Box className='swiperHomeImg'>
          <img
            style={{ display: 'block',objectFit: 'contain', marginTop: '45px', width: '100%' }}
            src='/paints/35.jpg'
          />
        </Box>
      </SwiperSlide>
    </Swiper>);
  }
};
