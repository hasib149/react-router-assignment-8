import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <ul className="flex gap-4">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-purple-700 border-b-2 border-purple-700 px-4 py-2"
                : "text-gray-700 hover:text-purple-700 px-4 py-2"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/apps"
            className={({ isActive }) =>
              isActive
                ? "text-purple-700 border-b-2 border-purple-700 px-4 py-2"
                : "text-gray-700 hover:text-purple-700 px-4 py-2"
            }
          >
            Apps
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/installation"
            className={({ isActive }) =>
              isActive
                ? "text-purple-700 border-b-2 border-purple-700 px-4 py-2"
                : "text-gray-700 hover:text-purple-700 px-4 py-2"
            }
          >
            Installation
          </NavLink>
        </li>
      </ul>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost text-xltext-5xl font-bold bg-gradient-to-r from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent"
        >
          <img className="w-10" src="/logo.png" alt="" /> HERO.IO
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://github.com/hasib149"
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-gradient-to-r from-[#9F62F2] to-[#632EE3] text-white flex items-center gap-2"
        >
          <FaGithub /> Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
