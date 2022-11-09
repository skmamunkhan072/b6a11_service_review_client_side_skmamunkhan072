import { FaThemeco } from "react-icons/fa";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import ErrorCompo from "../../Pages/ErrorCompo/ErrorCompo";
import LogIn from "../../Pages/LogIn/LogIn";
import PrivetRoute from "../../Pages/PrivetRoute/PrivetRoute";
import ReviewAdd from "../../Pages/ReviewAdd/ReviewAdd";
import ServiceDetailsPage from "../../Pages/ServiceDetailsPage/ServiceDetailsPage";
import Services from "../../Pages/Services/Services";
import Home from "../../Pages/Share/Home/Home";
import SingIn from "../../Pages/SingIn/SingIn";

export const router = createBrowserRouter([
  {
    path: "/",
    loader: () => fetch("https://home-kitchen-server.vercel.app/service/"),
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
        loader: () => fetch("https://home-kitchen-server.vercel.app/service/"),
        element: <Home />,
      },
      {
        path: "/reviewadd",
        element: (
          <PrivetRoute>
            <ReviewAdd />
          </PrivetRoute>
        ),
      },
      {
        path: "/services",
        loader: () => fetch("https://home-kitchen-server.vercel.app/services/"),
        element: <Services />,
      },
      {
        path: "/services/:id",
        loader: ({ params }) =>
          fetch(`https://home-kitchen-server.vercel.app/services/${params.id}`),
        element: <ServiceDetailsPage />,
      },
      { path: "/singIn", element: <SingIn /> },
      { path: "/login", element: <LogIn /> },
    ],
  },
]);
