import { swap } from './swap';

export const quickSort = (array) => {
  const animations = [];
  quickSortHelper(array, 0, array.length - 1, animations);
  return animations;
};

const quickSortHelper = (array, startIdx, endIdx, animations) => {
  if (startIdx > endIdx) return;
  const pi = partition(array, startIdx, endIdx, animations);
  quickSortHelper(array, startIdx, pi - 1, animations);
  quickSortHelper(array, pi + 1, endIdx, animations);
};

const partition = (array, startIdx, endIdx, animations) => {
  const pivot = array[(startIdx + endIdx) / 2];
  let i = startIdx - 1;

  for (let j = startIdx; j <= endIdx; j++) {
    animations.push({
      comparison: [endIdx, j],
      swap: false,
    });

    if (array[j] <= pivot) {
      i++;
      swap(array, i, j, animations);
    }
  }

  swap(array, i + 1, endIdx, animations);
  return i + 1;
};
