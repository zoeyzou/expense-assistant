import React from 'react';

import { ExpenseContext } from '../../../../Contexts/ExpenseContext';
import styles from './ExpenseTable.css';
import FileUploader from '../FileUploader/FileUploader';

const ExpenseTable = (props) => {
  return (
    <ExpenseContext.Consumer>
      {context => (
        <div className={styles.wrapper}>
          <div className={`${styles.wrapper} ${styles.basicData}`}>
            <div>{context.expense.date.slice(0, 10)}</div>
            <div>{`${context.expense.user.first} ${context.expense.user.last}`}</div>
          </div>
          <hr />
          <table className={`${styles.wrapper} ${styles.table}`}>
            <tbody className={styles.dataBody}>
              <tr>
                <td>Category: {context.expense.category ? context.expense.category : 'N/A'}</td>
                <td>Email: {context.expense.user.email}</td>
              </tr>
              <tr>
                <td>Merchant: {context.expense.merchant}</td>
                <td>Amount: {`${context.expense.amount.currency}${context.expense.amount.value}`}</td>
              </tr>
              <tr>
                <td colSpan="2">
                  <FileUploader title="Receipts:  " />
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  Comments
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <textarea
                    className={styles.comment}
                    placeholder="Leave a comment for this expense"
                    value={context.newComment}
                    onChange={(e) => context.changeComment(e.target.value)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <hr />
        </div>
      )}
    </ExpenseContext.Consumer>
  )
}

export default ExpenseTable;
