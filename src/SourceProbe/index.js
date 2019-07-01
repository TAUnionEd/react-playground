import React, { Component } from 'react';
import './index.css';

class SourceProbe extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
    }
  }

  render = () => {
    return (
      <view className="probe-container">
        <view className="count">{this.state.count}</view>
        <view className="counter" onClick={this.onClickCounter}>Count!</view>
      </view>
    );
  }

  onClickCounter = () => {
    this.setState({ count: this.state.count + 1 })
  }
}

export default SourceProbe;