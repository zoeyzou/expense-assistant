import React from 'react';

import styles from './NameSearch.css';
import { ExpensesContext } from '../../../../../Contexts/ExpensesContexts';

const NameSearch = () => {

  return (
    <label htmlFor="namesearch" className={styles.NameSearch}>
      <ExpensesContext.Consumer>
        {context => (
          <input
            type="text"
            id="namesearch"
            name="namesearch"
            placeholder="Search by name"
            className={styles.nameInput}
            onChange={e => context.changeFilter(e.target.value)}
        />
        )}
      </ExpensesContext.Consumer>
      
    </label>
  )
};

export default NameSearch;
