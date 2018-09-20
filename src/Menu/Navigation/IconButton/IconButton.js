import React from 'react';
import styles from './IconButton.css';

const IconButton = (props) => {
  return (
    <React.Fragment>
      <button className={styles.IconButton}>
        {props.children}
      </button>
    </React.Fragment>
  )
}

export default IconButton
