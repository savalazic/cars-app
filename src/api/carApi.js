/* eslint-disable import/prefer-default-export */
// @flow
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

function onSuccess(res) {
  return res.json();
}

function onError(err: string) {
  console.log(err);
}

function get(url: string): Promise<*> {
  return fetch(baseUrl + url, {
    method: 'GET',
  }).then(onSuccess, onError);
}

export function getCars() {
  return get('cars');
}
