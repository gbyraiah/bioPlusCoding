import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';


 


export default function Mainpage() {
  return (

  <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className='navigation' style={{ background: 'transparent', boxShadow: 'none'}}>
        <Container maxWidth="lg">
        <Toolbar >
          <Box sx={{ flexGrow: 1 }}>
          <h6 className='logo' >
               IMPREZA
          </h6></Box>
          <Link className='link'>Home</Link>
          <Link className='link'>About Us</Link>
          <Link className='link'>Services</Link>
          <Link className='link'>Contact</Link>
          <Link className='link'>Blog</Link>
          <Link className='link'>Elements</Link>
          <Link className='link'>Shop</Link>
        </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
 