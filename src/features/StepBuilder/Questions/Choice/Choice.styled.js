import styled, { css } from 'styled-components';
import { media } from '@utils/styles';

const textStyle = css`
  line-height: normal;
  line-height: 24px;
  font-family: 'Montserrat', sans-serif;
`;

const flexStandard = css`
  display: flex;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  list-style: none;
  max-width: 650px;
  margin: 0;
  padding: 0;
  ${media.sm`
  flex-direction: row;
  margin-top: 8px;
  `}
`;

const ListItem = styled.li`
  list-style-type: none;
  border-radius: 4px;
  border: 1px solid transparent;
  margin: 0;
  margin-top: 8px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  min-width: 210px;
  justify-content: space-between;
  &:first-child {
    margin-left: 0;
  }
  span {
    display: block;
  }
  &:hover {
    cursor: pointer;
  }
  ${(props) =>
    props.asOption &&
    css`
      border: 1px solid #e0e0e0;
      border-radius: 4px;
      /* margin-right: 8px; */
      flex: 1 1 auto;
      span {
        font-size: 14px;
      }
    `}

  ${(props) =>
    props.isActive &&
    css`
      background: #e0e0e0;
      span {
        font-weight: 600;
      }
    `}
    ${media.sm`
    margin-left: 8px;
  padding-right: 8px;
  margin-top: 0;
   ;
  `}
`;

const ChoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 16px;
`;

const Text = styled.span`
  ${flexStandard}
  ${textStyle}
  font-size: 16px;
  font-weight: 300;
  padding: 10px;
  ${(props) =>
    props.center &&
    css`
      text-align: center;
    `}
`;

const ChoiceLabel = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  display: block;
  ${textStyle}
  strong {
    padding-right: 8px;
  }
`;

const CheckContainer = styled.div`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 4px;
  right: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const CheckMark = styled.div`
  ${(props) => {
    const height = '20px';
    const width = '12px';
    const borderWidth = '4px';
    const borderColor = '#ff6632';

    return css`
      display: inline-block;
      transform: rotate(45deg);
      height: ${height};
      width: ${width};
      border-bottom: ${borderWidth} solid ${borderColor};
      border-right: ${borderWidth} solid ${borderColor};
    `;
  }}
`;

const Check = () => (
  <CheckContainer>
    <CheckMark />
  </CheckContainer>
);

export { ChoiceContainer, Text, Check, ChoiceLabel, ListItem, List };
