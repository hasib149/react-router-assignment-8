import React, { useEffect, useState } from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { toast } from "react-toastify";
import Loading from "./Loading";

const Installation = () => {
  const [install, setinstall] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      const saveList = JSON.parse(localStorage.getItem("installation")) || [];
      setinstall(saveList);
      setloading(false);
    }, 300);
    return () => {
      clearTimeout(delay);
    };
  }, []);
  // remove
  const handleUninstall = (id) => {
    const stored = JSON.parse(localStorage.getItem("installation")) || [];

    const updated = stored.filter((app) => app.id !== id);

    localStorage.setItem("installation", JSON.stringify(updated));

    setinstall(updated);
    toast.success("Uninistall complete");
  };

  const sortedItem = (sortOrder) => {
    // console.log(sortOrder);
    if (sortOrder === "downloads-asc") {
      setinstall([...install].sort((a, b) => a.downloads - b.downloads));
    } else if (sortOrder === "downloads-desc") {
      setinstall([...install].sort((a, b) => b.downloads - a.downloads));
    } else {
      return install;
    }
  };
  if (loading) return <Loading></Loading>;

  return (
    <div>
      <div className="text-center space-y-2.5 mt-16">
        <h2 className="font-bold text-3xl">Your Installed Apps</h2>
        <p className="font-semibold text-gray-600">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex justify-between items-center py-7 pl-8 pr-8 mt-10">
        <h2 className="font-semibold">
          <span className="text-2xl">({install.length})</span> apps found
        </h2>
        <label className="form-control w-full max-w-xs">
          <select
            className="select select-bordered"
            onChange={(e) => sortedItem(e.target.value)}
          >
            <option className="font-semibold" value="none">
              Sort by downloads
            </option>
            <option className="font-semibold" value="downloads-asc">
              Low-to-High
            </option>
            <option className="font-semibold" value="downloads-desc">
              High-to-Low
            </option>
          </select>
        </label>
      </div>
      {/* add card */}
      <div className="space-y-6 mb-10">
        {install.length === 0 ? (
          <p className="text-center text-gray-500 text-xl mt-10">
            No apps found
          </p>
        ) : (
          install.map((p) => (
            <div key={p.id} className="hero bg-base-300">
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
                      <div className="font-semibold text-[#00D390] flex items-center gap-0.5">
                        <GoDownload /> {p.downloads}M
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
          ))
        )}
      </div>
    </div>
  );
};

export default Installation;
