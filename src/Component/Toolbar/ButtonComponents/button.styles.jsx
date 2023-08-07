import { styled } from 'styled-components';

const BaseButton = styled.button`
  margin: 25px 10px 0px 10px;
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  padding: 0 15px 0 15px;
  font-size: 15px;
  background-color: white;
  text-transform: uppercase;
  font-family: 'Audiowide', cursive;
  font-weight: bolder;
  cursor: pointer;
`;

export const GenerateArrayButton = styled(BaseButton)`
  color: maroon;
  border: 3px solid maroon;

  &:hover {
    background-color: maroon;
    color: white;
  }
`;

export const SortButton = styled(BaseButton)`
  color: seagreen;
  border: 3px solid seagreen;

  &:hover {
    background-color: seagreen;
    color: white;
  }
`;
