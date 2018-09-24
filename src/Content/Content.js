import React, { Component } from 'react';
import axios from 'axios';
import { Switch, Route, Redirect } from 'react-router-dom';

import styles from './Content.css';
import Home from './Home/Home';
import Expense from './DataTable/Expense/Expense';
import Expenses from './DataTable/Expenses/Expenses';
import { ExpensesContext } from '../Contexts/ExpensesContexts';

export class Content extends Component {

  state = {
    pageLimit: 10,
    pageOffset: 0,
    isLoading: true,
    expenses: [],
    filteredExpenses: null,
    total: 0,

    filter: null,
    currency: 'All Currency'
  };

  componentDidMount() {
    const url = `http://localhost:3000/expenses?limit=${this.state.pageLimit}&offset=${this.state.pageOffset}`;
    this.getAndFilterExpensesFromApi(url);
  };

  getAndFilterExpensesFromApi(url) {
    this.setState({isLoading: true});
    axios.get(url)
      .then(response => {
        this.setState(prevState => ({
          expenses: response.data.expenses,
          filteredExpenses: this.filterExpensesHandler(response.data.expenses, prevState.filter, prevState.currency),
          isLoading: false,
          total: response.data.total
        }));
      });
  }

  filterExpensesHandler(expenses, keyword, currency) {
    return expenses
      .filter(expense => (
        !keyword ||
        `${expense.user.first} ${expense.user.last}`
          .toLowerCase()
          .includes(keyword.toLowerCase())
      ))
      .filter(expense => (
        currency === 'All Currency' ||
        expense.amount.currency === currency
      ))
  }

  changePageRowsHandler(newPageRow) {
    const url = `http://localhost:3000/expenses?limit=${newPageRow}&offset=${this.state.pageOffset}`;
    this.getAndFilterExpensesFromApi(url);
  }

  changePageHandler(action) {
    let pageChange;
    action === 'previous' ? pageChange = -1 : pageChange = 1;

    this.setState(
      prevState => ({
        pageOffset: prevState.pageOffset + pageChange
      }), 
      () => {
        const url = `http://localhost:3000/expenses?limit=${this.state.pageLimit}&offset=${this.state.pageOffset}`;
        this.getAndFilterExpensesFromApi(url);
      }
    )
  }
  
  render() {
    const {
      pageLimit,
      pageOffset,
      expenses,
      filteredExpenses,
      isLoading,
      total,
      filter,
      currency,
    } = this.state;

    if (isLoading) {
      return <p>Loading...</p>
    }

    return (
      <ExpensesContext.Provider value={
        {
          filter: filter,
          currency: currency,
          filteredExpenses: filteredExpenses || expenses,
          pageLimit: pageLimit,
          isLoading: isLoading,
          pageOffset: pageOffset,
          totalExpenses: total,
          changeFilter: (keyword) => this.setState({
            filter: keyword,
            filteredExpenses: this.filterExpensesHandler(expenses, keyword, currency)
          }),
          currencyOptions: [...new Set((expenses.map(expense => expense.amount.currency)).concat(['All Currency']))],
          changeCurrency: (newCurrency) => this.setState({
            currency: newCurrency,
            filteredExpenses: this.filterExpensesHandler(expenses, filter, newCurrency)
          }),
          changePageRows: (newPageRows) => {
            this.changePageRowsHandler(newPageRows);
            this.setState({
              pageLimit: newPageRows,
              pageOffset: 0
            });
          },
          changePage: (pageChange) => this.changePageHandler(pageChange)
        }
      }>
        <div className={styles.Content}>
          <Switch>
            <Route exact path="/" render={p => (
              <Home total={total} />
            )}/>
            <Route exact path="/expenses" render={p => (
              <Expenses
                expenses={expenses}
                nameFilter={this.nameFilterHandler} />
            )}/>
            <Route exact path="/expenses/add" render={p => (
              <Home total={total} />
            )} />
            <Route exact path="/expenses/:id" render={p => (
              <Expense id={p.match.params.id}/>
            )}/>
            <Route exact path="/setting" render={p => (
              <Home total={total} />
            )} />
            <Route path="/" render={p => (
              <Redirect to="/"/>
            )}/>
          </Switch>
          
        </div>
      </ExpensesContext.Provider>
    )
  }
}


