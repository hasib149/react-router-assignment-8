import React, { useEffect, useState } from "react";

const Installation = () => {
  const [install, setinstall] = useState([]);
  useEffect(() => {
    const saveList = JSON.parse(localStorage.getItem("installation")) || [];
    setinstall(saveList);
  }, []);
  return (
    <div>
      <div className="text-center space-y-2.5 mt-16">
        <h2 className="font-bold text-3xl">Your Installed Apps</h2>
        <p className="font-semibold text-gray-600">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex justify-between items-center py-7 mt-10">
        <h2>0 apps found</h2>
        <label className="form-control w-full max-w-xs">
          <select
            className="select select-bordered"
            // value={sortOrder}
            // onChange={(e) => setSortOrder(e.target.value)}
          >
            <option className="font-semibold" value="none">
              Sort by price
            </option>
            <option className="font-semibold" value="price-asc">
              Low-to-High
            </option>
            <option className="font-semibold" value="price-desc">
              High-to-Low
            </option>
          </select>
        </label>
      </div>
      {/* local add card */}
      <div className="space-y-6">
        {install.map((p) => (
          <div className="card card-side bg-base-100 shadow-xl  ">
            <figure>
              <img
                className="w-50 h-30 object-cover"
                src={p.image}
                alt={p.name}
              />
            </figure>
            <div className="flex">
              <h2 className="card-title">{p.title}</h2>

              <div className="flex justify-center items-center gap-2">
                <p> {p.downloads}M</p>
                <p> {p.ratingAvg}</p>
                <p> {p.size}MB</p>
              </div>
              <div className="card-actions justify-end flex items-center">
                <button
                  // onClick={() => handleRemove(p.id)}
                  className="btn btn-primary"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
