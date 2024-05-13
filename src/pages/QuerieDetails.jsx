import { useEffect, useState } from "react";
import api from "../api/api";
import { Link, useParams } from "react-router-dom";
import AddRecommendation from "../components/AddRecommendation";
import AllRecommendation from "../components/AllRecommendation";

const QuerieDetails = () => {
  const [querieDetails, setQuerieDetails] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const getQueriesDetails = async () => {
      const res = await api.get(`/querie/${id}`);

      setQuerieDetails(res.data);
    };

    getQueriesDetails();
  }, []);

  const {
    _id,
    boycottingReason,
    photoURL,
    productBrand,
    productName,
    queryTitle,
    recommendationCount,
    timestamp,
    userName,
    userEmail,
  } = querieDetails;

  return (
    <>
      <div className="p-8 bg-gray-100 ">
        <div className="container p-6 mx-auto bg-white border rounded-lg">
          <div className="flex flex-col lg:flex-row">
            <img
              src={photoURL}
              alt="Product"
              className="object-cover w-full rounded-lg max-h-[250px] lg:w-1/3"
            />
            <div className="lg:ml-6 lg:w-2/3">
              <h1 className="text-2xl font-bold text-gray-900">{queryTitle}</h1>
              <h2 className="text-xl text-gray-700">
                {productName} - {productBrand}
              </h2>
              <p className="mt-2 text-gray-600">{boycottingReason}</p>
              <p className="mt-2 text-gray-500">
                Date Posted: {new Date(timestamp).toLocaleDateString()}
              </p>
              <p className="mt-1 text-gray-500">
                {recommendationCount} Recommendations
              </p>
              <div className="mt-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  Added By: {userName}
                </h3>

                <Link to={`/queries`} className="px-8 my-2 btn btn-primary">
                  Go Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AllRecommendation id={_id} />
      <AddRecommendation userInfo={{ id: _id, userName, userEmail }} />
    </>
  );
};

export default QuerieDetails;
