import { swap } from './swap';

export const selectionSort = (array) => {
  const animations = [];

  for (let i = 0; i < array.length; i++) {
    let minIdx = i;

    for (let j = i + 1; j < array.length; j++) {
      animations.push({
        comparison: [j, minIdx],
        swap: false,
      });

      if (array[j] < array[minIdx]) {
        minIdx = j;
      }
    }

    swap(array, i, minIdx, animations);
  }

  return animations;
};
