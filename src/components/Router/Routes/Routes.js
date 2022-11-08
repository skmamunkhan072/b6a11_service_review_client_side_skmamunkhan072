import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import About from "../../Pages/About/About";
import ErrorCompo from "../../Pages/ErrorCompo/ErrorCompo";
import LogIn from "../../Pages/LogIn/LogIn";
import ServiceDetailsPage from "../../Pages/ServiceDetailsPage/ServiceDetailsPage";
import Services from "../../Pages/Services/Services";
import Home from "../../Pages/Share/Home/Home";
import SingIn from "../../Pages/SingIn/SingIn";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <div>No fount 404</div>,
    errorElement: <ErrorCompo />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Home", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <Services /> },
      { path: "/services/:id", element: <ServiceDetailsPage /> },
      { path: "/singIn", element: <SingIn /> },
      { path: "/login", element: <LogIn /> },
    ],
  },
]);
