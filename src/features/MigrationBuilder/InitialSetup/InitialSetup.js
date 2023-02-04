import React, { useEffect, useState } from 'react';
import { CopyValue, CopyProvider } from '@common/CopyValue';
import { Note, NoteProvider } from '@common/Note';
import styled from 'styled-components';

import Typical from 'react-typical';

const Container = styled.div``;

const InitialSetup = () => {
  return (
    <Container>
      <NoteProvider>
        <Note
          text={`First step is to layout the major links which pave the way forward in what needs to be accomplished. `}
        />
        <Note
          text={`Next, be sure to have the confluence documentation visible in a separate browser window.`}
        />
        <Note
          text={`Determine in the repository in need of migration has already been migrated to github.  In order to validate this, open the github project and check the "/platform" directory and also check to see the "/github/workflows" has a "qcp-ci.yml" file that looks similar to prevous migrated applications (ie Customer Care Forms).`}
        />
        <Note
          text={`If you are in doubt of which github project which needs to be migrated, use the link below titled "Migration Widget Status" which should list out the repository status.`}
        />
        <Note
          text={`Continued.  First, open the <old-repo> repository from github provided the links below.  The url might look similar to this: "git@github.com:prodigy-returns/old-repo.git" Copy the SSH clone url and open the local feature inside "get-swifty" named: "Git SSH Selector" and in the "Copied Clone Url" input field, enter the copied url. `}
        />
      </NoteProvider>

      <CopyProvider>
        <CopyValue
          label={'Link to repository'}
          value={`https://github.com/qantas-cloud`}
        />
        <CopyValue
          label={'Migration Widget Status'}
          value={`https://confluence.qantas.com.au/display/ConsiderTech/Migration+Status+of+Widgets`}
        />
        <CopyValue
          label={'Migrating a widget from Widget Provider to S3 (widget-cli)'}
          value={`https://confluence.qantas.com.au/pages/viewpage.action?pageId=94293235`}
        />
      </CopyProvider>
    </Container>
  );
};

export { InitialSetup };
