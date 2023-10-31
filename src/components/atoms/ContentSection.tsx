import React from 'react';

type Props = {
  children?: React.ReactNode;
}

export default function ContentSection ({children, ...props}: Props) {
  return <section className='container mx-auto py-10 px-5' {...props}>{children}</section>;
}