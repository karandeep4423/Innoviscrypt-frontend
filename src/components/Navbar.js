import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(true);

  const handleShow = () => {
    setOpen(!open);
  };

  return (
    <div className=" ">
      <nav className=" flex justify-between h-20 px-4 xl:px-0 max-w-screen-xl m-auto     ">
        <NavLink to="/">
          <div className="my-5 h-fit w-[180px] px-0 ">
            <img src="innvo-logo.jpg"></img>
          </div>
        </NavLink>
        <div className="flex items-center lg:hidden">
          <button onClick={handleShow}>
            {open ? (
              <svg
                className="w-10 h-10  text-gray-800 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M5 7h14M5 12h14M5 17h14"
                />
              </svg>
            ) : (
              <svg
                className="w-10 h-10  text-gray-800 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18 18 6m0 12L6 6"
                />
              </svg>
            )}
          </button>
        </div>
        <div
          className={`lg:space-x-6 gap-y-4 text-lg  absolute  justify-between flex flex-col items-center lg:flex-row  z-50  lg:static  lg:w-auto lg:py-0 pb-6  w-full left-0 ${
            open ? "hidden lg:flex" : "top-[64px] bg-indigo-100 pt-6"
          }`}
        >
          <NavLink
            className={(e) => {
              return e.isActive ? "rounded-lg border-2 bg-sky-300 w-fit h-fit p-2" : "";
            }}
            onClick={handleShow}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={(e) => {
              return e.isActive ? "rounded-lg border-2 bg-sky-300 w-fit h-fit p-2" : "";
            }}
            onClick={handleShow}
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={(e) => {
              return e.isActive ? "rounded-lg border-2 bg-sky-300 w-fit h-fit p-2" : "";
            }}
            onClick={handleShow}
            to="/pricing"
          >
            Pricing
          </NavLink>
          <NavLink
            className={(e) => {
              return e.isActive ? "rounded-lg border-2 bg-sky-300 w-fit h-fit p-2" : "";
            }}
            onClick={handleShow}
            to="/affiliation"
          >
            Affiliation
          </NavLink>
          <NavLink
            className={(e) => {
              return e.isActive ? "rounded-lg border-2 bg-sky-300 w-fit h-fit p-2" : "";
            }}
            onClick={handleShow}
            to="/history"
          >
            History
          </NavLink>
          <NavLink
            className={(e) => {
              return e.isActive ? "rounded-lg border-2 bg-sky-300 w-fit h-fit p-2" : "";
            }}
            onClick={handleShow}
            to="/the-app"
          >
            The App
          </NavLink>
          <div className="hidden lg:flex space-x-3">
            <NavLink to="/">
              <button className=" font-medium px-4 py-3 rounded-xl text-center overflow-hidden group bg-sky-500 relative hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-sky-400 transition-all ease-out duration-300">
                <span className="absolute right-0 w-8 h-28 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                Get Started
              </button>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
