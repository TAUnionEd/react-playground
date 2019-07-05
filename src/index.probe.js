import React from 'react';
import ReactDOM from 'react-dom';

import SourceProbe from './SourceProbe';

// class SourceProbe extends React.Component {
//   render() {
//     return <div id="root">Rua!</div>
//   }
// }

const SourceProbeElement = React.createElement(SourceProbe)
const rootContainer = document.getElementById('app');
ReactDOM.render(SourceProbeElement, rootContainer);