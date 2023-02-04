import React, { useRef, useState, useEffect } from 'react';
import { Icon } from '@common/Icon';
import { prop, keys } from 'ramda';
import { useClickOutside as ClickOutside } from '@hooks/useClickOutside';
import { Modal } from '@common/Modal';

import {
  DataButton,
  CopyContainer,
  CopyButton,
  CopyLabel,
  CopyItem,
  IconContainer,
  DotItem,
  DotGroup,
  RevealButton,
  Container,
} from './CopyValue.styled';

import styled, { css, keyframes } from 'styled-components';
import { toLower } from 'ramda';

const options = {
  default: {
    id: 'default',
    fill: '#E24E33',
    stroke: '#D44126',
  },
  high: {
    id: 'high',
    fill: '#E24E33',
    stroke: '#D44126',
  },
  medium: {
    id: 'medium',
    fill: '#E68A3C',
    stroke: '#E68A3C',
  },
  low: {
    id: 'low',
    fill: '#EFCC4C',
    stroke: '#EFCC4C',
  },
  fair: {
    id: 'fair',
    fill: '#72CEBC',
    stroke: '#72CEBC',
  },
  light: {
    id: 'light',
    fill: '#5AAFED',
    stroke: '#5AAFED',
  },
  welcome: {
    id: 'welcome',
    fill: '#6E6BEF',
    stroke: '#6E6BEF',
  },
};

const pulseBorder = keyframes`
  0% {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
    opacity: 1;
  }

  100% {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
    opacity: .4;
  }
`;

const PriorityItem = styled.div`
  position: relative;
  display: flex;
  width: 15px;
  height: 15px;
  min-height: 15px;
  min-width: 15px;
  max-height: 15px;
  max-width: 15px;
  border-radius: 50%;
  border: none;
  transition: all 0.2s ease-in-out;
  ${(props) =>
    props.bgColor &&
    css`
      background: ${props.bgColor};
    `}
  position: relative;
  margin-left: 22px;
`;

const Priority = ({ variant }) => {
  const foundVariant =
    variant && variant.length > 0 ? toLower(variant) : 'default';
  return (
    <PriorityItem
      key={options[foundVariant].id}
      variant={options[foundVariant].id}
      bgColor={options[foundVariant].fill}
    />
  );
};

const CopyText = ({
  isHidden = false,
  isLocalHidden,
  value = '',
  data = {},
  onDetailCallback = () => {},
  onRevealCallback = () => {},
  maxWidth,
}) => {
  const hasData = data && keys(data).length > 0;
  const handleDetail = (e) => {
    e.stopPropagation();
    onDetailCallback();
  };
  if (isHidden && isLocalHidden) {
    const valueLength = value && value.length > 0 ? value.length : 3;
    const mapValues = [...Array(valueLength).keys()].map((item) => (
      <DotItem key={item} />
    ));
    return (
      <>
        <DotGroup className="DotGroup">{mapValues}</DotGroup>
        <RevealButton onClick={onRevealCallback}>Reveal</RevealButton>
        {hasData && (
          <DataButton onClick={handleDetail}>
            <Icon name="DETAILS" stroke="black" size={20} />
          </DataButton>
        )}
      </>
    );
  }
  return (
    <>
      <CopyItem maxWidth={maxWidth}>{value}</CopyItem>{' '}
      {isHidden && !isLocalHidden && (
        <RevealButton onClick={onRevealCallback}>Hide</RevealButton>
      )}
    </>
  );
};

const CopyValue = ({
  value,
  id,
  priority,
  config = {},
  isHidden,
  label,
  className,
  callback,
  onCallback,
  asButton,
  data,
  ...props
}) => {
  const copyRef = useRef(null);
  const [showChecked, setShowChecked] = useState(false);
  const [localHidden, setLocalHidden] = useState(isHidden);
  const [modal, setModal] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [itemWidth, setWidth] = useState(0);
  const textAreaRef = useRef(null);

  const layoutStyle = prop('layout')(config);
  const buttonStyle = prop('button')(config);

  const copyToClipboard = (e) => {
    textAreaRef.current.select();
    document.execCommand('copy');
    e.target.focus();
    setCopySuccess(true);
    setShowChecked(true);
    onCallback(id);
  };

  const handleClose = () => {
    setCopySuccess(false);
    setShowChecked(false);
    onCallback(id);
  };

  useEffect(() => {
    if (copyRef.current) {
      setWidth(copyRef.current.clientWidth);
    }
  }, []);

  const renderCopy = () => {
    const queryCommand = document.queryCommandSupported('copy');
    if (!queryCommand) return null;
    return (
      <CopyButton
        ref={copyRef}
        style={buttonStyle}
        isActive={copySuccess}
        onClick={copyToClipboard}
        className={`Button__Item ${copySuccess ? 'active' : ''}`}
      >
        {asButton && <CopyLabel maxWidth>{label}</CopyLabel>}
        {label && !asButton && <CopyLabel maxWidth>{label}</CopyLabel>}
        {value && !asButton && (
          <>
            <CopyText
              maxWidth={itemWidth > 0 && itemWidth}
              isHidden={isHidden}
              isLocalHidden={localHidden}
              value={value}
              onRevealCallback={() => setLocalHidden(!localHidden)}
              onDetailCallback={() => setModal(true)}
            />
            {priority && <Priority variant={priority} />}
          </>
        )}
        <IconContainer className="IconContainer">
          {showChecked ? (
            <Icon name="CHECKMARK" size={20} />
          ) : (
            <Icon name="COPY" size={20} />
          )}
        </IconContainer>
      </CopyButton>
    );
  };

  return (
    <ClickOutside callback={handleClose} className={`Copy__Item ${className}`}>
      <Container style={layoutStyle} {...props}>
        <CopyContainer>{renderCopy()}</CopyContainer>
        <form>
          <textarea readOnly ref={textAreaRef} value={value} />
        </form>
        {modal && data && data.title && <Modal>{data.title}</Modal>}
      </Container>
    </ClickOutside>
  );
};

CopyValue.defaultProps = {
  className: 'copy',
  isHidden: false,
  id: '',
  label: '',
  callback: () => {},
  onCallback: () => {},
  value: '',
};

export { CopyValue };
