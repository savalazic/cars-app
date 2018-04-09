// @flow
import React, { Component } from 'react';
import type { Car, Data } from '../../types';
import { getCars } from '../../api/carApi';

import './App.css';

import CardList from '../CardList';

type State = {
  cars: Array<Car>,
};

class App extends Component<*, State> {
  state = {
    cars: [],
  };

  componentDidMount() {
    // $FlowFixMe
    getCars().then((data: Data) => {
      this.setState({ cars: data.cars });
    });
  }

  render() {
    const { cars } = this.state;

    if (!cars.length) {
      return <div>Loading</div>;
    }

    return <div className="App">{cars && <CardList cars={cars} />}</div>;
  }
}

export default App;
