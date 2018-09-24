import React from 'react';

import styles from './Button.css';

const Button = ({display, customStyle, onClick}) => {
  return (
    <button type='button' onClick={onClick} className={`${styles.Button} ${customStyle}`}>{display}</button>
  )
};

export default Button;
