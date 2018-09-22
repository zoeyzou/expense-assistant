import React from 'react';

import styles from './Title.css';

const Title = (props) => {
  return (
    <h2 className={styles.Title}>{props.title}</h2>
  )
};

export default Title;
