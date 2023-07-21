import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function Button({ children }: Props) {
  return (
    <button className="d-btn rounded-sm  bg-primary text-base transition-colors !duration-300 hover:bg-primary-hover">
      {children}
    </button>
  );
}
