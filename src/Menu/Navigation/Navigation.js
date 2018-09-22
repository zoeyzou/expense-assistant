import React, { Component } from 'react';

import homeIcon from '../../asset/home.png';
import expenseIcon from '../../asset/expense.png';
import addIcon from '../../asset/add.png';
import settingIcon from '../../asset/setting.png';
import NavButton from './NavButton/NavButton';

export default class Navigation extends Component {
  render() {
    return (
      <React.Fragment>

          <NavButton path="/">
            <img src={homeIcon} alt="home" />
            <span>Home</span>
          </NavButton>

          <NavButton path="/expenses">
            <img src={expenseIcon} alt="all expense" />
            <span>All Expense</span>
          </NavButton>


          <NavButton path="/expenses/add">
            <img src={addIcon} alt="add expense" />
            <span>Add Expense</span>
          </NavButton>

          <NavButton path="/setting">
            <img src={settingIcon} alt="setting" />
            <span>Setting</span>
          </NavButton>

      </React.Fragment>
    )
  }
}
