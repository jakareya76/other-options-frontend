import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import api from "../api/api";

const Login = () => {
  const { loginUser, user } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await loginUser(email, password);

      const userInfo = { email };

      const res = await api.post("/jwt", userInfo, {
        withCredentials: true,
      });

      if (res.data.success) {
        toast.success("Login Successfully");
        navigate("/");
      }
    } catch (error) {
      if (error.message === "Firebase: Error (auth/invalid-credential).")
        toast.error("invalid credential");
    }
  };

  if (user) {
    navigate("/");
  }

  return (
    <div className="min-h-screen hero bg-base-200">
      <div className="flex-col gap-8 hero-content">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold">Login now!</h1>
        </div>
        <div className="w-full shadow-2xl card shrink-0 bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="mt-6 form-control">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
