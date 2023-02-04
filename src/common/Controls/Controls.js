import styled from 'styled-components';
import { mtFn } from '@utils/styles';

const ControlContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  ${mtFn};
  button {
    &:not(:first-child) {
      margin-left: 8px;
    }
  }
`;

export { ControlContainer };
