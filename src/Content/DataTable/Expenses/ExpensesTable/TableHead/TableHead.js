import React from 'react';

import styles from './TableHead.css';

const TableHead = (props) => {
  const titles = props.titles.map(title => (
    <th key={title} className={styles.th}>{title}</th>
  ));

  return (
    <thead className={styles.TableHead}>
      <tr>
        {titles}
      </tr>
    </thead>
  )
}

export default TableHead;
