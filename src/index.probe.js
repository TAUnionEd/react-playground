import React from 'react';
import ReactDOM from 'react-dom';

import SourceProbe from './SourceProbe';

const init = async () => {
  const SourceProbeElemet = React.createElement(SourceProbe)
  const rootContainer = document.getElementById('app');
  ReactDOM.render(SourceProbeElemet, rootContainer);
};

init();