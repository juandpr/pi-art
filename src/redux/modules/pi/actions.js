import {
  PI_GET,
  PI_RECEIVE
} from './const';

export const getPi = (start, length) => (
  {
    type: PI_GET,
    start,
    length
  }
);

export const receivePi = (data) => (
  {
    type: PI_RECEIVE,
    data
  }
);
