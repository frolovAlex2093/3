import { Box } from '@mui/material'
import React from 'react'
import { ILinks } from '../../pages'
import { Logo } from './Logo'
import { Nav } from './Nav'

interface IHeader {
    links: ILinks[]
}

export const Header: React.FC<IHeader> = ({links}) => {
  return (
    <Box display='flex' flexDirection="row" justifyContent="space-between" maxWidth="1000px"  width="100%" alignItems="center" margin="0 auto">
        <Logo />
        <Nav links={links}/>
    </Box>
  )
}
