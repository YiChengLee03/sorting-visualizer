import { useSelector, useDispatch } from 'react-redux';

import {
  selectAlgorithm,
  selectIsAlgoDropdownOpen,
} from '../../../../Store/algo/algo.selector';
import { ALGO_TYPES } from '../../../../Store/algo/algo.types';
import {
  setAlgorithm,
  setIsAlgoDropdownOpen,
} from '../../../../Store/algo/algo.action';

import {
  AlgorithmContainer,
  Header,
  DropdownMenu,
  Selection,
  ArrowIcon,
  Dropdown,
  Item,
} from '../DropdownContainer/dropdownContainer.styles';
import OutsideAlerter from '../OutsideAlerter/outside.component';
import { generateNewArray } from '../../../../Store/array/array.action';
import { selectArrayLength } from '../../../../Store/array/array.selector';

const Algorithm = () => {
  const dispatch = useDispatch();

  const algorithm = useSelector(selectAlgorithm);
  const algoDropdownOpen = useSelector(selectIsAlgoDropdownOpen);
  const len = useSelector(selectArrayLength);
  const algoList = Object.values(ALGO_TYPES);

  const toggleDropdown = () =>
    dispatch(setIsAlgoDropdownOpen(!algoDropdownOpen));

  const generateNewArr = () => dispatch(generateNewArray(len));

  const changeAlgorithm = (algo) => {
    toggleDropdown();
    generateNewArr();
    const newAlgo = Object.keys(ALGO_TYPES).find(
      (key) => ALGO_TYPES[key] === algo
    );
    return dispatch(setAlgorithm(ALGO_TYPES[newAlgo]));
  };

  return (
    <AlgorithmContainer>
      <Header>Algorithm</Header>
      <OutsideAlerter dropdown='Algorithm'>
        <DropdownMenu onClick={toggleDropdown}>
          <Selection>{algorithm}</Selection>
          <ArrowIcon />
        </DropdownMenu>
        {algoDropdownOpen && (
          <Dropdown>
            {algoList.map((algo, idx) => (
              <Item key={idx} onClick={() => changeAlgorithm(algo)}>
                {algo}
              </Item>
            ))}
          </Dropdown>
        )}
      </OutsideAlerter>
    </AlgorithmContainer>
  );
};

export default Algorithm;
