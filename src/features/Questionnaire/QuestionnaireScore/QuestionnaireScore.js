import { purple } from '@utils/styles';
import React from 'react';

import styled, { keyframes, css } from 'styled-components';

const tanTheme = {
  tanLightest: `#e7d6c7`,
  tanLight: `#FBE5C0`,
  tanMedium: `#BF9B7C`,
  tanDark: `#6C4526`,
  tanOrange: `#DF8E5C`
};

const ScoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: ${tanTheme.tanLight};
  padding: 32px 24px;
  width: 100%;
  justify-content: flex-start;
  align-content: flex-start;
  border-radius: 16px;
  border: 3px solid ${tanTheme.tanDark};
  p {
    margin: 0;
    &.title {
      font-size: 16px;
      font-weight: 600;
      color: ${tanTheme.tanMedium};
      margin-bottom: 8px;
    }
    &.score {
      line-height: 20px;
      color: ${tanTheme.tanDark};
      font-size: 22px;
      margin-top: 10px;
      font-weight: 600;
    }
    &.options {
      line-height: 20px;
      color: ${tanTheme.tanDark};
      font-size: 16px;
      margin-top: 16px;
      font-weight: 600;
    }
    &.current {
      line-height: 20px;
      color: ${tanTheme.tanMedium};
      font-size: 18px;
      font-weight: 600;
      text-align: right;
    }
  }
`;

const Animate = keyframes`
  to { stroke-dasharray: 0 100; }
`;

const AvailableContainer = styled.div`
  padding-top: 9px;
  padding-bottom: 9px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  padding-left: 24px;
  margin-left: 16px;
  border-left: 1px solid none;
`;

const SVGContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .circle-chart {
  }
  .circle-chart__circle {
    animation: ${Animate} 2s reverse;
    transform: rotate(-90deg);
    transition: all 0.4s ease-in;
    transform-origin: center;
  }
  .circle-chart__background {
    transform-origin: center;
  }
`;

const ProgressCircle = ({
  strokeWidth = 2,
  max = 10,
  value = 6,
  size = 30
}) => {
  const remainingValue = (value / max) * 100;
  const radius = size / 2 - 2;
  return (
    <AvailableContainer>
      <SVGContainer>
        <svg
          className="circle-chart"
          viewBox={`0 0 ${size} ${size}`}
          width={size}
          height={size}
        >
          <g>
            <circle
              className="circle-chart__background"
              stroke={tanTheme.tanLightest}
              strokeWidth={strokeWidth}
              fill="none"
              cx={size / 2}
              cy={size / 2}
              r={radius}
            />
            <circle
              className="circle-chart__circle"
              stroke={tanTheme.tanOrange}
              strokeWidth={strokeWidth}
              strokeDasharray={`${remainingValue}, 100`}
              strokeLinecap="round"
              fill="none"
              cx={size / 2}
              cy={size / 2}
              r={radius}
            />
          </g>
        </svg>
      </SVGContainer>
    </AvailableContainer>
  );
};

const ScoreContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const ScoreCompletion = styled.div`
  margin-left: 8px;
  margin-left: auto;
  .circle-chart {
    width: 100px;
    height: 100px;
  }
`;

const getResult = (items = []) => {
  if (!items || items.length <= 0) return 0;
  return items.reduce((prev, curr) => {
    const result = curr.value ? 1 : 0;
    return prev + result;
  }, 0);
};

const getLength = (items = []) => {
  if (!items || items.length <= 0) return '0';
  return items.length;
};

const QuestionnaireScore = ({ score = [], options = [], current = 0 }) => {
  const renderScore = getResult(score);
  const renderOptions = getLength(options);
  return (
    <ScoreContainer>
      <ScoreContent>
        <p className="title">Questions: {renderOptions}</p>
        <p className="score">Score: {renderScore}</p>
      </ScoreContent>
      <ScoreCompletion>
        <p className="current">
          Question: {current + 1} / {renderOptions}
        </p>

        <ProgressCircle value={current} max={renderOptions} />
      </ScoreCompletion>
    </ScoreContainer>
  );
};

export { QuestionnaireScore };
