import React from 'react';

import styles from './SelectButton.css';

const SelectButton = ({options, theme, defaultOption  = options[0]}) => {
  options = options.map(item => (
    <option key={item} value={item}>{item}</option>
  ))

  const themeClass = {
    'red': styles.red,
  }[theme];
  // if (!defaultOption) {
  //   defaultOption = props.options[0];
  // }


  return (
    <select className={`${styles.SelectButton} ${themeClass}`} value={defaultOption}>
      {options}
    </select>
  )
};

export default SelectButton;
