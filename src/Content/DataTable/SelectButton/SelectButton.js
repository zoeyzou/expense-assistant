import React from 'react';

import styles from './SelectButton.css';

const SelectButton = ({options, theme, defaultOption  = options[0]}) => {
  options = options.map(item => (
    <option key={item} value={item}>{item}</option>
  ))

  const type = {
    'major': styles.major,
    'minor': styles.minor
  }[theme];

  // if (!defaultOption) {
  //   defaultOption = props.options[0];
  // }


  return (
    <select className={`${styles.SelectButton} ${type}`} value={defaultOption}>
      {options}
    </select>
  )
};

export default SelectButton;
