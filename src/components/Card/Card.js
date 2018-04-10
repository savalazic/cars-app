// @flow
import React from 'react';
import { compose, withState, withHandlers } from 'recompose';
import { type Car } from '../../types';
import './Card.css';

type Props = {
  content: Car,
  toggleSelected: () => void,
  isSelected: boolean,
  selectCar: (Car) => void,
  unselectCar: (Car) => void,
};

const Card = ({
  content,
  toggleSelected,
  selectCar,
  unselectCar,
  isSelected,
}: Props) => (
  <div
    className={`card-wrapper ${isSelected ? 'selected' : ''}`}
    onClick={() => {
      toggleSelected();
      if (!isSelected) {
        selectCar(content);
      } else {
        unselectCar(content);
      }
    }}
  >
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

export default compose(
  withState('isSelected', 'setSelected', false),
  withHandlers({
    toggleSelected: props => () => props.setSelected(!props.isSelected),
  }),
)(Card);
