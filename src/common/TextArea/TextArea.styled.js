import styled from 'styled-components';
import { heightFn, mbFn, mtFn, scrollStylePrimary } from '@utils/styles';
import { blue } from '@utils/styles/colors';

const FieldLabel = styled.div`
  color: white;
  font-weight: 300;
  font-size: 14px;
  padding-bottom: 8px;
  color: #b2b2b2;
  line-height: 20px;
  span {
    font-size: 11px;
    color: white;
  }
`;

const FieldForm = styled.form`
  textarea {
    position: absolute;
    left: -9999px;
    top: -9999px;
  }
  button {
    position: absolute;
    right: 16px;
    bottom: 16px;
  }
`;

const Primary = styled.textarea`
  max-height: 200px;
  height: 200px;
  line-height: 20px;
  box-sizing: border-box;
  padding: 14px 16px;
  display: block;
  width: 100%;
  resize: none;
  background: transparent;
  border: 2px solid transparent;
  outline: none;
  border-bottom: 2px solid rgba(255, 255, 255, 0.07);
  transition: all 0.2s ease-in-out;
  font-size: 16px;
  ${mbFn};
  ${mtFn};
  color: white;
  ${scrollStylePrimary};
  &::placeholder {
    color: #4f4f4f;
    font-size: 16px;
  }
  &:hover {
    border-bottom: 2px solid transparent;
    outline: none;
  }
  &:focus {
    border-bottom: 2px solid transparent;
    outline: none;
  }
  &:active {
    border-bottom: 2px solid transparent;
    outline: none;
  }
`;

const Secondary = styled.textarea`
  max-height: 200px;
  height: 200px;
  line-height: 20px;
  box-sizing: border-box;
  padding: 14px 16px;
  display: block;
  width: 100%;
  resize: none;
  background: ${blue};
  border: 2px solid ${blue};
  outline: none;
  border-bottom: 2px solid rgba(255, 255, 255, 0.07);
  transition: all 0.2s ease-in-out;
  font-size: 16px;
  border-radius: 6px;
  ${mbFn};
  ${mtFn};
  color: white;
  ${scrollStylePrimary};
  ${heightFn};
  &::placeholder {
    color: #4f4f4f;
    font-size: 16px;
  }
  &:hover {
    border-bottom: 2px solid transparent;
    outline: none;
  }
  &:focus {
    border-bottom: 2px solid transparent;
    outline: none;
  }
  &:active {
    border-bottom: 2px solid transparent;
    outline: none;
  }
`;

export { Primary, Secondary, FieldLabel, FieldForm };
