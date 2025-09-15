import { Link } from "react-router-dom";
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
        <h1 className="text-2xl font-bold text-gray-800">BlogCraft</h1>
      </Link>

      <div className="space-x-7">
        {navItems.map((item, index) => (
          <Link to={item.link} key={index} className="hover:text-primary">
            {item.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center space-x-4">
        <Link to="/login">
          <button className="flex items-center gap-1 font-medium cursor-pointer hover:bg-primary hover:text-white px-4 py-2 text-sm rounded-md">
            <User className="h-4 w-4 mr-1" />
            Sign In
          </button>
        </Link>
        <Link to="/signup">
          <button className="bg-primary font-medium hover:bg-primary/90 cursor-pointer px-4 text-sm py-2 text-white rounded-md">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
