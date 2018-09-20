import React, { Component } from 'react'

import styles from './Content.css';
import Home from './Home/Home';

export class Content extends Component {
  state = {

  };

  render() {
    return (
      <div className={styles.Content}>
        <Home />
      </div>
    )
  }
}

export default Content

