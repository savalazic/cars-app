// @flow
/* eslint-disable react/no-array-index-key */
import React from 'react';

import './Track.css';

type Props = {
  distance: number,
};

const NUM_PARTS = 10;

const Track = ({ distance }: Props) => (
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
  </div>
);

export default Track;
