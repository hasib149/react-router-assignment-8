import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const Installation = () => {
  const [install, setinstall] = useState([]);
  useEffect(() => {
    const saveList = JSON.parse(localStorage.getItem("installation")) || [];
    setinstall(saveList);
  }, []);
  // remove
  const handleUninstall = (id) => {
    const updated = install.filter((app) => app.id !== id);
    setinstall(updated);
  };
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
      <div className="space-y-6 mb-10">
        {install.map((p) => (
          <div className="hero bg-base-300">
            <div className="hero-content w-full flex-col lg:flex-row justify-between items-start lg:items-center text-left gap-6">
              <div className="flex items-start gap-6 w-full">
                <img
                  src={p.image}
                  className="w-28 h-28 object-cover rounded-lg shadow-2xl"
                  alt={p.title}
                />
                <div className="space-y-4 flex-1">
                  <h1 className="text-3xl font-semibold">{p.title}</h1>
                  <div className="flex gap-6 flex-wrap">
                    <div className="font-semibold text-[#00D390]">
                      {p.downloads}M
                    </div>
                    <div className="font-semibold text-[#FF8811] flex gap-1 items-center">
                      <FaStar /> {p.ratingAvg}
                    </div>
                    <div className="font-semibold text-gray-700">
                      {p.size}MB
                    </div>
                  </div>
                </div>
              </div>
              {/* Button */}
              <div
                onClick={() => handleUninstall(p.id)}
                className="btn self-start lg:self-center lg:ml-auto bg-[#00D390] text-white"
              >
                Uninstall
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
