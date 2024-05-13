import { useContext, useEffect, useState } from "react";
import api from "../api/api";
import { AuthContext } from "../context/AuthProvider";

const RecommendationsForMe = () => {
  const [recommendationsForMe, setMyRecommendationsForMe] = useState([]);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    const getRecommendationsForMe = async () => {
      const res = await api.get(`/recommendations-for-me?email=${user?.email}`);

      setMyRecommendationsForMe(res.data);
    };

    getRecommendationsForMe();
  }, []);
  return (
    <div className="p-5">
      <h2 className="my-8 text-2xl font-semibold text-center">
        My Recommendations
      </h2>

      <div className="px-5 overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Product Name</th>
              <th>Recommender Name</th>
            </tr>
          </thead>
          <tbody>
            {recommendationsForMe.map((item) => {
              return (
                <tr key={item._id}>
                  <td>
                    <img
                      src={item.productImage}
                      alt="product-img"
                      className="w-16 h-10 rounded-md"
                    />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.productName}</td>
                  <td>{item.RecommenderName}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecommendationsForMe;
