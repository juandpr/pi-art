import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import styles from './AppRouter.module.css';

import Home from '../Home';
import About from '../About';

const AppRouter = () => {
  return (
    <div className={styles.layout}>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
    </div>
  )
};

export default AppRouter;
