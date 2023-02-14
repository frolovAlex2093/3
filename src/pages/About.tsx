import { Box } from '@mui/material';
import React from 'react';
import { AboutBlock, Header } from '../components';

export type ILinks = {
  name: string;
  link: string;
  active?: boolean;
};

const links: ILinks[] = [
  {
    name: 'Home',
    link: '/'
  },
  { name: 'О себе', link: '/about', active: true },
  { name: 'Галерея', link: '/gallery' }
];

export const About = () => {
  return (
    <>
      <Header links={links}></Header>
      <Box
        maxWidth='1400px'
        width='100%'
        display='flex'
        justifyContent='center'
        flexDirection='column'
        alignItems='center'
        margin='0 auto'
        
      >
        <AboutBlock></AboutBlock>
      </Box>
    </>
  );
};
