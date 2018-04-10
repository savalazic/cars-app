// @flow
/* eslint-disable react/no-array-index-key */
import React from 'react';
import type { SpeedLimit, TrafficLight } from '../../types';
import TrafficSign from '../TrafficSign';
import TrafficLights from '../TrafficLights';

import './Track.css';

type Props = {
  distance: number,
  trafficSigns: Array<SpeedLimit>,
  trafficLights: Array<TrafficLight>,
};

const NUM_PARTS = 10;

const calculatePercentagePosition = (distance: number, position: number) =>
  position / distance * 100; // eslint-disable-line

const Track = ({ distance, trafficSigns, trafficLights }: Props) => (
  <div>
    <h2>{distance} km</h2>
    <h3>1 part of track: {distance / NUM_PARTS} km</h3>
    <div className="indicators">
      {[...Array(NUM_PARTS)].map((e, i) => (
        <div
          className="indicator-item"
          key={i}
          style={{ width: `calc(100% / ${NUM_PARTS})` }}
        >
          {i + 1}xN
        </div>
      ))}
    </div>
    <div className="track">
      <div className="track-row">
        {[...Array(NUM_PARTS)].map((e, i) => (
          <div
            key={i}
            className="track-column"
            style={{ width: `calc(100% / ${NUM_PARTS})` }}
          />
        ))}
      </div>
    </div>
    <div className="track-signs">
      {trafficSigns.map((ts: SpeedLimit) => (
        <TrafficSign
          key={ts.position}
          signPosition={calculatePercentagePosition(distance, ts.position)}
          speedLimit={ts.speed}
        />
      ))}
      {trafficLights.map((tl: TrafficLight) => (
        <TrafficLights
          key={tl.position}
          position={calculatePercentagePosition(distance, tl.position)}
          duration={tl.duration}
        />
      ))}
    </div>
  </div>
);

export default Track;
