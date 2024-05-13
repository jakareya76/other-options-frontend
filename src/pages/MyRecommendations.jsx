import { useContext, useEffect, useState } from "react";
import api from "../api/api";
import { AuthContext } from "../context/AuthProvider";

const MyRecommendations = () => {
  const [myRecommendations, setMyRecommendations] = useState([]);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    const getMyRecommendations = async () => {
      const res = await api.get(`/my-recommendation?email=${user?.email}`);

      setMyRecommendations(res.data);
    };

    getMyRecommendations();
  }, []);

  console.log(myRecommendations);

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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myRecommendations.map((item) => {
              return (
                <tr>
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
                  <td>
                    <button className="text-white btn btn-error">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyRecommendations;
