import React, { Component } from 'react';
import axios from 'axios';

import styles from './Expense.css';
import Layout from '../../Layout/Layout';
import ExpenseFooter from './ExpenseFooter/ExpenseFooter';
import FileUploader from './FileUploader/FileUploader';
import Title from '../Shared/Title/Title';

class Expense extends Component {
  
  componentDidMount() {
    const { id } = this.props;

    axios.get(`http://localhost:3000/expenses/${id}`)
      .then((res) => {
        this.setState({expense: res.data,  isLoading: false});
      });
  }

  state = {
    isLoading: true,
    expense: {}
  };

  render() {
    const { expense, isLoading } = this.state;
    console.log(this.state.expense);

    if (isLoading) {
      return <p>Loading...</p>
    }

    return (
      <Layout
        header={<Title title="EXPENSE DETAILS" />}
        footer={<ExpenseFooter />}
      >
        <div className={styles.wrapper}>
          <div className={`${styles.wrapper} ${styles.basicData}`}>
            <div>{expense.date.slice(0, 10)}</div>
            <div>{`${expense.user.first} ${expense.user.last}`}</div>
          </div>
          <hr />
          <table className={`${styles.wrapper} ${styles.table}`}>
            <tbody className={styles.dataBody}>
              <tr>
                <td>Category: {expense.category ? expense.category : 'N/A'}</td>
                <td>Email: {expense.user.email}</td>
              </tr>
              <tr>
                <td>Merchant: {expense.merchant}</td>
                <td>Amount: {`${expense.amount.currency}${expense.amount.value}`}</td>
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
                  <textarea className={styles.comment} placeholder="Leave a comment for this expense" value={expense.comment} />
                </td>
              </tr>
            </tbody>
          </table>
          <hr />
        </div>
      </Layout>
    )
  };
};

export default Expense;
