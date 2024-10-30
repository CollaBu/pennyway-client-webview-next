import { checkboxShapes } from '../consts';

type TSetIsCheckedFunc = (value: boolean) => void;

export interface ICheckBox {
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>> | TSetIsCheckedFunc;
  shape?: keyof typeof checkboxShapes;
  text?: JSX.Element;
}

export const Checkbox = ({
  isChecked,
  setIsChecked,
  shape = 'circleGraySmall',
  text,
}: ICheckBox) => {
  const changeCheck = () => setIsChecked(!isChecked);

  const CheckOn = checkboxShapes[shape].on;
  const CheckOff = checkboxShapes[shape].off;

  return (
    <label className="cursor-pointer flex items-center">
      <input
        type="checkbox"
        defaultChecked={isChecked}
        onChange={changeCheck}
        className="sr-only"
      />
      <span className="flex items-center justify-center">
        {isChecked ? <CheckOn /> : <CheckOff />}
      </span>
      {text}
    </label>
  );
};
