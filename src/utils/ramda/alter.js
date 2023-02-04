import { curry, propEq, map, assoc, when } from 'ramda';

const alter = curry((value, prop, items) =>
  map(when(propEq('index', prop), assoc('active', value)), items)
);

export { alter };
