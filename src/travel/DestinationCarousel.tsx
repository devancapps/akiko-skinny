import { useEffect, useRef, useState } from "react";
import DestinationCard from "./DestinationCard";

const destinations = [
  {
    id: 1,
    city: "Tokyo",
    departure: "from San Francisco",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    link: "https://www.trip.com/hotels/tokyo-hotels-list-50026/?marker=624965",
  },
  {
    id: 2,
    city: "Paris",
    departure: "from New York",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    link: "https://www.trip.com/hotels/paris-hotels-list-50026/?marker=624965",
  },
  {
    id: 3,
    city: "Bali",
    departure: "from Los Angeles",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    link: "https://www.trip.com/hotels/bali-hotels-list-50026/?marker=624965",
  },
  {
    id: 4,
    city: "Rome",
    departure: "from Chicago",
    image:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    link: "https://www.trip.com/hotels/rome-hotels-list-50026/?marker=624965",
  },
  {
    id: 5,
    city: "Sydney",
    departure: "from Seattle",
    image:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    link: "https://www.trip.com/hotels/sydney-hotels-list-50026/?marker=624965",
  },
  {
    id: 6,
    city: "Dubai",
    departure: "from Boston",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    link: "https://www.trip.com/hotels/dubai-hotels-list-50026/?marker=624965",
  },
  {
    id: 7,
    city: "Barcelona",
    departure: "from Miami",
    image:
      "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    link: "https://www.trip.com/hotels/barcelona-hotels-list-50026/?marker=624965",
  },
  {
    id: 8,
    city: "Santorini",
    departure: "from Atlanta",
    image:
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    link: "https://www.trip.com/hotels/santorini-hotels-list-50026/?marker=624965",
  },
];

const DestinationCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollInterval = useRef<NodeJS.Timeout | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showSwipeHint, setShowSwipeHint] = useState(true);

  const startAutoScroll = () => {
    if (scrollInterval.current || !carouselRef.current) return;
    scrollInterval.current = setInterval(() => {
      const carousel = carouselRef.current!;
      if (
        carousel.scrollLeft + carousel.clientWidth >=
        carousel.scrollWidth - 1
      ) {
        carousel.scrollLeft = 0;
      } else {
        carousel.scrollLeft += 2;
      }
    }, 20);
  };

  const stopAutoScroll = () => {
    if (scrollInterval.current) {
      clearInterval(scrollInterval.current);
      scrollInterval.current = null;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleTouchStart = () => {
      if (isMobile) {
        stopAutoScroll();
        setShowSwipeHint(false);
      }
    };

    const handleMouseEnter = () => {
      if (!isMobile) stopAutoScroll();
    };
    const handleMouseLeave = () => {
      if (!isMobile) startAutoScroll();
    };

    // Intersection observer for desktop
    if (!isMobile) {
      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            startAutoScroll();
          } else {
            stopAutoScroll();
          }
        },
        { threshold: 0.1 }
      );
      observerRef.current.observe(carousel);
    } else {
      stopAutoScroll(); // Ensure no auto-scroll on mobile
    }

    carousel.addEventListener("mouseenter", handleMouseEnter);
    carousel.addEventListener("mouseleave", handleMouseLeave);
    carousel.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });

    return () => {
      stopAutoScroll();
      observerRef.current?.disconnect();
      carousel.removeEventListener("mouseenter", handleMouseEnter);
      carousel.removeEventListener("mouseleave", handleMouseLeave);
      carousel.removeEventListener("touchstart", handleTouchStart);
    };
  }, [isMobile]);

  return (
    <div className="relative">
      {isMobile && showSwipeHint && (
        <div className="absolute z-10 top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white text-xs px-2 py-1 rounded-full animate-pulse pointer-events-none">
          Swipe →
        </div>
      )}
      <div
        ref={carouselRef}
        className={`flex overflow-x-auto pb-4 space-x-4 scrollbar-hide ${
          isMobile ? "snap-x snap-mandatory" : ""
        }`}
        style={{
          scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch",
          touchAction: "pan-x",
        }}
      >
        {destinations.map((destination) => (
          <div
            key={destination.id}
            className={`${isMobile ? "snap-start" : ""} shrink-0`}
          >
            <DestinationCard {...destination} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationCarousel;
