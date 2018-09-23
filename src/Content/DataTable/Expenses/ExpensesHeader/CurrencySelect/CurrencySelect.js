import React from 'react';

import { ExpensesContext } from '../../../../../Contexts/ExpensesContexts';
import { SelectDropdown } from '../../../Shared/SelectDropdown/SelectDropdown';

export const CurrencySelect = (props) => {
  return (
    <ExpensesContext.Consumer>
      {
        context => (
          <SelectDropdown
            options={context.currencyOptions}
            currentOption={context.currency}
            theme='major'
            onChange={value => context.changeCurrency(value)}
         />
        )
      }
    </ExpensesContext.Consumer>
  )
}