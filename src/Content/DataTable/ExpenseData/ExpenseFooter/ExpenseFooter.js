import React from 'react';

import styles from './ExpenseFooter.css';
import buttonStyles from '../../Button/Button.css';
import Button from '../../Button/Button';

const ExpenseFooter = (Props) => {
  return (
    <div className={styles.ExpenseFooter}>
      <Button display="Save" customStyle={buttonStyles.confirm} />
      <Button display="Cancel" customStyle={buttonStyles.cancel} />
    </div>
  )
}

export default ExpenseFooter
