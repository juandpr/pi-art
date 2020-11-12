import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import { BrowserRouter as Router } from 'react-router-dom';
import { IntlProvider } from "react-intl";

import Main from './components/Main';
import AppRouter from './components/AppRouter';
import './App.css';

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <IntlProvider locale='en'>
            <Main>
              <AppRouter/>
            </Main>
          </IntlProvider>
        </Router>
      </Provider>
    );
  }
}