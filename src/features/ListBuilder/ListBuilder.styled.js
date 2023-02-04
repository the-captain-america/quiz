import styled, { css } from 'styled-components';
import { mtFn, mbFn, weightFn } from '@utils/styles';

const FormGroup = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  ${mbFn};
  ${mtFn}
  label {
    margin-bottom: 8px;
  }
`;

const Heading = styled.h3`
  font-size: 16px;
  color: white;
  font-weight: 500;
`;

const CategoryGroup = styled.ul`
  list-style: none;
  margin: 0;
  width: 100%;
  background: #313133;
  border-radius: 4px;
  /* margin-top: 16px; */
  padding-top: 4px;
  padding-right: 16px;
  padding-bottom: 4px;
  padding-left: 16px;
  /* border: 1px solid #262627; */
`;

const Item = styled.li`
  list-style: none;
  padding: 0;
  color: white;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* width: calc(100% - 16px); */
  position: relative;
  /* margin-left: 16px; */
  /* &:before {
    content: '-';
    position: absolute;
    left: -16px;
    top: 50%;
    transform: translateY(-50%);
  } */
`;

const ListControls = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const ListId = styled.span`
  align-items: center;
  font-weight: 600;
  color: white;
`;

const Remove = styled.button`
  cursor: pointer;
  margin: 0;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  padding: 8px;
  background: transparent;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 4px;
`;

const InputGroup = styled.div`
  display: flex;
  flex: 1;
  margin-bottom: 8px;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.span`
  font-weight: 300;
  font-size: 16px;
  ${weightFn};
  font-weight: normal;
  color: #b2b2b2;
  margin-left: 8px;
`;

const Swatch = styled.div`
  border-radius: 50%;
  height: 24px;
  width: 24px;
  padding: 0;
  margin: 0;
  margin: 0px 0 0 8px;
  display: flex;
  align-items: center;
  border: 2px solid #38363a;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  box-shadow: none;
  &:nth-child(1) {
    margin-left: 0px;
  }
  ${(props) =>
    props.bgColor &&
    css`
      background: ${props.bgColor};
    `}
`;

export {
  FormGroup,
  Heading,
  CategoryGroup,
  Item,
  Label,
  ListControls,
  Remove,
  InputGroup,
  ListId,
  Swatch,
};
