import { combineReducers } from 'redux';
import pi from './pi/reducer';

const rootReducer = combineReducers({
  pi
});

export default rootReducer;
