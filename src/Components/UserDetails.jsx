import React from "react";
import { useParams } from "react-router";
import useProduct from "../CustomHooks/useProduct";

const UserDetails = () => {
  const { id } = useParams();
  const { products, loading } = useProduct();
  const product = products.find((p) => String(p.id) === id);
  if (loading) return <p>loading</p>;
  if (!product)
    return (
      <p className=" py-10 ">
        <img className="mx-auto" src="/error-404.png" alt="" />
      </p>
    );
  const {
    description,
    downloads,

    image,
    ratingAvg,
    reviews,
    size,
    title,
    companyName,
  } = product;

  return (
    <div className="mx-auto container">
      <div className="card card-side bg-base-100 shadow-lg mt-14 px-7">
        <figure className="p-3 shadow-2xl">
          <img
            className="w-full h-48 object-cover rounded-2xl"
            src={image}
            alt="Movie"
          />
        </figure>
        <div className="card-body pl-14">
          <h2 className="card-title text-3xl">{title}</h2>
          <p className="font-semibold">
            Developed by <span className="text-purple-500">{companyName}</span>
          </p>
          <div className="border-b border-gray-400 my-3"></div>

          <div className="flex justify-items-start gap-16">
            <div className="space-y-2">
              <img src="/icon-downloads.png" alt="" />{" "}
              <span className="font-semibold">downloads</span>
              <h2 className="font-bold text-3xl">{downloads}M</h2>
            </div>
            <div className="space-y-2">
              <img src="/icon-ratings.png" alt="" />
              <span className="font-semibold">Average Ratings</span>
              <h2 className="font-bold text-3xl">{ratingAvg}</h2>
            </div>
            <div className="space-y-2">
              <img src="/icon-review.png" alt="" />
              <span className="font-semibold">Total Reviews</span>
              <h2 className="font-bold text-3xl">{reviews}</h2>
            </div>
          </div>

          {/*  Button */}
          <div className="mt-6">
            <button className="btn text-white bg-[#00D390] ">
              Install Now ({size} MB)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
