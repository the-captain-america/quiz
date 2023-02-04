import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { keys, length, prop, values } from 'ramda';
import { Input } from '@common/Input';
import { TextArea } from '@common/TextArea';
import { Select } from '@common/Select';
import { uuid } from '@utils/id';
import { HighlightView } from '@common/StateView';
import { CopyValue } from '@common/CopyValue';
import { Label } from '@common/Label';
import { ListBuilder } from '@features/ListBuilder';
import { MultiSelect } from '@common/MultiSelect';
import { Section, SectionContent } from '@common/Section';

const RestButton = styled.div`
  padding: 16px;
  background: black;
  color: white;
  display: inline-flex;
  align-self: flex-start;
  margin-bottom: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: grey;
  }
`;

const inputStyle = {
  layout: {
    background: '#313133',
    borderRadius: '6px'
  }
};

const listBuilderConfig = {
  label: 'Add Answer',
  placeholder: 'Options',
  hasDatePicker: false
};

const typeOptions = [
  {
    label: 'js',
    value: 'js',
    index: 0
  },
  {
    label: 'html',
    value: 'html',
    index: 1
  },
  {
    label: 'scss',
    value: 'scss',
    index: 2
  }
];

const getAlpha = (index) => {
  // after 26 char start over..
  return {
    0: 'a',
    1: 'b',
    2: 'c',
    3: 'd',
    4: 'e',
    5: 'f',
    6: 'g',
    7: 'h',
    8: 'i',
    9: 'j',
    10: 'k',
    11: 'l',
    12: 'M',
    13: 'N',
    14: 'O',
    15: 'P',
    16: 'Q',
    17: 'R',
    18: 'S',
    19: 'T',
    20: 'U',
    21: 'V',
    22: 'W',
    23: 'X',
    24: 'Y',
    25: 'Z'
  }[index || 0];
};

// Advance concept to allow questions to have visual aids - and have associated questions to examples
const QuestionCreator = () => {
  const [state, setState] = useState({
    label: '',
    code: '',
    type: 'js'
  });

  const [options, setOptions] = useState({});
  const [answers, setAnswers] = useState([]);

  const onReset = () => {
    setOptions({});
  };

  const handleListCallback = (cb) => {
    const { type, data } = cb;
    if (type === 'ADD') {
      const totalLength = length(keys(options));
      setOptions((state) => ({
        ...state,
        [getAlpha(totalLength)]: {
          ...data,
          id: getAlpha(totalLength),
          sequence: totalLength
        }
      }));
    } else if (type === 'REMOVE') {
      setOptions(data);
    }
  };

  const handleCallback = (state) => {
    setAnswers(state);
  };

  useEffect(() => {
    setAnswers(values(options));
  }, [options]);

  const onChange = (e) => {
    const { value, name } = e.target;
    setState((state) => ({
      ...state,
      [name]: value
    }));
  };

  const handleSelect = ({ name, item }) => {
    setState((state) => ({
      ...state,
      [name]: item.value
    }));
  };

  const providedKeysCustom = (items = []) =>
    items.map((curr) => ({
      id: curr.id,
      value: curr.label
    }));

  const provideKeys = (items = []) => items.map((curr) => curr.id);
  const filteredAnswers = (items = []) => items.filter((curr) => !!curr.active);

  const getOutput = (options = {}) => (answers = []) => {
    const updatedAnswers = provideKeys(filteredAnswers(answers));
    const id = uuid();
    const code = JSON.stringify([{ type: state.type, value: state.code }]);
    const providedOptions = JSON.stringify(providedKeysCustom(values(options)));
    const providedAnswers = JSON.stringify(updatedAnswers);
    return `"${id}": {
  id: "${id}",
  label: "${state.label}",
  code: ${code},
  options: ${providedOptions},
  answers: ${providedAnswers},
  value: 10,
  components: [],
},`;
  };

  const output = getOutput(options)(answers);

  return (
    <Section title="Question Creator" mt={16} asCustom>
      <SectionContent>
        <Input
          label="Question Label"
          placeholder={`Label`}
          type="text"
          name="label"
          onChange={onChange}
          value={state.label}
          mb={16}
          mt={16}
        />
        <Select
          label="Code Type"
          callback={(item) => handleSelect({ name: 'type', item })}
          options={typeOptions}
          defaultValue={state.type}
        />
        <TextArea
          name="code"
          mt={16}
          label="Code"
          placeholder="Change description.."
          config={inputStyle}
          value={state.code}
          onChange={onChange}
        />
        {values(options) && values(options).length > 0 && (
          <Label mt={16}>Answers</Label>
        )}
        <ListBuilder
          config={listBuilderConfig}
          list={options}
          mt={8}
          callback={handleListCallback}
        />
        <RestButton onClick={onReset}>Reset</RestButton>
        {answers && answers.length > 0 && <Label>Select the answer(s)</Label>}
        <MultiSelect
          mb={8}
          options={answers}
          callback={handleCallback}
          config={{
            labelKey: 'id',
            initialiseAll: false,
            showToggle: false
          }}
        />
        <HighlightView type={`js`} code={output} />
        <CopyValue asButton label={'Copy'} value={output} />
      </SectionContent>
    </Section>
  );
};

export { QuestionCreator };
