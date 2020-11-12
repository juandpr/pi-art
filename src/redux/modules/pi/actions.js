import {
  PI_GET,
  PI_RECEIVE
} from './const';

export const getPi = (start, limit) => (
  {
    type: PI_GET,
    start,
    limit
  }
);

export const receivePi = (data) => (
  {
    type: PI_RECEIVE,
    data
  }
);
