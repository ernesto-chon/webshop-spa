import Hero from '@/components/molecules/Hero';
import Button from '@/components/atoms/Button';

export default function Home() {
  return (
    <div>
      <Hero
        title="Get 30% off"
        subtitle="Step into style with our curated collection of footwear that's designed to elevate your every step. We believe that the right pair of shoes can transform not just your outfit, but your entire day."
        season="AUTUMN SALES"
        // imageSrc="https://themegrilldemos.com/webshop/wp-content/uploads/sites/165/2021/06/banner-1024x836.png"
        // Vodafone looking
        imageSrc="https://images.response.vodafone.com/EloquaImages/clients/VodafoneGroupPLC/%7B6979d5d7-719f-4378-a377-d46a9c40ac3b%7D_MicrosoftTeams-image_%282%29.png"
      />
      <div className="container mx-auto my-20 flex flex-col justify-center px-10">
        <h1 className="py-5 text-2xl md:text-4xl lg:text-6xl"> Welcome to the ernesto-chon project</h1>
        <div className="button">
          <Button>Hello button</Button>
        </div>
      </div>
    </div>
  );
}
