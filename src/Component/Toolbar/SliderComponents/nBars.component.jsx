import ReactSlider from 'react-slider';
import { useSelector, useDispatch } from 'react-redux';
import { selectArrayLength } from '../../../Store/array/array.selector';
import { setArrayLength } from '../../../Store/array/array.action';

import './nBars.styles.css';

const NumberOfBars = () => {
  const dispatch = useDispatch();
  const arrayLen = useSelector(selectArrayLength);

  const handleOnChange = (len) => dispatch(setArrayLength(len));

  return (
    <div className='container'>
      <h3 className='header'>Bar Count</h3>
      <ReactSlider
        className='horizontal-slider'
        thumbClassName='slider-thumb'
        trackClassName='slider-track'
        defaultValue={arrayLen}
        min={50}
        max={250}
        step={10}
        onChange={handleOnChange}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
      />
    </div>
  );
};

export default NumberOfBars;
