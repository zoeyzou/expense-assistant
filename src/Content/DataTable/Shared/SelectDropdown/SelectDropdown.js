import React from 'react';

import styles from './SelectDropdown.css';

const SelectDropdown = ({options, theme, defaultOption  = options[0]}) => {
  options = options.map(item => (
    <option key={item} value={item}>{item}</option>
  ));

  const type = {
    'major': styles.major,
    'minor': styles.minor
  }[theme];

  return (
    <select className={`${styles.SelectDropdown} ${type}`} value={defaultOption}>
      {options}
    </select>
  )
};

export default SelectDropdown;
