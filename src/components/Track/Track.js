// @flow
/* eslint-disable react/no-array-index-key */
import React from 'react';
import type { SpeedLimit, TrafficLight } from '../../types';

import TrafficSign from '../TrafficSign';
import TrafficLights from '../TrafficLights';
import TrackActions from '../TrackActions';

import './Track.css';

type Props = {
  distance: number,
  trafficSigns: Array<SpeedLimit>,
  trafficLights: Array<TrafficLight>,
  activeTracks: Array<*>,
};

const NUM_PARTS = 10;

const calculatePercentagePosition = (distance: number, position: number) =>
  position / distance * 100; // eslint-disable-line

const Track = ({
  distance,
  activeTracks,
  trafficSigns,
  trafficLights,
}: Props) => (
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
      {activeTracks.map(ac => (
        <div className="track-row" key={ac.id}>
          <div
            className="track-item"
            style={{
              backgroundImage: `url(${ac.image})`,
              position: 'absolute',
            }}
          />
          {[...Array(NUM_PARTS)].map((e, i) => (
            <div
              key={i}
              className="track-column"
              style={{ width: `calc(100% / ${NUM_PARTS})` }}
            />
          ))}
        </div>
      ))}
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
    <TrackActions />
  </div>
);

export default Track;
