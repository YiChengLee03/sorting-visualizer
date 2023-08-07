export const swap = (array, idxOne, idxTwo, animations) => {
  animations.push({
    comparison: [idxOne, idxTwo],
    swap: true,
    newEl: [array[idxTwo], array[idxOne]],
  });

  const temp = array[idxOne];
  array[idxOne] = array[idxTwo];
  array[idxTwo] = temp;
};
