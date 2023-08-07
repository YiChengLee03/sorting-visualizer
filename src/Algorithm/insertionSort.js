export const insertionSort = (array) => {
  const animations = [];
  for (let i = 1; i < array.length; i++) {
    const curr = array[i];
    let j = i - 1;

    while (j >= 0 && curr < array[j]) {
      animations.push({
        comparison: [j, j + 1],
        overwrite: [j + 1, array[j]],
      });
      array[j + 1] = array[j];
      j--;
    }

    animations.push({
      comparison: [i, j + 1],
      overwrite: [j + 1, curr],
    });

    array[j + 1] = curr;
  }
  return animations;
};
