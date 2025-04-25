import React, { useState } from 'react';

const DestinationCard = ({ city, departure, image, link }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const fallbackImage = `https://source.unsplash.com/featured/?${city},landmark`;

  // Create flight search URL with marker
  const flightSearchUrl = `https://www.trip.com/flights/search/?marker=624965&departure=${departure.replace('from ', '')}&arrival=${city}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="destination-card flex-none w-72 h-96 rounded-xl overflow-hidden shadow-lg group"
    >
      <div className="relative h-full overflow-hidden">
        <img
          src={imageError ? fallbackImage : image}
          alt={`${city} travel destination`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
          onError={handleImageError}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
        <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 group-hover:translate-y-[-8px]">
          <h3 className="text-2xl font-bold text-white mb-2">{city}</h3>
          <p className="text-sm text-gray-200 opacity-90">{departure}</p>
          <div className="mt-4 flex flex-col space-y-2">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-white text-sm opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:text-blue-400"
              onClick={(e) => e.stopPropagation()}
            >
              Find Hotels
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href={flightSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-white text-sm opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:text-blue-400"
              onClick={(e) => e.stopPropagation()}
            >
              Find Flights
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </a>
  );
};

export default DestinationCard; 