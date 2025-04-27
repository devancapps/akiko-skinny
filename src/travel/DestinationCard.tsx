import { useState } from "react";

interface DestinationCardProps {
  city: string;
  departure: string;
  image: string;
  link: string;
}

const DestinationCard = ({
  city,
  departure,
  image,
  link,
}: DestinationCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-xl aspect-[4/3] w-80">
        {" "}
        {/* Increased width */}
        <img
          src={image}
          alt={city}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? "scale-110" : ""
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-bold text-white mb-2">{city}</h3>
          <p className="text-white/90">From {departure}</p>
        </div>
      </div>
    </a>
  );
};

export default DestinationCard;
