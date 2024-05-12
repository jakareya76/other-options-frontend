import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Link } from "react-router-dom";

const QuerieCard = ({ querie }) => {
  const {
    _id,
    photoURL,
    productBrand,
    recommendationCount,
    productName,
    queryTitle,
    userName,
    timestamp,
  } = querie;

  const { user } = useContext(AuthContext);

  return (
    <div className="max-w-sm overflow-hidden bg-white rounded shadow-lg">
      <img className="object-cover w-full h-48" src={photoURL} alt="Product" />
      <div className="px-6 py-4">
        <div className="mb-2 text-lg font-semibold text-gray-900">
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
            <p className="font-semibold text-gray-900">{userName}</p>
            <p className="text-sm text-gray-700">
              Posted on: {new Date(timestamp).toLocaleDateString()}
            </p>
          </div>
        </div>
        <Link
          to={`/querie-details/${_id}`}
          className="w-full mt-4 text-white bg-green-500 hover:bg-green-600 btn"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default QuerieCard;
