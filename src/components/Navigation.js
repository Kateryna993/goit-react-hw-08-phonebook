import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: 'rgb(231, 89, 70)',
  },
};

const Navigation = () => (
  <nav>
    <NavLink exact to="/" style={styles.link} activeStyle={styles.activeLink}>
      Home
    </NavLink>

    <NavLink
      exact
      to="/contacts"
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Contacts
    </NavLink>
  </nav>
);

export default Navigation;
