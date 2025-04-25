import React from 'react';
import HeroSection from '../layout/HeroSection';
import HotelWidget from '../travel/HotelWidget';
import DestinationCarousel from '../travel/DestinationCarousel';
import FeaturedDestinations from '../travel/FeaturedDestinations';
import TravelInspiration from '../travel/TravelInspiration';
import SubscribeForm from '../components/SubscribeForm';

const Home = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <HeroSection />
      <FeaturedDestinations />
      <TravelInspiration />
      <section className="relative py-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
            alt="Luxury hotel background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-900/60 to-gray-900/70" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white">Find Your Perfect Hotel</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Discover luxury stays, boutique hotels, and comfortable accommodations worldwide
            </p>
          </div>
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