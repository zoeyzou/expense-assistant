import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavButton.css';

const NavButton = (props) => {
  return (
    <NavLink
      exact to={props.path}
      className={styles.NavButton}
      activeClassName={styles.active}
    >
      {props.children}
    </NavLink>
  );
};

export default NavButton;
