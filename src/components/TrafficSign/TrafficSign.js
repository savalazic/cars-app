// @flow
import React from 'react';

import './TrafficSign.css';

type Props = {
  speedLimit: number,
  signPosition: number,
};

const TrafficSign = ({ speedLimit, signPosition }: Props) => (
  <div className="traffic-sign" style={{ left: `${signPosition}%` }}>
    {speedLimit}
  </div>
);

// 22/50*100

export default TrafficSign;
