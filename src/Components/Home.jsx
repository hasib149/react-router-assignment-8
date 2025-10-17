import React from "react";
import {
  FaAppStoreIos,
  FaDownload,
  FaGooglePlay,
  FaStar,
} from "react-icons/fa";
import useProduct from "../CustomHooks/useProduct";
import ProductCard from "./ProductCard";
import { Link } from "react-router";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const Home = () => {
  const { loading, error, products } = useProduct();
  // console.log(products);

  const featuredProducts = products?.slice(0, 8);
  return (
    <div>
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center mx-auto mt-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          We Build <br />
          <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Productive
          </span>{" "}
          Apps
        </h2>
        <p className="max-w-xl mt-4 text-sm sm:text-base text-gray-600">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.
          <br className="hidden sm:block" />
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6 w-full sm:w-auto justify-center">
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-gradient-to-r from-green-500 to-green-700 text-white flex items-center justify-center gap-2 px-4 py-2 text-sm sm:text-base"
          >
            <FaGooglePlay /> Google Play
          </a>
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-gradient-to-r from-blue-500 to-blue-700 text-white flex items-center justify-center gap-2 px-4 py-2 text-sm sm:text-base"
          >
            <FaAppStoreIos /> App Store
          </a>
        </div>

        {/* Hero Image */}
        <div className="pt-10">
          <img
            className="w-full max-w-md sm:max-w-lg lg:max-w-2xl mx-auto"
            src="/hero.png"
            alt="Hero"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className=" bg-gradient-to-r from-[#632EE3] to-[#9F62F2] pt-12 pb-12 text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-white font-semibold text-2xl sm:text-2xl lg:text-3xl">
          Trusted by Millions, Built for You
        </h2>
        <div className="flex flex-col sm:flex-row gap-6 lg:gap-12 items-center justify-center mt-8">
          <div className="space-y-2">
            <p className="text-gray-300 text-xs sm:text-sm">Total Downloads</p>
            <h2 className="text-white font-bold text-2xl sm:text-3xl">29.6M</h2>
            <p className="text-gray-300 text-xs sm:text-sm">
              21% more than last month
            </p>
          </div>
          <div className="text-white text-4xl">
            <FaDownload />
          </div>
          <div className="space-y-2">
            <p className="text-gray-300 text-xs sm:text-sm">Total Reviews</p>
            <h2 className="text-white font-bold text-2xl sm:text-3xl">906K</h2>
            <p className="text-gray-300 text-xs sm:text-sm">
              46% more than last month
            </p>
          </div>
          <div className="text-white text-4xl">
            <FaStar />
          </div>
          <div className="space-y-2">
            <p className="text-gray-300 text-xs sm:text-sm">Active Apps</p>
            <h2 className="text-white font-bold text-2xl sm:text-3xl">132+</h2>
            <p className="text-gray-300 text-xs sm:text-sm">
              31 more will Launch
            </p>
          </div>
          <div className="text-white text-4xl">
            <IoLogoGooglePlaystore />
          </div>
        </div>
      </div>
      {/* card-title */}
      <div>
        <div className="text-center space-y-1 mt-10">
          <h2 className="text-3xl font-bold">Trending Apps</h2>
          <p className="text-sm text-gray-500">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        {/* card */}
        <div className="mt-14">
          <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <Link
              to="/apps"
              className="px-6 mt-8 mb-16 py-2 rounded-md font-semibold text-white bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 transition-all duration-300 shadow-lg"
            >
              Show All
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
