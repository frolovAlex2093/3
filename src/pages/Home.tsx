import { Box } from '@mui/material';
import React from 'react';
import { Header, SwiperHome } from '../components';
import { ILinks } from './About';

const links: ILinks[] = [
  {
    name: 'Home',
    link: '/',
    active: true
  },
  { name: 'About', link: '/about' },
  { name: 'Gallery', link: '/gallery' }
];

export const Home = () => {
  return (
    <Box height='100vh'>
      <Header links={links}></Header>
      <Box>
        <SwiperHome></SwiperHome>
      </Box>
    </Box>
  );
};
