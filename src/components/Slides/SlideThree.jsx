import { Link } from "react-router-dom";

const SlideThree = () => {
  return (
    <div
      className="min-h-screen hero"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="text-center hero-content text-neutral-content">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-xl font-bold md:text-5xl">
            Embrace the Future with AI!
          </h1>
          <p className="mb-5 text-sm">
            Step into the world of Artificial Intelligence with products that
            simplify your life. From smart home devices to AI-powered apps,
            learn how technology can enhance your daily routine. Share your
            thoughts and explore community recommendations on the latest AI
            innovations.
          </p>
          <Link to="/queries" className="btn btn-primary">
            All Queries
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SlideThree;
