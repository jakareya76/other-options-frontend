import { useEffect, useState } from "react";
import api from "../api/api";

const AllRecommendation = ({ id }) => {
  const [recommendation, setRecommendation] = useState([]);

  useEffect(() => {
    const getRecommendation = async () => {
      const res = await api.get(`/recommendation?queryId=${id}`);

      setRecommendation(res.data);
    };

    getRecommendation();
  }, [id]);

  return (
    <>
      <div className="p-8 bg-gray-100">
        <h2 className="text-xl font-semibold">All Recommendation</h2>

        {recommendation.map((item) => {
          return (
            <div
              key={item._id}
              className="w-full p-5 my-4 bg-white border rounded-md"
            >
              <h2 className="font-medium">
                {item.RecommenderName}{" "}
                <span className="px-4 py-1 ml-2 text-sm text-white rounded bg-slate-800">
                  Auther
                </span>
              </h2>
              <hr className="my-2" />
              <div className="flex items-center">
                <img
                  src={item.productImage}
                  alt="product-img"
                  className="w-16 mr-4 rounded"
                />
                <h2 className="font-semibold ">{item.title}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AllRecommendation;
