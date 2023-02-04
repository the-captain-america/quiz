import React from 'react';
import { mtFn, mbFn } from '@utils/styles';
import styled, { css } from 'styled-components';

const NoteGroup = styled.div`
  margin-bottom: 16px;
  ${mtFn};
  ${mbFn};
  .Note__Item {
    border-radius: 4px;
    ${(props) =>
      props.hasLength &&
      css`
        &:first-child {
          border-radius: 4px 4px 0 0;
          border-bottom: 1px solid transparent;
        }
      `}
    &:not(:first-child) {
      border-radius: 0px;
      margin-bottom: 0;
      border-bottom: 1px solid transparent;
    }
    &:last-of-type {
      border-bottom: 1px solid #373639;
      border-radius: 0 0 4px 4px;
    }
  }
`;

const NoteProvider = ({ children, ...props }) => {
  const hasLength = children && children.length && children.length > 1;

  return (
    <NoteGroup hasLength={hasLength} {...props}>
      {children}
    </NoteGroup>
  );
};

export { NoteProvider };
