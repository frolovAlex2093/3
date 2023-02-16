import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { pictures } from '../../pages';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { padding } from '@mui/system';

interface ISwiperPicture {
  id: number;
}

export const SwiperPicture: React.FC<ISwiperPicture> = ({ id }) => {
  const breakpoint = useMediaQuery('(min-width:850px)');

  return (
    <Swiper
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%'
      }}
      modules={[Navigation, Autoplay]}
      loop={true}
      speed={500}
      autoplay={false}
      navigation={false}
      centeredSlides={true}
      spaceBetween={0}
      slidesPerView={1}
      initialSlide={id}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {pictures.map((el) => {
        return (
          <SwiperSlide style={{ display: "flex", justifyContent: "flex-start" }}>
            <Box
              key={el.id}
              margin='0 auto'
              display='flex'
              alignItems="start"
              flexDirection='row'
              className='picture__container'
              paddingTop="40px"
            >
              <img
                style={{
                  objectFit: 'contain',
                  marginRight: '25px',
                  width: '100%',
                  maxWidth: '550px'
                }}
                src={el.src}
                alt={el.name}
              />
              <Box display='flex' flexDirection='column' maxWidth='500px' width="100%">
                {breakpoint === false ? (
                  <>
                    <Typography variant='h5'>{el.name}</Typography>
                    <Typography variant='subtitle1'>{el.size}</Typography>
                    <Typography variant='subtitle1'>{el.year}</Typography>
                  </>
                ) : (
                  <>
                    <Typography variant='h3'>{el.name}</Typography>
                    <Typography variant='h5'>{el.size}</Typography>
                    <Typography variant='h5'>{el.year}</Typography>
                  </>
                )}
              </Box>
            </Box>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
