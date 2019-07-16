import React, { Component } from 'react';
import './index.css';

class SourceProbe extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 1,
    }
  }

  render = () => {
    return (
      <div className="probe-container">
      Current Count
      <div className="count" onClick={this.onClickCount}>{this.state.count}</div>
      <div className="counter" onClick={this.onClickCounter}>Count!</div>
        <div className="boxes">
          {this.renderBoxes()}
        </div>
      </div>
    );
  }

  renderBoxes = () => {
    return Array(this.state.count * 200).fill(null).map((item, index) => {
      return <div key={index} className="box">{index}</div>
    })
  }

  onClickCount = () => {
    this.setState(
      (state) => { return { count: state.count + 1 } },
    );
    this.setState((state) => { return { count: state.count + 1 } });
    this.setState((state) => { return { count: state.count + 1 } });
  }

  onClickCounter = () => {
    // this.setState({ count: this.state.count + 1 });
    // this.setState({ count: this.state.count + 1 });
    // this.setState({ count: this.state.count + 1 });

    setTimeout(() => {
      this.setState({ count: this.state.count + 1 });
      this.setState({ count: this.state.count + 1 });
      this.setState({ count: this.state.count + 1 });
    }, 500);

    // this.setState(
    //   (state) => { return { count: state.count + 1 } },
    //   () => { console.log('updateA') },
    // );
    // this.setState((state) => { return { count: state.count + 1 } });
    // this.setState((state) => { return { count: state.count + 1 } });
  }
}

export default SourceProbe;