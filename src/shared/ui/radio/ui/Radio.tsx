import { radioShapes } from '../consts';

export interface IRadio {
  isSelected: boolean;
  changeSelected: () => void;
  shape?: keyof typeof radioShapes;
  text?: JSX.Element;
  name: string;
}

export const Radio = ({
  isSelected,
  changeSelected,
  shape = 'circleGraySmall',
  text,
  name,
}: IRadio) => {
  const SelectOn = radioShapes[shape].on;
  const SelectOff = radioShapes[shape].off;

  return (
    <label className="cursor-pointer flex items-center">
      <input
        type="radio"
        checked={isSelected}
        onChange={changeSelected}
        className="sr-only"
        name={name}
      />
      <span className="flex items-center justify-center">
        {isSelected ? <SelectOn /> : <SelectOff />}
      </span>
      {text}
    </label>
  );
};
