// @flow

export type Car = {
  id: string,
  image: string,
  speed: number,
  name: string,
  description: string,
};

export type SpeedLimit = {
  position: number,
  speed: number,
};

export type TrafficLight = {
  position: number,
  duration: number,
};

export type Data = {
  distance: number,
  cars: Array<Car>,
  speed_limits: Array<SpeedLimit>,
  traffic_lights: Array<TrafficLight>,
};
