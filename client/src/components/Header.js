import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-500 shadow-md ">
      <div className=" flex justify-between p-3 items-center mx-auto max-w-6xl">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-red-500">Cece</span>
            <span className="text-orange-500">Estate</span>
          </h1>
        </Link>

        <form className="bg-slate-50 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600 " />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline hover:underline text-red-700">
              Home
            </li>
          </Link>

          <Link to="/about">
            <li className="hidden sm:inline hover:underline text-red-700 ">
              About
            </li>
          </Link>

          <Link to="/sign-in">
            <li className="hover:underline text-red-700">Login</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
