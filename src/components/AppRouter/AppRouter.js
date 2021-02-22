import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import styles from './AppRouter.module.css';

import Home from '../Home';
import Art from '../Art';

const AppRouter = () => {
  return (
    <div className={styles.layout}>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/home" component={Art} />
    </div>
  )
};

export default AppRouter;
