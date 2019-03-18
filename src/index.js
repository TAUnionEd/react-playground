import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// 'react-router-dom' vs 'react-router' ? A: https://github.com/ReactTraining/react-router/issues/4648#issuecomment-284479720
import { HashRouter } from 'react-router-dom';
// TODO: how about 'connected-react-router' ?
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducer';

import App from './App';

const init = async () => {
  // TODO: add redux dev tools https://github.com/zalmoxisus/redux-devtools-extension
  const store = createStore(reducer, {}, compose(applyMiddleware(thunk)));
  const rootElement = document.getElementById('app');
  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>,
    rootElement
  );
};

init();