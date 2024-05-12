import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/api";
import { AuthContext } from "../context/AuthProvider";
import QuerieCard from "../components/QuerieCard";

const MyQueries = () => {
  const [myQueries, setMyQueries] = useState([]);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    const getMyQueries = async () => {
      const res = await api(`/user-queries?email=${user.email}`);

      setMyQueries(res.data);
    };

    getMyQueries();
  }, []);

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/919734/pexels-photo-919734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
        }}
        className="flex flex-col items-center justify-center gap-4 py-16 bg-no-repeat bg-cover"
      >
        <h2 className="text-2xl font-bold text-white">Explore Your Queries</h2>
        <Link to="/add-queries" className="px-8 btn btn-primary">
          Add Query
        </Link>
      </div>

      <div className="my-10">
        <h2 className="text-3xl font-bold text-center">My Query</h2>

        {myQueries.length === 0 && (
          <p className="my-10 text-center text-red-500">
            No Query Found Please Add One!
          </p>
        )}

        <div className="flex items-center justify-center mt-8">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {myQueries.map((item) => {
              return <QuerieCard key={item._id} querie={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyQueries;
