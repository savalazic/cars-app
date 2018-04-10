// @flow
import React from 'react';
import { type Car } from '../../types';
import Card from '../Card';
import './CardList.css';

type Props = {
  cars: Array<Car>,
  selectCar: () => void,
  unselectCar: () => void,
};

const CardList = ({ cars, selectCar, unselectCar }: Props) => (
  <div className="card-list">
    {cars.map(car => (
      <Card
        key={car.id}
        selectCar={selectCar}
        unselectCar={unselectCar}
        content={car}
      />
    ))}
  </div>
);

export default CardList;
