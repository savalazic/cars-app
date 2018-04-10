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
  sortedSpeed: Array<*>,
  selectedCars: Array<Car>,
  trackDistance: number,
  speedLimits: Array<SpeedLimit>,
  trafficLights: Array<TrafficLight>,
  started: boolean,
  raceDuration: string,
};

class App extends Component<*, State> {
  state = {
    isDataLoading: true,
    cars: [],
    sortedSpeed: [],
    selectedCars: [],
    trackDistance: 0,
    speedLimits: [],
    trafficLights: [],
    started: false,
    raceDuration: '1000',
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

  sortCars = (cars: Array<*>) => {
    const sortedCars = cars.map(c => c.speed).sort((a, b) => b - a);
    this.setState({ sortedSpeed: sortedCars });
  };

  handleCarSelect = (car: Car) => {
    this.setState(
      prevState => ({
        selectedCars: [...prevState.selectedCars, car],
      }),
      () => {
        this.sortCars(this.state.selectedCars);
      },
    );
  };

  handleUnselectCar = (car: Car) => {
    const filteredCars = this.state.selectedCars.filter(sc => sc.id !== car.id);
    this.setState({ selectedCars: filteredCars }, () => {
      this.sortCars(this.state.selectedCars);
    });
  };

  handleCarStart = (e: SyntheticInputEvent<>) => {
    e.preventDefault();
    this.setState(prevState => ({
      started: !prevState.started,
    }));
  };

  handleRaceDurationChange = (e: SyntheticInputEvent<>) => {
    this.setState({
      raceDuration: e.target.value,
    });
  };

  render() {
    const {
      cars,
      selectedCars,
      isDataLoading,
      trackDistance,
      speedLimits,
      trafficLights,
      started,
      sortedSpeed,
      raceDuration,
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
            onStart={this.handleCarStart}
            onRaceDurationChange={this.handleRaceDurationChange}
            started={started}
            sortedSpeed={sortedSpeed}
            raceDuration={raceDuration}
          />
        )}
      </div>
    );
  }
}

export default App;
