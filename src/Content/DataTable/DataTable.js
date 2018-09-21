import React from 'react';

import styles from './DataTable.css';
import TableTitle from './TableTitle/TableTitle';
import NameSearch from './NameSearch/NameSearch';
import TableHead from './TableHead/TableHead';
import TableBody from './TableBody/TableBody';
import Pagination from './Pagination/Pagination';
import SelectButton from './SelectButton/SelectButton';

const DataTable = (props) => {
//   const columns = [
//     {
//       Header: 'Date',
//       id: 'date',
//       accessor: d => d.date.slice(0, 10)
//     },
//     {
//       Header: 'Name',
//       id: 'fullname',
//       accessor: d => `${d.user.first} ${d.user.last}`,
//       width: 300
//     },
//     {
//       Header: 'Amount',
//       id: 'amount',
//       accessor: d => `${d.amount.value} ${d.amount.currency}`,
//       width: 150
//     }
// //   ];
//   const tableStyle = styles.table;
  const columns = ['Date', 'Employee', 'Amount', 'More'];
  const title = 'All Expenses';
  const defaultSelect = 'All Currency';

  return (
    <div className={styles.DataTable}>
      {/* <ReactTable 
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
      /> */}
      <header>
        <TableTitle title={title} />
        <div className={styles.filters}>
          <NameSearch />
          <SelectButton
            options={[...new Set((props.expenses.map(expense => expense.amount.currency)).concat([defaultSelect]))]}
            defaultOption={defaultSelect}
          />
        </div>
      </header>
      <main className={styles.main}>
        <table className={styles.table}>
          <TableHead titles={columns} />
          <TableBody columns={columns} expenses={props.expenses} />
        </table>
      </main>
      <footer className={styles.footer}>
        <Pagination />
      </footer>
    </div>
  );
};


export default DataTable;
