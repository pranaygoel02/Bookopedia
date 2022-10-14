import { AppBar,Toolbar,IconButton,Typography }  from '@mui/material'
import Logo from './images/Logo.png';
import Search from './Search'
import React from 'react'

export default function Navbar() {
  return (
    <AppBar style={{background:'rgb(68, 92, 105)',color:'white'}}  position="relative" display="flex"  color="inherit">
    <Toolbar style={{"display":"flex","justify-content":"center"}} variant="regular">
    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
      <img src={Logo} width="50"/>
    </IconButton>
    <Typography variant="h5"     color="inherit" component="div">
      Bookopedia
    </Typography>
  </Toolbar>
</AppBar>
  )
}
