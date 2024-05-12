import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/api";

const EditQueries = () => {
  const [querie, setQuerie] = useState({});

  const { id } = useParams();

  const handleUpdateQueries = async (event) => {
    event.preventDefault();

    const form = event.target;

    const productName = form.productName.value;
    const productBrand = form.productBrand.value;
    const photoURL = form.photoURL.value;
    const queryTitle = form.queryTitle.value;
    const boycottingReason = form.boycottingReason.value;

    const updatedQuerie = {
      productName,
      productBrand,
      photoURL,
      queryTitle,
      boycottingReason,
    };

    try {
      const res = await api.patch(`/update-querie?id=${querie._id}`, {
        updatedQuerie,
      });

      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const getQueriesDetails = async () => {
      const res = await api.get(`/querie/${id}`);

      setQuerie(res.data);
    };

    getQueriesDetails();
  }, [id]);

  return (
    <div className="container px-5 mx-auto">
      <div className="max-w-4xl mx-auto my-10">
        <h2 className="my-8 text-2xl font-bold text-center">Update Querie</h2>
        <form onSubmit={handleUpdateQueries}>
          <div className="grid grid-cols-1 gap-5 my-5 md:grid-cols-2">
            <input
              type="text"
              name="productName"
              placeholder="Product Name"
              className="px-4 input input-bordered"
              defaultValue={querie.productName}
            />
            <input
              type="text"
              name="productBrand"
              placeholder="Product Brand"
              className="px-4 input input-bordered"
              defaultValue={querie.productBrand}
            />
            <input
              type="text"
              name="photoURL"
              placeholder="Product Image-URL"
              className="px-4 input input-bordered"
              defaultValue={querie.photoURL}
            />
            <input
              type="text"
              name="queryTitle"
              placeholder="Query TItle"
              className="px-4 input input-bordered"
              defaultValue={querie.queryTitle}
            />
            <textarea
              name="boycottingReason"
              placeholder="Boycotting Reason Details"
              className="h-24 px-5 md:col-span-2 textarea textarea-bordered"
              defaultValue={querie.boycottingReason}
            ></textarea>
          </div>
          <button className="w-full btn btn-primary">Update Query</button>
        </form>
      </div>
    </div>
  );
};

export default EditQueries;
