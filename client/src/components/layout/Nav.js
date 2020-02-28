import React from 'react';
import './Nav.css';

import { Link } from 'react-router-dom';

const Nav = ({ title }) => {
  return (
    <nav>
      <div>{title}</div>
      <ul>
        <Link to='/timeline'>
          <li>View</li>
        </Link>
        <Link to='/manage'>
          <li>Manage</li>
        </Link>
        <Link to='/add'>
          <li>Add</li>
        </Link>
        <Link to='/about'>
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
