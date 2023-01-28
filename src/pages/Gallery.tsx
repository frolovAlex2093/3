import { Box } from '@mui/material';
import React from 'react';
import { Header } from '../components';
import { GalleryItems } from '../components/GalleryItems';
import { ILinks } from './About';

interface IGallery {
  onclickPic: (id: number) => void;
}

export type IPictures = {
  id: number;
  name: string;
  src: string;
  description: string;
  xs: number;
};

const links: ILinks[] = [
  {
    name: 'Home',
    link: '/'
  },
  { name: 'About', link: '/about', active: true },
  { name: 'Gallery', link: '/gallery' }
];

export const pictures: IPictures[] = [
  {
    id: 0,
    name: 'lorem',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    src: 'https://placehold.co/500x400',
    xs: 3
  },
  {
    id: 1,
    name: 'lorem',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    src: 'https://placehold.co/500x400',
    xs: 3
  },
  {
    id: 2,
    name: 'lorem',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    src: 'https://placehold.co/500x400',
    xs: 3
  },
  {
    id: 3,
    name: 'lorem',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    src: 'https://placehold.co/600x400',
    xs: 6
  },
  {
    id: 4,
    name: 'lorem',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    src: 'https://placehold.co/600x400',
    xs: 6
  }
];

export const Gallery: React.FC<IGallery> = ({onclickPic}) => {
  return (
    <Box>
      <Header links={links}></Header>
      <GalleryItems onclickPic={onclickPic} pictures={pictures}></GalleryItems>
    </Box>
  );
};
