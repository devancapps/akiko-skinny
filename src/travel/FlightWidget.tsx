import React, { useEffect } from 'react';

const FlightWidget = () => {
  useEffect(() => {
    // Clean up any existing scripts first
    const existingScript = document.getElementById('tp-flight-widget');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.id = 'tp-flight-widget';
    script.src = "https://tp.media/content?trs=409664&shmarker=624965&locale=en&curr=USD&powered_by=true&border_radius=0&plain=true&color_button=%232681ff&color_button_text=%23ffffff&color_border=%232681ff&promo_id=4132&campaign_id=121";
    script.async = true;
    script.charset = "utf-8";
    
    // Add error handling
    script.onerror = () => {
      console.error('Failed to load flight widget');
    };

    const container = document.getElementById('flight-widget-container');
    if (container) {
      container.innerHTML = ''; // Clear container first
      container.appendChild(script);
    }

    return () => {
      // Cleanup on unmount
      const script = document.getElementById('tp-flight-widget');
      if (script) {
        script.remove();
      }
    };
  }, []);

  return (
    <div className="bg-white/75 backdrop-blur-sm rounded-lg shadow-lg p-6 w-full max-w-4xl mx-auto">
      <div id="flight-widget-container" className="min-h-[300px] flex items-center justify-center">
        <div className="text-gray-500">Loading flight search...</div>
      </div>
    </div>
  );
};

export default FlightWidget; 