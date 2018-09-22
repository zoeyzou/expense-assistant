import React from 'react';

import styles from './Pagination.css';
import SelectDropdown from '../../Shared/SelectDropdown/SelectDropdown';

const Pagination = (props) => {
  const options = [10, 20, 30];

  const changeRowsHandler = (event) => {

  }

  return (
    <div className={styles.Pagination}>
      <div>
        <span>Rows per page: </span>
        <SelectDropdown
          options={options}
          onChange={(event) => changeRowsHandler(event)}
          theme='minor'
          />
      </div>
      <div className={styles.arrows}>
        <div><i className="fas fa-angle-left"></i></div>
        <div><i className="fas fa-angle-right"></i></div>
      </div>
  </div>
  )
}

export default Pagination;
