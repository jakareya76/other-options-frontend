import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import api from "../api/api";

const AddQueries = () => {
  const { user } = useContext(AuthContext);

  const handleAddQueries = async (event) => {
    event.preventDefault();

    const form = event.target;

    const productName = form.productName.value;
    const productBrand = form.productBrand.value;
    const photoURL = form.photoURL.value;
    const queryTitle = form.queryTitle.value;
    const boycottingReason = form.boycottingReason.value;

    const userName = user?.displayName;
    const userEmail = user?.email;

    const queries = {
      productName,
      productBrand,
      photoURL,
      queryTitle,
      boycottingReason,
      userEmail,
      userName,
      recommendationCount: 0,
    };

    try {
      const res = await api.post(`/add-queries`, queries);

      if (res.data.acknowledged) {
        form.reset();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container px-5 mx-auto">
      <div className="max-w-4xl mx-auto my-10">
        <h2 className="my-8 text-2xl font-bold text-center">Add A Queries</h2>
        <form onSubmit={handleAddQueries}>
          <div className="grid grid-cols-1 gap-5 my-5 md:grid-cols-2">
            <input
              type="text"
              name="productName"
              placeholder="Product Name"
              className="px-4 input input-bordered"
            />
            <input
              type="text"
              name="productBrand"
              placeholder="Product Brand"
              className="px-4 input input-bordered"
            />
            <input
              type="text"
              name="photoURL"
              placeholder="Product Image-URL"
              className="px-4 input input-bordered"
            />
            <input
              type="text"
              name="queryTitle"
              placeholder="Query TItle"
              className="px-4 input input-bordered"
            />
            <textarea
              name="boycottingReason"
              placeholder="Boycotting Reason Details"
              className="h-24 px-5 md:col-span-2 textarea textarea-bordered"
            ></textarea>
          </div>
          <button className="w-full btn btn-primary">Add Query</button>
        </form>
      </div>
    </div>
  );
};

export default AddQueries;
