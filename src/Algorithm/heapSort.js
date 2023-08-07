import { swap } from './swap';

export const heapSort = (array) => {
  const animations = [];

  const arrLen = array.length;
  const lastNonLeafNode = Math.floor(arrLen / 2) - 1;

  // build heap
  for (let i = lastNonLeafNode; i >= 0; i--) {
    heapify(array, arrLen, i, animations);
  }

  // extracting and swapping elements from heap
  for (let lastIdx = arrLen - 1; lastIdx > 0; lastIdx--) {
    const rootIdx = 0;
    swap(array, rootIdx, lastIdx, animations);

    // heapify the remaining heap
    heapify(array, lastIdx, rootIdx, animations);
  }

  return animations;
};

const heapify = (array, arrLen, i, animations) => {
  let largestIdx = i;
  const leftChildIdx = 2 * i + 1;
  const rightChildIdx = 2 * i + 2;

  // Compare if array index is valid
  if (leftChildIdx < arrLen) {
    animations.push({
      comparison: [largestIdx, leftChildIdx],
      swap: false,
    });

    // If child is larger than root
    if (array[largestIdx] < array[leftChildIdx]) largestIdx = leftChildIdx;
  }

  // Compare if array index is valid
  if (rightChildIdx < arrLen) {
    animations.push({
      comparison: [largestIdx, rightChildIdx],
      swap: false,
    });

    // If child is larger than root
    if (array[largestIdx] < array[rightChildIdx]) largestIdx = rightChildIdx;
  }

  // If largest index is not root
  if (largestIdx !== i) {
    // swap elements
    swap(array, i, largestIdx, animations);

    // heapify the current largest node in the subtree recursively
    heapify(array, arrLen, largestIdx, animations);
  }
};
