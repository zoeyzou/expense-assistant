import React from 'react';

import styles from './ExpensesTable.css';
import TableHead from './TableHead/TableHead';
import TableBody from './TableBody/TableBody';

const ExpensesTable = ({columns, expenses}) => {
  return (
    <table className={styles.table}>
      <TableHead titles={columns} />
      <TableBody columns={columns} expenses={expenses} />
    </table>
  )
}

export default ExpensesTable;
