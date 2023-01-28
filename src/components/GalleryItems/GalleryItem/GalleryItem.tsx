import { Grid } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Box } from '@mui/system';
import React from 'react';
import { IPictures } from '../../../pages';

interface iGalleryItem {
  picture: IPictures;
}

export const GalleryItem: React.FC<iGalleryItem> = ({ picture }) => {
  return (
    <Box flexShrink={picture.xs} margin='10px'>
      <img style={{ objectFit: 'contain' }} src={picture.src} alt={picture.name} />
    </Box>
  );
};
