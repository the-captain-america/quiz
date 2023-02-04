import React from 'react';
import { CopyValue, CopyProvider } from '@common/CopyValue';
import { Note, NoteProvider } from '@common/Note';
import styled from 'styled-components';

const Container = styled.div``;

const LocalSetup = () => {
  return (
    <Container>
      <NoteProvider>
        <Note
          text={`Proceed to copy the link and navigate to the "projects/work" directory inside your command line (using fish). `}
        />
        <Note
          text={`Paste the command and press enter. For example: git clone git@github_qantas:prodigy-returns/new-repo.git`}
        />
        <Note text={`Run the command listed below for "Fetch all"`} />
        <Note text={`Run the command listed below for "Fetch tags"`} />
      </NoteProvider>

      <CopyProvider>
        <CopyValue label={'Fetch all'} value={`git fetch --all`} />
        <CopyValue label={'Fetch tags'} value={`git fetch --tags`} />
      </CopyProvider>
    </Container>
  );
};

export { LocalSetup };
