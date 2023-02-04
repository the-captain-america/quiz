import React, { useState, useEffect } from 'react';
import {
  ListItem,
  List,
  ChoiceLabel,
  Text,
  Check,
  ChoiceContainer,
} from './Choice.styled';

const Choice = ({
  callback: callbackProp = () => {},
  dimension = '',
  id = '',
  label = 'Question:',
  isReverse = false,
}) => {
  const [value, setValue] = useState('');
  const [selected, setSelected] = useState(null);
  const [localOptions, setLocalOptions] = useState([
    { id: 0, label: 'Strongly Agree', value: 0 },
    { id: 1, label: 'Agree', value: 1 },
    { id: 2, label: 'Disagree', value: 2 },
    { id: 3, label: 'Strongly Disagree', value: 3 },
  ]);

  useEffect(() => {
    if (isReverse) {
      const reverseIt = localOptions.slice().reverse();
      setLocalOptions(reverseIt);
    }
    // eslint-disable-next-line
  }, [isReverse]);

  const onSelect = (item) => {
    setSelected(item?.id);
    setValue(item?.value);
    callbackProp(item);
  };

  const renderChoices = () => {
    if (localOptions.length <= 0) {
      return <></>;
    }
    return (
      <List>
        {localOptions.map((item, index) => (
          <ListItem
            key={index}
            asOption
            isActive={selected === item?.id}
            onClick={() => onSelect(item)}
          >
            <Text center>{item?.label}</Text>
            {selected === item?.id && <Check />}
          </ListItem>
        ))}
      </List>
    );
  };
  return (
    <ChoiceContainer>
      <ChoiceLabel>
        <strong>{id + 1}</strong> {label}
        <strong style={{ display: 'none' }}>{dimension}</strong>
      </ChoiceLabel>
      {renderChoices()}
    </ChoiceContainer>
  );
};

export { Choice };
