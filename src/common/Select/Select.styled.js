import { mbFn, mtFn } from '@utils/styles';
import styled, { css } from 'styled-components';

const SelectOuterContainer = styled.div`
  background-color: #313133;
  position: absolute;
  top: calc(-100% + 11px);
  z-index: 999;
  width: 100%;
  border-radius: 5px;
  padding: 8px 2px 0px 4px;
  box-shadow: 0 6px 14px 0 rgb(120 120 120 / 18%);
`;

const SelectOuter = styled.div`
  max-height: 250px;
  overflow-y: auto;
  width: 100%;
  background-color: #313133;
  margin-right: 4px;
  &::-webkit-scrollbar-track {
    background: #3d3c40;
    border: none;
    border-radius: 4px;
    box-shadow: none;
  }
  &::-webkit-scrollbar-thumb {
    background: #58575b;
    border-radius: 4px;
    border: none;
    box-shadow: none;
  }
`;

const SelectContainerGroup = styled.ul`
  margin: 0;
  padding: 0;
  margin-right: 4px;
  list-style: none;
  background: #313133;
  border-radius: 0 0 4px 4px;
  width: calc(100% -4px);
  /* padding: 13px 7px; */
  padding: 2px 7px 13px 7px;
  box-sizing: border-box;
`;

const SelectStyle = styled.div`
  width: 100%;
  ${mbFn};
  ${mtFn};
`;

const SelectOption = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
  display: block;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease-in-out;
  span.text {
    user-select: none;
    padding: 10px 14px;
    display: block;
    font-size: 15px;
    line-height: 21px;
    text-align: left;
    color: white;
  }
  &:focus {
    outline: none;
    border: none;
  }
  &:hover {
    background: #57535c;
    span.text {
      color: white;
    }
  }
  &:nth-child(1) {
    margin-top: 0px;
  }
  margin-top: 8px;
  ${(props) =>
    props.isActive &&
    css`
      background: #57535c;
      &:hover {
        background: #57535c;
      }
      span.text {
        color: white;
      }
    `}
`;

const Chevron = styled.span`
  position: absolute;
  right: 0;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  pointer-events: inherit;
  margin: 0;
  padding: 0;
`;

const SelectedItem = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  box-sizing: border-box;
  background: transparent;
  border-radius: 4px;
  border: 1px solid transparent;
  &:focus {
    outline: none;
    border: none;
  }
  span.text {
    padding-left: 14px;
    text-align: left;
    font-size: 15px;
    line-height: 21px;
    padding: 16px 0px 16px 14px;
    color: white;
  }
  ${(props) =>
    props.isDisabled &&
    css`
      cursor: not-allowed;
      user-select: none;
      span.text {
        color: white;
        font-style: normal;
      }
      &:focus {
        outline: none;
        box-shadow: none;
      }
      ${Chevron} {
        svg {
          path {
            stroke: #dcdcdc;
            fill: #dcdcdc;
          }
        }
      }
    `}

  ${(props) =>
    props.isActive &&
    css`
      span.text {
        color: white;
        user-select: none;
        font-style: normal;
      }
    `}
`;

const SelectIcon = styled.span`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 8px;
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

const SelectLabel = styled.div`
  color: white;
  font-weight: 300;
  font-size: 14px;
  padding-bottom: 8px;
  color: #b2b2b2;
  span {
    font-size: 11px;
    color: white;
  }
`;

const SelectContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  background: #313133;
  min-width: 162px;
  height: 48px;
  display: block;
  width: 100%;
  border-radius: 4px;
  ${(props) =>
    props.isActive &&
    css`
      border-radius: 4px 4px 0 0;
    `}
`;

export {
  Chevron,
  SelectContainerGroup,
  SelectOuter,
  SelectStyle,
  SelectOption,
  SelectedItem,
  SelectIcon,
  SelectContainer,
  SelectOuterContainer,
  SelectLabel,
};
