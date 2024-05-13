import { useEffect, useState } from "react";

const AllRecommendation = ({ id }) => {
  const [recommendation, setRecommendation] = useState([]);

  useEffect(() => {
    const getRecommendation = async () => {
      const res = await api.get("/recommendation");

      setRecommendation(res.data);
    };

    getRecommendation();
  }, [id]);

  return (
    <div className="p-8 bg-gray-100">
      <h2 className="text-xl font-semibold">All Recommendation</h2>
    </div>
  );
};

export default AllRecommendation;
