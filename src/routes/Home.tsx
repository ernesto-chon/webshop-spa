import Button from '@/components/atoms/Button';

export default function Home() {

  return (
    <div className='grid grid-cols-1'>
      <div>
        <h1 className="text-3xl md:text-4xl lg:text-6xl py-5"> Welcome to the ernesto-chon project</h1>
      </div>
      <div>
        <Button>Hello button</Button>
      </div>
    </div>
  );
}
