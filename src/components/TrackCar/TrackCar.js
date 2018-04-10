// @flow
import React, { Component } from 'react';

import './TrackCar.css';

type Props = {
  started: boolean,
  image: string,
  speed: number,
  raceDuration: number,
  sortedSpeed: Array<number>,
};

type State = {
  showRank: boolean,
};

class TrackCar extends Component<Props, State> {
  state = { showRank: false };

  componentDidMount() {
    const trackSize = document.querySelector('.track');
    const carSize = document.querySelector('.track-car');
    // $FlowFixMe
    this.trackWidth = trackSize.clientWidth;
    // $FlowFixMe
    this.carWidth = carSize.clientWidth;
  }

  onRaceEnd = () => {
    this.setState({ showRank: true });
  };

  trackWidth: number = 1200;
  carWidth: number = 120;

  checkMedal = (rankPosition: number) => {
    let medalColor;
    switch (rankPosition) {
      case 1:
        medalColor = 'gold';
        break;
      case 2:
        medalColor = 'silver';
        break;
      case 3:
        medalColor = 'saddlebrown';
        break;
      default:
        break;
    }

    return medalColor;
  };

  render() {
    const {
      started, image, speed, sortedSpeed, raceDuration,
    } = this.props;

    const { showRank } = this.state;

    const calculateRaceDuration = raceDuration / speed;
    const rankPosition = sortedSpeed.findIndex(e => e === speed) + 1;

    return (
      <div
        className="track-car"
        style={{
          backgroundImage: `url(${image})`,
          transform: started
            ? `translateX(${this.trackWidth - this.carWidth}px)`
            : '',
          transitionDuration: `${calculateRaceDuration}s`,
        }}
        onTransitionEnd={this.onRaceEnd}
      >
        {showRank && <div className="rank">{rankPosition}</div>}
        {showRank && (
          <div
            style={{ color: this.checkMedal(rankPosition) }}
            className="medal"
          >
            •
          </div>
        )}
      </div>
    );
  }
}

export default TrackCar;
