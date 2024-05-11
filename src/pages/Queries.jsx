import { useEffect, useState } from "react";
import QuerieCard from "../components/QuerieCard";
import api from "../api/api";

const Queries = () => {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    const getQueriesData = async () => {
      const res = await api.get("/queries");

      setQueries(res.data);
    };

    getQueriesData();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="my-8">
        <h2 className="text-3xl font-bold text-center">All Queries</h2>
        <div className="flex items-center justify-center mt-8">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {queries.map((item) => {
              return <QuerieCard key={item._id} querie={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Queries;
