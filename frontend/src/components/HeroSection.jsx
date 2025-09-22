import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

function HeroSection() {
  return (
    <div className="flex flex-col justify-center items-center py-20 px-5 md:px-0">
      <div className="flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-xs  md:text-sm font-medium mb-6">
        <Sparkles className="h-4 w-4 mr-2" />
        Welcome to the future of blogging
      </div>

      <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center text-gray-800">
        Share Your Stories
        <br />
        <span className="text-primary">Inspire the World</span>
      </h1>

      <p className="md:text-xl text-gray-500 mb-8 max-w-2xl text-center">
        Join thousands of writers and creators on BlogCraft. Create beautiful
        posts, build your audience, and connect with readers who love your
        content.
      </p>

      <div className="flex items-center flex-col md:flex-row gap-4">
        <Link to="/createpost">
          <button className="bg-primary hover:bg-primary/80 cursor-pointer flex items-center px-4 py-2 rounded-lg text-white">
            Start Writing Today
            <ArrowRight className="ml-1 h-4 w-4" />
          </button>
        </Link>
        <Link to={"/all-post"}>
          <button className="cursor-pointer border px-4 py-2 rounded-lg border-gray-300 hover:bg-primary/90 hover:text-white">
            Explore Posts
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
