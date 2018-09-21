import React, { Component } from 'react';
import ReactTable from 'react-table';

import styles from './DataTable.css';

const DataTable = (props) => {
  const columns = [
    {
      Header: 'Date',
      id: 'date',
      accessor: d => d.date.slice(0, 10)
    },
    {
      Header: 'Name',
      id: 'fullname',
      accessor: d => `${d.user.first} ${d.user.last}`,
      width: 300
    },
    {
      Header: 'Amount',
      id: 'amount',
      accessor: d => `${d.amount.value} ${d.amount.currency}`,
      width: 150
    }
  ];
  const tableStyle = styles.table;

  return (
    <div className={styles.DataTable}>
      <ReactTable 
        data={props.expenses}
        columns={columns}
        defaultPageSize={10}
        className={
          ["-striped", "-highlight", tableStyle].join(" ")
        }
        SubComponent={
          row => {
            return (
              <div>it works</div>
            )
          }
        }
      />
    </div>
  );
};


export default DataTable;
