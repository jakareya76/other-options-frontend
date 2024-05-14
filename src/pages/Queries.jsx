// import { useEffect, useState } from "react";
// import QuerieCard from "../components/QuerieCard";
// import api from "../api/api";

// const Queries = () => {
//   const [queries, setQueries] = useState([]);

//   useEffect(() => {
//     const getQueriesData = async () => {
//       const res = await api.get("/queries");

//       setQueries(res.data);
//     };

//     getQueriesData();
//   }, []);

//   return (
//     <div className="container mx-auto">
//       <div className="my-8">
//         <h2 className="text-3xl font-bold text-center">All Queries</h2>
//         <div className="flex items-center justify-center mt-8">
//           <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
//             {queries.map((item) => {
//               return <QuerieCard key={item._id} querie={item} />;
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Queries;

import { useEffect, useState } from "react";
import QuerieCard from "../components/QuerieCard";
import api from "../api/api";

const Queries = () => {
  const [queries, setQueries] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredQueries, setFilteredQueries] = useState([]);

  useEffect(() => {
    const getQueriesData = async () => {
      const res = await api.get("/queries");
      setQueries(res.data);
      setFilteredQueries(res.data);
    };
    getQueriesData();
  }, []);

  useEffect(() => {
    const filtered = queries.filter((query) => {
      return query.productName.toLowerCase().includes(searchText.toLowerCase());
    });

    setFilteredQueries(filtered);
  }, [searchText, queries]);

  return (
    <div className="container mx-auto">
      <div className="my-8">
        <h2 className="text-3xl font-bold text-center">All Queries</h2>
        <div className="flex items-center justify-center mt-8">
          <div className="flex items-center justify-center space-x-4">
            <input
              type="text"
              placeholder="Search by Product Name"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div className="flex items-center justify-center mt-8">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredQueries.map((query) => (
              <QuerieCard key={query._id} querie={query} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Queries;
