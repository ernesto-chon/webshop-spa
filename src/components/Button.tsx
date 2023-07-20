import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function Button({ children }: Props) {
  return <button className="btn rounded-sm bg-primary text-base hover:bg-primary-hover">{children}</button>;
}
