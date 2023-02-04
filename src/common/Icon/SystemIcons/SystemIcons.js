import React, { useState, useEffect, useCallback } from 'react';

import { useKeyboardShortcut } from '@hooks/useKeyboardShortcut';
import { CopyValue } from '@common/CopyValue';
import { Input } from '@common/Input';

import { Icon, icons } from '@common/Icon';

import { Title, Group, Item, ItemContainer } from '../Icon.styled';

const SystemIcons = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filtered, setFiltered] = useState([]);
  const list = Object.keys(icons);

  const clearSearch = () => setSearchValue('');

  const keysSearch = ['Enter'];

  const handleKeyboardShortcut = useCallback((keys) => {
    clearSearch();
  }, []);

  useKeyboardShortcut(keysSearch, handleKeyboardShortcut);

  useEffect(() => {
    if (!searchValue || searchValue.length <= 0) {
      setFiltered(list);
      return;
    } else if (!list || list.length <= 0) {
      return;
    } else {
      const filteredArray = list.filter((str) => {
        return str.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0;
      });
      setFiltered(filteredArray);
    }
  }, [searchValue]);

  const onChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  if (!list || list.length <= 0) {
    return null;
  }
  return (
    <>
      <div
        style={{
          paddingLeft: '5px',
          paddingRight: '5px',
          display: 'block',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <Input
          icon={<Icon name="SEARCH" size={20} />}
          as="primary"
          placeholder="Search Icon..."
          value={searchValue}
          onChange={onChange}
        />
      </div>

      <Group>
        {filtered.map((item, index) => (
          <Item key={index}>
            <ItemContainer>
              <Title alt={item} title={item}>
                {item}
              </Title>
              <Icon key={index} name={item || ''} size={20} />
              <CopyValue
                config={{
                  button: {
                    justifyContent: 'center',
                    marginLeft: 'unset',
                    alignItems: 'center',
                  },
                  layout: {
                    borderRadius: '6px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden',
                    marginTop: '6px',
                  },
                }}
                asButton
                label={item}
                value={item}
              />
            </ItemContainer>
          </Item>
        ))}
      </Group>
    </>
  );
};

export { SystemIcons };
