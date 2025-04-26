import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import { getBlogPosts, BlogPost } from "../services/blogService";

const Blogs = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const posts = await getBlogPosts();
        setBlogPosts(posts);
      } catch (err) {
        setError("Failed to load blog posts. Please try again later.");
        console.error("Error fetching blog posts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen pt-24 pb-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-gray-900">Travel Blog</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <article
                key={item}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="h-48 animate-pulse" />
                <div className="p-6">
                  <div className="h-6 rounded w-3/4 mb-4 animate-pulse" />
                  <div className="h-4 rounded w-full mb-2 animate-pulse" />
                  <div className="h-4 rounded w-2/3 animate-pulse" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen pt-24 pb-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-gray-900">Travel Blog</h1>
          <div className="text-red-500 text-center py-8">{error}</div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-24 pb-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Travel Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              slug={post.slug}
              imageUrl={post.imageUrl}
              author={post.author}
              date={post.date}
              readTime={post.readTime}
              tags={post.tags}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Blogs;
