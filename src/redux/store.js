import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './modules'

export default function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(thunk));

  return store;
}
