import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { prop } from 'ramda';
import { Icon } from '@common/Icon';
import { NoteProvider, Note } from '@common/Note';

const list = [
  `This version of react does not support "<Fragment />" - "react": "^15.5.3",`,
  `Enzyme Adapter will be needed when React is updated to 16+`,
  `In order to learn more about the package versions / conflict resolution, I need a way to easily navigate through the codebase either it be the project itselt or node_modules to find the package versions.  First step, use the Warp applciation "Applications > Warp", next navigate to the directory I want to perform the work on ie: "captain > work > a974-gift-vouchers-web-widget", next open the "node_modules" directory and then use the "cmd + f" to find the pacakge in question. Next, use the "code ." command to open vscode with that directory opened.`,
];

const Notes = ({ ...props }) => {
  const [state, setState] = useState({});

  return (
    <NoteProvider>
      <Note text={list[0]} />
      <Note text={list[1]} />
      <Note text={list[2]} />
    </NoteProvider>
  );
};

export { Notes };
