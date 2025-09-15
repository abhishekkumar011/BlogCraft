import "./index.css";
import App from "./App.jsx";
import { StrictMode } from "react";
import Post from "./pages/Post.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import AllPost from "./pages/AllPost.jsx";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "./context/AuthContext.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PostForm from "./pages/PostForm.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import EditPost from "./pages/EditPost.jsx";

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
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/all-post",
        element: <AllPost />,
      },
      {
        path: "/post/:id",
        element: <Post />,
      },
      {
        path: "/createpost",
        element: (
          <PrivateRoute>
            <PostForm />
          </PrivateRoute>
        ),
      },
      {
        path: "/post/edit/:id",
        element: <EditPost />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
