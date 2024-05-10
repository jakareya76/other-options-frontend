import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="w-full h-[calc(100vh-100px)] flex items-center justify-center">
      <div className="text-center">
        <h4 className="text-4xl font-bold">404</h4>
        <Link to="/" className="btn my-5 btn-primary">
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
