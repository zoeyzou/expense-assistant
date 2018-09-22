import React from 'react';

import styles from './TableBody.css';
import infoIcon from '../../../asset/info1.png';

const TableBody = (props) => {
  console.log(props);
  const rows = props.expenses.map(expense => (
    <tr key={expense.id} className={styles.bodyRow}>
      <td>{expense.date.slice(0, 10)}</td>
      <td>{expense.user.first} {expense.user.last}</td>
      <td>{expense.amount.value}{expense.amount.currency}</td>
      <td className={styles.imgHolder}><img src={infoIcon} className={styles.info} /></td>
    </tr>
  ));

  return (
    <tbody className={styles.TableBody}>
      {rows}
    </tbody>
  )
};

export default TableBody;