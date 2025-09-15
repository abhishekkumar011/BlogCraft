import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import axios from "axios";

function AllPost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/posts/`
      );
      setPosts(response.data.posts);
    };
    fetchPost();
  }, []);

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
