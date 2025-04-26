

const experiences = [
  {
    id: 1,
    title: 'Northern Lights Adventure',
    location: 'Tromsø, Norway',
    image: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    description: 'Witness the magical dance of the Aurora Borealis in one of the best viewing spots on Earth.',
    bestFor: ['Nature Lovers', 'Photographers', 'Adventure Seekers'],
    season: 'September - March',
    flightUrl: 'https://www.trip.com/flights/search/?marker=624965&departure=us&arrival=tromso',
    hotelUrl: 'https://www.trip.com/hotels/tromso-hotels-list-50026/?marker=624965'
  },
  {
    id: 2,
    title: 'Safari Experience',
    location: 'Serengeti, Tanzania',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    description: 'Experience the Great Migration and witness Africa\'s incredible wildlife up close.',
    bestFor: ['Wildlife Enthusiasts', 'Nature Photographers', 'Adventure Travelers'],
    season: 'June - October',
    flightUrl: 'https://www.trip.com/flights/search/?marker=624965&departure=us&arrival=serengeti',
    hotelUrl: 'https://www.trip.com/hotels/serengeti-hotels-list-50026/?marker=624965'
  },
  {
    id: 3,
    title: 'Cultural Immersion',
    location: 'Marrakech, Morocco',
    image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    description: 'Explore the vibrant souks, stunning architecture, and rich cultural heritage of Morocco.',
    bestFor: ['Culture Enthusiasts', 'Food Lovers', 'History Buffs'],
    season: 'March - May, September - November',
    flightUrl: 'https://www.trip.com/flights/search/?marker=624965&departure=us&arrival=marrakech',
    hotelUrl: 'https://www.trip.com/hotels/marrakech-hotels-list-50026/?marker=624965'
  },
  {
    id: 4,
    title: 'Tropical Paradise',
    location: 'Maldives',
    image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    description: 'Relax in overwater bungalows and experience the ultimate beach getaway.',
    bestFor: ['Honeymooners', 'Beach Lovers', 'Luxury Travelers'],
    season: 'November - April',
    flightUrl: 'https://www.trip.com/flights/search/?marker=624965&departure=us&arrival=maldives',
    hotelUrl: 'https://www.trip.com/hotels/maldives-hotels-list-50026/?marker=624965'
  }
];

const TravelInspiration = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Travel Inspiration</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Discover unique experiences that will create memories to last a lifetime</p>
        </div>
        
        <div className="flex overflow-x-auto pb-8 space-x-6 scrollbar-hide">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="group flex-none w-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-64">
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{experience.title}</h3>
                  <p className="text-white/90">{experience.location}</p>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-6">{experience.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 mb-2">Best For</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.bestFor.map((type, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm hover:bg-blue-100 transition-colors duration-200"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 mb-1">Best Season</h4>
                  <p className="text-gray-900 font-medium">{experience.season}</p>
                </div>

                <div className="flex space-x-4">
                  <a
                    href={experience.flightUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg text-center font-medium hover:bg-blue-700 transition-colors duration-200"
                  >
                    Find Flights
                  </a>
                  <a
                    href={experience.hotelUrl}
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

export default TravelInspiration; 