import { FC } from "react";

interface ArrowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  buttonStyle?: string;
}

const ArrowButton: FC<ArrowButtonProps> = ({
  children,
  buttonStyle,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`rounded-lg bg-black/20 p-2 transition-colors hover:bg-black/40 ${buttonStyle}`}
    >
      {children}
    </button>
  );
};

export default ArrowButton;
