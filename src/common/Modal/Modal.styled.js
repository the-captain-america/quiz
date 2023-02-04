import {
  media,
  preventSelectFn,
  lineHeightFn,
  fontSizeFn,
  weightFn,
  widthFn,
  colorFn,
  linkFn,
  centerFn,
  horizontalPullFn,
  horizontalPushFn,
  verticalPushFn,
  verticalPullFn,
  mbFn,
  mtFn,
  paddingFnc,
  justifyContentFn,
} from '@utils/styles';
import styled, { css } from 'styled-components';

const Text = styled.p`
  font-size: 16px;
  line-height: 20px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: block;
  margin: 0;
  text-transform: none;
  user-select: none;
  ${preventSelectFn};
  ${lineHeightFn};
  ${fontSizeFn};
  ${weightFn};
  ${widthFn};
  ${colorFn};
  ${linkFn};
  ${centerFn};
  ${horizontalPullFn};
  ${horizontalPushFn};
  ${verticalPushFn};
  ${verticalPullFn};
`;

const configLevel = {
  1: 100,
  2: 200,
  3: 300,
  9: 999,
};

const ModalContainer = styled.div.attrs({ className: 'modal-container' })`
  background: #3a393e;
  border-radius: 4px;
  box-shadow: 0px 4px 54px 0px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  border: 1px solid #262627;
  width: 100%;
  min-width: 320px;
  max-width: 340px;
  left: 50%;
  top: 50%;

  ${(props) =>
    props.position &&
    css`
      position: ${props.position};
      top: 20%;
    `}
  transition: all 0.2s ease-in-out;
  transform: translate(-50%, -50%);
  z-index: 999;

  .confirm-button {
    span {
      display: none;
    }
  }
  ${media.xs`
    max-width: 472px;
    min-width: 400px;
    .confirm-button {
      span {
        display: inline-block;
      }
    }
  `}
  ${media.sm`
    max-width: 720px;
    min-width: 500px;
    .confirm-button {
      span {
        display: inline-block;
      }
    }
`}

  ${(props) =>
    props.level &&
    css`
      z-index: ${configLevel[props.level] || 9};
    `}
  ${(props) =>
    props.dev &&
    css`
      z-index: 0;
    `}
`;

const ModalStyledContent = styled.div`
  padding: 0px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const ModalContent = styled.div`
  padding: 16px 24px 16px;
  width: 100%;
`;

const CloseButton = styled.button`
  width: 24px;
  height: 24px;
  padding: 0;
  margin: 0;
  border: none;
  display: flex;
  background: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  svg {
    path {
      transition: all 0.2s ease-in-out;
    }
  }
  &:hover {
    svg {
      path {
        stroke: #e0e0e0;
      }
    }
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  display: none;
  ${(props) =>
    props.level &&
    css`
      z-index: ${configLevel[props.level] || 9};
    `}
  ${(props) =>
    props.isActive &&
    css`
      display: block;
    `}
${(props) =>
    props.dev &&
    css`
      z-index: 0;
      position: relative;
    `}
`;

const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  ${mbFn};
  ${mtFn};
  ${paddingFnc};
  ${justifyContentFn};
`;

export {
  Text,
  configLevel,
  ModalContainer,
  ModalContent,
  ModalStyledContent,
  CloseButton,
  Overlay,
  Block,
};
