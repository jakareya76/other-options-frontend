import { useEffect, useState } from "react";
import api from "../api/api";
import { useParams } from "react-router-dom";

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
    boycottingReason,
    photoURL,
    productBrand,
    productName,
    queryTitle,
    recommendationCount,
    timestamp,
    userName,
  } = querieDetails;

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="max-w-xl p-8 mx-auto bg-white rounded-md shadow-md">
        <h2 className="mb-4 text-2xl font-semibold">{queryTitle}</h2>
        <div className="flex flex-col mb-4">
          <img src={photoURL} alt={productName} className="w-full" />
          <div className="flex items-center gap-4 mt-5 text-left">
            <p className="text-lg font-semibold">{productName}</p>
            <p className="text-gray-600">{productBrand}</p>
          </div>
        </div>
        <p className="mb-4 text-gray-700">{boycottingReason}</p>
        <div className="flex items-center justify-between">
          <p className="text-gray-600">{`${recommendationCount} recommendations`}</p>
          <p className="text-gray-600">{timestamp}</p>
        </div>
        <div className="flex items-center mt-4">
          <p className="text-gray-700">{userName}</p>
        </div>
      </div>
    </div>
  );
};

export default QuerieDetails;
