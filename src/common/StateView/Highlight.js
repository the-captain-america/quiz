import React from 'react';
import Highlight from 'react-highlight';
import styled from 'styled-components';

const HighlightContainer = styled.div`
  padding: 3px;
  overflow: hidden;
  border-radius: 15px;
`;

const getCodeType = (type) =>
  ({
    js: 'javascript',
    html: 'html',
  }[type]);

const HighlightView = ({ type = 'javascript', code = ``, ...props }) => {
  if (!type || !code) return null;
  return (
    <HighlightContainer {...props}>
      <Highlight language={getCodeType(type)}>{code}</Highlight>
    </HighlightContainer>
  );
};

export { HighlightView };
