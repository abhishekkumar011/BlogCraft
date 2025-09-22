import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditPostComponent() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/posts/p/${id}`
        );
        setTitle(response?.data?.postById?.title);
        setContent(response?.data?.postById?.content);
      } catch (err) {
        console.error("Failed to load post", err);
      }
    };
    fetchPost();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setError("");

    const token = localStorage.getItem("token");

    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/posts/p/${id}`,
        { title, content },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Post updated successfully");
      navigate(`/post/${id}`);
    } catch (err) {
      console.error("Update failed", err);
      if (err.response?.data?.msg) {
        setError(err.response.data.msg);
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="py-10 px-5 md:px-0 flex items-center justify-center">
      <div className="p-5 md:p-10 shadow-md w-full md:w-2/3 rounded-lg border border-gray-300">
        <h4 className="text-primary text-xl md:text-2xl font-semibold text-center">
          Edit Post
        </h4>

        <form onSubmit={handleUpdate}>
          <div className="mt-10 flex flex-col gap-8">
            <div className="flex flex-col gap-1">
              <label className="font-medium text-gray-800">Post Title</label>
              <input
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border-2 border-gray-200 p-2 rounded-md outline-0 text-sm"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-medium text-gray-800">Post Content</label>
              <textarea
                required
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="border-2 h-50 border-gray-200 p-2 rounded-md outline-0 text-sm"
              />
            </div>

            {error && (
              <p className="text-red-600 text-sm text-center font-medium">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded-md font-medium hover:bg-primary/80 text-sm md:text-base"
            >
              Update Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditPostComponent;
