import {
  PI_GET,
  PI_RECEIVE
} from './const';
import initialState from './initialState';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PI_GET:
    case PI_RECEIVE:
    default:
      return state;
  }
};

export default reducer;
