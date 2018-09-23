import React from 'react';

import styles from './ExpensesTable.css';
import TableHead from './TableHead/TableHead';
import TableBody from './TableBody/TableBody';

const ExpensesTable = (props) => {
  const columns = ['Index', 'Date', 'Employee', 'Amount', 'More'];

  return (
    <table className={styles.table}>
      <TableHead titles={columns} />
      <TableBody />
    </table>
  )
}

export default ExpensesTable;
