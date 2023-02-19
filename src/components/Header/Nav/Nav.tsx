import { Box, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { ILinks } from '../../../pages';
import { Burger } from '../Burger/Burger';

interface INav {
  links: ILinks[];
}

export const Nav: React.FC<INav> = ({ links }) => {
  const breakpoint = useMediaQuery('(min-width:800px)');

  if (breakpoint) {
    return (
      <Box display='flex' flexDirection='row' className='Nav'>
        {links.map((link: ILinks, index: number) => {
          return (
            <Link  key={index} to={link.link} style={{ textDecoration: 'none', margin: '10px' }}>
              <Typography
              className= {link.active ? "nav_link nav_link_active" : "nav_link"}
                sx={{ cursor: 'pointer'}}
                variant='h3'
                component='h3'
                gutterBottom
                color='black'
                fontSize='35px'
              >
                {link.name}
              </Typography>
            </Link>
          );
        })}
      </Box>
    );
  }
  return <Burger links={links} />;
};
