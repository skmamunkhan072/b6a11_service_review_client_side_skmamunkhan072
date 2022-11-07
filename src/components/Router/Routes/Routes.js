import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import About from "../../Pages/About/About";
import Home from "../../Pages/Share/Home/Home";
import SingIn from "../../Pages/SingIn/SingIn";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <div>No fount 404</div>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Home", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/singIn", element: <SingIn /> },
    ],
  },
]);
