import Button from '../atoms/Button';

interface HeroProps {
  title: string;
  subtitle: string;
  season: string;
  imageSrc: string;
}

export default function Hero({ title, subtitle, season, imageSrc }: HeroProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-5 bg-secondary-gray px-[2rem] py-10 md:flex-row md:px-[5rem] lg:px-[10rem]">
      <div className="order-last basis-1/2 md:order-first">
        <p className="hero-subtitle">{season}</p>
        <h1 className="hero-title my-5">{title}</h1>
        <h4 className="hero-subtitle mb-3">{subtitle}</h4>
        <Button>Shop now</Button>
      </div>
      <div className="basis-1/2">
        <img src={imageSrc} alt="Hero" className="max-h-[450px] justify-self-start" />
      </div>
    </div>
  );
}
