import styled, { css } from 'styled-components';
import { mbFn, mtFn, media, green } from '@utils/styles';

const DataButton = styled.button`
  padding: 6px;
  margin: 0;
  margin-left: 8px;
  background: white;
  border: 1px solid #a9aeb9;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: #eaeaea;
  }
`;

const Container = styled.div`
  ${mtFn};
  ${mbFn};
  form {
    position: absolute;
    left: -9999px;
    top: -9999px;
  }
`;

const Priority = styled.span`
  width: 11px;
  height: 11px;
  border-radius: 50%;
  margin-left: 8px;
  background: red;
`;

const CopyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  input {
    background: transparent;
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
    width: 100%;
    line-height: 21px;
    max-width: 1200px;
  }
`;

const CopyButton = styled.div`
  background: white;
  display: flex;
  align-items: center;
  flex-direction: row;
  align-self: stretch;
  flex-grow: 0;
  border-top: 1px solid #58575b;
  border-bottom: 1px solid #373639;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background: #3d3c40;
  &:hover {
    background: #4e4d51;
  }
  ${(props) =>
    props.isActive &&
    css`
      background: ${green};
      &:hover {
        background: ${green};
      }
      span {
        color: black;
      }
    `}
  padding: 16px;
  &:first-child {
    margin-top: 0;
  }
  &:hover {
    box-shadow: 2px 3px 4px rgba(28, 17, 44, 0.14);
  }
`;

const CopyLabel = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #95929e;
  display: flex;
  margin-right: 8px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: block;
  text-align: left;
  max-width: 130px;
  line-height: 31px;
  ${(props) =>
    props.maxWidth &&
    css`
      max-width: 300px;
    `}
`;

const CopyItem = styled.span.attrs({ className: 'CopyItem' })`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: block;
  white-space: nowrap;
  text-align: left;
  font-size: 14px;
  line-height: 32px;
  max-width: 540px;
  color: #fbfafb;
  ${media.sm`
  max-width: 504px;
  `}
  ${media.lg`
  max-width: calc(100vw - 400px);
  `}
  ${media.lg`
  max-width: calc(100vw - 400px);
  `}
`;

const IconContainer = styled.span`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 20px;
  height: 20px;
  svg {
    circle {
      fill: rgb(25, 178, 68);
      stroke: white;
    }
    path {
      stroke: white;
    }
    rect {
      stroke: white;
    }
  }
`;

const DotItem = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 7px;
  height: 100%;
  &:after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #95929e;
    transform: translate(-50%, -50%);
  }
`;

const DotGroup = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  height: 32px;
  flex-direction: row;
  .Button__Item.active & {
    li {
      &:after {
        background: black;
      }
    }
  }
`;

const RevealButton = styled.button`
  padding: 6px;
  border: 1px solid transparent;
  border-radius: 6px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: #424145;
  margin-left: 16px;
  color: #a29ea9;
  cursor: pointer;
  border-bottom: 1px solid #373639;
  &:hover {
    background: #424145;
  }
`;

export {
  DataButton,
  CopyContainer,
  CopyButton,
  CopyLabel,
  CopyItem,
  IconContainer,
  DotItem,
  Priority,
  DotGroup,
  RevealButton,
  Container,
};
