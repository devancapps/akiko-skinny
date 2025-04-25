import React, { useEffect } from 'react';

const HotelWidget = () => {
  useEffect(() => {
    // Clean up any existing scripts first
    const existingScript = document.getElementById('tp-hotel-widget');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.id = 'tp-hotel-widget';
    script.src = "https://tp.media/content?currency=USD&trs=409664&shmarker=624965&locale=en&powered_by=true&border_radius=8&plain=true&color_button=%232681ff&color_button_text=%23ffffff&color_border=%232681ff&promo_id=4132&campaign_id=101";
    script.async = true;
    script.charset = "utf-8";
    
    // Add error handling
    script.onerror = () => {
      console.error('Failed to load hotel widget');
    };

    const container = document.getElementById('hotel-widget-container');
    if (container) {
      container.innerHTML = ''; // Clear container first
      container.appendChild(script);
    }

    return () => {
      // Cleanup on unmount
      const script = document.getElementById('tp-hotel-widget');
      if (script) {
        script.remove();
      }
    };
  }, []);

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 w-full max-w-3xl mx-auto border border-white/10">
      <div id="hotel-widget-container" className="min-h-[300px] flex items-center justify-center">
        <div className="text-white/60">Loading hotel search...</div>
      </div>
    </div>
  );
};

export default HotelWidget; 