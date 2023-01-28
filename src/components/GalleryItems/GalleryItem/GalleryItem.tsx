import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import { IPictures } from '../../../pages';

interface iGalleryItem {
  picture: IPictures;
  onclickPic: (id: number) => void;
}

export const GalleryItem: React.FC<iGalleryItem> = ({ picture, onclickPic }) => {
  return (
    <Box flexShrink={picture.xs} margin='10px'>
      <Link
        onClick={() => {
          onclickPic(picture.id);
        }}
        to={'/picture'}
      >
        <img style={{ width: '100%', objectFit: 'contain' }} src={picture.src} alt={picture.name} />
      </Link>
    </Box>
  );
};
