import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PenTool, User } from "lucide-react";

function Header() {
  const navItems = [
    {
      name: "All Post",
      link: "/all-post",
    },
    {
      name: "Write",
      link: "/createpost",
    },
    {
      name: "About",
      link: "",
    },
  ];

  return (
    <div className="sticky top-0 z-50 flex justify-between items-center backdrop-blur px-5 py-3 shadow">
      <Link to={"/"} className="flex gap-2 items-center">
        <PenTool className="h-7 w-7 text-primary" />
        <h1 className="text-2xl font-bold text-foreground">BlogCraft</h1>
      </Link>

      <div className="space-x-7">
        {navItems.map((item, index) => (
          <Link to={item.link} key={index} className="hover:text-secondary">
            {item.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center space-x-4">
        <Link to="/login">
          <Button variant="ghost" size="sm">
            <User className="h-4 w-4 mr-1" />
            Sign In
          </Button>
        </Link>
        <Link to="/signup">
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
