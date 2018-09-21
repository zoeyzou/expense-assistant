import React, { Component } from 'react';
import axios from 'axios';

import styles from './Content.css';
import Home from './Home/Home';
import DataTable from './DataTable/DataTable';

export class Content extends Component {
  // constructor(props) {
  //   super(props);
  //   axios.get(`http://localhost:3000/expenses?limit=${this.state.limit}&offset=${this.state.offset}`)
  //     .then(response => {
  //       console.log(response.data.expenses);
  //       this.setState({expenses: response.data.expenses});
        
  //     });
  // }
  
  componentDidMount() {
    this.setState({isLoading: true});
    axios.get(`http://localhost:3000/expenses?limit=${this.state.limit}&offset=${this.state.offset}`)
      .then(response => {
        console.log(response.data.expenses);
        this.setState({expenses: response.data.expenses, isLoading: false});
        
      });
  }

  state = {
    limit: 10,
    offset: 0,
    isLoading: true,
    expenses: [],
  };

  render() {
    const { expenses, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading...</p>
    }

    console.log(this.state.expenses);
    return (
      <div className={styles.Content}>
        {/* <Home total={this.state.expenses.total} /> */}
        <DataTable expenses={this.state.expenses} />
      </div>
    )
  }
}

export default Content

