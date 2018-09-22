import React from 'react';

import styles from './ExpensesHeader.css';
import Title from '../../Shared/Title/Title';
import NameSearch from './NameSearch/NameSearch';
import SelectDropdown from '../../Shared/SelectDropdown/SelectDropdown';

const ExpensesHeader = ({title, options, defaultOption, theme}) => {
  return (
    <React.Fragment>
      <Title title={title} />
      <div className={styles.filters}>
        <NameSearch />
        <SelectDropdown
          options={options}
          defaultOption={defaultOption}
          theme={theme}
        />
      </div>
    </React.Fragment>
  )
}

export default ExpensesHeader;
