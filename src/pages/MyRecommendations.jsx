import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthProvider";
import api from "../api/api";

const MyRecommendations = () => {
  const [myRecommendations, setMyRecommendations] = useState([]);

  const { user } = useContext(AuthContext);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await api.delete(`/delete-recommendation/${id}`);

        if (res.data.deletedCount > 0) {
          setMyRecommendations((prev) => {
            return prev.filter((recommendations) => {
              return recommendations._id !== id;
            });
          });
        }
      }
    });
  };

  useEffect(() => {
    const getMyRecommendations = async () => {
      const res = await api.get(`/my-recommendation?email=${user?.email}`);

      setMyRecommendations(res.data);
    };

    getMyRecommendations();
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myRecommendations.map((item) => {
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
                  <td>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="text-white btn btn-error"
                    >
                      Delete
                    </button>
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
