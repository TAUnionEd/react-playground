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
      <div
        key="probe"
        id="probe"
        ref={(ref) => { this.probeRef = ref; }}
        className="probe-container"
        onClick={() => {}}
      >
        Current
        { (() => { return ' Count' })() }
        <div className="count">{this.state.count}</div>
        <div className="counter" onClick={this.onClickCounter}>Count!</div>
        <div className="boxes">
          {
            Array(this.state.count).fill(null).map(() => {
              return <div className="box" />
            })
          }
        </div>
      </div>
    );
  }

  onClickCounter = () => {
    this.setState({ count: this.state.count + 1 })
  }
}

export default SourceProbe;