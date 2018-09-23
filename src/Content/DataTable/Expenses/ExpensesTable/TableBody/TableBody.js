import React from 'react';
import { Link } from 'react-router-dom';

import { ExpensesContext } from '../../../../../Contexts/ExpensesContexts';
import styles from './TableBody.css';
import infoIcon from '../../../../../asset/info1.png';

const TableBody = (props) => {
  console.log(props);
  const createRows = (expenses) => expenses
    .map((expense, index) => (
      <tr key={expense.id} className={styles.bodyRow}>
        <td>{index + 1}</td>
        <td>{expense.date.slice(0, 10)}</td>
        <td>{expense.user.first} {expense.user.last}</td>
        <td>{expense.amount.value} {expense.amount.currency}</td>
        <td className={styles.imgHolder}>
          <Link to={`/expenses/${expense.id}`}>
            <img src={infoIcon} className={styles.info} alt="info icon" />
          </Link>
        </td>
      </tr>
    ));
  return (

      <ExpensesContext.Consumer>
        {context => (
          <tbody className={styles.TableBody}>
            {createRows(context.filteredExpenses)}
          </tbody>
        )}
      </ExpensesContext.Consumer>

  )
};

export default TableBody;
