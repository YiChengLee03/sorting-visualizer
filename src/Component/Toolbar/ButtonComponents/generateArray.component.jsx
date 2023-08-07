import { useSelector, useDispatch } from 'react-redux';

import { selectArrayLength } from '../../../Store/array/array.selector';
import { generateNewArray } from '../../../Store/array/array.action';

import { GenerateArrayButton } from './button.styles';

const GenerateArr = () => {
  const dispatch = useDispatch();
  const len = useSelector(selectArrayLength);

  const handleOnClick = () => dispatch(generateNewArray(len));

  return (
    <GenerateArrayButton onClick={handleOnClick}>
      Generate Array
    </GenerateArrayButton>
  );
};

export default GenerateArr;
