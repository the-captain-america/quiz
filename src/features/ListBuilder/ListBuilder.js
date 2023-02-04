import React, { useState, useEffect, useRef } from 'react';
import { ColorPicker } from '@common/ColorPicker';
import { Button } from '@common/Button';
import { prop, values, dissoc } from 'ramda';
import { uuid } from '@utils/id';
import { Input } from '@common/Input';
import { Icon } from '@common/Icon';
import { Calendar } from '@common/Calendar';
import { format } from 'date-fns/fp';
import {
  FormGroup,
  CategoryGroup,
  Item,
  ListId,
  Label,
  ListControls,
  Remove,
  InputGroup,
  Swatch,
} from './ListBuilder.styled';

const initialState = {
  swatchId: '',
  swatch: '',
};

const defaultList = {
  ENTERTAINMENT: {
    id: 'ENTERTAINMENT',
    name: 'Entertainment',
    swatch: '#6ce0bd',
  },
};

const ListBuilder = ({
  callback = () => {},
  config = {},
  list = {},
  mb,
  mt,
}) => {
  const {
    label = '',
    hasColourPicker = false,
    hasDatePicker = false,
    showLabel = false,
    showAddButton = false,
  } = config;

  const [state, setState] = useState(initialState);
  const [name, setName] = useState('');
  const [date, setDate] = useState(format('yyyy-MM-dd')(new Date()));
  const [focus, setFocus] = useState(false);

  const items = values(list);
  console.log(items);

  const ref = useRef(null);

  const onFocus = () => {
    if (ref.current) {
      ref.current.focus();
      setFocus(true);
    }
  };

  const handleColorCallback = (data) => {
    const swatchId = prop('id')(data);
    const swatch = prop('value')(data);

    setState((state) => ({ ...state, swatchId, swatch }));
  };

  const handleCalendarCallback = (data) => {
    setDate(data);
  };

  const onLocalRemove = (id) => {
    const removedById = dissoc(id, list);
    callback({ type: 'REMOVE', data: removedById });
  };

  const clearField = () => {
    setName('');
  };

  const onLocalAdd = () => {
    if (!name || name.length <= 0) {
      console.warn('No name provided.');
      return;
    }

    // check to see if any other object has same index...
    console.warn('Name has been provided.');

    const id = uuid();
    const data = {
      id,
      name,
      value: name,
      label: name,
    };

    callback({ type: 'ADD', data });
    clearField();
  };

  const onChange = (e) => {
    const { value } = e.target;
    setName(value);
  };

  const onEnter = (e) => {
    if (e.keyCode === 13) {
      onLocalAdd(name);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onEnter, false);
    return () => {
      document.removeEventListener('keydown', onEnter, false);
    };
    // eslint-disable-next-line
  }, [name]);

  const renderCategories = (items = []) => {
    if (!items || items.length <= 0) return null;
    const results = items.map((item) => (
      <Item key={item.id}>
        <ListId>{prop('id')(item)}.</ListId>
        <Label>{prop('name')(item) || prop('label')(item)}</Label>
        <ListControls>
          {hasColourPicker && <Swatch bgColor={item.swatch} />}
          <Remove onClick={() => onLocalRemove(item.id)}>
            <Icon name="TRASH" stroke="#84828D" size={20} />
          </Remove>
        </ListControls>
      </Item>
    ));
    return (
      <>
        {label && showLabel && <Label>{label}</Label>}
        <CategoryGroup>{results}</CategoryGroup>
      </>
    );
  };

  const renderCreateCategory = (
    <>
      <InputGroup>
        <Input
          label={label}
          variant="tertiary"
          ref={ref}
          mt={16}
          placeholder="Detail.."
          value={name}
          onChange={onChange}
        />
      </InputGroup>
      {hasColourPicker && (
        <ColorPicker activeId={state.swatchId} callback={handleColorCallback} />
      )}
      {hasDatePicker && (
        <Calendar
          mt={16}
          value={date}
          withFormat
          callback={handleCalendarCallback}
        />
      )}
      {showAddButton && (
        <Button
          label="Add"
          config={{ layout: { maxWidth: '100px' } }}
          onClick={onLocalAdd}
          center
          mt={16}
        >
          <Icon ml={6} name="PLUS" stroke="white" size={20} />
        </Button>
      )}
    </>
  );

  return (
    <FormGroup mt={mt} mb={mb} onClick={onFocus}>
      {renderCategories(items)}
      {renderCreateCategory}
    </FormGroup>
  );
};

ListBuilder.defaultProps = {
  list: defaultList,
  config: {
    showLabel: false,
    hasColourPicker: false,
    showAddButton: false,
    mt: 0,
    mb: 0,
  },
};

export { ListBuilder };
