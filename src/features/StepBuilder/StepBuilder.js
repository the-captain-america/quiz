import React, {
  useContext,
  useCallback,
  useState,
  forwardRef,
  useRef,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@common/Icon';
import { Button } from '@common/Button';
import { saveState, loadState } from '@utils/storage';
import { useClickOutside as ClickOutside } from '@hooks/useClickOutside';
import { useKeyboardShortcut } from '@hooks/useKeyboardShortcut';
import { toUpper } from 'ramda';
import { usePortal as Portal } from '@hooks/usePortal';
import { Modal, ModalContent } from '@common/Modal';

import {
  CustomWrapper,
  ControlButton,
  ControlContainer,
  Wrapper,
  Overlay,
  Title,
  Box,
  HeaderRight,
  Header,
  ExpandButton,
  StepperContainer,
  StepperItem,
  RenderContent,
} from './StepBuilder.styled';
import { Provider, Context } from './Provider';
import { Menu } from './Menu';
import { values } from 'ramda';
import { ColorPicker } from './ColorPicker';
import { uuid } from '@utils/id';

const defaultOptions = [
  { id: '1', label: 'red', value: '#E24E33' },
  { id: '2', label: 'orange', value: '#E68A3C' },
  { id: '3', label: 'yellow', value: '#EFCC4C' },
  { id: '4', label: 'teal', value: '#72CEBC' },
  { id: '5', label: 'blue', value: '#5AAFED' },
  { id: '6', label: 'purple', value: '#6E6BEF' },
];
import styled from 'styled-components';

const ModalControls = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 24px;
  padding-bottom: 8px;
`;

const RenderStep = forwardRef(({ options = [], minHeight }, ref) => {
  const [state] = useContext(Context);
  const step = options.find((item) => item.index === state.currentStep);
  const { component: Component } = step;
  return (
    <RenderContent minHeight={minHeight}>
      <div ref={ref}>
        <Component {...step} />
      </div>
    </RenderContent>
  );
});

const onNextKey = ['Shift', 'z'];
const onPreviousKey = ['Shift', 'Tab'];

const Controls = ({ id, maxStep, isActive, variant }) => {
  const [localState, localDispatch] = useContext(Context);
  const { currentStep } = localState;

  const onPrevious = () => localDispatch({ type: 'PREVIOUS' });

  const onNext = () => {
    localDispatch({ type: 'NEXT' });
    saveState({ currentStep: currentStep + 1 }, id);
  };

  const handleKeyboardShortcut = useCallback(
    (keys) => {
      if (!isActive) return;
      if (currentStep >= maxStep - 1) return;
      onNext();
      saveState({ currentStep: currentStep + 1 }, id);
    },
    [isActive, currentStep]
  );

  const handleKeyboardShortcutPrev = useCallback(
    (keys) => {
      if (!isActive) {
        return;
      }

      if (currentStep === 1) {
        onPrevious();
        return;
      }
      if (currentStep < 1) {
        localDispatch({ type: 'SET_STEP', data: maxStep - 1 });
        saveState({ currentStep: maxStep - 1 }, id);
        return;
      }
      onPrevious();
      saveState({ currentStep: currentStep - 1 }, id);
    },

    [isActive, currentStep]
  );

  useKeyboardShortcut(onNextKey, handleKeyboardShortcut);
  useKeyboardShortcut(onPreviousKey, handleKeyboardShortcutPrev);

  useEffect(() => {
    const storageItems = loadState(id);

    if (storageItems && values(storageItems).length) {
      const result = storageItems;

      localDispatch({ type: 'SET_STEP', data: result.currentStep });
    }
  }, []);

  return (
    <ControlContainer variant={variant}>
      {currentStep > 0 && (
        <ControlButton onClick={onPrevious}>
          <Icon
            name="ARROWRIGHT"
            rotate={180}
            fill="white"
            stroke="white"
            size={24}
          />
          Previous
        </ControlButton>
      )}
      {currentStep < maxStep - 1 && (
        <ControlButton onClick={onNext} right>
          Next
          <Icon name="ARROWRIGHT" stroke="white" size={24} />
        </ControlButton>
      )}
    </ControlContainer>
  );
};

const Stepper = ({
  options = [],
  currentStep,
  showNumbers,
  callback = () => {},
}) => {
  const renderOptions = options.map((item, index) => (
    <StepperItem
      key={index}
      showNumbers={showNumbers}
      isActive={item.index === currentStep}
      onClick={() => callback(item)}
    >
      {showNumbers && <span>{index + 1}</span>}
    </StepperItem>
  ));

  return <StepperContainer>{renderOptions}</StepperContainer>;
};

const StepBuilderComponent = ({
  title = '',
  info = '',
  height = 900,
  options = [],
  variant = 'PRIMARY',
  showStep = true,
  callback = () => {},
  id = '',
  ...props
}) => {
  const [isFocused, setFocus] = useState(false);
  const [isExpanded, setExpanded] = useState(false);
  const [activeColor, setActiveColor] = useState('');
  const [localState, localDispatch] = useContext(Context);
  const [modal, setModal] = useState(false);
  const { currentStep } = localState;

  const upperCaseVariant =
    variant && variant.length > 0 ? toUpper(variant) : '';
  const totalSteps = options ? options.length : 0;

  const ref = useRef();
  const wrapperRef = useRef();

  const onExpand = () => {
    setExpanded(!isExpanded);
    callback('IS_EXPANDED');
    onScroll();
  };

  const onScroll = () => {
    if (wrapperRef.current) {
      let position = wrapperRef.current.getBoundingClientRect();
      // scrolls to 10px above element
      const top = position.top + window.scrollY - 10;
      const left = position.left;

      window.scrollTo({
        top,
        left,
        behavior: 'smooth',
      });
    }
  };

  const genericStaveState = (color) => {
    const storageItems = loadState(id);
    if (storageItems && values(storageItems).length) {
      saveState({ ...storageItems, color }, id);
    }
  };

  const onChooseColor = (data) => {
    setActiveColor(data.id);
    genericStaveState(data.color);
  };

  const onFocus = () => setFocus(true);

  const handleClose = () => setFocus(false);

  const foundColor = () => {
    const result = defaultOptions.find((i) => i.id === activeColor);
    if (result) {
      return result.value;
    }
  };

  const onSelectStepper = (data) => {
    localDispatch({ type: 'SET_STEP', data: data.index });
    localDispatch({ type: 'SET_MENU', data: false });

    const storageItems = loadState(id);

    if (storageItems && values(storageItems).length) {
      const localStorageResult = storageItems;
      saveState({ ...localStorageResult, currentStep: data.index }, id);
    }
  };

  useEffect(() => {
    const storageItems = loadState(id);
    if (storageItems && values(storageItems).length) {
      setActiveColor(storageItems.color);
    }
  }, []);

  const onOpenSettings = () => {
    setModal(true);
  };
  const handleCallbackModal = () => {
    setModal(false);
  };

  const localId = uuid();
  return (
    <ClickOutside callback={handleClose}>
      <CustomWrapper
        onClick={onFocus}
        isExpanded={isExpanded}
        ref={wrapperRef}
        {...props}
      >
        {info && (
          <Overlay isActive={info}>
            <Box>{info}</Box>
          </Overlay>
        )}
        <Header variant={upperCaseVariant} bgColor={foundColor()}>
          {title && <Title>{title}</Title>}
          {isFocused && (
            <HeaderRight>
              <Stepper
                id={id}
                currentStep={currentStep}
                callback={onSelectStepper}
                totalSteps={totalSteps}
                options={options}
              />
              <Button mr={16} variant="SMALL" center onClick={onOpenSettings}>
                <Icon name="DOTS" fill="white" size={24} />
              </Button>
              <ExpandButton onClick={onExpand}>
                <Icon
                  name={isExpanded ? 'EXPAND' : 'EXPAND'}
                  size={20}
                  stroke="white"
                />
              </ExpandButton>
            </HeaderRight>
          )}
        </Header>
        <Menu id={id} height={height} title={title} options={options} />
        <Wrapper>
          <RenderStep ref={ref} options={options} />
        </Wrapper>
        <Controls
          id={id}
          isActive={isFocused}
          variant={upperCaseVariant}
          maxStep={totalSteps}
        />
        {modal && (
          <Portal selector={`#step-builder-${localId}`}>
            <Modal
              callback={handleCallbackModal}
              config={{ position: 'absolute' }}
              title="Settings"
            >
              <ModalContent>
                <ColorPicker
                  activeId={activeColor}
                  callback={onChooseColor}
                  options={defaultOptions}
                />
                <ModalControls>
                  <Button variant="primary" label="SAVE" />
                </ModalControls>
              </ModalContent>
            </Modal>
          </Portal>
        )}
        <div id={`step-builder-${localId}`} />
      </CustomWrapper>
    </ClickOutside>
  );
};

const applyIndexByMap = (items = []) =>
  items.map((m, i) => ({ ...m, index: i }));

const StepBuilder = ({ variant, options, ...props }) => {
  const mappedIndexedOptions = applyIndexByMap(values(options));
  const upperCaseVariant =
    variant && variant.length > 0 ? toUpper(variant) : '';

  return (
    <Provider variant={upperCaseVariant}>
      <StepBuilderComponent
        options={mappedIndexedOptions}
        variant={variant}
        {...props}
      />
    </Provider>
  );
};

StepBuilder.propTypes = {
  info: PropTypes.string,
  options: PropTypes.object,
  variant: PropTypes.string,
};

export { StepBuilder };
