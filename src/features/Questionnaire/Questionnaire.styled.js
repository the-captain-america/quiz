import { purple } from '@utils/styles';
import styled, { css } from 'styled-components';

const blue = '#02afec';
const red = '#c64040';
const green = '#3fc6a0';

const purpleTheme = {
  purpleLight: `#E2D7FC`,
  purpleGrey: `#D9CEF6`,
  purpleMedium: `#AA8DF1`,
  purpleDark: '#482896',
  purpleText: '#745CB0'
};

const tanTheme = {
  tanLight: `#FBE5C0`,
  tanMedium: `#BF9B7C`,
  tanDark: `#6C4526`,
  tanOrange: `#DF8E5C`
};

const heightFn = ({ height }) =>
  height &&
  css`
    height: ${height};
  `;

const mtFn = ({ mt }) =>
  mt &&
  css`
    margin-top: ${mt}px;
  `;

const mbFn = ({ mb }) =>
  mb &&
  css`
    margin-bottom: ${mb}px;
  `;

const QuestionLabel = styled.span`
  color: white;
  font-weight: 600;
  margin-left: 5px;
`;

const QuestionSequence = styled.span`
  color: white;
  font-weight: 600;
`;

const TextArea = styled.textarea`
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

const QuestionControls = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 24px;
  background: ${purpleTheme.purpleLight};
  border-radius: 16px;
  border: 3px solid ${purple};
  margin-bottom: 64px;
`;

const QuestionControlsFooter = styled.div`
  display: flex;
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
`;

const QuestionHeader = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 8px;
`;

const QuestionnaireTitle = styled.h2`
  color: white;
  margin: 0;
`;

const QuestionRenderContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const QuestionSelectorContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  margin-top: 16px;
  padding: 16px;
`;

const QuestionnaireHeader = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const QuestionButton = styled.button`
  background: ${purple};
  padding: 20px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;

  box-shadow: 0 4px 0px 0px ${purpleTheme.purpleDark};
  ${(props) =>
    props.isHidden &&
    css`
      opacity: 0;
    `}
  &:hover {
    background: ${purple};
    transform: translateY(2px);
    box-shadow: 0 2px 0px 0px ${purpleTheme.purpleDark};
  }
`;

const QuestionGroup = styled.ul`
  display: flex;
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;
  flex-direction: column;
`;

const Question = styled.li`
  background: white;
  border: 3px solid transparent;
  ${(props) =>
    props.isActive &&
    css`
      border: 3px solid ${purple};
    `}
  list-style: none;
  margin: 0;
  padding: 0;
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 16px;
  span {
    font-weight: 600;
  }
`;

const Success = styled.span`
  background: ${green};
  border-radius: 16px;
  padding: 16px;
  color: white;
  align-self: self-start;
  margin-top: 16px;
  padding: 16px;
`;

const Failure = styled.span`
  background: ${red};
  border-radius: 16px;
  padding: 16px;
  color: white;
  align-self: self-start;
  margin-top: 16px;
`;

export {
  TextArea,
  QuestionLabel,
  QuestionSequence,
  QuestionHeader,
  QuestionControls,
  QuestionnaireTitle,
  QuestionButton,
  QuestionRenderContainer,
  QuestionGroup,
  QuestionSelectorContainer,
  QuestionnaireHeader,
  QuestionControlsFooter,
  Question,
  Success,
  Failure
};
