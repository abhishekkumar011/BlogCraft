import "./index.css";
import App from "./App.jsx";
import { StrictMode } from "react";
import Home from "./pages/Home.jsx";
import AllPost from "./pages/AllPost.jsx";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Post from "./pages/Post.jsx";
import Login from "./pages/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/all-post",
        element: <AllPost />,
      },
      {
        path: "/post/:id",
        element: <Post />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
