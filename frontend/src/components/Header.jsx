import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Menu, PenTool, User, X } from "lucide-react";

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

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate("/login");
    setIsOpen(false);
  };

  return (
    <div className="sticky top-0 z-50 flex justify-between items-center backdrop-blur px-3 md:px-5 py-3 shadow">
      <Link to={"/"} className="flex gap-2 items-center">
        <PenTool className="h-5 w-5 md:h-7 md:w-7 text-primary" />
        <h1 className="text-lg md:text-2xl font-bold text-gray-800">
          BlogCraft
        </h1>
      </Link>

      <div className="space-x-7 hidden md:flex">
        {navItems.map((item, index) => (
          <Link to={item.link} key={index} className="hover:text-primary">
            {item.name}
          </Link>
        ))}
      </div>

      <div className="md:hidden z-50">
        {isOpen ? (
          <X onClick={() => setIsOpen(false)} className="cursor-pointer" />
        ) : (
          <Menu onClick={() => setIsOpen(true)} className="cursor-pointer" />
        )}
      </div>

      <div
        className={`absolute top-0 left-0 w-full bg-white shadow-lg z-10 rounded-b-2xl py-8 space-y-5
              transform transition-all duration-500 ease-in-out
              ${
                isOpen
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-full opacity-0 pointer-events-none"
              }`}
      >
        <div className="flex flex-col items-center gap-5">
          {navItems.map((item, index) => (
            <Link to={item.link} key={index} onClick={() => setIsOpen(false)}>
              {item.name}
            </Link>
          ))}
        </div>

        {user ? (
          <div className="flex items-center justify-center">
            <button
              onClick={handleLogout}
              className="bg-primary font-medium px-4 text-sm py-2 text-white rounded-md"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-4 items-center">
            <Link to="/login" onClick={() => setIsOpen(false)}>
              <button className="flex items-center gap-1 font-medium cursor-pointer px-4 py-2 text-sm rounded-md">
                <User className="h-4 w-4 mr-1" />
                Sign In
              </button>
            </Link>
            <Link to="/signup" onClick={() => setIsOpen(false)}>
              <button className="bg-primary font-medium cursor-pointer px-4 text-sm py-2 text-white rounded-md">
                Sign up
              </button>
            </Link>
          </div>
        )}
      </div>

      <div className="hidden md:flex">
        {user ? (
          <button
            onClick={handleLogout}
            className="bg-primary font-medium hover:bg-primary/90 cursor-pointer px-4 text-sm py-2 text-white rounded-md"
          >
            Logout
          </button>
        ) : (
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <button className="flex items-center gap-1 font-medium cursor-pointer hover:bg-primary hover:text-white px-4 py-2 text-sm rounded-md">
                <User className="h-4 w-4 mr-1" />
                Sign In
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-primary font-medium hover:bg-primary/90 cursor-pointer px-4 text-sm py-2 text-white rounded-md">
                Sign up
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
