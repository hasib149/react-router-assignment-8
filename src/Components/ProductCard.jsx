import React from "react";
import { FaStar } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { Link, useNavigate } from "react-router";

const ProductCard = ({ product }) => {
  //   console.log(product);
  const navigate = useNavigate();
  const goToUserDetails = () => {
    navigate(`/userdetails/${id}`);
  };
  const { title, ratingAvg, image, downloads, id } = product;
  return (
    <div
      onClick={goToUserDetails}
      className="card bg-base-100 w-full shadow-2xl transform transition-transform duration-300 hover:scale-105"
    >
      <figure className="p-3">
        <img
          src={image}
          alt={title}
          className="rounded-lg w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body pt-3">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-between pt-3">
          <div className="badge badge-outline bg-gray-200 text-green-500 font-semibold border-none flex items-center gap-1">
            <FiDownload />
            {downloads}M
          </div>
          <div className="badge badge-outline bg-gray-200 text-orange-500 font-semibold border-none flex items-center gap-1">
            <FaStar />
            {ratingAvg}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
