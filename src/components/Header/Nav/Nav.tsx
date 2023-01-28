import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { ILinks } from '../../../pages';

interface INav {
  links: ILinks[];
}

export const Nav: React.FC<INav> = ({ links }) => {
  return (
    <Box display="flex" flexDirection="row">
      {links.map((link: ILinks, index: number) => {
        return (
          <Link key={index} to={link.link} style={{textDecoration: "none",  margin: "10px"}}>
            <Typography
              sx={{ cursor: 'pointer' }}
              variant='h3'
              component='h3'
              gutterBottom
              color='black'
              fontSize="35px"
            >
              {link.name}
            </Typography>
          </Link>
        );
      })}
    </Box>
  );
};
