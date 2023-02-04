import React from 'react';
import PropTypes from 'prop-types';
import {
  ToggleWrapper,
  ToggleLabel,
  ToggleTitle,
  ToggleCheckbox,
} from './Toggle.styled';

const Toggle = ({ isActive, onChange, label, ...props }) => {
  const handleChange = (e) => {
    const isChecked = e.target.checked;
    onChange(isChecked);
  };
  return (
    <ToggleWrapper {...props}>
      {label && <ToggleTitle>{label}</ToggleTitle>}
      <ToggleCheckbox
        checked={isActive}
        onChange={(e) => handleChange(e)}
        id="checkbox"
        type="checkbox"
      />
      <ToggleLabel className="ToggleLabel" htmlFor="checkbox" />
    </ToggleWrapper>
  );
};

Toggle.defaultProps = {
  isActive: false,
  onChange: () => {},
  label: '',
};

Toggle.propTypes = {
  isActive: PropTypes.bool,
  onChange: PropTypes.func,
  title: PropTypes.string,
};

export { Toggle };
