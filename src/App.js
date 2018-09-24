import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import styles from './App.css';
import Menu from './Menu/Menu';
import { Content } from './Content/Content';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={styles.App}>
          <Menu />
          <Content />
        </div>
      </BrowserRouter>
    );
  }
}

