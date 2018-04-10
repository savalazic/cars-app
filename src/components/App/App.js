// @flow
import React, { Component } from 'react';
import intersection from 'lodash/intersection';
import type { Car, Data, SpeedLimit, TrafficLight } from '../../types';
import { getCars } from '../../api/carApi';

import './App.css';

import CardList from '../CardList';
import CardListFilter from '../CardListFilter';
import Track from '../Track';

type State = {
  isDataLoading: boolean,
  cars: Array<Car>,
  selectedCars: Array<Car>,
  trackDistance: number,
  speedLimits: Array<SpeedLimit>,
  trafficLights: Array<TrafficLight>,
};

class App extends Component<*, State> {
  state = {
    isDataLoading: true,
    cars: [],
    selectedCars: [],
    trackDistance: 0,
    speedLimits: [],
    trafficLights: [],
  };

  componentDidMount() {
    // $FlowFixMe
    getCars().then((data: Data) => {
      this.setState({
        isDataLoading: false,
        cars: data.cars,
        trackDistance: data.distance,
        speedLimits: data.speed_limits,
        trafficLights: data.traffic_lights,
      });
    });
  }

  handleCarSelect = (car: Car) => {
    this.setState(prevState => ({
      selectedCars: [...prevState.selectedCars, car],
    }));
  };

  handleUnselectCar = (car: Car) => {
    const filteredCars = this.state.selectedCars.filter(sc => sc.id !== car.id);
    this.setState({ selectedCars: filteredCars });
  };

  render() {
    const {
      cars,
      selectedCars,
      isDataLoading,
      trackDistance,
      speedLimits,
      trafficLights,
    } = this.state;

    if (isDataLoading) {
      return <div>Loading data..</div>;
    }

    return (
      <div className="App">
        <CardListFilter cards={cars}>
          <CardList
            selectCar={this.handleCarSelect}
            unselectCar={this.handleUnselectCar}
          />
        </CardListFilter>
        {selectedCars.length > 0 && (
          <Track
            distance={trackDistance}
            trafficSigns={speedLimits}
            trafficLights={trafficLights}
            activeTracks={intersection(selectedCars, cars)}
          />
        )}
      </div>
    );
  }
}

export default App;
