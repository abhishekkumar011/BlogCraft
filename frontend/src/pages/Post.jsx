import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Pencil, Trash2 } from "lucide-react";

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      setLoading(true);
      const fetchSinglePost = async (id) => {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/posts/p/${id}`
        );
        setPost(response.data.postById);
      };
      fetchSinglePost(id);
    } catch (error) {
      console.error("Could not load post ", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleDeletePost = async () => {
    const token = localStorage.getItem("token");

    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/posts/p/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Post Deleted");
      navigate("/");
    } catch (error) {
      alert("Delete Failed");
      console.log("Delete Failed", error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  const isAuthor = user && post.author && user._id === post.author._id;

  return (
    <div className="flex justify-center">
      <div className="rounded-md shadow-md mx-20 my-10 py-10 px-10 border border-gray-300 space-y-4 max-w-3xl">
        <h1 className="text-4xl font-semibold">{post?.title}</h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img src="https://github.com/shadcn.png" />
            </div>
            <div className="flex flex-col gap-0">
              <h5 className="text-sm ">{post?.author?.name}</h5>
              <h6 className="text-xs ">{post?.author?.email}</h6>
            </div>
          </div>
          <p className="text-sm text-gray-600">
            {new Date(post.createdAt).toDateString()}
          </p>
        </div>
        <p className="text-gray-500 text-sm line-clamp-3">{post?.content}</p>

        {isAuthor && (
          <div className="flex justify-between">
            <Link
              to={`/post/edit/${post._id}`}
              className="flex items-center gap-2 bg-primary hover:bg-primary/80 text-white px-4 py-2 rounded-md font-medium"
            >
              Edit
              <Pencil size={17} />
            </Link>

            <button
              onClick={handleDeletePost}
              className="flex items-center gap-2 bg-red-600 cursor-pointer hover:bg-red-500 text-white px-4 py-2 rounded-md font-medium"
            >
              Delete
              <Trash2 size={17} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Post;
