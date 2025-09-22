import axios from "axios";
import { useContext, useState } from "react";
import { ArrowRight, PenTool } from "lucide-react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function SignupComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/users/signup`,
        { name, email, password }
      );

      console.log("SIGNUP RESPONSE:", response.data);

      //case: If backend returns token & user: then we will auto logged in user
      if (response?.data?.user && response?.data?.token) {
        login(response.data.user, response.data.token);
        navigate("/");
      } else {
        //case: if signup does not have token
        alert("Signup successful. Please login");
        navigate("/login");
      }
    } catch (error) {
      console.error("Signup Failed", error);

      if (error.response.data.msg) {
        setError(error.response.data.msg);
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="flex items-center gap-2">
        <PenTool className="h-5 w-5 md:h-8 md:w-8 text-primary" />
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
          BlogCraft
        </h1>
      </div>
      <h4 className="text-gray-500 mt-1">Start your blogging journey today</h4>

      <div className="shadow rounded-lg border border-gray-300 p-5 md:p-10 mt-10">
        <h2 className="text-xl md:text-2xl text-center font-semibold text-gray-800">
          Create Account
        </h2>
        <h5 className="text-gray-500 mt-1 text-sm text-center">
          Join thousands of writers sharing their stories
        </h5>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 mt-10 md:min-w-sm">
            <div className="flex flex-col gap-1">
              <label className="text-sm md:text-base font-semibold text-gray-800">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter your full name"
                className="border-2 border-gray-200 text-sm p-2 rounded-md outline-0"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm md:text-base font-semibold text-gray-800">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="border-2 border-gray-200 text-sm p-2 rounded-md outline-0"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm md:text-base font-semibold text-gray-800">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
                className="border-2 border-gray-200 text-sm p-2 rounded-md outline-0"
              />
            </div>

            {error && (
              <p className="text-red-600 text-sm text-center font-medium">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="text-sm md:text-base flex items-center justify-center rounded w-full h-8 md:h-12 bg-orange-600 cursor-pointer mt-4 hover:bg-orange-700 text-white font-medium"
            >
              Create Account
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>

            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-primary hover:text-orange-700 font-medium"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupComponent;
