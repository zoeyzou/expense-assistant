import React from 'react';

import styles from './NameSearch.css';

const NameSearch = () => {
  return (
    <label htmlFor="namesearch" className={styles.NameSearch}>
      <input
        type="text"
        id="namesearch"
        name="namesearch"
        placeholder="Search by employee name"
        className={styles.nameInput}
        />
    </label>
  )
};

export default NameSearch;
