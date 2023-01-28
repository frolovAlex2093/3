import { Box } from '@mui/material';
import React from 'react';
import { Header } from '../components';
import { ILinks } from './About';

const links: ILinks[] = [
  {
    name: 'Home',
    link: '/'
  },
  { name: 'About', link: '/about', active: true },
  { name: 'Gallery', link: '/gallery' }
];

export const Picture = () => {
  return (
    <Box>
      <Header links={links}></Header>
    </Box>
  );
};
