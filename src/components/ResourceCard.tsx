

interface ResourceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ title, description, imageUrl, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
    >
      <div className="aspect-video relative">
        <img
          src={imageUrl}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/60 flex items-end p-6">
          <h3 className="text-xl font-bold text-white drop-shadow-lg">{title}</h3>
        </div>
      </div>
      <div className="p-6 bg-white">
        <p className="text-gray-600">{description}</p>
      </div>
    </a>
  );
};

export default ResourceCard; 