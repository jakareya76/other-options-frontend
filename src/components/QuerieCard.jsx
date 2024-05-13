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
    userPhoto,
    timestamp,
    boycottingReason,
  } = querie;

  return (
    <div className="max-w-md bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <img
        className="object-cover w-full h-64 rounded-t-lg"
        src={photoURL}
        alt="Product"
      />

      <div className="p-5">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {queryTitle}
        </h2>
        <h3 className="mb-1 text-xl text-gray-800 dark:text-white">
          {productName} - {productBrand}
        </h3>
        <p className="text-gray-500 dark:text-gray-400">
          Reason: {boycottingReason}
        </p>

        <div className="my-4 text-gray-500 dark:text-gray-400">
          Date Posted: {new Date(timestamp).toLocaleDateString()}
        </div>

        <div className="flex items-center mb-4">
          <img
            className="w-10 h-10 mr-4 rounded-full"
            src={userPhoto}
            alt={userName}
          />
          <div>
            <p className="font-semibold text-gray-800 dark:text-white">
              {userName}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-700 dark:text-gray-300">
            {recommendationCount} Recommendations
          </span>
          <Link
            to={`/querie-details/${_id}`}
            className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
          >
            Recommend
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuerieCard;
