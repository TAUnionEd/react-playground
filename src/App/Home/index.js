import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import * as actions from './state';

class Home extends Component {
  render = () => {
    return (
      <view>
        <view className="header">
          <Link to="/home"><h2>HomePage</h2></Link>
          <Link to="/table-demo"><h2>TableDemo</h2></Link>
        </view>
      </view>
    );
  }
}

export default withRouter(
  connect(
    (state) => ({ ...state.home }),
    actions
  )(Home)
);