// @flow
import React from 'react';
import { type Car } from '../../types';
import Card from '../Card';
import './CardList.css';

type Props = {
  cars: Array<Car>,
};

const CardList = ({ cars }: Props) => (
  <div className="card-list">
    {cars.map(car => <Card key={car.id} content={car} />)}
  </div>
);

export default CardList;
