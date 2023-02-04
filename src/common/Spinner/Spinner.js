import React from 'react';
import { Icon } from '@common/Icon';
import { prop } from 'ramda';
import { SpinnerWrapper } from './Spinner.styled';

const Spinner = ({ children, size, config, ...props }) => {
  const layoutStyle = prop('layout')(config);
  return (
    <SpinnerWrapper style={layoutStyle} {...props}>
      <Icon size={size} name="LOADER" {...props} />
      {children}
    </SpinnerWrapper>
  );
};

Spinner.defaultProps = {
  size: 40,
  config: {},
};

export { Spinner };
