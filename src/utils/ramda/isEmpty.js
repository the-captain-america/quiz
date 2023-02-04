import { keys, length } from 'ramda';

const isEmpty = (obj) => length(keys(obj)) === 0;

const isEmptyObject = (original) =>
  typeof original === 'object' && length(keys(original)) === 0;

export { isEmpty, isEmptyObject };
