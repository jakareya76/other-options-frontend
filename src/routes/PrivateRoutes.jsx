import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="w-full h-[calc(100vh-100px)] flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/" />;
};

export default PrivateRoutes;
