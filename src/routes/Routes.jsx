import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default Routes;
