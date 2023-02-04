import React, { useEffect, useState } from 'react';
import { equals, prop, values } from 'ramda';
import { MultiSelect } from '@common/MultiSelect';
import { HighlightView } from '@common/StateView';
import { questions } from './data';
import prettier from 'prettier/standalone';
import babylon from 'prettier/parser-babel';
import { QuestionnaireScore } from './QuestionnaireScore';
import { QuestionCreator } from './QuestionCreator';
import { Grid, Row, Col } from '@common/Grid';
import {
  QuestionLabel,
  QuestionSequence,
  QuestionControls,
  QuestionHeader,
  QuestionButton,
  QuestionnaireHeader,
  QuestionnaireTitle,
  QuestionSelectorContainer,
  QuestionControlsFooter,
  QuestionRenderContainer,
  QuestionGroup,
  Question,
  Success,
  Failure
} from './Questionnaire.styled';
import styled, { css } from 'styled-components';
import { Hoisting } from './components/Hoisting';

const purpleTheme = {
  lightPurple: `#E2D7FC`,
  greyPurple: `#D9CEF6`,
  mediumPurple: `#AA8DF1`,
  darkPurple: '#482896',
  textPurple: '#745CB0'
};

const SelectorGroup = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
  display: flex;
`;

const SelectorItem = styled.li`
  padding: 10px;
  list-style: none;
  margin: 0;
  cursor: pointer;
  margin-bottom: 8px;
  margin-left: 6px;
  &:nth-child(1) {
    margin-left: 0;
  }
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${purpleTheme.darkPurple};
  color: white;
  font-size: 12px;
  border: 2px solid ${purpleTheme.darkPurple};
  background: ${purpleTheme.mediumPurple};
  ${(props) =>
    props.isActive &&
    css`
      background: ${purpleTheme.darkPurple};
    `}
`;

const highlightStyle = {
  background: 'rgb(238 236 244)',
  padding: '0 10px 0 10px',
  margin: 0
};

const containedStyles = css`
  .SelectedItemContainer {
    &.in-active {
      border-radius: 16px;
      border: none;
      padding: 16px;
      background: ${purpleTheme.lightPurple};
    }
    &.active {
      border-radius: 16px;
      border: none;
      padding: 16px;
      background: ${purpleTheme.mediumPurple};
    }
  }
  .SelectedItemLabel {
    &.active {
      color: white;
    }
    &.in-active {
      color: ${purpleTheme.textPurple};
    }
  }
  .QuestionSequence {
    color: ${purpleTheme.darkPurple};
  }
  .QuestionLabel {
    color: black;
  }
  .Question {
    padding-top: 64px;
    padding-bottom: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &.in-active {
      display: none;
    }
  }
`;

const QuestionnaireContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  ${containedStyles};
`;

// returns an array after sorting by key passed via prop
const sortyByKey = (key = 'sequence') => (list = []) =>
  list.sort((a, b) => (prop(key)(a) > prop(key)(b) ? 1 : -1));

const getComponent = (type = 'COMPARE') =>
  ({
    HOISTING: Hoisting
  }[type.toUpperCase()]);

const getPreviousIndex = (currIndex) => ({ min, items = [] }) => {
  // return the first index if there is no length
  if (!items || items.length <= 0) return 0;
  // setup the mas varaible
  // return the first question if the current index is 0
  if (currIndex <= min) return 0;
  return currIndex - 1;
};

const getNextIndex = (currIndex) => ({ items = [] }) => {
  // setup the mas varaible
  const max = items.length - 1;

  // return the first index if there is no length
  if (!items || items.length <= 0) return max;

  // return the first question if the current index is 0
  if (currIndex >= max) return max;
  return currIndex + 1;
};

const findIdBySequence = (sequence) => ({ items = [] }) => {
  // return the first index if there is no length
  if (!items || items.length <= 0) return 0;
  const foundId = items.find((item) => prop('sequence')(item) === sequence);
  const id = prop('id')(foundId) || items[0].id;
  return id;
};

const applySequenceByMap = (items = []) =>
  items.map((m, i) => ({ ...m, sequence: i }));

const reconfigureOptions = (items = []) =>
  items.map((curr, index) => ({
    ...curr,
    label: curr.value,
    active: false,
    sequence: index
  }));

const hasOneAnswer = (items = []) => {
  if (!items || items.length <= 0) return false;
  // return bool
  const foundOne = items.map((curr) => curr.active);
  if (foundOne.includes(true)) return true;
  else return false;
};

const QuestionSelector = ({
  callback = () => {},
  options = [],
  activeId = ''
}) => {
  const renderItems = () => {
    if (!options || options.length <= 0) return null;
    const result = options.map((item) => (
      <SelectorItem
        className={`Selector ${item.id === activeId ? 'active' : 'in-active'}`}
        key={item.id}
        onClick={() => callback(item.sequence)}
        isActive={item.id === activeId}
      >
        {item.sequence + 1}
      </SelectorItem>
    ));
    return <SelectorGroup>{result}</SelectorGroup>;
  };
  return <QuestionSelectorContainer>{renderItems()}</QuestionSelectorContainer>;
};

