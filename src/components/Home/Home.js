
import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <React.Fragment>
      <h1 className={styles.title}>Art of Pi</h1>
      <p className={styles.subtitle}>
        Create beautiful art with the most beautiful number
      </p>
    </React.Fragment>
  )
};

export default Home;
