import styled, { keyframes, css } from 'styled-components';
import { horizontalPullFn, horizontalPushFn } from '@utils/styles';

const spinner = () => {
  return keyframes`
  0% {
      transform: rotate(0deg);
  } 50% {
      transform: rotate(720deg);
  } 100% {
      transform: rotate(1080deg);
  }`;
};

const SpinnerWrapper = styled.span`
  ${horizontalPullFn};
  ${horizontalPushFn};
  ${({ circle = '#ffcbc35e', path = '#fff' }) => {
    return css`
      svg > svg > circle {
        stroke: ${circle};
      }
      svg > svg > path {
        stroke: ${path};
        fill: transparent;
        stroke-linecap: round;
        transform-origin: 50%;
        animation: ${spinner()} 2s ease-in-out infinite;
      }
    `;
  }}
`;

export { SpinnerWrapper };
