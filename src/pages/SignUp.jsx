import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const { signUpUser, user } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    try {
      await signUpUser(email, password);

      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });

      toast.success("Sign Up Successfully");

      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  if (user) {
    navigate("/");
  }

  return (
    <div className="min-h-screen hero bg-base-200">
      <div className="flex-col gap-8 hero-content">
        <div className="shadow-2xl card shrink-0 bg-base-100">
          <form
            onSubmit={handleSignUp}
            className="grid col-span-1 gap-5 p-5 md:grid-cols-2"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
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
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="mt-6 form-control md:col-span-2">
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
