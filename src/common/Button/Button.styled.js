import styled, { css } from 'styled-components';
import { mtFn, mbFn, mrFn, mlFn } from '@utils/styles';
import { blue, green, purple, red } from '@utils/styles/colors';

const basicStyles = css`
  display: inline-flex;
  flex-direction: row;
  border: none;
  box-sizing: border-box;
`;

const basicText = css`
  line-height: 14px;
  font-size: 14px;
`;

const pseudoStyles = css`
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`;

const Primary = styled.button`
  ${basicStyles};
  ${basicText};
  ${pseudoStyles}
  ${mtFn};
  ${mbFn};
  ${mrFn};
  ${mlFn};
  padding: 12px;
  background: ${blue};
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  color: white;
  align-items: center;
  ${(props) =>
    props.center &&
    css`
      justify-content: center;
    `}
  ${(props) =>
    props.buttonLabel &&
    css`
      justify-content: center;
      span {
        width: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        margin-right: 4px;
      }
    `}
  &:hover {
    background: #7ad0ef;
  }
  ${(props) =>
    props.isDisabled &&
    css`
      background: #a9aeb9;
    `}
`;

const Secondary = styled.button`
  ${basicStyles};
  ${basicText};
  ${pseudoStyles}
  ${mtFn};
  ${mbFn};
  ${mrFn};
  ${mlFn};
  padding: 12px;
  background: ${purple};
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  color: white;
  align-items: center;
  ${(props) =>
    props.center &&
    css`
      justify-content: center;
    `}
  ${(props) =>
    props.buttonLabel &&
    css`
      justify-content: center;
      span {
        width: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        margin-right: 4px;
      }
    `}
  &:hover {
    background: #a185bd;
  }
  ${(props) =>
    props.isDisabled &&
    css`
      background: #a9aeb9;
    `}
`;

const Small = styled.button`
  ${basicStyles};
  ${basicText};
  ${pseudoStyles}
  ${mtFn};
  ${mbFn};
  ${mrFn};
  ${mlFn};
  padding: 8px;
  /* background: #efefef; */
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border-radius: 5px;
  font-weight: 500;
  width: 48px;
  height: 48px;
  border: 1px solid transparent;
  /* border: 1px solid #d9dce5; */
  transition: all 0.2s ease-in-out;
  color: white;
  &:hover {
    background: #d9dce5;
    background: rgba(224, 224, 224, 0.29);
  }
  ${(props) =>
    props.isDisabled &&
    css`
      background: #a9aeb9;
    `}
`;

const Tertiary = styled.button`
  ${basicStyles};
  ${basicText};
  ${pseudoStyles}
  ${mtFn};
  ${mbFn};
  ${mrFn};
  ${mlFn};
  padding: 12px;
  background: ${green};
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  color: white;
  align-items: center;
  ${(props) =>
    props.center &&
    css`
      justify-content: center;
    `}
  ${(props) =>
    props.buttonLabel &&
    css`
      justify-content: center;
      span {
        width: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        margin-right: 4px;
      }
    `}
  &:hover {
    background: #50e5bb;
  }
  ${(props) =>
    props.isDisabled &&
    css`
      background: #a9aeb9;
      cursor: not-allowed;
      user-select: none;
      span.text {
        color: white;
        font-style: normal;
      }
      &:hover {
        background: #c8c8c8;
      }
      &:focus {
        outline: none;
        box-shadow: none;
      }
    `}
`;

const Copy = styled.button`
  ${basicStyles};
  ${basicText};
  ${pseudoStyles}
  ${mtFn};
  ${mbFn};
  ${mrFn};
  ${mlFn};
  padding: 12px;
  background: ${purple};
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  color: white;
  align-items: center;
  ${(props) =>
    props.buttonLabel &&
    css`
      justify-content: center;
      span {
        width: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        margin-right: 4px;
      }
    `}
  &:hover {
    background: ${purple};
  }
  ${(props) =>
    props.isActive &&
    css`
      background: ${green};
      &:hover {
        background: ${green};
      }
    `}
  ${(props) =>
    props.isDisabled &&
    css`
      background: #a9aeb9;
    `}
`;

const Children = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: auto;
`;

const Error = styled.button`
  ${basicStyles};
  ${basicText};
  ${pseudoStyles}
  ${mtFn};
  ${mbFn};
  ${mrFn};
  ${mlFn};
  padding: 12px;
  background: ${red};
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  color: white;
  align-items: center;
  ${(props) =>
    props.buttonLabel &&
    css`
      justify-content: center;
      span {
        width: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        margin-right: 4px;
      }
    `}
  &:hover {
    background: ${red};
  }
  ${(props) =>
    props.isDisabled &&
    css`
      background: #a9aeb9;
    `}
`;

const Text = styled.button`
  ${basicStyles};
  ${basicText};
  ${pseudoStyles}
  ${mtFn};
  ${mbFn};
  padding: 0;
  background: transparent;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  color: white;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.buttonLabel &&
    css`
      justify-content: center;
      span {
        width: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        margin-right: 4px;
      }
    `}
  &:hover {
    background: transparent;
    span {
      text-decoration: underline;
    }
  }
`;

export { Text, Children, Primary, Error, Secondary, Small, Copy, Tertiary };
