import React, { useState } from "react";
import { Link, useParams } from "react-router";
import useProduct from "../CustomHooks/useProduct";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { toast } from "react-toastify";
import Loading from "./Loading";

const UserDetails = () => {
  const [installed, setInstalled] = useState(false);
  const { id } = useParams();
  const { products, loading } = useProduct();
  const product = products.find((p) => String(p.id) === id);

  if (loading)
    return (
      <div className="text-center py-10">
        <Loading></Loading>
      </div>
    );

  if (!product)
    return (
      <div className="py-10 text-center">
        <img className="mx-auto w-52 sm:w-64" src="/App-Error.png" alt="" />
        <h2 className="text-2xl sm:text-3xl font-semibold pt-7 text-purple-400">
          Oops! Page not found
        </h2>
        <div className="flex justify-center mt-10">
          <Link
            to="/"
            className="px-6 py-2 bg-purple-500 text-white font-semibold rounded-lg shadow hover:bg-purple-600 transition"
          >
            Go Home
          </Link>
        </div>
      </div>
    );

  const {
    description,
    downloads,
    ratings,
    image,
    ratingAvg,
    reviews,
    size,
    title,
    companyName,
  } = product;

  const handleAddtoInstallation = () => {
    const existingList = JSON.parse(localStorage.getItem("installation")) || [];
    const isDuplicate = existingList.some((p) => p.id === product.id);

    if (isDuplicate) {
      toast.error("Already installed!");
      return;
    }

    const updateList = [...existingList, product];
    localStorage.setItem("installation", JSON.stringify(updateList));
    setInstalled(true);
    toast.success("✅ Successfully Installed!");
  };

  return (
    <div className="container mx-auto px-4">
      {/* Product Card */}
      <div className="card bg-base-100 shadow-lg mt-10 p-4 md:p-7 flex flex-col md:flex-row gap-6">
        {/* Image */}
        <figure className="w-full md:w-1/3">
          <img
            className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover rounded-2xl"
            src={image}
            alt={title}
          />
        </figure>

        {/* Details */}
        <div className="card-body md:w-2/3">
          <h2 className="card-title text-2xl sm:text-3xl">{title}</h2>
          <p className="font-semibold text-sm sm:text-base">
            Developed by <span className="text-purple-500">{companyName}</span>
          </p>
          <div className="border-b border-gray-300 my-4"></div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center">
              <span className="block font-semibold text-sm sm:text-base">
                Downloads
              </span>
              <h2 className="font-bold text-xl sm:text-2xl">{downloads}M</h2>
            </div>
            <div className="text-center">
              <span className="block font-semibold text-sm sm:text-base">
                Avg Ratings
              </span>
              <h2 className="font-bold text-xl sm:text-2xl">{ratingAvg}</h2>
            </div>
            <div className="text-center">
              <span className="block font-semibold text-sm sm:text-base">
                Reviews
              </span>
              <h2 className="font-bold text-xl sm:text-2xl">{reviews}K</h2>
            </div>
          </div>

          {/* Button */}
          <div className="mt-6">
            <button
              onClick={handleAddtoInstallation}
              disabled={installed}
              className={`btn text-white w-full sm:w-auto transition-all duration-300 ${
                installed
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#00D390] hover:shadow-lg hover:shadow-[#00D390]/50"
              }`}
            >
              {installed ? "Installed" : `Install Now (${size} MB)`}
            </button>
          </div>
        </div>
      </div>

      {/* Ratings Chart */}
      <div className="mt-10 shadow-xl rounded-xl p-4 sm:p-6 bg-white">
        <h2 className="font-semibold text-lg sm:text-xl mb-4">Ratings</h2>
        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={ratings}
              margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis type="category" dataKey="name" width={90} />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#FF8811" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Description */}
      <div className="space-y-3 mt-10 mb-10">
        <h2 className="font-semibold text-lg sm:text-xl">Description</h2>
        <p className="text-sm sm:text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default UserDetails;
