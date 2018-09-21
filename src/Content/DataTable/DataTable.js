import React from 'react';

import styles from './DataTable.css';
import TableTitle from './TableTitle/TableTitle';
import NameSearch from './NameSearch/NameSearch';
import CurrencySelect from './CurrencySelect/CurrencySelect';
import TableHead from './TableHead/TableHead';
import TableBody from './TableBody/TableBody';
import Pagination from './Pagination/Pagination';

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
        <TableTitle />
        <NameSearch />
        <CurrencySelect
          currency={[...new Set(props.expenses.map(expense => expense.amount.currency))]}
        />
      </header>
      <main>
        <table>
          <TableHead titles={columns} />
          <TableBody columns={columns} expenses={props.expenses} />
        </table>
      </main>
      <footer>
        <Pagination />
      </footer>
    </div>
  );
};


export default DataTable;
