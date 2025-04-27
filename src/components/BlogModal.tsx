import React from "react";
import Markdown from "markdown-to-jsx";

interface BlogModalProps {
  isOpen: boolean;
  onClose: () => void;
  blog: {
    title: string;
    excerpt: string;
    content: string;
    imageUrl: string;
    author: string;
    date: string;
    readingTime: string;
    tags: string[];
  };
}

const BlogModal: React.FC<BlogModalProps> = ({ isOpen, onClose, blog }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-2xl w-full max-h-[80vh] relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <img
          src={blog.imageUrl}
          alt={blog.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <span>{blog.author}</span>
            <span className="mx-2">•</span>
            <span>{new Date(blog.date).toLocaleDateString()}</span>
            <span className="mx-2">•</span>
            <span>{blog.readingTime} read</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            {blog.title}
          </h3>
          <div className="prose text-left pb-4 max-w-none break-words whitespace-pre-wrap">
            <Markdown className="text-gray-600 mb-4">{blog.excerpt}</Markdown>
          </div>
          {blog.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogModal;
