import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Box display='flex'>
      <Link to='/about' style={{ textDecoration: 'none' }}>
        <Typography className='nav_link' variant='h3' component='h3' gutterBottom color='black' fontSize='35px'>
          Михаил Цымбалюк
        </Typography>
      </Link>
    </Box>
  );
};
