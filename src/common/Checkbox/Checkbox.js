import React, { useEffect, useState } from 'react';
import { Icon } from '@common/Icon';
import {
  HiddenCheckbox,
  StyledCheckbox,
  IconContainer,
  LabelStyle,
  Label,
  CheckboxContainer,
} from './Checkbox.styled.js';
import { green } from '@utils/styles/colors';

const Checkbox = (props) => {
  const {
    name,
    value,
    customLabel,
    rowPosition = null,
    callback = () => {},
    nameTocamelCase = true,
    children,
    mt,
    mb,
  } = props;
  const [checked, setChecked] = useState(false);

  const toCamelCase = (name) => {
    return name
      .toLowerCase()
      .replace(/-(.)/g, (match, group1) => group1.toUpperCase());
  };

  const handleChange = (e) => {
    const name = e.target.name;
    setChecked(e.target.checked);
    const key = nameTocamelCase ? toCamelCase(name || 'checkboxItem') : name;
    callback({
      key,
      rowPosition,
      value: e.target.checked,
    });
  };

  useEffect(() => {
    setChecked(value);
  }, [value]);

  return (
    <Label style={customLabel} mt={mt} mb={mb}>
      <CheckboxContainer>
        <HiddenCheckbox name={name} checked={checked} onChange={handleChange} />
        <StyledCheckbox checked={checked}>
          <IconContainer>
            <Icon
              name={checked ? 'CHECKBOX_FILLED' : 'CHECKBOX'}
              fill={green}
              size={24}
            />
          </IconContainer>
        </StyledCheckbox>
      </CheckboxContainer>
      {children && (
        <LabelStyle className={checked ? 'label__checked' : ''}>
          {children}
        </LabelStyle>
      )}
    </Label>
  );
};

export { Checkbox };
