import React, { Component } from 'react';
import axios from 'axios';
import { Switch, Route, Redirect } from 'react-router-dom';

import styles from './Content.css';
import Home from './Home/Home';
import DataTable from './DataTable/DataTable';

export class Content extends Component {

  componentDidMount() {
    this.setState({isLoading: true});
    axios.get(`http://localhost:3000/expenses?limit=${this.state.limit}&offset=${this.state.offset}`)
      .then(response => {
        console.log(response.data.expenses);
        this.setState({expenses: response.data.expenses, isLoading: false, total: response.data.total});
        
      });
  }

  state = {
    limit: 10,
    offset: 0,
    isLoading: true,
    expenses: [],
    total: 0
  };

  render() {
    console.log(this.state.total);
    const { expenses, isLoading, total } = this.state;

    if (isLoading) {
      return <p>Loading...</p>
    }

    return (
      <div className={styles.Content}>
        <Switch>
          <Route exact path="/" render={p => (
            <Home total={total} />
          )}/>
          <Route exact path="/expenses" render={p => (
            <DataTable expenses={expenses} />
          )}/>
          <Route exact path="/expenses/add" render={p => (
            <Home total={total} />
          )} />
          <Route exact path="/expenses/:id" render={p => (
            <div>{p.match.params.id}</div>
          )}/>
          <Route exact path="/setting" render={p => (
            <Home total={total} />
          )} />
          <Route path="/" render={p => (
            <Redirect to="/"/>
          )}/>
        </Switch>
        
      </div>
    )
  }
}

export default Content

