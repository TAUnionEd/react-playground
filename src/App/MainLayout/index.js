import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from './state';

class MainLayout extends Component {
  render = () => {
    return (
      <view>
        <h2>MainLayoutPage</h2>
      </view>
    );
  }
}

export default withRouter(
  connect(
    (state) => ({ ...state.mainLayout }),
    actions
  )(MainLayout)
);