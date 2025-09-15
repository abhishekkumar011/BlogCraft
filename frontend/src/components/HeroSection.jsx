import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

function HeroSection() {
  return (
    <div className="flex flex-col justify-center items-center py-20">
      <div className="flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
        <Sparkles className="h-4 w-4 mr-2" />
        Welcome to the future of blogging
      </div>

      <h1 className="text-6xl font-bold mb-6 text-center">
        Share Your Stories
        <br />
        <span className="text-primary">Inspire the World</span>
      </h1>

      <p className="text-xl text-muted-foreground mb-8 max-w-2xl text-center">
        Join thousands of writers and creators on BlogCraft. Create beautiful
        posts, build your audience, and connect with readers who love your
        content.
      </p>

      <div className="space-x-4">
        <Link to="/createpost">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 cursor-pointer"
          >
            Start Writing Today
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
        <Link to={"/all-post"}>
          <Button variant="outline" size="lg" className="cursor-pointer">
            Explore Posts
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
