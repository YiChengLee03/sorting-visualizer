import { swap } from './swap';

export const bubbleSort = (array) => {
  const animations = [];
  for (let i = 0; i < array.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1, animations);
        swapped = true;
      } else
        animations.push({
          comparison: [j, j + 1],
          swap: false,
        });
    }
    if (swapped === false) break;
  }

  return animations;
};
