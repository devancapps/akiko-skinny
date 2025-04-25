import React from 'react';

const Blogs = () => {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Travel Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder blog posts */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <article key={item} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200 animate-pulse" />
              <div className="p-6">
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-4 animate-pulse" />
                <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse" />
                <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Blogs; 