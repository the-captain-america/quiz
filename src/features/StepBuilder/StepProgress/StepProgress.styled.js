import styled, { css } from 'styled-components';
import { media } from '@utils/styles';
import { colours } from '../stepTheme';

const name = 'step';
const Container = styled.div`
  position: relative;
  width: 100%;
  display: none;
  ${media.sm`
  display: block;
`}
`;

const List = styled.ul`
  margin: 0;
  width: 100%;
  padding: 0;
  counter-reset: ${name};
  position: relative;
  right: -44px;
`;

const Item = styled.li`
  list-style-type: none;
  ${(props) => {
    const { count } = props;
    return css`
      width: calc(100% / ${count});
    `;
  }}
  float: left;
  font-size: 12px;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  color: ${colours.mediumGray};
  &:before {
    width: 30px;
    height: 30px;
    content: counter(${name});
    counter-increment: ${name};
    line-height: 30px;
    display: block;
    text-align: center;
    margin: 0 auto 10px auto;
    border-radius: 50%;
    border: 2px solid ${colours.black};
    background-color: ${colours.gray};
    position: relative;
    z-index: 1;
    line-height: 27px;
  }
  &:after {
    width: 100%;
    height: 2px;
    content: '';
    position: absolute;
    background: ${colours.mediumGray};
    top: 15px;
    left: -50%;
    z-index: 0;
  }
  &:first-child:after {
    content: none;
  }
  ${(props) =>
    props.isActive &&
    css`
      color: #ff6633;
      &:before {
        border-color: #ff6633;
      }
      &:after {
        background: #ff6633;
      }
    `}
`;

export { Container, List, Item };
