import React from 'react';
import { Questionnaire } from './features/Questionnaire';
import styled from 'styled-components';
// import { MigrationBuilder } from '@features/MigrationBuilder';

const Line = styled.hr`
  margin-top: 16px;
  margin-bottom: 24px;
  border-bottom: 2px solid black;
`;

const App = () => {
  return (
    <div>
      <Questionnaire title="Your Quiz" />
      <Line />
    </div>
  );
};

export { App };
