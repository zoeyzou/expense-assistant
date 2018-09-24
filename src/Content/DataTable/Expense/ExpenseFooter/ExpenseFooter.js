import React from 'react';
// import { withRouter } from 'react-router-dom';

import styles from './ExpenseFooter.css';
import buttonStyles from '../../Shared/Button/Button.css';
import Button from '../../Shared/Button/Button';
import { ExpenseContext } from '../../../../Contexts/ExpenseContext';

const ExpenseFooter = (props) => {

  return (
    <ExpenseContext.Consumer>
      {
        context => (
          <div className={styles.ExpenseFooter}>
            <Button onClick={context.saveComment} display="Save" customStyle={buttonStyles.confirm} />
            <Button onClick={context.goBack} display="Back" customStyle={buttonStyles.cancel} />
          </div>
        )
      }
    </ExpenseContext.Consumer>
  )
}

export default ExpenseFooter;
