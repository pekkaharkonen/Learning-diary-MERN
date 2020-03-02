import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
// import './Nav.css';

import { NavLink } from 'react-router-dom';

const Nav = ({ title }) => {
  return (
    <AppBar position='static'>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Typography variant='h6'>{title}</Typography>
        <div>
          <NavLink to='/timeline' style={{ textDecoration: 'none' }}>
            <Button style={{ color: 'white' }}>View</Button>
          </NavLink>
          <NavLink to='/manage' style={{ textDecoration: 'none' }}>
            <Button style={{ color: 'white' }}>Manage</Button>
          </NavLink>
          <NavLink to='/add' style={{ textDecoration: 'none' }}>
            <Button style={{ color: 'white' }}>Add</Button>
          </NavLink>
          <NavLink to='/about' style={{ textDecoration: 'none' }}>
            <Button style={{ color: 'white' }}>About</Button>
          </NavLink>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
