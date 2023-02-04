import styled from 'styled-components';
import { mbFn, mtFn } from '@utils/styles';

const ToggleWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  ${mtFn};
  ${mbFn};
`;

const ToggleTitle = styled.span`
  font-size: 16px;
  position: absolute;
  left: 50px;
  height: 26px;
  top: 0;
  display: flex;
  align-items: center;
  color: #95929e;
`;

const ToggleLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const ToggleCheckbox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  cursor: pointer;
  &:checked + .ToggleLabel {
    background: #4fbe79;
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;

export { ToggleWrapper, ToggleTitle, ToggleLabel, ToggleCheckbox };
