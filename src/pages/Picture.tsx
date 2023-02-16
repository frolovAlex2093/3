import { Box, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import { Header, SwiperHome } from '../components';
import { SwiperPicture } from '../components/Swiper/SwiperPicture';
import { ILinks } from './About';
import { pictures } from './Gallery';
import './Picture.css';

interface IPicture {
  id: number;
}

const links: ILinks[] = [
  {
    name: 'Home',
    link: '/'
  },
  { name: 'О себе', link: '/about', active: true },
  { name: 'Галерея', link: '/gallery' }
];

export const Picture: React.FC<IPicture> = ({ id }) => {
  const breakpoint = useMediaQuery('(min-width:701px)');

  return (




    <Box height='95vh'>

      <Header links={links}></Header>
      <Box height='100vh'>
        <SwiperPicture id={id}></SwiperPicture>
      </Box>



      {/* <Header links={links}></Header>
      <Box maxWidth='1400px' width='100%' display='flex' justifyContent='center' marginTop='50px'>
        {pictures.map((el) => {
          if (el.id === id) {
            return (
              <Box key={el.id} display='flex' flexDirection='row' className='picture__container'>
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
                <Box display='flex' flexDirection='column' maxWidth='500px'>
                  {breakpoint === false ? (
                    <>
                      <Typography variant='h5'>{el.name}</Typography>
                      <Typography variant='subtitle1'>{el.size}</Typography>
                      <Typography variant='subtitle1'>{el.year}</Typography>
                    </>
                  ) : (
                    <>
                      <Typography variant='h2'>{el.name}</Typography>
                      <Typography variant='h5'>{el.size}</Typography>
                      <Typography variant='h5'>{el.year}</Typography>
                    </>
                  )}
                </Box>
              </Box>
            );
          }
        })}
      </Box> */}
    </Box>
  );
};
