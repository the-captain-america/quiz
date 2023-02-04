import styled from 'styled-components';
import { mtFn, mbFn, mrFn, mlFn } from '@utils/styles';

const Label = styled.div`
  color: white;
  font-weight: 300;
  font-size: 14px;
  padding-bottom: 8px;
  color: #b2b2b2;
  ${mtFn};
  ${mbFn};
  ${mrFn};
  ${mlFn};
  span {
    font-size: 11px;
    color: white;
  }
`;

export { Label };
