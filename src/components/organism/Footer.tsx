import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mx-5 my-10">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="mb-4 w-full px-5 md:w-1/2 lg:mb-0 lg:w-1/4">
          <img
            src="https://themegrilldemos.com/webshop/wp-content/uploads/sites/165/2021/08/webshop-logo.png"
            className="mb-4"
          />
          <p className="text-left">
            Vestibulum molestie mattis ante magnis eget eget egestas diam sapien. Felis ultrices sollicitudin nec lectus
            ornare ut proin. Proin interdum enim id proin.
          </p>
        </div>
        <div className="mb-4 w-full md:w-1/2 lg:mb-0 lg:w-1/4">
          <h2 className="mb-2 border-l-4 border-primary pl-4 text-lg font-semibold">Useful Links</h2>
          <div className="flex flex-col gap-2 px-5">
            <div className="my-3 border-b-2 border-primary-gray">Become a Franchise</div>
            <div className="my-3 border-b-2 border-primary-gray">Become a Franchise</div>
            <div className="my-3 border-b-2 border-primary-gray">Become a Franchise</div>
          </div>
        </div>
        <div className="mb-4 w-full md:w-1/2 lg:mb-0 lg:w-1/4">
          <h2 className="mb-2 border-l-4 border-primary pl-4 text-lg font-semibold">Useful Links</h2>
          <div className="flex flex-col gap-2 px-5">
            <div className="my-3 border-b-2 border-primary-gray">Become a Franchise</div>
            <div className="my-3 border-b-2 border-primary-gray">Become a Franchise</div>
            <div className="my-3 border-b-2 border-primary-gray">Become a Franchise</div>
          </div>
        </div>
        <div className="mb-4 w-full md:w-1/2 lg:mb-0 lg:w-1/4">
          <h2 className="mb-2 border-l-4 border-primary pl-4 text-lg font-semibold">Useful Links</h2>
          <div className="flex flex-col gap-2 px-5">
            <div className="my-3 border-b-2 border-primary-gray">Become a Franchise</div>
            <div className="my-3 border-b-2 border-primary-gray">Become a Franchise</div>
            <div className="my-3 border-b-2 border-primary-gray">Become a Franchise</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
