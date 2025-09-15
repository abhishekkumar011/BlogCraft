import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchSinglePost = async (id) => {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/posts/p/${id}`
      );
      setPost(response.data.postById);
    };
    fetchSinglePost(id);
  }, []);

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex justify-center">
      <div className="rounded-md shadow-md mx-20 my-10 py-10 px-10 border border-gray-300 space-y-4 max-w-3xl">
        <h1 className="text-4xl font-semibold">{post?.title}</h1>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img src="https://github.com/shadcn.png" />
          </div>
          <div className="flex flex-col gap-0">
            <h5 className="text-sm ">{post?.author?.name}</h5>
            <h6 className="text-xs ">{post?.author?.email}</h6>
          </div>
        </div>
        <p className="text-gray-500 text-sm line-clamp-3">{post?.content}</p>
      </div>
    </div>
  );
}

export default Post;
