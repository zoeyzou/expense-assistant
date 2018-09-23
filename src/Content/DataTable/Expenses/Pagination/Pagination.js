import React from 'react';

import styles from './Pagination.css';
import { SelectDropdown } from '../../Shared/SelectDropdown/SelectDropdown';
import { ExpensesContext } from '../../../../Contexts/ExpensesContexts';

const Pagination = (props) => {
  const options = [10, 25, 50];

  return (

    <ExpensesContext.Consumer>
      {
        context => {
          if (context.isLoading) {
            return <p>Loading...</p>
          }
          return (
            <div className={styles.Pagination}>
              <div>
                <span>Rows per page: </span>
                <SelectDropdown
                  options={options}
                  currentOption={context.pageLimit}
                  onChange={value => context.changePageRows(value)}
                  theme='minor'
                  />
              </div>
              <div className={styles.arrows}>
                <div
                  className={!context.pageOffset ? styles.hidden : ''}
                  onClick={() => context.changePage('previous')}
                >
                  <i className="fas fa-angle-left"></i>
                </div>
                <div
                  className={context.pageOffset === Math.ceil(context.totalExpenses / 10) ? styles.hidden : ''}
                  onClick={() => context.changePage('next')}
                >
                  <i className="fas fa-angle-right"></i>
                </div>
              </div>
            </div>
          )
        }
      }
    </ExpensesContext.Consumer>

  )
}

export default Pagination;
