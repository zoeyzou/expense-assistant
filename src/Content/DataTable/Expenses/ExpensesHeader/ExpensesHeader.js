import React from 'react';

import styles from './ExpensesHeader.css';
import Title from '../../Shared/Title/Title';
import NameSearch from './NameSearch/NameSearch';
import { CurrencySelect } from './CurrencySelect/CurrencySelect';

const ExpensesHeader = ({options, theme}) => {

  const title = 'All Expenses';
  return (
    <React.Fragment>
      <Title title={title} />
      <div className={styles.filters}>
        <NameSearch />
        <CurrencySelect />
      </div>
    </React.Fragment>
  )
}

export default ExpensesHeader;
