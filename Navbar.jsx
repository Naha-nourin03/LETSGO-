import { AppBar, Button, Toolbar } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <AppBar 
        position="fixed" 
        sx={{ top: 'auto', bottom: 0 }} // Move the AppBar to the bottom
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-around' }}> {/* Center align buttons */}
          <Link to='/home' style={{ textDecoration: 'none' }}>
            <Button variant='contained'>Home</Button>
          </Link>
          <Link to='/add' style={{ textDecoration: 'none' }}>
            <Button variant='contained'>Add</Button>
          </Link>
          <Link to='/camp' style={{ textDecoration: 'none' }}>
            <Button variant='contained'>Campagin</Button>
          </Link>
          <Link to='/info' style={{ textDecoration: 'none' }}>
            <Button variant='contained'>Info</Button>
          </Link>
        </Toolbar>    
      </AppBar>
    </div>
  );
};

export default Navbar;
