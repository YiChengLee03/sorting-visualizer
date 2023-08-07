import { FeaturesContainer, ToolbarContainer, Title } from './toolbar.styles';

import GenerateArr from './ButtonComponents/generateArray.component';
import Sort from './ButtonComponents/sort.component';
import Algorithm from './DropdownComponents/Algorithm/algorithm.component';
import Speed from './DropdownComponents/Speed/speed.component';
import NumberOfBars from './SliderComponents/nBars.component';

const Toolbar = () => {
  return (
    <ToolbarContainer>
      <Title>Sort'em</Title>
      <FeaturesContainer>
        <Algorithm />
        <NumberOfBars />
        <Speed />
        <GenerateArr />
        <Sort />
      </FeaturesContainer>
    </ToolbarContainer>
  );
};

export default Toolbar;
