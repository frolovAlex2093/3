import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Box display='flex' margin='0 auto'>
      <Link to='/about' style={{ textDecoration: 'none' }}>
        <Typography variant='h3' component='h3' gutterBottom color='black' fontSize='35px'>
          Lorem ipsum dolor
        </Typography>
      </Link>
    </Box>
  );
};
