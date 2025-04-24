import React from 'react';
import HeroSection from '../travel/HeroSection';
import HotelWidget from '../travel/HotelWidget';
import DestinationCarousel from '../travel/DestinationCarousel';
import SubscribeForm from '../ui/SubscribeForm';

const Home = () => {
  return (
    <main className="min-h-screen text-gray-900">
      <HeroSection />
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-gray-900">Find Your Perfect Hotel</h2>
          <HotelWidget />
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-gray-900">Top Travel Deals by Destination</h2>
          <DestinationCarousel />
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4">
          <SubscribeForm />
        </div>
      </section>
    </main>
  );
};

export default Home; 