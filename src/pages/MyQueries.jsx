import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/api";
import { AuthContext } from "../context/AuthProvider";

const MyQueries = () => {
  const [myQueries, setMyQueries] = useState([]);

  const { user } = useContext(AuthContext);

  const handleDelete = async (id) => {
    const res = await api.delete(`/delete-querie/${id}`);

    if (res.data.deletedCount > 0) {
      setMyQueries((prev) => {
        return prev.filter((querie) => {
          return querie._id !== id;
        });
      });
    }

    console.log(res);
  };

  useEffect(() => {
    const getMyQueries = async () => {
      const res = await api(`/user-queries?email=${user.email}`);

      setMyQueries(res.data);
    };

    getMyQueries();
  }, []);

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

        {myQueries.length === 0 && (
          <p className="my-10 text-center text-red-500">
            No Query Found Please Add One!
          </p>
        )}

        <div className="flex items-center justify-center mt-8">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {myQueries.map((item) => {
              const {
                _id,
                photoURL,
                productBrand,
                recommendationCount,
                productName,
                queryTitle,
                userName,
                timestamp,
              } = item;

              return (
                <div
                  key={_id}
                  className="max-w-sm overflow-hidden bg-white rounded shadow-lg"
                >
                  <img
                    className="object-cover w-full h-48"
                    src={photoURL}
                    alt="Product"
                  />
                  <div className="px-6 py-4">
                    <div className="mb-2 text-xl font-semibold text-gray-900">
                      {queryTitle}
                    </div>
                    <div className="flex items-center justify-between mb-2 font-semibold">
                      <div className="text-sm text-zinc-800">
                        <span className="mr-2">{productName}</span>
                        <span>({productBrand})</span>
                      </div>
                      <div className="text-sm text-zinc-800">
                        {recommendationCount} recommendations
                      </div>
                    </div>
                    <hr className="my-4 border-gray-200" />
                    <div className="flex items-center">
                      <img
                        className="w-10 h-10 mr-4 rounded-full"
                        src={user?.photoURL}
                        alt="User thumbnail"
                      />
                      <div>
                        <p className="font-semibold text-gray-900">
                          {userName}
                        </p>
                        <p className="text-sm text-gray-700">
                          Posted on: {new Date(timestamp).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-5 mt-4">
                      <Link
                        to={`/querie-details/${_id}`}
                        className="px-5 text-white bg-green-500 hover:bg-green-600 btn"
                      >
                        View Details
                      </Link>
                      <Link
                        to={`/edit-querie/${_id}`}
                        className="px-5 text-white bg-blue-500 hover:bg-blue-600 btn"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(_id)}
                        className="px-5 text-white bg-red-500 hover:bg-red-600 btn"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyQueries;
