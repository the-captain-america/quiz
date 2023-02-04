import styled, { css } from 'styled-components';
import { green, mbFn, mtFn } from '@utils/styles';

const Primary = styled.input`
  outline: none;
  border-radius: 6px;
  background: #313133 !important;
  background-color: #313133 !important;
  font-size: 16px;
  padding: 12px;
  color: white;
  width: 100%;
  max-width: 100%;
  /* max-width: calc(100% - 24px); */
  box-sizing: border-box;
  appearance: none;
  margin: 0;
  ${mbFn};
  ${mtFn};
  min-height: 48px;
  border: 2px solid transparent;
  border-bottom: 2px solid #424244;
  box-shadow: none;
  transition: all 0.2s ease-in-out;
  outline: none !important;
  &:focus {
    background: #313133 !important;
    border-bottom: 2px solid #424244;
    background-color: #313133 !important;
  }
  &:-webkit-autofill {
    background: #313133 !important;
    border-bottom: 2px solid #424244;
    background-color: #313133 !important;
  }
  &:-webkit-autofill:hover {
    background: #313133 !important;
    border-bottom: 2px solid #424244;
    background-color: #313133 !important;
  }
  &:-webkit-autofill:focus {
    background: #313133 !important;
    border-bottom: 2px solid #424244;
    background-color: #313133 !important;
  }
  ${(props) =>
    props.isMatched &&
    css`
      border: 2px solid ${green};
      color: ${green};
      background-color: #97f1d7 !important;
      &:focus {
        border: 2px solid ${green};
        color: ${green};
        background-color: #97f1d7 !important;
      }
    `}
  ${(props) =>
    props.isCopied &&
    css`
      border: 2px solid #53b353;
      color: #53b353;
      background-color: #97f1d7 !important;
      &:focus {
        border: 2px solid #53b353;
        color: #53b353;
        background-color: #97f1d7 !important;
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

export { Primary };
