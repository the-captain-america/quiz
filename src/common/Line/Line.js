import styled from 'styled-components';
import { mbFn, mtFn } from '@utils/styles';

const Line = styled.hr`
  width: 100%;
  background-color: #58575b;
  height: 1px;
  ${mtFn};
  ${mbFn};
  border: none;
`;

export { Line };
