
import FlightWidget from '../travel/FlightWidget';

const HeroSection = () => {
  return (
    <section className="relative min-h-[700px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Travel hero"
          className="w-full h-full object-cover transform scale-105 animate-slow-zoom"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent" />
      </div>
      <div className="relative h-full flex flex-col items-center justify-center px-4 py-16">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 text-center max-w-4xl leading-tight animate-fade-in">
          Best Deals Found
          <span className="block mt-2">Anywhere</span>
        </h1>
        <div className="w-full max-w-5xl px-4 mt-8 animate-slide-up">
          <FlightWidget />
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 