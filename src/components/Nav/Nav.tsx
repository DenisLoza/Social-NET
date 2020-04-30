import React from 'react';
import c from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={c.nav}>
        <ul>
          <li>Profile</li>
          <li>Messages</li>
          <li>News</li>
          <li>Music</li>
          <li>Settings</li>
        </ul>
      </nav>
    );
}
export default Nav;