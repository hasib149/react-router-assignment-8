import React from "react";
import { Link, useParams } from "react-router";
import useProduct from "../CustomHooks/useProduct";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const UserDetails = () => {
  const { id } = useParams();
  const { products, loading } = useProduct();
  const product = products.find((p) => String(p.id) === id);
  if (loading) return <p>loading</p>;
  if (!product)
    return (
      <p className=" py-10 ">
        <img className="mx-auto" src="/App-Error.png" alt="" />
        <div className="flex justify-center mt-14">
          <Link
            to="/"
            className="flex items-center px-6 py-2 bg-purple-500 text-white font-semibold rounded-lg shadow hover:bg-purple-600 transition"
          >
            Go Home
          </Link>
        </div>
      </p>
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

  return (
    <div className="container mx-auto px-4">
      <div className="card card-side bg-base-100 shadow-lg mt-14 p-4 md:p-7 flex flex-col md:flex-row">
        {/* Image */}
        <figure className="p-3 shadow-xl md:w-1/3">
          <img
            className="w-full h-48 md:h-60 lg:h-72 object-cover rounded-2xl"
            src={image}
            alt="Movie"
          />
        </figure>

        {/* Card Body */}
        <div className="card-body pl-0 md:pl-14 mt-6 md:mt-0 md:w-2/3">
          <h2 className="card-title text-2xl sm:text-3xl">{title}</h2>
          <p className="font-semibold text-sm sm:text-base">
            Developed by <span className="text-purple-500">{companyName}</span>
          </p>
          <div className="border-b border-gray-400 my-3"></div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-16">
            <div className="flex items-center gap-2 sm:gap-4">
              <img
                src="/icon-downloads.png"
                alt=""
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
              <div>
                <span className="font-semibold text-sm sm:text-base">
                  Downloads
                </span>
                <h2 className="font-bold text-xl sm:text-3xl">{downloads}M</h2>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
              <img
                src="/icon-ratings.png"
                alt=""
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
              <div>
                <span className="font-semibold text-sm sm:text-base">
                  Average Ratings
                </span>
                <h2 className="font-bold text-xl sm:text-3xl">{ratingAvg}</h2>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
              <img
                src="/icon-review.png"
                alt=""
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
              <div>
                <span className="font-semibold text-sm sm:text-base">
                  Total Reviews
                </span>
                <h2 className="font-bold text-xl sm:text-3xl">{reviews}K</h2>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="mt-6">
            <button className="btn text-white bg-[#00D390] w-full sm:w-auto">
              Install Now ({size} MB)
            </button>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="mt-10">
        <h2 className="font-semibold text-xl sm:text-2xl ml-2 sm:ml-8">
          Ratings
        </h2>
        <div className="overflow-x-auto">
          <BarChart
            layout="vertical"
            style={{
              width: "100%",
              maxWidth: "100%",
              maxHeight: "70vh",
              aspectRatio: 1.618,
            }}
            data={ratings}
            margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" width={100} />
            <YAxis type="category" dataKey="name" width={100} />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#FF8811" />
          </BarChart>
        </div>
      </div>

      {/* Description */}
      <div className="space-y-3 mt-10 mb-10 px-2 sm:px-8">
        <h2 className="font-semibold text-xl sm:text-2xl">Description</h2>
        <p className="text-sm sm:text-base">{description}</p>
      </div>
    </div>
  );
};

export default UserDetails;
