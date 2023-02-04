import React, { useRef, useState, useCallback, useEffect } from 'react';
import { Icon } from '@common/Icon';
import { prop, toUpper, propEq, find } from 'ramda';
import PropTypes from 'prop-types';
import { FieldGroup } from '@common/FieldGroup';
import { useClickOutside as ClickOutside } from '@hooks/useClickOutside';
import {
  SelectContainerGroup,
  SelectStyle,
  SelectOption,
  Chevron,
  SelectedItem,
  SelectIcon,
  SelectOuter,
  SelectOuterContainer,
  SelectContainer,
  SelectLabel,
} from './Select.styled';

const defaultOption = { label: 'Select', value: '-1', index: 0 };

/** getDefault was made with the intention to solve the need of the `<Select />`
 * component when a `defaultValue` is provided.
 * Concerns
 * - 1. Question: Why can we not use the `value` property instead and use this to default the value?
 * - 1. Answer: The `<Select />` field will want to be provded a lsit of options to render, if none is provided then
 * we run into a problem where it cannot show something like `None` etc. Also, what will the parent component recieve on the callback of this value?
 */

const getDefault = (defaultValue) => (options) => {
  const foundOption = find(propEq('value', defaultValue))(options);
  const hasMatch = Boolean(foundOption);
  if (!hasMatch) return defaultOption;
  return foundOption;
};

/* Select useEffect 
  defaultValue: Lookup value within provided options array.  If option is present via the value then we default select that option.
**/

const Select = ({
  callback = () => {},
  options = [],
  disabled = false,
  defaultValue = '',
  placeholder = 'Select',
  label = '',
  mt,
  mb,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState({
    label: 'Select',
    value: '---',
  });
  const [focus, setFocus] = useState(false);
  const [disabledState, setDisabled] = useState(false);

  const { layout: layoutStyle } = prop('config')(props) || {};

  const selectRef = useRef(null);

  const handleOpen = () => {
    if (disabledState) return;
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
    setFocus(false);
  };

  const handleSelected = (item) => {
    const selectedOption = getDefault(item.value)(options);
    setState(selectedOption);
    callback(selectedOption);
    setIsOpen(false);
  };

  useEffect(() => {
    if (defaultValue === state.value) {
      // console.warn('State value is the same as defaultValue');
      return;
    }
    const option = getDefault(defaultValue)(options);
    setState(option);
    callback(option);

    // eslint-disable-next-line
  }, [defaultValue]);

  const onEnter = useCallback((event) => {
    if (event.keyCode === 13) {
      handleOpen();
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!focus) return;
    document.addEventListener('keydown', onEnter, false);
    return () => {
      document.removeEventListener('keydown', onEnter, false);
    };
    // eslint-disable-next-line
  }, [focus]);

  useEffect(() => {
    if (Boolean(disabled)) {
      setDisabled(disabled);
      return;
    }
    return () => {
      setDisabled(false);
    };
  }, [disabled]);

  const renderItems = () => {
    if (!options || options.length <= 0) {
      return (
        <SelectOption onClick={() => handleSelected(defaultOption)}>
          <span className="text">None</span>
          <SelectIcon>
            <Icon name="CHECKMARK" size={20} />
          </SelectIcon>
        </SelectOption>
      );
    }

    return options.map((item, index) => (
      <SelectOption
        key={index}
        tabIndex={1}
        isActive={item.value === state.value}
        onClick={() => handleSelected(item)}
      >
        <span className="text">{item.label}</span>

        <SelectIcon>
          {state.index === index && <Icon name="CHECKMARK" size={20} />}
        </SelectIcon>
      </SelectOption>
    ));
  };

  return (
    <FieldGroup
      variant={label && label.length ? 'ELEMENT' : 'FRAGMENT'}
      mb={mb}
      mt={mt}
    >
      {label && <SelectLabel>{label}</SelectLabel>}
      <SelectStyle style={layoutStyle} isActive={isOpen} {...props}>
        <ClickOutside callback={handleClose}>
          <SelectContainer isActive={isOpen}>
            <SelectedItem
              ref={selectRef}
              isDisabled={disabledState}
              isActive={state.value !== ''}
              className={state.value !== '' ? 'is-active' : ''}
              tabIndex={(isOpen && -1) || disabledState ? -1 : 0}
              name="selected-item"
              onClick={handleOpen}
            >
              {state.label && <span className="text">{state.label}</span>}
              <Chevron className="icon">
                <Icon rotate={isOpen ? 0 : 180} name="CHEVRON" size={20} />
              </Chevron>
            </SelectedItem>
            {isOpen && (
              <SelectOuterContainer>
                <SelectOuter>
                  <SelectContainerGroup>{renderItems()}</SelectContainerGroup>
                </SelectOuter>
              </SelectOuterContainer>
            )}
          </SelectContainer>
        </ClickOutside>
      </SelectStyle>
    </FieldGroup>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired,
      index: PropTypes.number,
    })
  ),
  label: PropTypes.string,
};

export { Select };
