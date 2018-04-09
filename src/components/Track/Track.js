// @flow
import React from 'react';

import './Track.css';

type Props = {
  distance: number,
};

const Track = ({ distance }: Props) => (
  <div className="track" style={{ maxWidth: `calc(${distance}px * 100)` }}>
    <h2>{distance} km</h2>
  </div>
);

export default Track;
