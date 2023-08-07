export const ARRAY_ACTION_TYPES = {
  SET_ARRAY_LENGTH: 'array/SET_ARRAY_LENGTH',
  GENERATE_NEW_ARRAY: 'array/GENERATE_NEW_ARRAY',
};

export const makeArray = (len) => {
  const array = [];
  for (let i = 0; i < len; i++) array.push(randomIntFromInterval(5, 700));
  return array;
};

const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
