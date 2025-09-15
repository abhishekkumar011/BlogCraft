import { Link } from "react-router-dom";
import { ArrowRight, PenTool } from "lucide-react";

function LoginComponent() {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="flex items-center gap-2">
        <PenTool className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-semibold text-gray-800">BlogCraft</h1>
      </div>
      <h4 className="text-gray-500 mt-1">
        Welcome back to your creative space
      </h4>

      <div className="shadow rounded-lg border border-gray-300 p-10 mt-10">
        <h2 className="text-2xl text-center font-semibold text-gray-800">
          Sign In
        </h2>
        <h5 className="text-gray-500 mt-1 text-sm text-center">
          Enter your credentials to access your account
        </h5>

        <div className="flex flex-col gap-4 mt-10 min-w-sm">
          <div className="flex flex-col gap-1">
            <label className=" font-semibold text-gray-800">
              Email Address
            </label>
            <input
              placeholder="Enter your email"
              className="border-2 border-gray-200 p-2 rounded-md outline-0"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className=" font-semibold text-gray-800">Password</label>
            <input
              placeholder="Enter your password"
              className="border-2 border-gray-200 p-2 rounded-md outline-0"
            />
          </div>

          <button className="flex items-center justify-center rounded w-full h-12 bg-orange-600 cursor-pointer mt-4 hover:bg-orange-700 text-white font-medium">
            Sign In
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-primary hover:text-orange-700 font-medium"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
