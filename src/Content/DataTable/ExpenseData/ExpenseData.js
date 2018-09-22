import React from 'react';


import styles from './ExpenseData.css';
import Layout from '../../Layout/Layout';
import ExpenseFooter from './ExpenseFooter/ExpenseFooter';
import FileUploader from './FileUploader/FileUploader';
import Title from '../Shared/Title/Title';

const ExpenseData = (props) => {
  return (
    <Layout
      header={<Title title="EXPENSE DETAILS" />}
      footer={<ExpenseFooter />}
    >
      <div className={styles.wrapper}>
        <div className={`${styles.wrapper} ${styles.basicData}`}>
          <div>fake date</div>
          <div>fake name</div>
        </div>
        <hr />
        {/* <div>
          <div>category</div>
          <div>Email</div>
        </div>
        <div>
          <div>Merchant</div>
          <div>Amount</div>
        </div>
        <div></div> */}
        <table className={`${styles.wrapper} ${styles.table}`}>
          <tbody className={styles.dataBody}>
            <tr>
              <td>category</td>
              <td>Email</td>
            </tr>
            <tr>
              <td>Merchant</td>
              <td>Amount</td>
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
                <textarea className={styles.comment} />
              </td>
            </tr>
          </tbody>
        </table>
        <hr />
      </div>
    </Layout>
  );
};

export default ExpenseData;
