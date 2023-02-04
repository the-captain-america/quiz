import styled, { css } from 'styled-components';
import { blue, mbFn, mtFn } from '@utils/styles';

const CalendarContainer = styled.div`
  position: relative;
  padding-right: 12px;
  ${mtFn};
  ${mbFn};
`;

const CalendarDateView = styled.div`
  padding: 12px;
  min-height: 48px;
  border-bottom: 2px solid #424244;
  transition: all 0.2s ease-in-out;
  background: #313133;
  border-radius: 6px;
  position: relative;
  ${mbFn};
  ${mtFn};
  span {
    font-size: 15px;
    color: white;
  }

  .IconContainer {
    border-radius: 5px;
    background: #3a393e;
    width: 38px;
    height: 38px;
    border-radius: 4px;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    right: 4px;
    background: transparent;
    border: 2px solid transparent;
    transition: all 0.2s ease-in-out;
    &:hover {
      background: #02afec;
      svg > g {
        stroke: white;
      }
    }
  }
  ${(props) =>
    props.isActive &&
    css`
      .IconContainer {
        background: #02afec;
        svg > g {
          stroke: white;
        }
      }
    `}
`;

const DayWeekNames = styled.div`
  &.day {
    width: 100%;
    padding: 12px;
    cursor: pointer;
    display: flex;
    border: 1px solid transparent;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
  }

  &.weekNames {
    color: #9e9e9e;
    cursor: default;
  }
`;

const CalendarControls = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  justify-content: flex-end;
`;

const CalendarStyled = styled.section`
  padding: 0;
  .changeMonth {
    margin: 0px 20px;
  }

  .header {
    display: flex;
    align-items: center;
  }

  .currentMonth {
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    font-size: 20px;
    margin-left: auto;
  }

  .day {
    width: 100%;
    padding: 12px;
    cursor: pointer;
    display: flex;
    border: 1px solid transparent;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
  }

  .weekNames {
    color: #9e9e9e;
    cursor: default;
  }

  .weekContainer {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }

  .inactiveDay {
    color: #9e9e9e;
  }
  .today {
    background: #efefee;
    color: black;
  }

  .selectedDay {
    color: white;
    background: ${blue};
    border: 1px solid #3366ff;
    width: 100%;
    margin: 0;
    padding: 12px;
    height: 100%;
    /* color: #254194; */
    color: black;
  }

  .navIcon {
    width: 20px;
    height: 20px;
    padding: 8px;
    cursor: pointer;
  }

  .navIcon:hover {
    border-radius: 50%;
    background: #efefee;
  }

  .todayButton {
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    padding: 7px 12px;
    cursor: pointer;
    margin-right: 8px;
  }

  .todayButton:hover {
    background: #efefef;
  }
`;

const CalendarPosition = styled.div`
  position: absolute;
  left: 0;
  bottom: 0px;
  max-width: 382px;
  min-width: 382px;
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  color: #b2b2b2;
  z-index: 999;
  background: #313133;
  border: 2px solid #424244;
  box-shadow: 0 6px 14px 0 rgb(120 120 120 / 18%);
  ${(props) =>
    props.fromTop &&
    css`
      top: 0;
      bottom: unset;
    `}
`;

const Label = styled.label`
  font-weight: 300;
  font-size: 14px;
  color: #b2b2b2;
  line-height: 20px;
`;

export {
  CalendarContainer,
  CalendarDateView,
  DayWeekNames,
  CalendarControls,
  Label,
  CalendarStyled,
  CalendarPosition,
};
