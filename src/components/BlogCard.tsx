
import { Link } from 'react-router-dom';

interface BlogCardProps {
  title: string;
  excerpt: string;
  slug: string;
  imageUrl: string;
  author: string;
  date: string;
  readTime: string;
  tags?: string[];
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  excerpt,
  slug,
  imageUrl,
  author,
  date,
  readTime,
  tags = []
}) => {
  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <Link to={`/blogs/${slug}`} className="block">
        <div className="aspect-video relative">
          <img
            src={imageUrl}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/60" />
        </div>
        <div className="p-6">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <span>{author}</span>
            <span className="mx-2">•</span>
            <span>{date}</span>
            <span className="mx-2">•</span>
            <span>{readTime} read</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
            {title}
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{excerpt}</p>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm hover:bg-blue-100 transition-colors duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </article>
  );
};

export default BlogCard; 