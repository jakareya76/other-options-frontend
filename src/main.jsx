import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "swiper/css";

import { RouterProvider } from "react-router-dom";
import Routes from "./routes/Routes";
import AuthProvider from "./context/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={Routes} />
    </AuthProvider>
  </React.StrictMode>
);
