import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/HomePage/Home/Home";
import Login from "../pages/LoginPage/Login";
import Register from "../pages/LoginPage/Register";
import About from "../pages/AboutPage/About";
import Contact from "../pages/ContactPage/Contact";
import Categories from "../pages/HomePage/Categories/Categories";
import Menu from "../pages/menuPage/Menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element:<Contact/>
      },
      {
        path: "menu",
        element:<Menu/>
      }
    ],
  },
]);

export default router;
