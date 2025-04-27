import { useEffect, useRef } from "react";
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

  useEffect(() => {
    const startAutoScroll = () => {
      scrollInterval.current = setInterval(() => {
        if (carouselRef.current) {
          carouselRef.current.scrollLeft += 1;
        }
      }, 20); // Adjust speed as needed
    };

    const stopAutoScroll = () => {
      if (scrollInterval.current) {
        clearInterval(scrollInterval.current);
        scrollInterval.current = null;
      }
    };

    const handleMouseEnter = () => stopAutoScroll();
    const handleMouseLeave = () => startAutoScroll();

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("mouseenter", handleMouseEnter);
      carousel.addEventListener("mouseleave", handleMouseLeave);
    }

    startAutoScroll();

    return () => {
      stopAutoScroll();
      if (carousel) {
        carousel.removeEventListener("mouseenter", handleMouseEnter);
        carousel.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div
      ref={carouselRef}
      className="flex overflow-x-auto pb-4 space-x-4 scrollbar-hide"
      style={{ scrollBehavior: "smooth" }}
    >
      {destinations.map((destination) => (
        <DestinationCard key={destination.id} {...destination} />
      ))}
    </div>
  );
};

export default DestinationCarousel;
