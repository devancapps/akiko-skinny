import React from 'react';

const destinations = [
  {
    id: 1,
    name: 'Kyoto, Japan',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    bestTime: 'March-May, September-November',
    avgPrice: '$800-1200',
    highlights: ['Temples & Shrines', 'Cherry Blossoms', 'Traditional Tea Houses'],
    cuisine: ['Sushi', 'Ramen', 'Kaiseki'],
    flightUrl: 'https://www.trip.com/flights/search/?marker=624965&departure=us&arrival=kyoto',
    hotelUrl: 'https://www.trip.com/hotels/kyoto-hotels-list-50026/?marker=624965'
  },
  {
    id: 2,
    name: 'Seoul, South Korea',
    image: 'https://images.unsplash.com/photo-1617541086271-4d43983704bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
    bestTime: 'March-May, September-November',
    avgPrice: '$900-1300',
    highlights: ['Gyeongbokgung Palace', 'N Seoul Tower', 'Bukchon Hanok Village'],
    cuisine: ['Bibimbap', 'Korean BBQ', 'Tteokbokki'],
    flightUrl: 'https://www.trip.com/flights/search/?marker=624965&departure=us&arrival=seoul',
    hotelUrl: 'https://www.trip.com/hotels/seoul-hotels-list-50026/?marker=624965'
  },
  {
    id: 3,
    name: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    bestTime: 'April-October',
    avgPrice: '$700-1100',
    highlights: ['Beaches', 'Temples', 'Rice Terraces'],
    cuisine: ['Nasi Goreng', 'Satay', 'Babi Guling'],
    flightUrl: 'https://www.trip.com/flights/search/?marker=624965&departure=us&arrival=bali',
    hotelUrl: 'https://www.trip.com/hotels/bali-hotels-list-50026/?marker=624965'
  }
];

const FeaturedDestinations = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Featured Destinations</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Discover the world's most captivating places, from ancient temples to pristine beaches</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div 
              key={destination.id} 
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-64">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white">
                  {destination.name}
                </h3>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 mb-1">Best Time to Visit</h4>
                    <p className="text-gray-900 font-medium">{destination.bestTime}</p>
                  </div>
                  <div className="text-right">
                    <h4 className="text-sm font-semibold text-gray-500 mb-1">Average Price</h4>
                    <p className="text-gray-900 font-medium">{destination.avgPrice}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-500 mb-2">Must-See Highlights</h4>
                  <ul className="space-y-1">
                    {destination.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center text-gray-900">
                        <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 mb-2">Local Cuisine</h4>
                  <div className="flex flex-wrap gap-2">
                    {destination.cuisine.map((dish, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors duration-200"
                      >
                        {dish}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <a
                    href={destination.flightUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg text-center font-medium hover:bg-blue-700 transition-colors duration-200"
                  >
                    Find Flights
                  </a>
                  <a
                    href={destination.hotelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-center font-medium hover:bg-gray-200 transition-colors duration-200"
                  >
                    Find Hotels
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations; 