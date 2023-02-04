import React from 'react';
import { Container, List, Item } from './StepProgress.styled';

const defaultItems = [
  {
    id: 0,
    label: 'welcome',
    active: true,
  },
  {
    id: 1,
    label: 'assess',
    active: true,
  },
  {
    id: 2,
    label: 'report',
    active: false,
  },
];

const StepProgress = ({ items = [], stage = 0 }) => (
  <Container>
    <List>
      {items.map((item, i) => (
        <Item count={items.length} key={i} isActive={i <= stage}>
          {item.label}
        </Item>
      ))}
    </List>
  </Container>
);

StepProgress.defaultProps = {
  items: defaultItems,
};

export { StepProgress };
