import { db } from "../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  imageUrl: string;
  author: string;
  date: string;
  readingTime: string;
  tags: string[];
  content: string;
}

export const getBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    const blogPostsRef = collection(db, "blogPosts");
    const q = query(blogPostsRef, orderBy("date", "desc"));
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as BlogPost[];
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
};

export const getBlogPostBySlug = async (
  slug: string
): Promise<BlogPost | null> => {
  try {
    const blogPostsRef = collection(db, "blogPosts");
    const q = query(blogPostsRef, orderBy("date", "desc"));
    const querySnapshot = await getDocs(q);

    const posts = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as BlogPost[];

    return posts.find((post) => post.slug === slug) || null;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
};
