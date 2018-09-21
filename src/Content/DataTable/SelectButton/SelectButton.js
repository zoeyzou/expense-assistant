import React from 'react';

import styles from './SelectButton.css';

const SelectButton = (props) => {
  const options = props.options.map(item => (
    <option key={item} value={item}>{item}</option>
  ))
  
  let defaultOption = props.defaultOption;
  if (!defaultOption) {
    defaultOption = props.options[0];
  }

  return (
    <select className={styles.SelectButton} value={defaultOption}>
      {options}
    </select>
  )
};

export default SelectButton;
