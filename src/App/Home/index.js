import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from './state';

class Home extends Component {
  render = () => {
    return (
      <h2>HomePage</h2>
    );
  }
}

export default withRouter(
  connect(
    (state) => ({ ...state.app }),
    actions
  )(Home)
);