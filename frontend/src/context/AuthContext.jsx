import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  //with this we persist login even user refresh the page
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    console.log("SAVED USER:", savedUser);
    return savedUser ? JSON.parse(savedUser) : null;
  });

  console.log("USER:", user);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    }
  }, [user]);

  const login = (userObj, token) => {
    localStorage.setItem("token", token);
    setUser(userObj);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
