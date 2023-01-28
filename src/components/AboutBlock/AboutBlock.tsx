import { Box, makeStyles, Typography } from '@mui/material';
import React from 'react';
import './AboutBlock.css';

export const AboutBlock = () => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      margin='0 auto'
      width='100%'
      justifyContent='center'
      alignItems='center'
      marginBottom='70px'
    >
      <Box
        className={'AboutBlock__container'}
        display='flex'
        flexDirection='row'
        marginBottom='50px'
        justifyContent='space-between'
        width='70%'
      >
        <Box
          // position='relative'
          flexShrink='1'
          display='block'
          maxWidth='300px'
          width='100%'
          margin='10px'
        >
          <img
            style={{
              display: 'block',
              // position: 'absolute',
              // top: '0',
              // marginTop: '0',
              // width: '100%',
              objectFit: 'contain'
            }}
            src='https://placehold.co/300x400'
          />
        </Box>
        <Box
          flexShrink='1'
          marginLeft='30px'
          // width='700px'
        >
          <Typography
          //  sx={{ height: '400px' }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quas inventore corporis
            eum accusantium, provident nihil aperiam quasi suscipit voluptatem reiciendis ea. Beatae
            sed illum eum sunt ut accusantium explicabo. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quidem, maxime totam, nobis voluptate eligendi ex illo officiis nam
            repellat quos, id eum perferendis natus recusandae soluta sed accusantium alias cum.
          </Typography>
        </Box>
      </Box>
      <Box
        className={'AboutBlock__container reverse'}
        display='flex'
        flexDirection='row'
        marginBottom='50px'
        justifyContent='space-between'
        width='70%'
      >
        <Box marginLeft='30px'>
          <Typography sx={{}}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quas inventore corporis
            eum accusantium, provident nihil aperiam quasi suscipit voluptatem reiciendis ea. Beatae
            sed illum eum sunt ut accusantium explicabo. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quidem, maxime totam, nobis voluptate eligendi ex illo officiis nam
            repellat quos, id eum perferendis natus recusandae soluta sed accusantium alias cum.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quas inventore corporis
            eum accusantium, provident nihil aperiam quasi suscipit voluptatem reiciendis ea. Beatae
            sed illum eum sunt ut accusantium explicabo. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quidem, maxime totam, nobis voluptate eligendi ex illo officiis nam
            repellat quos, id eum perferendis natus recusandae soluta sed accusantium alias cum.
          </Typography>
        </Box>
        <Box display='block' maxWidth='400px' width='100%' height='100%' margin='10px'>
          <img
            style={{
              display: 'block',
              objectFit: 'contain'
            }}
            src='https://placehold.co/400x400'
          />
        </Box>
      </Box>
    </Box>
  );
};
