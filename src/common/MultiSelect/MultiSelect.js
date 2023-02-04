import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Group,
  IconContainer,
  CustomButton,
  SelectedItemContainer
} from './MultiSelect.styled';
import { Checkmark } from '@common/Checkmark';
import { Icon } from '@common/Icon';
import { curry, map, assoc, prop } from 'ramda';
import { alter } from '@utils/ramda';

// const alter = curry((state, index, items) =>
//   map(when(propEq('index', index), assoc('active', state)), items)
// );

// useEffect(() => {
// if (Boolean(toggle)) {
//   const enableAllData = alterAll(true, options);
//   callback(getPriority('index')(enableAllData));
//   return;
// }
// const disableAllData = alterAll(false, options);
// callback(getPriority('index')(disableAllData));
// return;
// }, [toggle]);

const alterAll = curry((state, items) => map(assoc('active', state), items));

const getPriority = (key) => (list = []) =>
  list.sort((a, b) => (prop(key)(a) > prop(key)(b) ? 1 : -1));

const config = {
  layout: {
    width: '130px'
  }
};

const SelectedItem = ({
  item,
  onSelect = () => {},
  trimCount = 50,
  ...props
}) => {
  const mightTrim = (count) => (str) =>
    str && str.length > count ? str.slice(0, count) : str;

  const isActive = prop('active')(item);

  const appendedClassName = isActive ? 'active' : 'in-active';

  return (
    <SelectedItemContainer
      onClick={() => onSelect(item)}
      className={`SelectedItemContainer ${appendedClassName}`}
      isActive={isActive}
      {...props}
    >
      <span className={`SelectedItemLabel ${appendedClassName}`}>
        {(trimCount && trimCount > 0 && mightTrim(trimCount)(item.label)) ||
          item.label ||
          'Empty'}
      </span>
      {isActive ? (
        <IconContainer
          className={`IconContainer ${appendedClassName}`}
          color="blue"
        >
          <Icon name="CHECK_ACTIVE" size={20} />
        </IconContainer>
      ) : (
        <IconContainer className={`IconContainer ${appendedClassName}`}>
          <Icon name="CHECK_OUTLINE" viewBox="-1 -1 20 20" size={20} />
        </IconContainer>
      )}
    </SelectedItemContainer>
  );
};

const applyIndexByMap = (items = []) =>
  items.map((m, i) => ({ ...m, index: i }));

const MultiSelect = ({
  options: rawOptions = [],
  showToggle = true,
  initialiseAll = true,
  callback = () => {},
  ...props
}) => {
  const { style: layoutStyle } = prop('config')(props) || {};

  console.log('style ::', layoutStyle);

  const [toggle, setToggle] = useState(initialiseAll);
  const options = applyIndexByMap(rawOptions);

  const activeState = () => {
    if (!toggle) return false;
    const foundNegative = options.filter((f) => !f.active);
    if (foundNegative.length > 0) {
      return false;
    }

    return true;
  };

  const toggleSelectAll = () => {
    if (activeState()) {
      setToggle(false);
      const enableAllData = alterAll(false, options);
      callback(getPriority('index')(enableAllData));
      return;
    }
    setToggle(true);
    const enableAllData = alterAll(true, options);
    callback(getPriority('index')(enableAllData));
  };

  const onLocalSelect = (item) => {
    const isFound = options.find((f) => {
      const result = f.id === item.id || f.sequence === item.sequence;
      return result;
    });
    if (isFound && isFound.active) {
      const newData = alter(false, item.sequence, options);
      callback(getPriority('sequence')(newData));
    } else {
      const newData = alter(true, item.sequence, options);
      callback(getPriority('sequence')(newData));
    }
  };

  const hasItems = () => (!options || options.length <= 0 ? false : true);

  const renderItems = options.map((item, index) => (
    <SelectedItem
      key={index}
      item={item}
      trimCount={200}
      isActive={item.active}
      onSelect={onLocalSelect}
    />
  ));

  return (
    <Container className="MultiSelect__Container" {...props}>
      {showToggle && (
        <CustomButton
          classname="MultiSelect__Toggle"
          config={config}
          onClick={toggleSelectAll}
        >
          <Checkmark isActive={activeState()}>{`Select all`}</Checkmark>
        </CustomButton>
      )}
      {hasItems() && (
        <Group className="MultiSelect__Group">{renderItems}</Group>
      )}
    </Container>
  );
};

MultiSelect.propTypes = {
  /** Array of items passed in which can be rendered */
  options: PropTypes.array,
  callback: PropTypes.func,
  showToggle: PropTypes.bool,
  initialiseAll: PropTypes.bool
};

/*
[
  {
    id: 'Applychange',
    label: 'Apply Change',
    active: false,
    index: 1,
  },
]
*/

export { MultiSelect };
