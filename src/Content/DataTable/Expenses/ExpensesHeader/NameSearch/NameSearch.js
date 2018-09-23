import React from 'react';

import styles from './NameSearch.css';
import { ExpensesContext } from '../../../../../Contexts/ExpensesContexts';

const NameSearch = () => {
  const filterByName = (e) => {
    console.log(e.target.value);
  }
  return (
    <label htmlFor="namesearch" className={styles.NameSearch}>
      <ExpensesContext.Consumer>
        {context => (
          <input
            type="text"
            id="namesearch"
            name="namesearch"
            placeholder="Search by employee name"
            className={styles.nameInput}
            onChange={e => context.changeData(e.target.value)}
        />
        )}
      </ExpensesContext.Consumer>
      
    </label>
  )
};

export default NameSearch;
