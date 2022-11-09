import { FaThemeco } from "react-icons/fa";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import ErrorCompo from "../../Pages/ErrorCompo/ErrorCompo";
import LogIn from "../../Pages/LogIn/LogIn";
import ReviewAdd from "../../Pages/ReviewAdd/ReviewAdd";
import ServiceDetailsPage from "../../Pages/ServiceDetailsPage/ServiceDetailsPage";
import Services from "../../Pages/Services/Services";
import Home from "../../Pages/Share/Home/Home";
import SingIn from "../../Pages/SingIn/SingIn";

export const router = createBrowserRouter([
  {
    path: "/",
    loader: () => fetch("http://localhost:5000/service/"),
    element: <MainLayout />,
    errorElement: <div>No fount 404</div>,
    errorElement: <ErrorCompo />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Home",
        loader: () => fetch("http://localhost:5000/service/"),
        element: <Home />,
      },
      {
        path: "/reviewadd",
        element: <ReviewAdd />,
      },
      {
        path: "/services",
        loader: () => fetch("http://localhost:5000/services/"),
        element: <Services />,
      },
      {
        path: "/services/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
        element: <ServiceDetailsPage />,
      },
      { path: "/singIn", element: <SingIn /> },
      { path: "/login", element: <LogIn /> },
    ],
  },
]);
