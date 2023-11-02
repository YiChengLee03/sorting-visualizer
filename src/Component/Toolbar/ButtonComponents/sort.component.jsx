import { useSelector } from 'react-redux';

import { selectAlgorithm } from '../../../Store/algo/algo.selector';
import { ALGO_TYPES } from '../../../Store/algo/algo.types';
import { selectSpeed } from '../../../Store/speed/speed.selector';
import { ALGO_SPEED } from '../../../Store/speed/speed.types';
import { selectArrayData } from '../../../Store/array/array.selector';

import { bubbleSort } from '../../../Algorithm/bubbleSort';
import { heapSort } from '../../../Algorithm/heapSort';
import { insertionSort } from '../../../Algorithm/insertionSort';
import { mergeSort } from '../../../Algorithm/mergeSort';
import { selectionSort } from '../../../Algorithm/selectionSort';

import { SortButton } from './button.styles';
import { quickSort } from '../../../Algorithm/quickSort';

const Sort = () => {
  const algorithm = useSelector(selectAlgorithm);
  const array = useSelector(selectArrayData);
  const speedSelected = useSelector(selectSpeed);

  const PRIMARY_COLOR = 'navy';
  const SECONDARY_COLOR = 'red';

  let speed;
  switch (speedSelected) {
    case ALGO_SPEED.FAST:
      speed = 3;
      break;
    case ALGO_SPEED.MEDIUM:
      speed = 10;
      break;
    case ALGO_SPEED.SLOW:
      speed = 30;
      break;
    default:
      speed = 10;
  }

  const runSelectedAlgorithm = (algo) => {
    let animations;
    switch (algo) {
      case ALGO_TYPES.BUBBLE:
        animations = bubbleSort(array);
        animateWithSwap(animations);
        break;
      case ALGO_TYPES.HEAP:
        animations = heapSort(array);
        animateWithSwap(animations);
        break;
      case ALGO_TYPES.INSERTION:
        animations = insertionSort(array);
        animateInsertionSort(animations);
        break;
      case ALGO_TYPES.MERGE:
        animations = mergeSort(array);
        animateMergeSort(animations);
        break;
      case ALGO_TYPES.QUICK:
        animations = quickSort(array);
        animateWithSwap(animations);
        break;
      case ALGO_TYPES.SELECTION:
        animations = selectionSort(array);
        animateWithSwap(animations);
        break;
      default:
        return;
    }
  };

  const sleep = async (milliseconds) => {
    await new Promise((resolve) => {
      return setTimeout(resolve, milliseconds);
    });
  };

  const changeBarColor = async (arrayBars, barOneIdx, barTwoIdx, color, i) => {
    await sleep(i * speed);
    const barOneStyle = arrayBars[barOneIdx].style;
    const barTwoStyle = arrayBars[barTwoIdx].style;
    barOneStyle.backgroundColor = color;
    barTwoStyle.backgroundColor = color;
  };

  const swapBarHeight = async (arrayBars, barOneIdx, barTwoIdx, newEl, i) => {
    await sleep(i * speed);
    const barOneStyle = arrayBars[barOneIdx].style;
    const barTwoStyle = arrayBars[barTwoIdx].style;
    barOneStyle.height = `${newEl[0]}px`;
    barTwoStyle.height = `${newEl[1]}px`;
  };

  const overwriteBarHeight = async (arrayBars, barIdx, newHeight, i) => {
    await sleep(i * speed);
    const barStyle = arrayBars[barIdx].style;
    barStyle.height = `${newHeight}px`;
  };

  const animateMergeSort = (animations) => {
    const arrayBars = document.getElementsByClassName('array-bar');
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        changeBarColor(arrayBars, barOneIdx, barTwoIdx, color, i);
      } else {
        const [barOneIdx, newHeight] = animations[i];
        overwriteBarHeight(arrayBars, barOneIdx, newHeight, i);
      }
    }
  };

  const animateInsertionSort = async (animations) => {
    const arrayBars = document.getElementsByClassName('array-bar');
    for (let i = 0; i < animations.length; i++) {
      const [barOneIdx, barTwoIdx] = animations[i].comparison;
      const [barIdx, newHeight] = animations[i].overwrite;
      changeBarColor(arrayBars, barOneIdx, barTwoIdx, SECONDARY_COLOR, i);
      overwriteBarHeight(arrayBars, barIdx, newHeight, i);
      changeBarColor(arrayBars, barOneIdx, barTwoIdx, PRIMARY_COLOR, i + 1);
    }
  };

  const animateWithSwap = async (animations) => {
    const arrayBars = document.getElementsByClassName('array-bar');
    for (let i = 0; i < animations.length; i++) {
      const [barOneIdx, barTwoIdx] = animations[i].comparison;
      const swap = animations[i].swap;
      changeBarColor(arrayBars, barOneIdx, barTwoIdx, SECONDARY_COLOR, i);
      if (swap) {
        const newEl = animations[i].newEl;
        swapBarHeight(arrayBars, barOneIdx, barTwoIdx, newEl, i);
      }
      changeBarColor(arrayBars, barOneIdx, barTwoIdx, PRIMARY_COLOR, i + 1);
    }
  };

  const handleOnClick = () => runSelectedAlgorithm(algorithm);

  return <SortButton onClick={handleOnClick}>Sort</SortButton>;
};

export default Sort;
