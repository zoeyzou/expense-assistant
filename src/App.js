import React, { Component } from 'react';
import styles from './App.css';
import Menu from './Menu/Menu';
import Content from './Content/Content';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Menu />
        <Content />
      </div>
    );
  }
}

export default App;
