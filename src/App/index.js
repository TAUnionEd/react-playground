import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './Home';
import TableDemo from './TableDemo';

class App extends Component {
  render = () => {
    // TODO: add demo of page requiring permission authentication, like <RouteForAuthenticated>
    return (
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/table-demo" component={TableDemo} />
        <Redirect to="/home" />
      </Switch>
    );
  }
}

// don't use decorators with react https://facebook.github.io/create-react-app/docs/can-i-use-decorators
export default withRouter(
  connect(
    (state) => ({ ...state.app }),
  )(App)
);