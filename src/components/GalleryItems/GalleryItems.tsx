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
    <Box display='flex' flexDirection='row'>
      <Box display='flex' flexDirection='column' flex="0 0 33.333%">
        {pictures.map((pictures) => {
          if (pictures.id === 0 || pictures.id % 3 === 0 || pictures.id === 53)
            return <GalleryItem onclickPic={onclickPic} key={pictures.id} picture={pictures} />;
        })}
      </Box>
      <Box display='flex' flexDirection='column' flex="0 0 33.333%">
        {pictures.map((pictures) => {
          if ((pictures.id - 1) % 3 === 0)
            return <GalleryItem onclickPic={onclickPic} key={pictures.id} picture={pictures} />;
        })}
      </Box>
      <Box display='flex' flexDirection='column' flex="0 0 33.333%">
      {pictures.map((pictures ) => {
          if ((pictures.id - 2) % 3 === 0 && pictures.id !== 53)
            return <GalleryItem onclickPic={onclickPic} key={pictures.id} picture={pictures} />;
        })}
      </Box>
    </Box>
  );
};
