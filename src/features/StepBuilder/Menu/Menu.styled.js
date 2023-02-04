import styled, { css } from 'styled-components';
import { orange, paleGray } from '@utils/styles/colors';
import { colours } from '../stepTheme';
import { scrollStylePrimary } from '@utils/styles';

const MenuContainer = styled.div`
  height: 100%;
  width: 300px;
  left: -300px;
  top: 0;
  z-index: 100;
  background: ${colours.gray};
  box-shadow: 0px 0px 16px 1px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  position: absolute;
  ${(props) =>
    props.zIndex &&
    css`
      z-index: ${props.zIndex};
    `}
  ${(props) =>
    props.isActive &&
    css`
      left: 0;
    `}
`;

const MenuContent = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-y: auto;
  overflow-x: hidden;
  ${scrollStylePrimary};
  ${(props) =>
    props.height &&
    css`
      max-height: ${(props) => props.height - 100 || 320}px;
    `}
`;

const MenuButton = styled.button`
  outline: none;
  position: absolute;
  z-index: 100;
  top: 16px;
  left: 16px;
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

const CloseButton = styled.button`
  outline: none;
  position: absolute;
  width: 40px;
  height: 40px;
  right: 16px;
  top: 20px;
  border: none;
  background: none;
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  &:focus {
    outline: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }
  &:hover {
    cursor: pointer;
  }
`;

const MenuControl = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  border-bottom: 2px solid #3a393e;
  justify-content: flex-start;
  position: relative;
`;

const MenuTitle = styled.h2`
  font-size: 20px;
  line-height: 24px;
  color: #323439;
  color: white;
  margin-top: 18px;
  padding-left: 24px;
  text-align: left;
  width: 100%;
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 16px 0 0 0;
  padding: 0 16px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Item = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  transition: all 0.2s ease-in-out;
  padding-left: 0;
  border-radius: 4px;
  margin-top: 8px;
  &:first-child {
    margin-top: 0;
  }
  span {
    line-height: 24px;
    font-size: 15px;
    padding: 16px;
    color: #4a4d50;
    color: #95929e;
  }
  &:hover {
    cursor: pointer;
    background: #3a393e;
    span {
      color: #95929e;
    }
  }
  ${(props) =>
    props.isActive &&
    css`
      background: #3a393e;
      border: 2px solid #8562a7;
      border-radius: 4px;
      /* #3fc6a0 - green
#02afec - blue
#8562a7 - purple */
    `}
  ${(props) =>
    props.isDisabld &&
    css`
      background: ${paleGray};
    `}
`;

export {
  MenuContainer,
  MenuContent,
  CloseButton,
  MenuControl,
  MenuTitle,
  Group,
  MenuButton,
  List,
  Item,
};
