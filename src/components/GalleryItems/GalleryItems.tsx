import { Box, Grid } from '@mui/material';
import React from 'react';
import { IPictures } from '../../pages';
import { GalleryItem } from './GalleryItem';

interface IGalleryItems {
  pictures: IPictures[];
  onclickPic: (id: number) => void;
}

export const GalleryItems: React.FC<IGalleryItems> = ({ pictures, onclickPic }) => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      textAlign='center'
      margin='0 auto'
      flexWrap='wrap'
    >
      {pictures.map((pictures) => {
        return <GalleryItem onclickPic={onclickPic} key={pictures.id} picture={pictures} />;
      })}
    </Box>
  );
};
