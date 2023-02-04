import React, { useState, useEffect } from 'react';
import { Input } from '@common/Input';
import { CopyValue, CopyProvider } from '@common/CopyValue';
import { Note, NoteProvider } from '@common/Note';
import styled from 'styled-components';
import { Row, Col } from '@common/Grid';
import { Button } from '@common/Button';
import { Icon } from '@common/Icon';
import { saveState, loadState, clearState } from '@utils/storage';
import { values } from 'ramda';
import { breakdownOnly } from '@features/GitManager/gitUtils';
import { ToggleSwitch } from '@common/ToggleSwitch';
import { Line } from '@common/Line';
import { mtFn } from '@utils/styles';
import { Spinner } from '@common/Spinner';
import { Text } from '@common/Text';

const Container = styled.div``;
const ControlContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  ${mtFn};
  button {
    &:not(:first-child) {
      margin-left: 8px;
    }
  }
`;

const SetRepos = () => {
  const [state, setState] = useState({
    oldUrl: '',
    newUrl: '',
    oldRepo: '',
    newRepo: '',
    branch: '',
    hasSetRemote: false,
    hasCloned: false,
  });

  const onChange = (e) => {
    const { value, name } = e.target;

    setState((state) => ({
      ...state,
      [name]: value,
    }));
  };

  useEffect(() => {
    const storageItems = loadState('migrationData');

    if (storageItems && values(storageItems).length) {
      const result = storageItems;

      setState(result);
    }
  }, []);

  const onChangeToggle = (value) => {
    setState((state) => ({
      ...state,
      hasCloned: value,
    }));
    saveState({ ...state, hasCloned: value }, 'migrationData');
  };

  const onChangeRemote = (value) => {
    setState((state) => ({
      ...state,
      hasSetRemote: value,
    }));
    saveState({ ...state, hasSetRemote: value }, 'migrationData');
  };

  const onSave = () => saveState(state, 'migrationData');
  const onClear = () => clearState('migrationData');

  const getSSH = (value) => {
    const result = `${breakdownOnly(value)('github_qantas')}`;
    return result;
  };

  return (
    <Container>
      <Row>
        <Col xs={6} sm={6}>
          <Note
            icon="INFO"
            text={`Navigate by URL to the needed Github repositories and use those URLS to paste below.`}
          />
          <Input
            mt={16}
            label="Old URL"
            placeholder="Url"
            onChange={onChange}
            value={state.oldUrl}
            name={`oldUrl`}
          />
          <Input
            mt={16}
            label="New URL"
            placeholder="Url"
            onChange={onChange}
            value={state.newUrl}
            name={`newUrl`}
          />
        </Col>

        <Col xs={6} sm={6}>
          <Note
            icon="INFO"
            text={`Navigate to the Github repositories and copy the clone URL: Code -> SSH -> Copy Icon`}
          />
          <Input
            mt={16}
            label="Old Clone Repository"
            placeholder="Url"
            onChange={onChange}
            value={state.oldRepo}
            name={`oldRepo`}
          />
          <Input
            mt={16}
            label="New Clone Repository"
            placeholder="Url"
            onChange={onChange}
            value={state.newRepo}
            name={`newRepo`}
          />
        </Col>
      </Row>

      <ControlContainer mt={16}>
        <Button variant="error" label="Clear" onClick={onClear}>
          <Icon name="TRASH" size={20} stroke="white" />
        </Button>
        <Button label="Save" variant="primary" onClick={onSave}>
          <Icon name="SAVE" size={20} stroke="white" />
        </Button>
      </ControlContainer>

      <Line mt={16} mb={8} />

      <CopyProvider mt={16}>
        {state.oldUrl && <CopyValue label={'Old Url'} value={state.oldUrl} />}
        {state.newUrl && <CopyValue label={'New Url'} value={state.newUrl} />}
        {state.oldRepo && (
          <CopyValue label={'Old Repo'} value={state.oldRepo} />
        )}
        {state.newRepo && (
          <CopyValue label={'New Repo'} value={state.newRepo} />
        )}
      </CopyProvider>

      {state.oldRepo && state.newRepo && (
        <Row>
          <Col xs={12} sm={12}>
            <Note
              icon="INFO"
              text={`Clone the <new-repo> into your local machine.`}
            />
            <CopyProvider mt={16}>
              <CopyValue
                label={'Clone URL'}
                value={`git clone ${getSSH(state.newRepo)}`}
              />
            </CopyProvider>
            <ToggleSwitch
              label="Have you cloned and cd'd into that new-repo?"
              options={{
                yes: 'Yes',
                no: 'No',
              }}
              isActive={state.hasCloned}
              onChange={onChangeToggle}
              mt={16}
              mb={8}
            />
            {state.hasCloned && (
              <>
                <Line mt={16} />
                <Note
                  mt={16}
                  icon="INFO"
                  text={`Next, you will need to perform a command which will make the
                  remote repository in state with the old repository. Use the command below to perform this task.`}
                ></Note>
                <CopyProvider mt={16}>
                  <CopyValue
                    label={'Command'}
                    value={`git remote add old-repo ${getSSH(state.oldRepo)}`}
                  />
                  <CopyValue
                    label={'Feth tags'}
                    value={`git fetch old-repo --tags`}
                  />
                </CopyProvider>
              </>
            )}
          </Col>

          <Col>
            <ToggleSwitch
              label="Have you set the remote?"
              options={{
                yes: 'Yes',
                no: 'No',
              }}
              isActive={state.hasSetRemote}
              onChange={onChangeRemote}
              mt={16}
              mb={8}
            />
            {state.hasCloned && state.hasSetRemote && (
              <div>
                <NoteProvider mt={16}>
                  <Note
                    icon="INFO"
                    text={`You will need to create a feature branch on the <new repo>`}
                  />
                </NoteProvider>
                <CopyProvider mt={16}>
                  <CopyValue
                    label={'Checkout branch'}
                    value={`git checkout -b feature/migration`}
                  />
                </CopyProvider>

                <Row>
                  <Col xs={6}>
                    <Note
                      icon="INFO"
                      text={`Find the branch within the <old-repo> that will be used to merge histories with.`}
                    />
                    <Input
                      mt={16}
                      label="Branch to merge"
                      placeholder="ie: feature/migration"
                      onChange={onChange}
                      value={state.branch}
                      name={`branch`}
                    />
                    <Button
                      label={'Save'}
                      variant="tertiary"
                      mt={16}
                      config={{ layout: { maxWidth: '100px' } }}
                      onClick={onSave}
                    >
                      <Icon name="SAVE" size={20} stroke="white" />
                    </Button>
                  </Col>
                </Row>

                <CopyProvider mt={16}>
                  <Note
                    icon="INFO"
                    text={`Open the <new-repo> and perform the following commands.`}
                  />
                  {state.branch && (
                    <CopyValue
                      label={'Merge histories'}
                      value={`git merge --allow-unrelated-histories old-repo/${
                        state.branch || ''
                      }`}
                    />
                  )}
                  <CopyValue
                    label={'Remove remote reference'}
                    value={`git remote remove old-repo`}
                  />
                  <CopyValue
                    label={'Push changes'}
                    value={`git push origin head`}
                  />
                </CopyProvider>
              </div>
            )}
          </Col>
        </Row>
      )}
    </Container>
  );
};

export { SetRepos };
