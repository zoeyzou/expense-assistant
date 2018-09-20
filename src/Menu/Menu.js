import React from 'react'
import styles from './Menu.css'
import Avatar from './Avatar/Avatar';
import Navigation from './Navigation/Navigation';
import Brand from './Brand/Brand';

const Menu = (props) => {
  return (
    <div className={styles.Menu}>
      <Avatar />
      <nav>
        <Navigation />
      </nav>
      <Brand />
    </div>
  )
}

export default Menu
