import axios from "axios";
import { useState } from "react";
import { Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";

function PostFormComponent() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    const token = localStorage.getItem("token");
    setError("");
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);

    if (file) formData.append("image", file);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/posts/createpost`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response?.data) {
        alert("Post created successfully");
      }

      navigate("/");
    } catch (error) {
      console.log("Post creation failed ", error);
      if (error.response.data.msg) {
        setError(error.response.data.msg);
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="py-10 px-5 md:px-0 flex items-center justify-center">
      <div className="p-5 md:p-10 shadow-md w-full md:w-2/3 rounded-lg border border-gray-300">
        <h4 className="text-primary text-xl md:text-2xl font-semibold text-center">
          Create Your Post
        </h4>

        <form onSubmit={handleSubmit}>
          <div className="mt-10 flex flex-col gap-8">
            <div className="flex flex-col gap-1">
              <label className="font-medium text-gray-800">Post Title</label>
              <input
                required
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                placeholder="Enter your title"
                className="border-2 border-gray-200 text-sm p-2 rounded-md outline-0"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className=" font-medium text-gray-800">Post Content</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="border-2 h-50 border-gray-200 text-sm p-2 rounded-md outline-0"
                required
                placeholder="Enter your content"
              />
            </div>

            {error && (
              <p className="text-red-600 text-sm text-center font-medium">
                {error}
              </p>
            )}

            <div className="flex flex-col md:flex-row items-center md:justify-between gap-4">
              <input
                type="file"
                className="font-medium text-primary border border-gray-300 rounded p-2 w-full md:w-auto cursor-pointer text-sm"
                accept="image/*"
                onChange={(e) => setFile(e.target.files[0])}
              />

              <button
                type="submit"
                className="flex items-center gap-2 text-white bg-primary px-4 py-2 w-full md:w-auto justify-center rounded-md cursor-pointer text-sm md:text-base"
              >
                Publish
                <Upload size={18} />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostFormComponent;
