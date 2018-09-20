import React, { Component } from 'react'
import IconButton from './IconButton/IconButton';

import homeIcon from '../../asset/home.png';
import expenseIcon from '../../asset/expense.png';
import addIcon from '../../asset/add.png';
import settingIcon from '../../asset/setting.png';

export default class Navigation extends Component {
  render() {
    return (
      <React.Fragment>
        <IconButton>
          <img src={homeIcon} alt="home" />
          <span>Home</span>
        </IconButton>
        <IconButton>
          <img src={expenseIcon} alt="all expense" />
          <span>All Expense</span>
        </IconButton>
        <IconButton>
          <img src={addIcon} alt="add expense" />
          <span>Add Expense</span>
        </IconButton>
        <IconButton>
          <img src={settingIcon} alt="setting" />
          <span>Setting</span>
        </IconButton>
      </React.Fragment>
    )
  }
}
