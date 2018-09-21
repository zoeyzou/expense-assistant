import React, { Component } from 'react';
import axios from 'axios';

import styles from './Content.css';
import Home from './Home/Home';
import DataTable from './DataTable/DataTable';

export class Content extends Component {
  componentDidMount() {
    axios.get(`http://localhost:3000/expenses?limit=${this.state.limit}&offset=${this.state.offset}`)
      .then(response => {
        this.setState({expenses: response.data.expenses});
      });
  }

  state = {
    limit: 10,
    offset: 0,
    expenses: [],
  };

  render() {
    return (
      <div className={styles.Content}>
        {/* <Home total={this.state.expenses.total} /> */}
        <DataTable expenses={this.state.expenses} />
      </div>
    )
  }
}

export default Content

