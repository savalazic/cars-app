// @flow
import React, { Component } from 'react';
import type { Car, Data } from '../../types';
import { getCars } from '../../api/carApi';

import './App.css';

import CardList from '../CardList';
import CardListFilter from '../CardListFilter';

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

    return (
      <div className="App">
        {cars && (
          <CardListFilter cards={cars}>
            <CardList />
          </CardListFilter>
        )}
      </div>
    );
  }
}

export default App;
