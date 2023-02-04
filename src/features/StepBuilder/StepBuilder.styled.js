import styled, { css, keyframes } from 'styled-components';
import {
  orange,
  purple,
  green,
  blue,
  paleGray,
  warmGray,
} from '@utils/styles/colors';
import { colours } from './stepTheme';
import {
  bgColorFn,
  mbFn,
  scrollStylePrimary,
  borderColorFn,
} from '@utils/styles';

const shake = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`;

const pulseBorder = keyframes`
  0% {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
    opacity: 0;
  }
`;

const Box = styled.div`
  padding: 24px;
  background: ${colours.white};
  border-radius: 8px;
  color: white;
  z-index: 1;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    z-index: 0;
    left: 50%;
    top: 50%;
    z-index: -1;
    transform: translateX(-50%) translateY(-50%);
    display: block;
    width: 200px;
    height: 60px;
    border-radius: 8px;
    background: ${colours.white};
    animation: ${pulseBorder} 1500ms ease-out infinite;
  }
  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    display: block;
    width: 200px;
    height: 60px;
    background: ${orange};
    border-radius: 50%;
    transition: all 200ms;
  }

  &:hover {
    animation: ${shake} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }
  &:active {
    animation: ${shake} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  background: #29292c;
  top: 80px;
  max-height: calc(100% - 150px);
  overflow-y: auto;
  ${(props) =>
    props.isExpanded &&
    css`
      height: 1800px;
    `}
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background: ${colours.lightGray};
  border-radius: 8px;
  padding: 24px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 999;
  ${(props) =>
    props.zIndex &&
    css`
      z-index: ${props.zIndex};
    `}
  background: rgba(0, 0, 0, 0.2);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: none;
  ${(props) =>
    props.isActive &&
    css`
      display: flex;
    `}
`;

const Content = styled.div`
  width: 100%;
  position: relative;
  overflow-y: auto;
  max-height: 600px;
  overflow-x: hidden;
  &.content {
    ul,
    li {
      padding: 0;
      margin: 0;
    }
    ul {
      display: flex;
      flex-direction: column;
      margin-bottom: 16px;
    }
    li {
      color: #fbfafb;
      list-style-type: disc;
      margin-top: 16px;
      margin-left: 16px;
    }
  }
  p {
    color: #95929e;
    line-height: 24px;
  }
`;

const List = styled.ul``;

const Title = styled.div`
  font-size: 16px;
  text-align: left;
  font-weight: 600;
  font-size: 20px;
  width: 100%;
  margin-left: 80px;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  min-width: 0;
  text-overflow: ellipsis;
  margin-right: 24px;
`;

const ControlContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  display: flex;
  flex-direction: row;
  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
  justify-content: space-between;
  z-index: 10;
  min-height: 82px;
  ${(props) =>
    props.variant === 'PRIMARY' &&
    css`
      border-top: 1px solid #43374e;
      background: #31273a;
    `}
`;

const ControlButton = styled.button`
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: white;
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 600;
  border: none;
  border: 1px solid transparent;
  transition: all 0.3s ease-in-out;
  ${(props) =>
    props.disabled &&
    css`
      pointer-events: none;
      background: #e0e0e0;
    `}
  &:focus {
    outline: none;
  }
  &:active {
    border: 1px solid white;
    background: transparent;
    color: white;
  }
  &:hover {
    border: 1px solid white;
    background: transparent;
    color: white;
  }
  span {
    color: white;
    font-size: 14px;
    font-weight: 500;
  }
  ${(props) =>
    props.right &&
    css`
      margin-left: auto;
    `}
`;

const RenderContent = styled.div`
  padding: 24px;
  background: #29292c;
  overflow-y: auto;
  ${scrollStylePrimary};
  ${(props) =>
    props.minHeight &&
    css`
      min-height: ${props.minHeight}px;
    `}
`;

const Header = styled.div`
  width: 100%;
  height: 80px;
  background: ${colours.gray};
  border-bottom: 2px solid #3a393e;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  ${(props) =>
    props.variant === 'PRIMARY' &&
    css`
      background: ${purple};
    `}
  ${bgColorFn};
  ${borderColorFn};
`;

const HeaderRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 16px;
`;

const ExpandButton = styled.button`
  outline: none;
  width: 48px;
  height: 48px;
  border-radius: 4px;
  background: transparent;
  border: none;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  &:hover {
    background: rgba(224, 224, 224, 0.29);
  }
  &:focus {
    outline: none;
    cursor: pointer;
  }
`;

const CustomWrapper = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  ${mbFn};
  ${scrollStylePrimary};
  border: 2px solid ${colours.lightGray};
  background: #29292c;
  height: 900px;
  ${(props) =>
    props.isExpanded &&
    css`
      height: 1800px;
    `}
`;

const StepperContainer = styled.ul`
  list-style: none;
  margin: 0;
  width: 200px;
  justify-content: flex-end;
  display: flex;
  padding-right: 16px;
`;

const StepperItem = styled.li`
  list-style: none;
  margin: 0;
  background: #45434a;
  border: 2px solid transparent;
  border-radius: 50%;
  display: flex;
  min-width: 10px;
  height: 10px;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  margin-left: 10px;
  ${(props) =>
    props.showNumbers &&
    css`
      background: #45434a;
      width: 48px;
      min-width: 40px;
      height: 40px;
      border-radius: 5px;
      margin-left: 8px;
      ${(props) =>
        props.isActive &&
        css`
          border: 2px solid transparent;
          background: ${blue};
        `}
    `}
  &:hover {
    background: ${warmGray};
    color: white;
  }
  ${(props) =>
    props.isActive &&
    css`
      border: 2px solid transparent;
      background: ${green};
    `}
  span {
    color: white;
    line-height: 20px;
    text-align: center;
  }
`;

export {
  Wrapper,
  CustomWrapper,
  Overlay,
  ControlContainer,
  ControlButton,
  Title,
  Header,
  Box,
  List,
  Block,
  Content,
  RenderContent,
  StepperContainer,
  ExpandButton,
  HeaderRight,
  StepperItem,
};
