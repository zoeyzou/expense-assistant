import React from 'react';

import { ExpensesContext } from '../../../Contexts/ExpensesContexts';
import Layout from '../../Layout/Layout';
import ExpensesHeader from './ExpensesHeader/ExpensesHeader';
import ExpensesTable from './ExpensesTable/ExpensesTable';
import Pagination from './Pagination/Pagination';

const Expenses = (props) => {

  // const defaultSelect = 'All Currency';

  return (
    <Layout
      header={
        <ExpensesHeader />
      }
      footer={<Pagination />}
    >
      <ExpensesTable
        expenses={props.expenses}
      />
    </Layout>
  )
};

export default Expenses;