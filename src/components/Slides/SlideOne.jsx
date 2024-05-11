import { Link } from "react-router-dom";

const SlideOne = () => {
  return (
    <div
      className="min-h-screen hero"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/129208/pexels-photo-129208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="text-center hero-content text-neutral-content">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-xl font-bold md:text-5xl">
            Power Your Productivity!
          </h1>
          <p className="mb-5 text-sm">
            Discover high-performance laptops tailored to meet your work and
            entertainment needs. Explore user reviews and find the perfect match
            to boost your efficiency. Join our community and share your
            experiences to help others find their ideal tech tools.
          </p>
          <Link to="/queries" className="btn btn-primary">
            All Queries
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SlideOne;
