import React from 'react';
import styled, { css } from 'styled-components';
import { mtFn, mbFn } from '@utils/styles';

const CopyGroup = styled.div`
  ${mtFn};
  ${mbFn};
  margin-bottom: 16px;
  .Copy__Item {
    .Button__Item {
      border-left: 1px solid #373639;
      border-right: 1px solid #373639;
      border-radius: 4px;
    }
    ${(props) =>
      props.hasLength &&
      css`
        &:first-of-type {
          .Button__Item {
            border-radius: 4px 4px 0 0;
            border-top: 1px solid #373639;
            border-bottom: 1px solid #373639;
          }
        }
        &:not(:first-of-type) {
          .Button__Item {
            border-radius: 0px;
            border-bottom: 1px solid transparent;
            &:hover {
              border-top: 1px solid #4e4d51;
            }
          }
        }
        &:last-of-type {
          .Button__Item {
            border-radius: 0 0 4px 4px;
          }
        }
      `}
  }
`;

const CopyProvider = ({ children, ...props }) => {
  const hasLength = children && children.length && children.length > 1;
  return (
    <CopyGroup hasLength={hasLength} {...props}>
      {children}
    </CopyGroup>
  );
};

export { CopyProvider };
