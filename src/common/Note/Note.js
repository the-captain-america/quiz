import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '@common/Text';
import styled from 'styled-components';
import { mbFn, mtFn } from '@utils/styles';
import { Icon } from '@common/Icon';

const NoteContainer = styled.div`
  width: 100%;
  padding: 14px;
  border: 1px solid #e78589;
  border: 1px solid #373639;
  border-radius: 6px;
  background: #3d3c40;
  ${mbFn};
  ${mtFn};
  display: flex;
  flex-direction: column;
`;

const IconContainer = styled.div`
  display: flex;
  margin: 0;
  height: 20px;
  width: 20px;
  justify-content: center;
  align-items: center;
  flex-basis: 20px;
  margin-right: 8px;
  margin-top: 4px;
`;

const NoteContent = styled.div`
  ${mbFn};
  ${mtFn};
`;

const NoteGroup = styled.div`
  display: flex;
  flex-direction: row;
`;

const Note = ({ text, children, color = '#95929e', icon = 'INFO', mt, mb }) => {
  const renderIcon = () => {
    if (!icon || icon.length <= 0) return null;
    return (
      <IconContainer>
        <Icon name={icon} size={20} />
      </IconContainer>
    );
  };

  return (
    <NoteContainer mb={mb} mt={mt} className={`Note__Item`}>
      {text && (
        <NoteGroup>
          {renderIcon()}
          <Text
            variant="p"
            style={{ display: 'inline-block' }}
            weight={300}
            color={color}
            lineHeight={26}
            size={16}
          >
            {text}
          </Text>
        </NoteGroup>
      )}
      {children && (
        <>
          <NoteContent mt={text && text.length > 0 ? 16 : 0}>
            {children}
          </NoteContent>
        </>
      )}
    </NoteContainer>
  );
};

Note.propTypes = {
  content: PropTypes.node,
};
export { Note };
