import React, { useState, useEffect } from 'react';
import { length } from 'ramda';
import styled, { css } from 'styled-components';

import { Choice } from './Choice';

const listStyle = css`
  list-style: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const AssessmentContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`;

const List = styled.ul`
  ${listStyle}
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  ${(props) =>
    props.direction &&
    css`
      flex-direction: ${props.direction};
    `}
`;

const Questions = ({ items = [], options = [], callbackError = () => {} }) => {
  const [increment, setIncrement] = useState(0);
  const [currentItem, setCurrentItem] = useState({});
  const [dimensions, setDimensions] = useState({
    existence: [],
    meaning: [],
    mission: [],
    power: [],
    structure: [],
    resources: [],
  });

  const [results, setResults] = useState({
    existence: 0,
    meaning: 0,
    mission: 0,
    power: 0,
    structure: 0,
    resources: 0,
  });

  const getResult = (array) => array.reduce((a, b) => a + b, 0);

  useEffect(() => {
    setResults((state) => ({
      ...state,
      existence: getResult(dimensions?.existence),
      meaning: getResult(dimensions?.meaning),
      mission: getResult(dimensions?.mission),
      power: getResult(dimensions?.power),
      structure: getResult(dimensions?.structure),
      resources: getResult(dimensions?.resources),
    }));
  }, []);

  useEffect(() => {
    if (increment >= 3) {
      callbackError();
    }
  }, [increment]);

  const callback = ({ item, dimension }) => {
    setIncrement(increment + 1);
    setDimensions((state) => ({
      ...state,
      [dimension]: [...state[dimension], item?.value],
    }));
  };

  // console.log(
  //   dimensions?.existence.reduce((a, b) => a + b, 0),
  //   dimensions?.meaning.reduce((a, b) => a + b, 0),
  //   dimensions?.mission.reduce((a, b) => a + b, 0),
  //   dimensions?.power.reduce((a, b) => a + b, 0),
  //   dimensions?.structure.reduce((a, b) => a + b, 0),
  //   dimensions?.resources.reduce((a, b) => a + b, 0),
  // );j

  // const setCurrentItem = () => {
  //   const found = result.find(item => item.value === value);
  //   return found;
  // };

  const renderQuestions = () => {
    if (!length(items) > 0) return <></>;
    return (
      <List direction="column">
        {items.map((item, index) => {
          const isReverse = item.order === 'reverse';
          return (
            <Choice
              key={index}
              id={index + 1}
              label={item?.label}
              isReverse={isReverse}
              dimension={item?.dimension}
              options={options}
              callback={(choice) =>
                callback({ item: choice, dimension: item?.dimension })
              }
            >
              {item?.label}
            </Choice>
          );
        })}
        {/* <Button onClick={onSubmit}>Submit</Button> */}
      </List>
    );
  };
  return <AssessmentContainer>{renderQuestions()}</AssessmentContainer>;
};

export { Questions };
