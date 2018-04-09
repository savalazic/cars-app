// @flow
import React from 'react';
import { type Car } from '../../types';
import './Card.css';

type Props = {
  content: Car,
};

const Card = ({ content }: Props) => (
  <div className="card-wrapper">
    <div className="card">
      <div className="front">
        <div className="card-title">{content.name}</div>
      </div>
      <div
        className="back"
        style={{ backgroundImage: `url(${content.image})` }}
      >
        <div className="card-description">
          <p>{content.description}</p>
          <p>Max speed: {content.speed} km/h</p>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
