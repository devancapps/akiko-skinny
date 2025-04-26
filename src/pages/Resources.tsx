
import ResourceCard from '../components/ResourceCard';

const resourceCategories = {
  'Booking Cheap Travel': [
    {
      title: 'Skyscanner for Flights',
      description: 'Compare millions of flights to find the best deals, wherever you want to go.',
      imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
      link: 'https://www.skyscanner.com'
    },
    {
      title: 'Google Flights',
      description: 'Explore destinations, find the right flight, and get real-time price alerts.',
      imageUrl: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=800&q=80',
      link: 'https://www.google.com/flights'
    },
    {
      title: 'Kayak',
      description: 'Search hundreds of travel sites at once for flights, hotels, and rental cars.',
      imageUrl: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=800&q=80',
      link: 'https://www.kayak.com'
    }
  ],
  'Booking Accommodation': [
    {
      title: 'Booking.com',
      description: 'Book hotels, apartments, and unique places to stay worldwide.',
      imageUrl: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80',
      link: 'https://www.booking.com'
    },
    {
      title: 'Airbnb',
      description: 'Find unique places to stay with local hosts in 190+ countries.',
      imageUrl: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=800&q=80',
      link: 'https://www.airbnb.com'
    },
    {
      title: 'Hostelworld',
      description: 'Book hostels and meet travelers from around the world.',
      imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80',
      link: 'https://www.hostelworld.com'
    }
  ],
  'Booking Tours': [
    {
      title: 'GetYourGuide',
      description: 'Book tours, attractions, and experiences around the world.',
      imageUrl: 'https://images.unsplash.com/photo-1504150558240-0b4fd8946624?auto=format&fit=crop&w=800&q=80',
      link: 'https://www.getyourguide.com'
    },
    {
      title: 'Viator',
      description: 'Find and book the best things to do worldwide.',
      imageUrl: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=800&q=80',
      link: 'https://www.viator.com'
    },
    {
      title: 'G Adventures',
      description: 'Small group adventure travel with local guides and authentic experiences.',
      imageUrl: 'https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?auto=format&fit=crop&w=800&q=80',
      link: 'https://www.gadventures.com'
    }
  ],
  'Booking Activities': [
    {
      title: 'Klook',
      description: 'Book activities, attractions and things to do wherever you travel.',
      imageUrl: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=800&q=80',
      link: 'https://www.klook.com'
    },
    {
      title: 'TripAdvisor',
      description: 'Find reviews and book amazing travel experiences.',
      imageUrl: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=800&q=80',
      link: 'https://www.tripadvisor.com'
    },
    {
      title: 'Airbnb Experiences',
      description: 'Book unique activities hosted by local experts.',
      imageUrl: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
      link: 'https://www.airbnb.com/experiences'
    }
  ],
  'Meetups': [
    {
      title: 'Meetup Travel Groups',
      description: 'Find local travel groups and events wherever you go.',
      imageUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80',
      link: 'https://www.meetup.com/topics/travel/'
    },
    {
      title: 'Couchsurfing Events',
      description: 'Meet travelers and locals through community events worldwide.',
      imageUrl: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80',
      link: 'https://www.couchsurfing.com'
    },
    {
      title: 'InterNations',
      description: 'Connect with expats and travelers in cities around the world.',
      imageUrl: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=800&q=80',
      link: 'https://www.internations.org'
    }
  ],
  'Travel Insurance': [
    {
      title: 'World Nomads',
      description: 'Travel insurance for independent travelers from over 130 countries.',
      imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      link: 'https://www.worldnomads.com'
    },
    {
      title: 'SafetyWing',
      description: 'Travel medical insurance that covers people from all over the world.',
      imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
      link: 'https://www.safetywing.com'
    },
    {
      title: 'Allianz Travel',
      description: 'Comprehensive travel insurance for single trips and annual coverage.',
      imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80',
      link: 'https://www.allianztravelinsurance.com'
    }
  ],
  'Money While Traveling': [
    {
      title: 'Wise',
      description: 'Send and receive money internationally at the real exchange rate.',
      imageUrl: 'https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?auto=format&fit=crop&w=800&q=80',
      link: 'https://wise.com'
    },
    {
      title: 'Revolut',
      description: 'Spend abroad with no hidden fees in over 150 currencies.',
      imageUrl: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=800&q=80',
      link: 'https://www.revolut.com'
    },
    {
      title: 'N26',
      description: 'Digital banking with free ATM withdrawals worldwide and no foreign transaction fees.',
      imageUrl: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=800&q=80',
      link: 'https://n26.com'
    }
  ],
  'Travel VPNs': [
    {
      title: 'ExpressVPN',
      description: 'Fast, secure VPN with servers in 94 countries for reliable access to content worldwide.',
      imageUrl: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=800&q=80',
      link: 'https://www.expressvpn.com'
    },
    {
      title: 'NordVPN',
      description: 'Advanced security features and a vast network of global servers for safe browsing abroad.',
      imageUrl: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80',
      link: 'https://www.nordvpn.com'
    },
    {
      title: 'Surfshark',
      description: 'Affordable VPN with unlimited devices and built-in ad blocking for travelers.',
      imageUrl: 'https://images.unsplash.com/photo-1562813733-b31f71025d54?auto=format&fit=crop&w=800&q=80',
      link: 'https://www.surfshark.com'
    }
  ],
  'Travel Rewards Cards': [
    {
      title: 'Chase Sapphire Preferred',
      description: 'Earn 2x points on travel and dining, plus valuable travel insurance benefits and transfer partners.',
      imageUrl: 'https://images.unsplash.com/photo-1622630998477-20aa696ecb05?auto=format&fit=crop&w=800&q=80',
      link: 'https://creditcards.chase.com/rewards-credit-cards/sapphire/preferred'
    },
    {
      title: 'American Express Platinum',
      description: 'Premium travel perks including lounge access, hotel status, and 5x points on flights.',
      imageUrl: 'https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?auto=format&fit=crop&w=800&q=80',
      link: 'https://www.americanexpress.com/platinum'
    },
    {
      title: 'Capital One Venture',
      description: 'Simple 2x miles on every purchase and flexible redemption options for any travel expense.',
      imageUrl: 'https://images.unsplash.com/photo-1581089778245-3ce67677f718?auto=format&fit=crop&w=800&q=80',
      link: 'https://www.capitalone.com/credit-cards/venture/'
    }
  ]
};

const SectionTitle = ({ title }: { title: string }) => (
  <div className="relative mb-12 group">
    <h2 className="text-3xl font-bold text-gray-900 inline-block">
      {title}
      <div className="h-1 w-0 group-hover:w-full bg-blue-500 transition-all duration-300 ease-out"></div>
    </h2>
    <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-12 bg-blue-500 transform -skew-y-45"></div>
  </div>
);

const Resources = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-gray-900 mb-16 text-center relative overflow-hidden">
          Travel Resources
          <div className="h-1 w-32 bg-blue-500 mx-auto mt-4 animate-pulse"></div>
        </h1>
        <div className="space-y-24">
          {Object.entries(resourceCategories).map(([category, resources]) => (
            <section key={category} className="scroll-mt-16">
              <SectionTitle title={category} />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {resources.map((resource) => (
                  <ResourceCard
                    key={resource.title}
                    {...resource}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources; 