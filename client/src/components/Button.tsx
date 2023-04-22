import { ReactNode } from "react";

interface IProps {
  type?: "button" | "submit" | "reset" | undefined;
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button = (props: IProps) => {
  const { type, children, onClick, className } = props;

  return (
    <button
      onClick={onClick}
      className={`btn btn-custom rounded text-white btn-block fa-lg gradient-custom text-uppercase ${className}`}
      type={type ?? "button"}
    >
      {children}
    </button>
  );
};

export default Button;
