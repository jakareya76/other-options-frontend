import { Link } from "react-router-dom";

const MyQueries = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/919734/pexels-photo-919734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
        }}
        className="flex flex-col items-center justify-center gap-4 py-16 bg-no-repeat bg-cover"
      >
        <h2 className="text-2xl font-bold text-white">Explore Your Queries</h2>
        <Link to="/add-queries" className="px-8 btn btn-primary">
          Add Query
        </Link>
      </div>

      <div className="my-10">
        <h2 className="text-3xl font-bold text-center">My Query</h2>

        <p className="my-10 text-center text-red-500">
          No Query Found Please Add One!
        </p>
      </div>
    </div>
  );
};

export default MyQueries;
