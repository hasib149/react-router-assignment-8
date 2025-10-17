import React, { useState } from "react";
import useProduct from "../CustomHooks/useProduct";
import ProductCard from "./ProductCard";

const Apps = () => {
  const { loading, error, products } = useProduct();
  console.log(products);
  const [search, setSearch] = useState("");
  const trim = search.trim().toLocaleLowerCase();
  const searchProducts = trim
    ? products.filter((product) =>
        product?.title?.toLocaleLowerCase().includes(trim)
      )
    : products;

  return (
    <div className="mx-auto container">
      <div className="mt-14 text-center space-y-1.5">
        <h2 className="font-bold text-3xl">Our All Applications</h2>
        <p className="text-gray-600">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center mt-10 mx-auto container gap-4">
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
            onChange={(e) => setSearch(e.target.value)}
            required
            placeholder="Search"
            className="w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </label>
      </div>
      <div className="container mt-8 mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {searchProducts && searchProducts.length > 0 ? (
          searchProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center col-span-full p-20 text-4xl bg-gradient-to-r from-purple-500 via-purple-400 to-purple-300">No Apps found</p>
        )}
      </div>
    </div>
  );
};

export default Apps;
