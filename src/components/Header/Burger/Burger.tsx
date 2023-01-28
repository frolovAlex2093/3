import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { ILinks } from '../../../pages';
import './Burger.css';

interface IBurger {
  links: ILinks[];
}

const onClickBurger = () => {
  const burger1 = document.querySelector('.burger');
  if (burger1 !== null && burger1.classList.contains('change')) {
    burger1.classList.remove('change');
  } else if (burger1 !== null) {
    burger1.classList.add('change');
  }
};

export const Burger: React.FC<IBurger> = ({ links }) => {
  return (
    <Box className='burger' onClick={onClickBurger}>
      <div className='burger__1'></div>
      <div className='burger__2'></div>
      <div className='burger__3'></div>
      <div className='burger__links'>
        {links.map((link, index) => {
          return (
            <Link key={index} to={link.link} style={{ textDecoration: 'none', margin: '10px' }}>
              {' '}
              {link.name}
            </Link>
          );
        })}
      </div>
    </Box>
  );
};

// .burger__1
//         .burger__2
//         .burger__3
//         .burger__links
