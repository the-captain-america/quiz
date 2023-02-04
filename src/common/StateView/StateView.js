import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { usePrevious } from '@hooks/usePrevious';
import styled from 'styled-components';
import { prop } from 'ramda';
import { mtFn, mbFn } from '@utils/styles';
import { SyntaxPre, syntaxHighlight } from '../Syntax';
/* eslint-disable */

const Wrapper = styled.div`
  width: 100%;
  background: transparent;
  border: none;
  box-shadow: none;
  border-radius: 6px;
  padding: 0;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  ${mtFn};
  ${mbFn};
  pre {
    border-radius: 6px;
  }
`;

const StateView = ({ state, type, layout, theme, ...props }) => {
  const [html, setHtml] = useState(null);
  const prevState = usePrevious(state);
  const { layout: layoutStyle } = prop('config')(props) || {};

  useEffect(() => {
    if (prevState !== state) {
      setHtml(syntaxHighlight(JSON.stringify(state, undefined, 4)));
    }
  }, [html, state]);

  const createMarkup = () => {
    return {
      __html: html,
    };
  };

  const renderMarkup = () => {
    if (!html) return null;
    return <SyntaxPre theme={theme} dangerouslySetInnerHTML={createMarkup()} />;
  };

  return (
    <Wrapper className="StateView" style={layoutStyle} {...props}>
      {renderMarkup()}
    </Wrapper>
  );
};

StateView.defaultProps = {
  state: {},
  theme: 'MONOKI',
  type: 'js',
};

StateView.propTypes = {
  state: PropTypes.object,
  theme: PropTypes.string,
  type: PropTypes.string,
};

export { StateView, syntaxHighlight };
