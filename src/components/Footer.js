import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="mt-10 bg-slate-100">
      <div className="pt-5 max-w-screen-xl m-auto flex flex-wrap space-x-5 px-5 justify-evenly">
        <img src="innvo-logo.jpg" className="my-5 h-fit w-[180px] px-0">
        </img>
        <div className="flex flex-col gap-4">
          <p>SIGN UP TO OUR NEWSLETTER</p>
          <div className="flex flex-row gap-4">
            <input
              className="w-48 h-10 border-2 border-zinc-300 p-4"
              placeholder="Email address"
            ></input>
            <button className="border-2 border-black h-10 p-1">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="-mt-4 max-w-screen-xl m-auto flex flex-wrap space-x-5 px-5 justify-evenly">
        <div className="flex flex-col  font-medium space-y-4 pt-10">
          <h2 className="text-xl font-medium ">PAGES</h2>
          <Link to="/">Home</Link>
          <Link to="/choose-your-lesson">About</Link>
          <Link to="/gurbani-in-english">Pricing</Link>
          <Link to="/about-us">App</Link>
        </div>
        <div className="flex flex-col font-medium space-y-4 pt-10">
          <h2 className="text-xl font-medium ">ACCOUNT</h2>
          <Link to="/sign">Sign In</Link>
          <Link to="/sign-up">Sign Up</Link>
          <Link to="/reset-password">Reset Password</Link>
          <Link to="/user-account">User Account</Link>
        </div>
        <div className="flex flex-col font-medium space-y-4 pt-10">
          <h2 className="text-xl  font-medium">TEMPLATE</h2>
          <p>Style Guide</p>
          <Link to="/License">License</Link>
          <Link to="/">Changelog</Link>
        </div>
        <div className="flex flex-col font-medium space-y-4 pt-10">
        <h2 className="text-xl  font-medium">Follow Us</h2>
          <a to="#!" role="button">
            {/* <!-- Facebook --> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="currentColor"
              style={{ color: "#1877f2" }}
              viewBox="0 0 24 24"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>
          <a to="#!" role="button">
            {/* <!-- Instagram --> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="currentColor"
              style={{ color: "#c13584" }}
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a to="#!" role="button">
            {/* <!-- Google --> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="currentColor"
              style={{ color: "#ea4335" }}
              viewBox="0 0 24 24"
            >
              <path
                d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a to="#!" role="button">
            {/* <!-- Twitter --> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="currentColor"
              style={{ color: "#1da1f2" }}
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>
        </div>
      </div>
      <p className="text-center text-gray-700 py-6">
        Copyright ©2023 All rights reserved
      </p>
    </div>
  );
};

export default Footer;
