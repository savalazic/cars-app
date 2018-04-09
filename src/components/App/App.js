// @flow
import React, { Component } from 'react';
import type { Car, Data } from '../../types';
import { getCars } from '../../api/carApi';

import './App.css';

import CardList from '../CardList';
import CardListFilter from '../CardListFilter';
import Track from '../Track';

type State = {
  isDataLoading: boolean,
  cars: Array<Car>,
  trackDistance: number,
};

class App extends Component<*, State> {
  state = {
    isDataLoading: true,
    cars: [],
    trackDistance: 0,
  };

  componentDidMount() {
    // $FlowFixMe
    getCars().then((data: Data) => {
      this.setState({
        isDataLoading: false,
        cars: data.cars,
        trackDistance: data.distance,
      });
    });
  }

  render() {
    const { cars, isDataLoading, trackDistance } = this.state;

    if (isDataLoading) {
      return <div>Loading data..</div>;
    }

    return (
      <div className="App">
        <CardListFilter cards={cars}>
          <CardList />
        </CardListFilter>
        <Track distance={trackDistance} />
      </div>
    );
  }
}

export default App;
