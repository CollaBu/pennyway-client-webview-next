export interface IHeader {
  left?: JSX.Element;
  center?: JSX.Element;
  right?: JSX.Element;
}

export function Header({ left, center, right }: IHeader) {
  return (
    <header className="fixed top-0 left-0 z-50 flex items-center justify-between h-[44px] w-full bg-white">
      {left}
      {center}
      {right}
    </header>
  );
}
