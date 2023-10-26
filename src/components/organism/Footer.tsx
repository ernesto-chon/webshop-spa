import React from 'react';
import FooterListContent from '../atoms/FooterListContent';

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
        <FooterListContent
          title="Useful Links"
          contentArray={['Become a Franchise', 'Careers', 'Sell with us', 'Corporate Governance']}
        />
        <FooterListContent
          title="Policy"
          contentArray={['Privacy Policy', 'Track Order', 'Return Policy', 'Terms of use']}
        />
        <FooterListContent
          title="Help"
          contentArray={['Payments', 'Shipping', 'Return & Refund', 'FAQ']}
        />
      </div>
    </footer>
  );
};

export default Footer;
