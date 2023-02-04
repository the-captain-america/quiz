import styled, { css } from 'styled-components';
import { mbFn, mtFn } from '@utils/styles';

const Secondary = styled.input`
  outline: none;
  border-radius: 6px;
  background-color: white;
  font-size: 16px;
  padding: 12px;
  color: black;
  width: 100%;
  appearance: none;
  box-sizing: border-box;
  border: 1px solid #cfcfcf;
  background: white;
  ${mbFn};
  ${mtFn}
  transition: all .2s ease-in-out;
  &:focus {
    border: 1px solid #efefef;
    background: #cfcfcf;
  }
  ${(props) =>
    props.isMatched &&
    css`
      border: 1px solid #53b353;
      background-color: #d1ecd1 !important;
      &:focus {
        border: 1px solid #53b353;
        background-color: #d1ecd1 !important;
      }
    `}
  ${(props) =>
    props.isCopied &&
    css`
      border: 1px solid #53b353;
      background-color: #d1ecd1 !important;
      &:focus {
        border: 1px solid #53b353;
        background-color: #d1ecd1 !important;
      }
    `}

  ${(props) =>
    props.variant === 'warning' &&
    css`
      font-size: 24px;
      background: transparent;
      font-weight: 700;
      border-radius: 0;
      border-radius: 20px;
      background: #ffaa4e;
      text-align: center;
      color: white;
      border: 1px solid #de974c;
      &:focus {
        border: 1px solid #d28533;
        box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.12);
      }
    `}
  &::active {
    background: #ffffff;
  }
  &::focus {
    background: #ffffff;
  }
`;

export { Secondary };
