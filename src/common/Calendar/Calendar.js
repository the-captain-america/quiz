import React, { useState, useEffect } from 'react';
import {
  format,
  startOfWeek,
  addDays,
  startOfMonth,
  endOfMonth,
  endOfWeek,
  isSameMonth,
  isSameDay,
  subMonths,
  addMonths,
} from 'date-fns';
import { format as formatFp } from 'date-fns/fp';
import { Icon } from '@common/Icon';
import { useClickOutside as ClickOutside } from '@hooks/useClickOutside';

import { Button } from '@common/Button';
import { keys, prop } from 'ramda';

import {
  CalendarContainer,
  CalendarDateView,
  DayWeekNames,
  CalendarStyled,
  CalendarControls,
  CalendarPosition,
  Label,
} from './Calendar.styled';
import { IconContainer } from '@common/IconContainer';

const buttonStyle = {
  padding: '6px',
  marginLeft: '4px',
  border: '1px solid #e0e0e0',
  background: 'transparent',
  borderRadius: '4px',
};

// const prevState = usePrevious(value);

// useEffect(() => {
//   if (prevState !== value) {
//     setActiveDate(value);
// need to convert this
//   }
// }, [value]);

const Calendar = ({
  callback = () => {},
  value = '',
  isActive = false,
  onClose = () => {},
  withFormat = false,
  ...props
}) => {
  const mt = prop('mt')(props);
  const mb = prop('mb')(props);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeDate, setActiveDate] = useState(new Date());
  const [isLocalActive, setLocalActive] = useState(false);

  const getHeader = () => {
    return (
      <div className="header">
        <div
          className="todayButton"
          onClick={() => {
            setSelectedDate(new Date());
            setActiveDate(new Date());
          }}
        >
          Today
        </div>
        <Button
          style={buttonStyle}
          onClick={() => setActiveDate(subMonths(activeDate, 1))}
        >
          <Icon name="CHEVRON" fill="white" rotate={-90} size={24} />
        </Button>
        <Button
          style={buttonStyle}
          onClick={() => setActiveDate(addMonths(activeDate, 1))}
        >
          <Icon name="CHEVRON" fill="white" rotate={90} size={24} />
        </Button>
        <h2 className="currentMonth">{format(activeDate, 'MMMM yyyy')}</h2>
      </div>
    );
  };

  const onSelect = (date) => {
    setSelectedDate(date);
    if (withFormat) {
      callback(formatFp('yyyy-MM-dd')(date));
      return;
    } else {
      callback(date);
    }

    // setLocalActive(false);
  };

  const getWeekDaysNames = () => {
    const weekStartDate = startOfWeek(activeDate);
    const weekDays = [];
    for (let day = 0; day < 7; day++) {
      weekDays.push(
        <DayWeekNames className="day weekNames">
          {format(addDays(weekStartDate, day), 'E')}
        </DayWeekNames>
      );
    }
    return <div className="weekContainer">{weekDays}</div>;
  };

  const generateDatesForCurrentWeek = (date, selectedDate, activeDate) => {
    let currentDate = date;
    const week = [];
    for (let day = 0; day < 7; day++) {
      const cloneDate = currentDate;
      week.push(
        <div
          className={`day ${
            isSameMonth(currentDate, activeDate) ? '' : 'inactiveDay'
          } ${isSameDay(currentDate, selectedDate) ? 'selectedDay' : ''}
          ${isSameDay(currentDate, new Date()) ? 'today' : ''}`}
          onClick={() => onSelect(cloneDate)}
        >
          {format(currentDate, 'd')}
        </div>
      );
      currentDate = addDays(currentDate, 1);
    }
    return <>{week}</>;
  };

  const getDates = () => {
    const startOfTheSelectedMonth = startOfMonth(activeDate);
    const endOfTheSelectedMonth = endOfMonth(activeDate);
    const startDate = startOfWeek(startOfTheSelectedMonth);
    const endDate = endOfWeek(endOfTheSelectedMonth);

    let currentDate = startDate;

    const allWeeks = [];

    while (currentDate <= endDate) {
      allWeeks.push(
        generateDatesForCurrentWeek(currentDate, selectedDate, activeDate)
      );
      currentDate = addDays(currentDate, 7);
    }

    return <div className="weekContainer">{allWeeks}</div>;
  };

  const onLocalClose = () => {
    setLocalActive(false);
    onClose();
  };

  const handleClose = () => {
    onLocalClose();
  };

  const handleOpen = () => {
    setLocalActive(true);
  };

  const forceHandleDate = (e) => {};

  // const getPosition = (type) =>
  //   ({
  //     fromTop: { fromTop: true },
  //     fromBottom: { fromBottom: true },
  //   }[type || 'fromBottom']);

  // const matchedOption = getPosition(keys(props));

  return (
    <ClickOutside mb={mb} mt={mt} callback={handleClose}>
      <Label>Select Date</Label>
      <CalendarContainer mt={8}>
        <CalendarDateView isActive={isLocalActive}>
          <span onClick={handleOpen}>
            {formatFp('dd/MM/yyyy')(selectedDate)}
          </span>
          <IconContainer className="IconContainer" onClick={handleOpen}>
            <Icon name="CALENDAR" size={20} />
          </IconContainer>
        </CalendarDateView>

        {isLocalActive && (
          <CalendarPosition {...props}>
            <CalendarStyled className="calendar">
              {getHeader()}
              {getWeekDaysNames()}
              {getDates()}
            </CalendarStyled>
            <CalendarControls>
              <Button variant="Error" center mt={8} onClick={handleClose}>
                Cancel
              </Button>
              <Button ml={5} center mt={8} onClick={handleClose}>
                Confirm
              </Button>
            </CalendarControls>
          </CalendarPosition>
        )}
      </CalendarContainer>
    </ClickOutside>
  );
};

export { Calendar };
