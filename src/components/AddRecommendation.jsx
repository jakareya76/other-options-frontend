import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthProvider";
import api from "../api/api";

const AddRecommendation = ({ userInfo }) => {
  const { id, userName, userEmail } = userInfo;

  const { user } = useContext(AuthContext);

  const handleAddRecommendation = async (event) => {
    event.preventDefault();

    const form = event.target;

    const title = form.title.value;
    const productName = form.productName.value;
    const productImage = form.productImage.value;
    const reason = form.reason.value;

    const recommended = {
      queryId: id,
      title,
      productImage,
      productName,
      reason,
      userEmail,
      userName,
      RecommenderEmail: user?.email,
      RecommenderName: user?.displayName,
    };

    try {
      const res = await api.post("/add-recommend", recommended);

      if (res.data.acknowledged) {
        toast.success("Add Your Recommendation Successfully");
        form.reset();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="p-8 bg-gray-100">
      <h2 className="my-8 text-2xl font-bold text-center">
        Add Your Recommendation
      </h2>

      <form
        onSubmit={handleAddRecommendation}
        className="grid grid-cols-1 gap-5 px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md md:grid-cols-2"
      >
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="title"
          >
            Recommendation Title
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded input input-bordered "
            id="title"
            type="text"
            name="title"
            placeholder="Enter recommendation title"
          />
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="productName"
          >
            Recommended Product Name
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded input input-bordered "
            id="productName"
            type="text"
            name="productName"
            placeholder="Enter product name"
          />
        </div>
        <div className="mb-4 md:col-span-2">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="productImage"
          >
            Recommended Product Image
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded input input-bordered"
            id="productImage"
            type="text"
            name="productImage"
            placeholder="Enter product image URL"
          />
        </div>
        <div className="mb-4 md:col-span-2">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="reason"
          >
            Recommendation Reason
          </label>
          <textarea
            className="w-full textarea textarea-bordered h-26"
            id="reason"
            name="reason"
            placeholder="Enter recommendation reason"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Recommendation
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecommendation;
