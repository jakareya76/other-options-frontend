import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/api";
import { Search, X, Star } from "lucide-react";

const Queries = () => {
  const [queries, setQueries] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredQueries, setFilteredQueries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getQueriesData = async () => {
      setIsLoading(true);
      try {
        const res = await api.get("/queries");
        setQueries(res.data);
        setFilteredQueries(res.data);
      } catch (error) {
        console.error("Failed to fetch queries:", error);
      } finally {
        setIsLoading(false);
      }
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
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="space-y-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Discover Queries
            </h2>
            <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
              Explore and recommend product alternatives shared by our community
            </p>
          </div>

          <div className="relative max-w-md mx-auto">
            <div className="flex items-center bg-gray-800 rounded-full overflow-hidden border border-gray-700 focus-within:border-purple-500 transition-all duration-300">
              <div className="pl-4 text-gray-400">
                <Search size={20} />
              </div>
              <input
                type="text"
                placeholder="Search by product name..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-full px-4 py-3 bg-transparent focus:outline-none text-gray-200 placeholder-gray-500"
              />
              {searchText && (
                <button
                  onClick={() => setSearchText("")}
                  className="pr-4 text-gray-400 hover:text-gray-200 transition-colors"
                >
                  <X size={18} />
                </button>
              )}
            </div>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
            </div>
          ) : filteredQueries.length === 0 ? (
            <div className="text-center py-16 bg-gray-800 rounded-lg">
              <h3 className="text-xl font-medium text-gray-300">
                No results found
              </h3>
              <p className="mt-2 text-gray-500">
                Try adjusting your search criteria
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredQueries.map((query) => (
                <QuerieCard key={query._id} querie={query} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const QuerieCard = ({ querie }) => {
  const {
    _id,
    photoURL,
    productBrand,
    recommendationCount,
    productName,
    queryTitle,
    userName,
    userPhoto,
    timestamp,
    boycottingReason,
  } = querie;

  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 transition-all duration-300 hover:shadow-purple-900/20 hover:border-gray-600">
      <div className="relative">
        <img
          className="w-full h-64 object-cover"
          src={photoURL}
          alt={productName}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-purple-500/80 backdrop-blur-sm rounded-full mb-2">
            {productBrand}
          </span>
        </div>
      </div>

      <div className="p-5 space-y-4">
        <h2 className="text-xl font-bold text-gray-100 line-clamp-2">
          {queryTitle}
        </h2>

        <div>
          <h3 className="text-lg font-medium text-gray-200">{productName}</h3>
          <p className="mt-1 text-sm text-gray-400 line-clamp-2">
            <span className="font-medium text-gray-300">Reason:</span>{" "}
            {boycottingReason}
          </p>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <img
                className="w-8 h-8 rounded-full object-cover ring-2 ring-purple-500/30"
                src={userPhoto}
                alt={userName}
              />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border border-gray-800"></div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-200">{userName}</p>
              <p className="text-xs text-gray-500">
                {new Date(timestamp).toLocaleDateString(undefined, {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-1 text-amber-400">
            <Star size={16} fill="currentColor" />
            <span className="text-sm font-medium">{recommendationCount}</span>
          </div>
        </div>

        <Link
          to={`/querie-details/${_id}`}
          className="block w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium text-center rounded-lg transition-all hover:from-purple-500 hover:to-blue-400 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-purple-500"
        >
          Recommend
        </Link>
      </div>
    </div>
  );
};

export default Queries;
