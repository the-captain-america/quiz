import React, { forwardRef, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Primary, FieldLabel, FieldForm, Secondary } from './TextArea.styled';
import { FieldGroup } from '@common/FieldGroup';
import { Button } from '@common/Button';
import { useOnClickOutside } from '@hooks/useOnClickOutside';

const TextArea = forwardRef(
  ({ config, label, variant, mb, mt, value, ...props }, ref) => {
    const { layout: layoutStyle } = config || {};
    const type = variant ? variant.toUpperCase() : 'PRIMARY';
    const refClickOutside = useRef();

    const TextField = {
      PRIMARY: Primary,
      SECONDARY: Secondary,
    }[type];

    const [isActive, setIsActive] = useState(false);
    const textAreaRef = useRef(null);

    const copyToClipboard = (e) => {
      textAreaRef.current.select();
      document.execCommand('copy');
      e.target.focus();
      setIsActive(true);
    };

    useOnClickOutside(refClickOutside, () => {
      if (!isActive) return;
      setIsActive(false);
    });

    const renderCopy = () => {
      const queryCommand = document.queryCommandSupported('copy');
      if (!queryCommand) return null;
      return (
        <Button
          label="Copy"
          variant="copy"
          isActive={isActive}
          onClick={copyToClipboard}
        />
      );
    };

    return (
      <FieldGroup
        variant={label && label.length ? 'ELEMENT' : 'FRAGMENT'}
        mb={mb}
        mt={mt}
      >
        {label && <FieldLabel>{label}</FieldLabel>}
        <TextField style={layoutStyle} ref={ref} value={value} {...props} />
        <FieldForm ref={refClickOutside}>
          <textarea readOnly ref={textAreaRef} value={value} />
          {renderCopy()}
        </FieldForm>
      </FieldGroup>
    );
  }
);

TextArea.defaultProps = {
  config: {},
};
TextArea.propTypes = {
  config: PropTypes.object,
};

export { TextArea };
