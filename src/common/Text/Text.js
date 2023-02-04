/* eslint-disable no-underscore-dangle */
import React from 'react';
import { TextParagraph, TextSpan, TextLink } from './Text.styled';
import { prop } from 'ramda';

const Text = ({ variant, children, ...props }) => {
  const { layout: layoutStyle } = prop('config')(props) || {};
  const type = variant ? variant.toUpperCase() : 'P';

  return {
    P: (
      <TextParagraph style={layoutStyle} {...props}>
        {children}
      </TextParagraph>
    ),
    SPAN: (
      <TextSpan style={layoutStyle} {...props}>
        {children}
      </TextSpan>
    ),
    LINK: (
      <TextLink style={layoutStyle} {...props}>
        {children}
      </TextLink>
    ),
  }[type];
};

Text.defaultProp = {
  variant: 'P',
};

export { Text };
