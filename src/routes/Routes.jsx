import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Queries from "../pages/Queries";
import RecommendationsForMe from "../pages/RecommendationsForMe";
import MyQueries from "../pages/MyQueries";
import MyRecommendations from "../pages/MyRecommendations";
import AddQueries from "../pages/AddQueries";

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
      {
        path: "/queries",
        element: <Queries />,
      },
      {
        path: "/recommendations-for-me",
        element: <RecommendationsForMe />,
      },
      {
        path: "/my-queries",
        element: <MyQueries />,
      },
      {
        path: "/my-recommendations",
        element: <MyRecommendations />,
      },
      {
        path: "/add-queries",
        element: <AddQueries />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
]);

export default Routes;
