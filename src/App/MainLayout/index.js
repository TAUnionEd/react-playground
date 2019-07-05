import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from './state';

class MainLayout extends Component {
  render = () => {
    return (
      <div>
        <h2>MainLayoutPage</h2>
      </div>
    );
  }
}

export default withRouter(
  connect(
    (state) => ({ ...state.mainLayout }),
    actions
  )(MainLayout)
);