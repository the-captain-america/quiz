import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Icon } from '@common/Icon';
import { prop, toLower } from 'ramda';

const ColorGroup = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;
  margin-bottom: 16px;
`;

const IconContainer = styled.span`
  margin: 0;
  padding: 0;
  display: flex;
`;

const ColorItem = styled.li`
  border-radius: 50%;
  height: 24px;
  width: 24px;
  padding: 0;
  margin: 0;
  margin: 0px 0 0 8px;
  display: flex;
  align-items: center;
  border: 2px solid #45434a;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  box-shadow: none;
  &:nth-child(1) {
    margin-left: 0px;
  }
  ${(props) =>
    props.bgColor &&
    css`
      background: ${props.bgColor};
    `}
  ${(props) =>
    props.isActive &&
    css`
      border: 2px solid #45434a;
      box-shadow: 0px 0px 0px 2px ${(props) => props.bgColor};
    `}
`;

const ColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ColorLabel = styled.span`
  color: #9e9ba6;
  font-size: 14px;
  display: flex;
  font-weight: 500;
  align-items: center;
`;

const SwatchContainer = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
`;

const defaultOptions = [
  { id: '1', label: 'red', value: '#E24E33' },
  { id: '2', label: 'orange', value: '#E68A3C' },
  { id: '3', label: 'yellow', value: '#EFCC4C' },
  { id: '4', label: 'teal', value: '#72CEBC' },
  { id: '5', label: 'blue', value: '#5AAFED' },
  { id: '6', label: 'purple', value: '#6E6BEF' },
];

const getMachedId = (id) => (options) =>
  options.find(
    (metaItem) =>
      metaItem && prop('id')(metaItem).toLowerCase().includes(toLower(id))
  );

const ColorPicker = ({ activeId, options, callback }) => {
  const [selectedId, setSelectedId] = useState('');

  const handleSelected = (id) => {
    if (selectedId === id) {
      setSelectedId('');
      return;
    }
    setSelectedId(id);
    const data = getMachedId(id)(options);
    callback(data);
  };

  useEffect(() => {
    if (!activeId || activeId.length <= 0) return;
    const hasMatch = getMachedId(activeId)(options);
    if (hasMatch) {
      setSelectedId(activeId);
      callback(hasMatch);
      return;
    } else {
      callback('CLEAR');
      setSelectedId('');
    }

    // eslint-disable-next-line
  }, [activeId]);

  const renderOptions = options.map((item) => (
    <ColorItem
      key={item.label}
      bgColor={item.value}
      isActive={item.id === selectedId}
      onClick={() => handleSelected(item.id)}
    >
      {item.id === selectedId && (
        <IconContainer>
          <Icon name="CHECKMARK" size={20} fill="transparent" stroke={`#000`} />
        </IconContainer>
      )}
    </ColorItem>
  ));

  const renderSwatches = (
    <ColorContainer>
      <ColorGroup>
        <ColorLabel>Color</ColorLabel>
        {renderOptions}
      </ColorGroup>
    </ColorContainer>
  );

  return <SwatchContainer>{renderSwatches}</SwatchContainer>;
};

ColorPicker.defaultProps = {
  options: defaultOptions,
  callback: () => {},
  activeId: '-1',
};

export { ColorPicker };
