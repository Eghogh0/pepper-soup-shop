import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HeroText from '@/components/HeroText';
import Story from '@/components/Story';
import WhatWeOffer from '@/components/WhatWeOffer';
import MenuPDFs from '@/components/MenuPDFs';
import Menu from '@/components/Menu';
import HeatMeter from '@/components/HeatMeter';
import BuildYourBowl from '@/components/BuildYourBowl';
import Testimonials from '@/components/Testimonials';
import Stats from '@/components/Stats';
import FeelTheHeat from '@/components/FeelTheHeat';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CheckoutWrapper from '@/components/CheckoutWrapper';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <div className="relative">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-fixed max-sm:bg-local"
          style={{ backgroundImage: 'url(/images/background.png)' }}
        />
        <div className="absolute inset-0 z-[1] bg-black/60" />

        <div className="relative z-10">
          <HeroText />
          <Story />
          <WhatWeOffer />
          <MenuPDFs />
          <Menu />
          <HeatMeter />
          <BuildYourBowl />
          <Testimonials />
          <Stats />
          <FeelTheHeat />
          <CheckoutWrapper />
          <Contact />
        </div>
      </div>

      <Footer />
    </>
  );
}