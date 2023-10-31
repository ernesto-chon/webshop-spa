import React from 'react';

interface FooterListContent {
  title: string;
  contentArray: string[];
}

export default function FooterListContent(props: FooterListContent) {
  return (
    <div className="mb-4 w-full md:w-1/2 lg:mb-0 lg:w-1/4">
      <h2 className="mb-2 border-l-4 border-primary pl-4 text-lg font-semibold">{props.title}</h2>
      <div className="flex flex-col gap-2 px-5">
        {props.contentArray.map((item) => (
          <a className="my-2 border-b-2 border-primary-gray">{item}</a>
        ))}
      </div>
    </div>
  );
}
