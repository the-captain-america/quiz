import { values, all, equals } from 'ramda';

const isTrue = equals(true);

const allConditionsTrue = (conditions) => {
  const mappedConditions = values(conditions);
  return all(isTrue)(mappedConditions);
};

export { allConditionsTrue };
