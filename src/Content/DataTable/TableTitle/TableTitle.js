import React from 'react';

import styles from './TableTitle.css';

const TableTitle = (props) => {
  return (
    <h2 className={styles.TableTitle}>{props.title}</h2>
  )
};

export default TableTitle;