const RenderOptions = ({
  items = [],
  answers = [],
  components = [],
  callback = () => {}
}) => {
  const [state, setState] = useState(reconfigureOptions(items));
  const [isActive, setIsActive] = useState(false);

  const renderComponent = () => {
    if (!components || components.length <= 0) return null;
    const Component = getComponent(components[0].value);
    return <Component />;
  };

  const handleCallback = (state) => {
    const questions = filterActiveElements(state);
    const isLocalMatchingAnswer = equals(answers, questions);
    callback(isLocalMatchingAnswer);

    setState(state);
    const validated = hasOneAnswer(state); // boolean
    if (!validated) {
      setIsActive(false);
      return;
    }
    setIsActive(true);
  };

  const filterActiveElements = (items) => {
    if (!items || items.length <= 0) return [];
    // return items.
    const filtered = items.filter((curr) => Boolean(curr.active));
    const newResult = filtered.reduce((prev, curr) => {
      return [...prev, curr.id];
    }, []);
    return newResult;
  };

  const questions = filterActiveElements(state);
  const isMatchingAnswer = equals(answers, questions);

  return (
    <QuestionRenderContainer>
      {renderComponent()}
      <MultiSelect
        mb={8}
        options={state}
        callback={handleCallback}
        config={{
          initialiseAll: false,
          showToggle: false
        }}
      />
      {isActive && (
        <>
          {isMatchingAnswer ? (
            <Success className="Success">{`Great work!`}</Success>
          ) : (
            <Failure className="Failure">{`Whoops, try again.`}</Failure>
          )}
        </>
      )}
    </QuestionRenderContainer>
  );
};

const Questionnaire = (props) => {
  const list = prop('questions')(props);
  const activeIndex = prop('activeSequence')(props);
  const title = prop('title')(props);
  const items = applySequenceByMap(values(list));
  const [activeSequence, setActiveSequence] = useState(activeIndex || 0);
  const [activeId, setActiveId] = useState(findIdBySequence(0)({ items }));
  const [score, setScore] = useState({});

  const [showCreator, setShowCreator] = useState(false);

  const onPrevious = (seqArg) => {
    const index = getPreviousIndex(seqArg)({ min: 0, items });
    const id = findIdBySequence(index)({ items });
    setActiveId(id);
    setActiveSequence(index);
  };

  const onNext = (seqArg) => {
    const index = getNextIndex(seqArg)({ items });
    console.log({ index });
    const id = findIdBySequence(index)({ items });
    setActiveId(id);
    setActiveSequence(index);
  };

  const evaluateCode = (code) => {
    const formattedCode = prettier.format(code, {
      parser: 'babel',
      plugins: [babylon]
    });
    return formattedCode;
  };

  const renderCode = (code = []) => {
    if (!code || code.length <= 0) return null;
    return code.map((cd, i) => (
      <HighlightView
        key={i}
        style={highlightStyle}
        type={cd.type}
        code={evaluateCode(cd.value)}
      />
    ));
  };

  const onSelectQuestion = (index) => {
    const id = findIdBySequence(index)({ items });
    setActiveId(id);
    setActiveSequence(index);
  };

  useEffect(() => {
    const id = findIdBySequence(activeIndex)({ items });
    setActiveId(id);
    setActiveSequence(activeIndex);
    // eslint-disable-next-line
  }, [activeIndex]);

  useEffect(() => {
    document.body.style.background = '#D7E1E6';
    return () => {
      document.body.style.background = null;
    };
    // eslint-disable-next-line
  }, []);

  const handleQuestionCallback = ({ id, answer, sequence }) => {
    setScore((state) => ({ ...state, [id]: { value: answer, sequence } }));
  };

  const renderItems = () => {
    if (!items || items.length <= 0) return null;
    const result = items.map((item) => (
      <Question
        className={`Question ${item.id === activeId ? 'active' : 'in-active'}`}
        key={item.id}
        isActive={item.id === activeId}
      >
        <QuestionHeader>
          <QuestionSequence className="QuestionSequence">
            {item.sequence + 1}.
          </QuestionSequence>
          <QuestionLabel className="QuestionLabel">{item.label}</QuestionLabel>
        </QuestionHeader>
        {renderCode(item.code)}
        <RenderOptions
          items={item.options}
          answers={item.answers}
          components={item.components}
          callback={(answer) =>
            handleQuestionCallback({
              id: item.id,
              sequence: item.sequence,
              answer
            })
          }
        />
      </Question>
    ));
    return <QuestionGroup>{result}</QuestionGroup>;
  };

  const renderControls = (
    <QuestionControls className="QuestionControls">
      <QuestionControlsFooter>
        <QuestionButton
          isHidden={activeSequence <= 0}
          variant="SECONDARY"
          onClick={() => onPrevious(activeSequence)}
        >
          Previous
        </QuestionButton>
        <QuestionButton
          variant="SECONDARY"
          ml={16}
          onClick={() => onNext(activeSequence)}
        >
          Next
        </QuestionButton>
      </QuestionControlsFooter>
      <QuestionSelector
        callback={onSelectQuestion}
        options={items}
        activeId={activeId}
      />
      <QuestionButton onClick={() => setShowCreator(!showCreator)}>
        {showCreator ? `Hide Creator` : `Show Creator`}
      </QuestionButton>
    </QuestionControls>
  );

  return (
    <Grid>
      <Row>
        <Col xs={12}>
          {showCreator && <QuestionCreator />}
          <QuestionnaireContainer>
            <QuestionnaireHeader>
              {title && <QuestionnaireTitle>{title}</QuestionnaireTitle>}
              <QuestionnaireScore
                options={items}
                current={activeSequence}
                score={sortyByKey('sequence')(values(score))}
              />
            </QuestionnaireHeader>
            {renderItems(items)}
            {renderControls}
          </QuestionnaireContainer>
        </Col>
      </Row>
    </Grid>
  );
};

Questionnaire.defaultProps = {
  questions: questions,
  activeSequence: 22
};

export { Questionnaire };
