import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getBlogPostBySlug, BlogPost } from "../services/blogService";

const BlogDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      if (slug) {
        const fetchedBlog = await getBlogPostBySlug(slug);
        setBlog(fetchedBlog);
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  return (
    <main className="min-h-screen pt-24 pb-16 bg-white transition-transform duration-500">
      <div className="max-w-[1200px] mx-auto px-4">
        {loading ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-gray-500">Loading...</div>
          </div>
        ) : blog ? (
          <>
            <h1 className="text-4xl font-bold mb-4 text-gray-900">
              {blog.title}
            </h1>
            <div className="flex items-center justify-center text-sm text-gray-500 mb-6">
              <span>{blog.author}</span>
              <span className="mx-2">•</span>
              <span>{new Date(blog.date).toLocaleDateString()}</span>
              <span className="mx-2">•</span>
              <span>{blog.readingTime} read</span>
            </div>
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full h-64 object-cover mb-4"
            />
            <div className="h-auto text-left text-gray-500 max-w-none break-words mb-6">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  p: ({ node, ...props }) => (
                    <p style={{ margin: "12px" }} {...props} />
                  ),
                  li: ({ node, ...props }) => (
                    <li style={{ margin: "12px" }} {...props} />
                  ),
                }}
              >
                {blog.excerpt}
              </ReactMarkdown>
            </div>
            {blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm hover:bg-blue-100 transition-colors duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </>
        ) : (
          <div>Blog not found</div>
        )}
      </div>
    </main>
  );
};

export default BlogDetails;
