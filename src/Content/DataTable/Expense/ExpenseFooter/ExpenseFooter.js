import React from 'react';

import styles from './ExpenseFooter.css';
import buttonStyles from '../../Shared/Button/Button.css';
import Button from '../../Shared/Button/Button';

const ExpenseFooter = (Props) => {
  return (
    <div className={styles.ExpenseFooter}>
      <Button display="Save" customStyle={buttonStyles.confirm} />
      <Button display="Cancel" customStyle={buttonStyles.cancel} />
    </div>
  )
}

export default ExpenseFooter
