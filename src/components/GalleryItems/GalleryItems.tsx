import { Box, Grid } from '@mui/material';
import React from 'react';
import { IPictures } from '../../pages';
import { GalleryItem } from './GalleryItem';

interface IGalleryItems {
  pictures: IPictures[];
}

export const GalleryItems: React.FC<IGalleryItems> = ({ pictures }) => {
  return (
    <Box display='flex' justifyContent='center' alignItems="center" textAlign="center" margin='0 auto' flexWrap='wrap'>
      {pictures.map((pictures) => {
        return <GalleryItem key={pictures.id} picture={pictures} />;
      })}
    </Box>
  );
};
