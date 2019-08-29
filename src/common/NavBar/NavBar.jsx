import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
  return (
    <div className="NavBar">
      <Link className="NavbarLink" to="/">
        Home
      </Link>
      <Link
        className="NavbarLink"
        to={{ pathname: '/about', search: '?index=0' }}
      >
        About
      </Link>
      <Link className="NavbarLink" to="/projects">
        Projects
      </Link>
    </div>
  );
};

export default NavBar;
