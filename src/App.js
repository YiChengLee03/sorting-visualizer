import { Fragment } from 'react';
import Toolbar from './Component/Toolbar/toolbar.component';
import Barchart from './Component/Barchart/barchart.component';

const App = () => {
  return (
    <Fragment>
      <Toolbar />
      <Barchart />
    </Fragment>
  );
};

export default App;
