import { Link } from "react-router-dom";

const SlideTow = () => {
  return (
    <div
      className="min-h-screen hero"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="text-center hero-content text-neutral-content">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-xl font-bold md:text-5xl">
            Stay Connected on the Go!
          </h1>
          <p className="mb-5 text-sm">
            Find the latest smartphones with cutting-edge technology and
            user-driven insights. Whether you're looking for battery life,
            camera quality, or seamless performance, our platform offers
            personalized recommendations from real users. Get the best device
            for your lifestyle today!
          </p>
          <Link to="/queries" className="btn btn-primary">
            All Queries
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SlideTow;
