import React, { useState, useEffect } from 'react';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1
      }
    );

    const element = document.getElementById('newsletter-form');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your newsletter subscription logic here
    setStatus('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <div className="relative w-full py-24">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
          alt="Friends celebrating"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/75 via-blue-500/70 to-indigo-600/75" />
      </div>

      {/* Form Container */}
      <div 
        id="newsletter-form"
        className={`relative z-10 w-full max-w-md mx-auto p-8 rounded-2xl shadow-2xl 
                   bg-white/10 backdrop-blur-lg
                   transform transition-all duration-1000 ease-out
                   ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className={`transform transition-all duration-700 delay-300 ease-out
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-3xl font-bold mb-6 text-white">Join Our Travel Community</h2>
          <p className="text-blue-50 mb-6">Get exclusive deals and insider tips for your next adventure.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className={`relative transform transition-all duration-700 delay-500 ease-out
                          ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 
                       text-white placeholder-blue-100 
                       focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent 
                       transition-all duration-300"
            />
          </div>
          <button
            type="submit"
            className={`w-full px-6 py-3 text-blue-600 bg-white rounded-lg font-semibold 
                     transform transition-all duration-700 delay-700 ease-out hover:scale-[1.02] hover:shadow-lg 
                     active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2
                     ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Subscribe Now
          </button>
        </form>
        
        {status && (
          <div className="mt-4 text-sm text-white text-center animate-fade-in">
            {status}
          </div>
        )}

        {/* Decorative elements */}
        <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-blue-300/30 backdrop-blur-sm 
                      transform transition-all duration-1000 delay-300
                      ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}" />
        <div className="absolute -bottom-8 -left-8 w-16 h-16 rounded-full bg-indigo-400/20 backdrop-blur-sm
                      transform transition-all duration-1000 delay-500
                      ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}" />
      </div>
    </div>
  );
};

export default SubscribeForm; 