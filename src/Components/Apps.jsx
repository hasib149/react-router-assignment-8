import useProduct from "../CustomHooks/useProduct";
import ProductCard from "./ProductCard";
import Loading from "./Loading";
import { useState } from "react";

const Apps = () => {
  const { loading, products } = useProduct();
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setIsSearching(true);

    setTimeout(() => {
      setIsSearching(false);
    }, 300);
  };

  const trim = search.trim().toLowerCase();
  const searchProducts = trim
    ? products.filter((product) => product?.title?.toLowerCase().includes(trim))
    : products;

  if (loading) return <Loading />;

  return (
    <div className="mx-auto container">
      <div className="mt-14 text-center space-y-1.5">
        <h2 className="font-bold text-3xl">Our All Applications</h2>
        <p className="text-gray-600">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center px-8 mt-10 mx-auto container gap-4">
        <h2 className="font-bold text-lg sm:text-xl">
          ({searchProducts.length}) Apps Found
        </h2>

        <label className="relative w-full sm:w-64">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            type="search"
            value={search}
            onChange={handleSearch}
            required
            placeholder="Search"
            className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </label>
      </div>

      {loading || isSearching ? (
        <div className="mt-8 flex justify-center items-center h-40">
          <Loading />
        </div>
      ) : (
        <div className="container mt-8 mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {searchProducts.length > 0 ? (
            searchProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="text-center col-span-full p-20 text-4xl bg-gradient-to-r from-purple-500 via-purple-400 to-purple-300">
              No Apps found
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Apps;
