import React, { useState } from 'react';
import { Input } from '@common/Input';
import { CopyValue } from '@common/CopyValue';
import { ToggleSwitch } from '@common/ToggleSwitch';
import { Section, SectionContent } from '@common/Section';
import { Note } from '@common/Note';
import { StateView } from '@common/StateView';
import styled from 'styled-components';
import { breakdownUrl } from './gitUtils';

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 0px;
  margin-top: 16px;
  color: #95929e;
  font-weight: 500;
`;

const inputStyle = {
  layout: {
    marginTop: '8px',
  },
};

// git@github.com:qantas-cloud/a243-flight-status-widget.git
const GitManager = () => {
  const [qantasAlias, setQantasAlias] = useState('github_qantas');
  const [cloneUrl, setLocalCloneUrl] = useState('');
  const [isQantas, setIsQantas] = useState(true);

  const onChangeCloneUrl = (e) => {
    const { value } = e.target;
    setLocalCloneUrl(value);
  };
  const onChangeQantasAlias = (e) => {
    const { value } = e.target;
    setQantasAlias(value);
  };

  const result = `git clone ${breakdownUrl(cloneUrl)(isQantas)(qantasAlias)}`;

  const onChangeToggle = (value) => {
    setIsQantas(value);
  };

  return (
    <Section title="Git SSH Selector" asCustom>
      <SectionContent>
        <Note
          text={`Use this control in order to identify and adjust the SSH
          configurations on this machine.`}
        >
          <StateView
            state={{
              qantas: {
                Host: `github_qantas`,
                HostName: `github.com`,
                IdentityFile: `~/.ssh/id_rsa_qantas # private key for realname`,
                User: `prodigy-returns`,
              },
              personal: {
                Host: `github.com`,
                HostName: `github.com`,
                IdentityFile: `~/.ssh/id_rsa # private key for realname`,
                User: `the-captain-america`,
              },
            }}
          ></StateView>
        </Note>
        <ToggleSwitch
          asBoolean
          options={{
            qantas: 'Qantas',
            personal: 'Personal',
          }}
          isActive={isQantas}
          onChange={onChangeToggle}
          label="Qantas / Personal"
          mt={8}
          mb={8}
        />
        <Label>SSH Alias</Label>
        <Input
          placeholder="Github SSH Alias"
          config={inputStyle}
          value={qantasAlias}
          spellCheck={false}
          onChange={onChangeQantasAlias}
        />
        <Label>Copied Clone Url</Label>
        <Input
          placeholder="Github Clone SSH Url"
          config={inputStyle}
          value={cloneUrl}
          spellCheck={false}
          onChange={onChangeCloneUrl}
        />
      </SectionContent>
      <CopyValue
        label="View Global Git Credentials"
        value={`git config --list`}
      />
      <CopyValue
        label="View Localised Git Credentials"
        value={`git config --local --list`}
      />
      <CopyValue label="Edit SSH configurations" value={`code ~/.ssh/config`} />
      {result && result.length > 0 && cloneUrl && cloneUrl.length > 0 && (
        <CopyValue label="Clone command" value={result} />
      )}
    </Section>
  );
};

export { GitManager };
