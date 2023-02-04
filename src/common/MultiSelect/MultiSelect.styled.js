import styled, { css } from 'styled-components';
import { scrollBarStyle, mtFn, mbFn } from '@utils/styles';
import { orange, green, red } from '@utils/styles/colors';

const Container = styled.div`
  border: 1px solid transparent;
  display: flex;
  border-radius: 6px;
  flex-direction: column;
  width: 100%;
  ${mtFn};
  ${mbFn};
`;

const IconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin-left: 4px;
  ${(props) =>
    props.color === 'blue' &&
    css`
      svg > path {
        stroke: ${green};
      }
    `}
`;

const CustomButton = styled.button`
  margin-top: 16px;
  margin-bottom: 16px;
  padding: 0;
  max-width: 100px;
  background: transparent;
  border: 1px solid transparent;
  display: block;
  cursor: pointer;
  color: white;
  border: none;
  &:focus {
    outline: none;
  }
  &:active {
    outline: none;
  }
`;

const Group = styled.ul`
  display: flex;
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;
  flex-direction: row;
  overflow-x: auto;
  flex-wrap: wrap;
  ${scrollBarStyle};
`;

const SelectedItemContainer = styled.li`
  list-style: none;
  padding: 8px;
  background: #4e4d51;
  min-height: 40px;
  border-radius: 6px;
  margin-right: 8px;
  flex: 0 auto;
  display: flex;
  user-select: none;
  justify-content: flex-start;
  align-items: center;
  margin-top: 16px;
  max-width: 400px;
  cursor: pointer;
  border: 2px solid rgb(204, 204, 204);
  span {
    color: white;
    word-wrap: break-word;
  }
  button {
    margin: 0;
    padding: 0;
    width: 32px;
    height: 32px;
    min-width: 32px;
    border-radius: 4px;
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #dadada;
    margin-left: auto;
    background: transparent;
    &:hover {
      cursor: pointer;
      background: ${green};
      svg {
        path,
        line {
          stroke: white;
        }
      }
    }
  }
  &:last-child {
    margin-right: 0;
  }
  ${(props) =>
    props.isActive &&
    css`
      background: ${green};
      border: 2px solid ${green};
    `}
`;

export { Container, CustomButton, IconContainer, Group, SelectedItemContainer };
