import React from 'react';

const Resources = () => {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Travel Resources</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Travel Planning */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Travel Planning</h2>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Packing Checklists</h3>
                  <p className="text-gray-600">Essential items for different types of trips</p>
                </div>
              </li>
              {/* Add more planning resources */}
            </ul>
          </section>

          {/* Travel Tips */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Travel Tips</h2>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <div className="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Travel Safety</h3>
                  <p className="text-gray-600">Tips for staying safe while traveling</p>
                </div>
              </li>
              {/* Add more tips */}
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Resources; 