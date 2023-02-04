import React, { forwardRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { FieldGroup } from '@common/FieldGroup';
import { Icon } from '@common/Icon';

import { Primary } from './Primary';
import { Secondary } from './Secondary';
import { FieldLabel, InputClose, InputContainer } from './Input.styled';

const InputElement = {
  PRIMARY: Primary,
  SECONDARY: Secondary,
};

const Input = forwardRef(
  (
    { as, label, mb, mt, config, icon, onClear, hasClear, value, ...props },
    ref
  ) => {
    const { inputStyles, containerStyles } = config || {};
    const type = as ? as.toUpperCase() : 'PRIMARY';

    const InputField = InputElement[type];

    const onEscape = useCallback((event) => {
      if (event.key === 'Escape') {
        hasClear ? onClear() : () => {};
      }
    }, []);

    useEffect(() => {
      document.addEventListener('keydown', onEscape, false);

      return () => {
        document.removeEventListener('keydown', onEscape, false);
      };
    }, []);

    const renderIcon = () => {
      if (!hasClear || !value || value.length <= 0) {
        if (!icon) return null;
        return (
          <InputClose>
            <Icon name="SEARCH" stroke="#A9AEB9" size={20} />
          </InputClose>
        );
      }
      if (!icon) return null;
      return (
        <InputClose onClick={onClear}>
          <Icon
            name="CLOSE_SMALL"
            stroke="#A9AEB9"
            viewBox={`-1 -1 20 20`}
            size={20}
          />
        </InputClose>
      );
    };

    return (
      <FieldGroup
        variant={label && label.length ? 'ELEMENT' : 'FRAGMENT'}
        mb={mb}
        mt={mt}
      >
        {label && <FieldLabel>{label}</FieldLabel>}
        <InputContainer style={containerStyles}>
          <InputField style={inputStyles} ref={ref} value={value} {...props} />
          {renderIcon()}
        </InputContainer>
      </FieldGroup>
    );
  }
);

Input.defaultProps = {
  as: 'primary',
  label: '',
  config: {},
  onChange: () => {},
  onClear: () => {},
};
Input.propTypes = {
  as: PropTypes.string,
  label: PropTypes.string,
  config: PropTypes.object,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
  hasClear: PropTypes.bool,
};

export { Input };
