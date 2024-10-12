export interface IButton {
  label: string;
  clickFn: () => void;
}

const Button = ({ label, clickFn }: IButton) => {
  return (
    <button onClick={clickFn} className="w-48 h-5 px-4 bg-[#792e2e] rounded-sm">
      {label}
    </button>
  );
};

export default Button;
