import React from 'react';

import styles from './Button.css';

const Button = ({display, customStyle}) => {
  return (
    <button className={`${styles.Button} ${customStyle}`}>{display}</button>
  )
};

export default Button;
