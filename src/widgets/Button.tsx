export interface IButton {
  label: string;
  onClick: () => void;
}

const Button = ({ label, onClick }: IButton) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: '#792e2e' }}
      className="w-48 h-5 px-4 rounded-sm"
    >
      {label}
    </button>
  );
};

export default Button;
