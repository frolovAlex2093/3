import { Box } from '@mui/material';
import React from 'react';
import { Header, SwiperHome } from '../components';
import { ILinks } from './About';

const links: ILinks[] = [
  {
    name: 'Home',
    link: '/'
  },
  { name: 'About', link: '/about', active: true },
  { name: 'Gallery', link: '/gallery' }
];

export const Home = () => {
  return (
    <>
      <Header links={links}></Header>
      <Box height='100vh'>
        <SwiperHome></SwiperHome>
      </Box>
    </>
  );
};
