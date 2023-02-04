import React, { useState, useEffect } from 'react';
import { CopyValue, CopyProvider } from '@common/CopyValue';
import { Note, NoteProvider } from '@common/Note';
import styled from 'styled-components';
import { TextArea } from '@common/TextArea';
import { Col, Row } from '@common/Grid';
import { Checkbox } from '@common/Checkbox';
import { ControlContainer } from '@common/Controls';
import { Line } from '@common/Line';
import { Button } from '@common/Button';
import { Icon } from '@common/Icon';
import { values } from 'ramda';

import { saveState, loadState, clearState } from '@utils/storage';
import { Toggle } from '@common/Toggle';
import { StateView } from '@common/StateView';

const Container = styled.div``;

const getAllKeys = (state) =>
  Object.entries(state).reduce((prev, [key, value]) => {
    const item = {
      [key]: '',
    };
    return { ...prev, ...item };
  }, {});

const generateConfig = (config = {}, widgetProviderEnv = '') => {
  const widgetEnvVars =
    config.cdEnvironments && config.cdEnvironments[widgetProviderEnv];
  let configCopy = { ...config };
  if (widgetEnvVars) {
    configCopy = { ...config, ...widgetEnvVars };
  }
  // console.log({ hasWidgetEnvVars: configCopy });
  delete configCopy.cdEnvironments;
  return configCopy;
};

// console.log({
//   config: generateConfig(
//     {
//       cdEnvironments: { production: 'production' },
//     },
//     'production'
//   ),
// });

const Status = () => {
  const [state, setState] = useState({
    one: '',
    two: '',
    three: '',
    four: '',
    five: '',
    six: '',
    seven: '',
    eight: '',
    nine: '',
    ten: '',
    eleven: '',
    twelve: '',
  });

  const onSave = () => saveState(state, 'MigrationBuilder.Status');

  useEffect(() => {
    const storageItems = loadState('MigrationBuilder.Status');
    if (storageItems && values(storageItems).length) {
      const result = storageItems;
      setState(result);
    }
  }, []);

  const onSelect = (key, value) => {
    setState((state) => ({
      ...state,
      [key]: value,
    }));
  };

  const onClear = () => {
    const resetAllKeys = getAllKeys(state);
    setState(resetAllKeys);
    clearState('Migrationbuilder.Status');
  };

  return (
    <Container>
      <NoteProvider>
        <Note text={`Status of migration`} />
      </NoteProvider>
      <Checkbox
        name={'one'}
        mt={16}
        callback={(value) => onSelect('one', value ? true : false)}
        value={state.one}
      >
        Installed Node Modules
      </Checkbox>
      <Checkbox
        name={'two'}
        mt={16}
        callback={(value) => onSelect('two', value ? true : false)}
        value={state.two}
      >
        Installed @qantas/widget-cli @3.6.1
      </Checkbox>
      <Checkbox
        name={'three'}
        mt={16}
        callback={(value) => onSelect('three', value ? true : false)}
        value={state.three}
      >
        Temp move all source files outside of root src directory in preparation
        for temp loading of successful app.
      </Checkbox>
      <Checkbox
        name={'four'}
        mt={16}
        callback={(value) => onSelect('four', value ? true : false)}
        value={state.four}
      >
        Move .scss files in to `/styles` directory
      </Checkbox>
      <Checkbox
        name={'five'}
        mt={16}
        callback={(value) => onSelect('five', value ? true : false)}
        value={state.five}
      >
        Create state directory and add `configureStore.js` from
        hotels-web-widget as example. and place within new directory titled
        `state`
      </Checkbox>
      <Checkbox
        name={'six'}
        mt={16}
        callback={(value) => onSelect('six', value ? true : false)}
        value={state.six}
      >
        Create initial reducer file titled: `InitialReducer` within
        `../Reducer/InitialReducer` (This will become the main root reducer
        component)
      </Checkbox>
      <Checkbox
        name={'seven'}
        mt={16}
        callback={(value) => onSelect('seven', value ? true : false)}
        value={state.seven}
      >
        Create named file titled by the name of the widget, in this case
        `GiftVouchersWidget`
      </Checkbox>
      <Checkbox
        name={'eight'}
        mt={16}
        callback={(value) => onSelect('eight', value ? true : false)}
        value={state.eight}
      >
        Run application with added files for `component, containers and i18n`.
        Runs succesfully with no errors only one warning.
      </Checkbox>
      <Checkbox
        name={'nine'}
        mt={16}
        callback={(value) => onSelect('nine', value ? true : false)}
        value={state.nine}
      >
        Resolve config.js not being passed through to the provider / redux
        store. Redux Devtools does not work.
      </Checkbox>
      <Checkbox
        name={'ten'}
        mt={16}
        callback={(value) => onSelect('ten', value ? true : false)}
        value={state.ten}
      >
        Review style differences between original and new
      </Checkbox>
      <Checkbox
        name={'eleven'}
        mt={16}
        callback={(value) => onSelect('eleven', value ? true : false)}
        value={state.eleven}
      >
        Begin working on linting and test cases
      </Checkbox>
      <Checkbox
        name={'twelve'}
        mt={16}
        callback={(value) => onSelect('twelve', value ? true : false)}
        value={state.twelve}
      >
        ---
      </Checkbox>
      <Line mt={16} mb={8} />
      <ControlContainer mt={16}>
        <Button variant="error" label="Clear" onClick={onClear}>
          <Icon name="TRASH" size={20} stroke="white" />
        </Button>
        <Button label="Save" variant="primary" onClick={onSave}>
          <Icon ml={4} name="SAVE" size={20} stroke="white" />
        </Button>
      </ControlContainer>
    </Container>
  );
};

export { Status };
