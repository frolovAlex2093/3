import { Box, useMediaQuery } from '@mui/material';
import React from 'react';
import { Header } from '../components';
import { SwiperPicture } from '../components/Swiper/SwiperPicture';
import { ILinks } from './About';
import './Picture.css';

interface IPicture {
  id: number;
}

const links: ILinks[] = [
  {
    name: 'Home',
    link: '/'
  },
  { name: 'About', link: '/about' },
  { name: 'Gallery', link: '/gallery', active: true }
];

export const Picture: React.FC<IPicture> = ({ id }) => {
  const breakpoint = useMediaQuery('(min-width:701px)');

  return (
    <Box height='95vh'>
      <Header links={links}></Header>
      <Box height='100vh'>
        <SwiperPicture id={id}></SwiperPicture>
      </Box>
    </Box>
  );
};
