import React from 'react';
import { keys, map, toLower } from 'ramda';
import { ToggleSwitchContainer, ToggleLabel } from './ToggleSwitch.styled';
import { FieldGroup } from '@common/FieldGroup';

const ToggleSwitch = ({
  onChange,
  isActive,
  label,
  options = {},
  mt,
  mb,
  ...props
}) => {
  const list = keys(options);
  const toLowerList = map(toLower)(list);
  if (!toLowerList || toLowerList.length <= 0) return null;

  const handleChange = (e) => {
    const isChecked = e.target.checked;
    onChange(isChecked);
  };

  const primaryOption = toLowerList[0];
  const secondaryOption = toLowerList[1];

  return (
    <FieldGroup
      variant={label && label.length ? 'ELEMENT' : 'FRAGMENT'}
      mb={mb}
      mt={mt}
    >
      {label && <ToggleLabel>{label}</ToggleLabel>}
      <ToggleSwitchContainer
        optionLabel={primaryOption}
        isActive={isActive}
        {...props}
      >
        <div className="switch-button">
          <input
            checked={isActive}
            onChange={handleChange}
            className="switch-button-checkbox"
            type="checkbox"
          />
          <label className="switch-button-label">
            <span className="switch-button-label-span">{secondaryOption}</span>
          </label>
        </div>
      </ToggleSwitchContainer>
    </FieldGroup>
  );
};

ToggleSwitch.defaultProps = {
  options: {},
};

export { ToggleSwitch };
