import { createRoot } from 'react-dom/client';
// import { Tutorial } from './features/Tutorial';
import { Questionnaire } from './features/Questionnaire';
// import { MigrationBuilder } from './features/MigrationBuilder';
const vinuElement = document.getElementById('vinu');

const vinu = createRoot(vinuElement);

vinu.render(<Questionnaire />);
