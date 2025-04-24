import React, { useState } from 'react';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your newsletter subscription logic here
    setStatus('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 rounded-2xl bg-white/5 backdrop-blur-lg shadow-xl border border-white/10">
      <h2 className="text-2xl font-bold mb-6 text-white">Subscribe to Our Newsletter</h2>
      <p className="text-gray-300 mb-6">Stay updated with our latest travel deals and destination guides.</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
          />
        </div>
        <button
          type="submit"
          className="w-full px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold 
                   transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg 
                   active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          Subscribe Now
        </button>
      </form>
      
      {status && (
        <div className="mt-4 text-sm text-green-400 text-center animate-fade-in">
          {status}
        </div>
      )}
    </div>
  );
};

export default SubscribeForm; 