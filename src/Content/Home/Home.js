import React from 'react';
import styles from './Home.css';
import sun from '../../asset/sun.svg';

const Home = (props) => {
  return (
    <div className={styles.Home}>
      <div className={styles.wrapper}>
        <img src={sun} alt="sun" />
        <p>Good day! Did you sleep well?</p>
        <p>We have <strong className={styles.emph}>{props.total}</strong> expenses to work with today. Take your time!</p>
        <p>when you are ready, go to 'all expenses' and let's rock!</p>
      </div>
    </div>
  );
};

export default Home;
