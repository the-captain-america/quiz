import React from 'react';
import { CopyValue } from '@common/CopyValue';
import { Section, SectionContent } from '@common/Section';
import { Note, NoteProvider } from '@common/Note';
import { StepBuilder } from '@features/StepBuilder';
import { InitialSetup } from './InitialSetup';
import { LocalSetup } from './LocalSetup';
import { SetRepos } from './SetRepos';
import { TestingSetup } from './TestingSetup';
import { Status } from './Status';
import { Notes } from './Notes';

const config = {
  github: {
    url: `https://github.com/qantas-cloud`,
    label: `Github`,
  },
  confluence: {
    url: `https://confluence.qantas.com.au/pages/viewpage.action?spaceKey=ConsiderTech&title=Migration+Status+of+Widgets#MigrationStatusofWidgets-1.(IfwidgetisusedonAEM)CreateanewAEMcomponent`,
    label: `Confluence Migration Flow`,
  },
  liveReference: {
    url: `https://www.qantas.com/au/en.html?tabId=hotels-and-airbnb`,
    label: 'Live Reference',
  },
  migrationSteps: {
    url: 'https://confluence.qantas.com.au/pages/viewpage.action?pageId=94293235',
    label: 'Migrating a widget from Widget Provider to S3 (widget-cli)',
  },
  considerWidget: {
    url: 'https://github.com/qantas-cloud/a974-consider_widgets',
    label: 'Consider Widget (Migration Guide Codebase)',
  },
};

const migrationSteps = {
  initialSetup: {
    id: 'initialSetup',
    label: 'Initial Setup and Planning',
    index: 0,
    component: InitialSetup,
    data: {},
  },
  setRepos: {
    id: 'setRepos',
    label: 'Setup repositories both old and new.',
    index: 1,
    component: SetRepos,
    data: {},
  },
  LocalSetup: {
    id: 'LocalSetup',
    label: 'Local Setup',
    index: 2,
    component: LocalSetup,
    data: {},
  },
  TestingSetup: {
    id: 'TestingSetup',
    label: 'Testing Setup',
    index: 3,
    component: TestingSetup,
    data: {},
  },
  Status: {
    id: 'Status',
    label: 'Status',
    index: 4,
    component: Status,
    data: {},
  },
  Notes: {
    id: 'Notes',
    label: 'Notes',
    index: 5,
    component: Notes,
    data: {},
  },
};

const MigrationBuilder = () => {
  // new https://github.com/qantas-cloud/a974-hotels-web-widget
  // original https://github.com/qantas-cloud/a243-hotels-widget

  return (
    <Section title="Migration Builder" asCustom>
      <SectionContent>
        <NoteProvider>
          <Note
            text={`This is the migration feature.  Use this as a tool to follow along with during the migration process. `}
          />
        </NoteProvider>
        <StepBuilder
          id="migration"
          title="Migration Steps"
          mb={16}
          height={600}
          options={migrationSteps}
        />
      </SectionContent>
      <CopyValue
        mt={12}
        value={config.github.url}
        label={config.github.label}
      />
      <CopyValue
        value={config.confluence.url}
        label={config.confluence.label}
      />
      <CopyValue
        label={config.liveReference.label}
        value={config.liveReference.url}
      />
      <CopyValue
        label={config.migrationSteps.label}
        value={config.migrationSteps.url}
      />
      <CopyValue
        label={config.considerWidget.label}
        value={config.considerWidget.url}
      />
    </Section>
  );
};

MigrationBuilder.defaultProps = {
  title: 'No Verify',
};

export { MigrationBuilder };
