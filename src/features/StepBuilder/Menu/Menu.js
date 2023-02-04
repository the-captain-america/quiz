import React, { useContext } from 'react';
import { Icon } from '@common/Icon';
import { values } from 'ramda';
import { Context } from '../Provider';
import { Overlay } from '../StepBuilder.styled';
import {
  MenuContainer,
  MenuContent,
  CloseButton,
  MenuControl,
  MenuTitle,
  MenuButton,
  Group,
  List,
  Item,
} from './Menu.styled';
import { saveState, loadState } from '@utils/storage';

const Menu = ({ id, options = [], title = '', height }) => {
  const [localState, localDispatch] = useContext(Context);
  const { currentStep, menu } = localState;

  const onToggle = () => {
    if (menu) {
      localDispatch({ type: 'SET_MENU', data: false });
      return;
    }
    localDispatch({ type: 'SET_MENU', data: true });
  };

  const onSelect = (item) => {
    localDispatch({ type: 'SET_STEP', data: item.index });
    localDispatch({ type: 'SET_MENU', data: false });

    const storageItems = loadState(id);
    if (storageItems && values(storageItems).length) {
      const result = storageItems;
      saveState({ ...result, currentStep: item.index }, id);
    }
  };

  const renderMenu = () => {
    if (!options.length) return <></>;
    return (
      <Group>
        <List>
          {options.map((item) => (
            <Item
              key={item.id}
              isActive={item.index === currentStep}
              onClick={() => onSelect(item)}
            >
              {item.label && <span>{item.label}</span>}
            </Item>
          ))}
        </List>
      </Group>
    );
  };
  return (
    <>
      <MenuButton onClick={onToggle}>
        <Icon name="FILTER" stroke="white" size={24} />
      </MenuButton>
      <MenuContainer isActive={menu} zIndex={300}>
        <MenuControl>
          <CloseButton onClick={onToggle}>
            <Icon name="CLOSE" size={32} />
          </CloseButton>
          {title && <MenuTitle>{title}</MenuTitle>}
        </MenuControl>
        <MenuContent height={height}>{renderMenu()}</MenuContent>
      </MenuContainer>
      {menu && <Overlay onClick={onToggle} zIndex={200} isActive />}
    </>
  );
};

export { Menu };
