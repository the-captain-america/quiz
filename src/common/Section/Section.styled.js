import styled, { css, keyframes } from 'styled-components';
import { mtFn, mbFn, bgColorFn } from '@utils/styles';

const SectionContainer = styled.div`
  border-radius: 8px;
  display: flex;
  background: #3a393e;
  flex-direction: column;
  box-shadow: 0px 2px 4px rgb(28 17 44 / 4%), 0px 5px 12px rgb(28 17 44 / 6%);
  width: 100%;
  max-width: 100%;
  margin-bottom: 16px;
  scroll-margin: 20px;
  ${mtFn};
  ${mbFn};
  ${bgColorFn};
`;

const SectionContent = styled.div`
  padding: 16px;
  display: flex;
  width: 100%;
  max-width: 100%;
  flex-direction: column;
  border-radius: 4px;
  ${(props) =>
    props.asCustom &&
    css`
      padding: 0;
    `}
`;

const SectionControl = styled.div`
  position: relative;
  /* overflow: hidden; */
  width: 100%;
`;

const SectionHeaderContainer = styled.div`
  padding: 16px 16px 16px 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  overflow: hidden;
  border-radius: 8px 8px 0 0px;
  h2 {
    font-weight: 600;
    font-size: 20px;
    margin: 0;
    color: #f3f3f4;
  }
`;

const SectionTypeGroup = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 30px;
  right: 52px;
`;

const pulseBorder = keyframes`
  0% {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
    opacity: 1;
  }

  100% {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
    opacity: .4;
  }
`;

const SectionTypeItem = styled.li`
  list-style: none;
  position: relative;
  display: flex;
  width: 20px;
  height: 20px;
  max-height: 20px;
  max-width: 20px;
  border-radius: 50%;
  border: 2px solid #3a393e;
  transition: all 0.2s ease-in-out;
  animation: ${pulseBorder} 1500ms ease-in 0s infinite alternate;
  ${(props) =>
    props.bgColor &&
    css`
      background: ${props.bgColor};
    `}
  ${(props) =>
    props.variant === 'low' &&
    css`
      box-shadow: 0px 0px 0px 2px rgb(238 204 76 / 36%);
    `}
  ${(props) =>
    props.variant === 'fair' &&
    css`
      box-shadow: 0px 0px 0px 2px rgba(114, 206, 188, 0.5);
    `}
${(props) =>
    props.variant === 'high' &&
    css`
      box-shadow: 0px 0px 0px 2px rgba(226, 78, 51, 0.5);
    `}
${(props) =>
    props.variant === 'medium' &&
    css`
      box-shadow: 0px 0px 0px 2px hsl(28deg 77% 57% / 52%);
    `}

  
padding: 0;
  margin: 0;
`;

const SectionFooter = styled.div`
  width: 100%;
  border-top: 1px solid #373639;
  height: 20px;
  padding-top: 16px;
  padding-bottom: 16px;
  background: #313133;
  border-radius: 0 0 6px 6px;
`;

export {
  SectionContainer,
  SectionContent,
  SectionControl,
  SectionHeaderContainer,
  SectionTypeGroup,
  SectionTypeItem,
  SectionFooter,
};
