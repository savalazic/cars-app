// @flow
import React, { Component } from 'react';

import './TrafficLights.css';

type Props = {
  position: number,
  duration: number,
};

type State = {
  lightActive: string,
};

class TrafficLights extends Component<Props, State> {
  state = {
    lightActive: 'red',
  };

  componentDidMount() {
    const { duration } = this.props;
    this.lightInterval = setInterval(this.changeLight, duration);
  }

  componentWillUnmount() {
    clearInterval(this.lightInterval);
  }

  lightInterval: IntervalID;

  changeLight = () => {
    this.setState(prevState => ({
      lightActive: prevState.lightActive === 'green' ? 'red' : 'green',
    }));
  };

  render() {
    const { position } = this.props;
    const { lightActive } = this.state;

    return (
      <div className="traffic-lights" style={{ left: `${position}%` }}>
        <div className={`red ${lightActive === 'red' ? 'active' : ''}`} />
        <div className={`green ${lightActive === 'green' ? 'active' : ''}`} />
      </div>
    );
  }
}

export default TrafficLights;
