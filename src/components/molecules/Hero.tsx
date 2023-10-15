import React from 'react';

import Button from '../atoms/Button';

interface HeroProps {
  title: string;
  subtitle: string;
  season: string;
  imageSrc: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, season, imageSrc }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-5 bg-[#ebebec] py-10 px-[2rem] md:px-[5rem] lg:px-[10rem]">
      <div className="basis-1/2 order-last md:order-first">
        <p className="hero-subtitle">{season}</p>
        <h1 className="hero-title my-5">{title}</h1>
        <h4 className="hero-subtitle mb-3">{subtitle}</h4>
        <Button>Shop Now</Button>
      </div>
      <div className="basis-1/2">
        <img src={imageSrc} alt="Hero" className="max-h-[450px] justify-self-start" />
      </div>
    </div>
  );
};

export default Hero;
