import React from 'react';
import styled from 'styled-components';

const HoistingContainer = styled.div`
  background: black;
  margin-top: 8px;
  width: 100%;
  padding: 16px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  ul {
    display: flex;
    flex-direction: column;
  }
  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    width: 100%;
    margin-bottom: 16px;
    &:last-child {
      margin: 0;
    }
  }
`;

const CodeContainer = styled.span`
  padding: 5px;
  border-radius: 3px;
  background: gold;
  font-size: 14px;
  color: black;
`;

const CodeBlock = ({ string = '' }) => {
  return (
    <li>
      <CodeContainer>{string}</CodeContainer>
    </li>
  );
};

const Hoisting = () => {
  return (
    <HoistingContainer>
      <ul>
        <CodeBlock string={`makeMeASandwhich()`} />
        <CodeBlock string={`function makeMeASandwhich = function()`} />
      </ul>
    </HoistingContainer>
  );
};

export { Hoisting };
