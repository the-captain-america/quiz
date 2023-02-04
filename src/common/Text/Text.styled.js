import styled, { css } from 'styled-components';
import {
  horizontalPushFn,
  horizontalPullFn,
  colorFn,
  widthFn,
  preventSelectFn,
  fontSizeFn,
  linkFn,
  weightFn,
  centerFn,
  lineHeightFn,
  mbFn,
  mtFn,
} from '@utils/styles';

const styles = css`
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
  ${mtFn};
  ${mbFn};
`;

const TextLink = styled.a`
  font-size: 16px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: block;
  margin: 0;
  text-transform: none;
  line-height: 20px;
  user-select: none;
  cursor: pointer;
  ${styles};
`;

const TextParagraph = styled.p`
  font-size: 16px;
  line-height: 20px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: block;
  margin: 0;
  text-transform: none;
  &::selection {
    background: rgba(183, 149, 217, 0.5);
    color: white;
  }
  span {
    font-size: 14px;
    margin-left: 8px;
    color: grey;
  }
  ${styles};
`;

const TextSpan = styled.span`
  font-size: 16px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: block;
  margin: 0;
  text-transform: none;
  line-height: 20px;
  user-select: none;
  ${styles};
`;

export { TextLink, TextParagraph, TextSpan };
