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
    limit: 30,
    offset: 0,
    isLoading: true,
    expenses: [],
    total: 0,

    data: ""
  };

  componentDidMount() {
    this.setState({isLoading: true});
    axios.get(`http://localhost:3000/expenses?limit=${this.state.limit}&offset=${this.state.offset}`)
      .then(response => {
        console.log(response.data.expenses);
        this.setState({expenses: response.data.expenses, isLoading: false, total: response.data.total});
        
      });
  };

  nameFilterHandler = () => {
    console.log('name changed');
  };

  render() {
    console.log(this.state.total);
    const { expenses, isLoading, total } = this.state;

    if (isLoading) {
      return <p>Loading...</p>
    }

    return (
      <ExpensesContext.Provider value={{data: this.state.data, changeData: (newData) => this.setState({ data: newData })}}>
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


