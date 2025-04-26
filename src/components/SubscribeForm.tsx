import { useState, useEffect } from 'react';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    // Here you would typically send the email to your backend
    console.log('Subscribing email:', email);
    setIsSubscribed(true);
    setEmail('');
  };

  useEffect(() => {
    if (isSubscribed) {
      const timer = setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isSubscribed]);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
        Stay Updated with Travel Deals
      </h2>
      <p className="text-gray-600 mb-8 text-center">
        Subscribe to our newsletter and never miss out on exclusive travel offers and destination guides.
      </p>
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
        >
          Subscribe
        </button>
      </form>

      {isSubscribed && (
        <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg text-center">
          Thank you for subscribing! You'll receive our next newsletter.
        </div>
      )}
    </div>
  );
};

export default SubscribeForm; 