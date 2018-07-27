import React from 'react';
import ReactDOM from 'react-dom';
import SkillCards from './skillcards';
import registerServiceWorker from './registerServiceWorker';
// DONE!!! ======== //
ReactDOM.render(<SkillCards />, document.getElementById('root'));
registerServiceWorker();