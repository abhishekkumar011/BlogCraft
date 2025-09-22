import axios from "axios";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";

function AllPost() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/posts/`
        );
        setPosts(response.data.posts);
      } catch (error) {
        console.error("Could not load posts ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="p-5 md:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-lg p-4 animate-pulse space-y-4"
          >
            <div className="h-40 bg-gray-200 rounded-md"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="p-5 md:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      {posts.length === 0 ? (
        <div className="text-center text-2xl w-full">There is no post</div>
      ) : (
        posts.map((post, index) => (
          <div key={index}>
            <PostCard {...post} />
          </div>
        ))
      )}
    </div>
  );
}

export default AllPost;
