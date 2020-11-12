import React from 'react';

import Header from '../Header';
import Footer from '../Footer';
import styles from './Main.module.css';

const Main = ({children}) => {
  return (
    <React.Fragment>
      <Header/>
      <div className={styles.main}>
        {children}
      </div>
      <Footer/>
    </React.Fragment>
  )
};

export default Main;