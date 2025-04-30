import { Link } from "react-router-dom";

interface BlogCardProps {
  title: string;
  excerpt: string;
  slug: string;
  imageUrl: string;
  author: string;
  date: string;
  readingTime: string;
  tags?: string[];
  onClick: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  excerpt,
  slug,
  imageUrl,
  author,
  date,
  readingTime,
  tags = [],
}) => {
  return (
    <Link to={`/blog/${slug}`} className="block group">
      <article
        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
        style={{ height: "450px" }}
      >
        <div className="block h-full">
          <div className="aspect-video relative">
            <img
              src={imageUrl}
              alt={title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/60" />
          </div>
          <div className="pt-6 px-6 pb-3 flex flex-col justify-between h-[261px]">
            <div>
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>{author}</span>
                <span className="mx-2">•</span>
                <span>{new Date(date).toLocaleDateString()}</span>
                <span className="mx-2">•</span>
                <span>{readingTime} read</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                {title}
              </h3>
              <p className="text-gray-600 mb-1 line-clamp-2 overflow-hidden">
                {excerpt}
              </p>
            </div>
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-auto mb-4">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="mt-auto px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm hover:bg-blue-100 transition-colors duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
