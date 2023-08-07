import { useSelector } from 'react-redux';

import { selectArrayData } from '../../Store/array/array.selector';

import './barchart.styles.css';

const Barchart = () => {
  const array = useSelector(selectArrayData);

  return (
    <div className='array-container'>
      {array.map((value, idx) => (
        <div className='array-bar' key={idx} style={{ height: `${value}px` }} />
      ))}
    </div>
  );
};

export default Barchart;
