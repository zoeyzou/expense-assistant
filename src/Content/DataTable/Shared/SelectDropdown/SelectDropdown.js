import React from 'react';

import styles from './SelectDropdown.css';

export const SelectDropdown = ({options, theme, onChange, currentOption}) => {
  options = options.map(item => (
    <option key={item} value={item}>{item}</option>
  ));

  const type = {
    'major': styles.major,
    'minor': styles.minor
  }[theme];

  const changeHandler = (e) => {
    onChange(e.target.value);
  };

  return (
    <select
      className={`${styles.SelectDropdown} ${type}`}
      value={currentOption}
      onChange={e => changeHandler(e)}
    >
      {options}
    </select>
  )
};
