import React from 'react';

import { ExpensesContext } from '../../../Contexts/ExpensesContexts';
import Layout from '../../Layout/Layout';
import ExpensesHeader from './ExpensesHeader/ExpensesHeader';
import ExpensesTable from './ExpensesTable/ExpensesTable';
import Pagination from './Pagination/Pagination';

const Expenses = (props) => {
  const columns = ['Date', 'Employee', 'Amount', 'More'];
  const title = 'All Expenses';
  const defaultSelect = 'All Currency';

  return (
    <Layout
      header={
        <ExpensesHeader
          title={title}
          options={[...new Set((props.expenses.map(expense => expense.amount.currency)).concat([defaultSelect]))]}
          defaultOption={defaultSelect}
          theme="major"
          filterByName={props.nameFilter}
        />
      }
      footer={<Pagination />}
    >
      <ExpensesTable
        columns={columns}
        expenses={props.expenses}
      />
    </Layout>
  )
};

export default Expenses;