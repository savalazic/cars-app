const cloneArray = arr => arr.map(i => i);

export const findMax3 = arr =>
  cloneArray(arr)
    .sort((a, b) => b - a)
    .slice(0, 3);

export const isInArray = (value, array) => array.indexOf(value) > -1;
