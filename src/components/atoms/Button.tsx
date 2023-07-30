import { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, ...props }: Props) {
  return (
    <button
      className="d-btn rounded-sm  bg-primary text-base transition-colors !duration-300 hover:bg-primary-hover"
      {...props}
    >
      {children}
    </button>
  );
}
