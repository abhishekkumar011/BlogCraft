import axios from "axios";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";

function AllPost() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      const fetchPosts = async () => {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/posts/`
        );
        setPosts(response.data.posts);
      };
      fetchPosts();
    } catch (error) {
      console.error("Could not load posts ", error);
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-10 grid grid-cols-4">
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
