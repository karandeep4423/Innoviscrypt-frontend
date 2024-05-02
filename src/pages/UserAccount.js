import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      const res = await fetch("/api/sign", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const result = await res.json();
      if (result.err) {
        // toast.error("Server error, Try again");
        return;
      }
      setEmail("");
      setPassword("");
      //   toast.success("Your message has been sent successfully");
    }
  };

  return (
    <div className="max-w-screen-xl m-auto">
      <div className="bg-gray-100 sm:mt-0  sm:mx-10 lg:mx-44  my-14 max-w-screen-xl m-auto flex flex-col justify-center items-center ">
        <div className="my-8">
          <h1 className="px-10 text-4xl sm:text-5xl pb-2 text-gray-700 font-bold">
            Account Management
          </h1>
        </div>
        <div className=" w-full px-10 lg:px-44 my-4 flex flex-col gap-5">
          <div className="flex flex-col">
            <label className="font-bold">Email</label>
            <input className="border-2  h-11 px-2 border-black"></input>
          </div>
          <div className="flex flex-col">
            <label className="font-bold">Name</label>
            <input className="border-2 px-2 h-11  border-black"></input>
          </div>
          <div className="flex gap-3 ">
            <input type="checkbox" value="huey" />
            <label for="huey">I consent to receive marketing emails.</label>
          </div>
          <button
            onClick={handleSubmit}
            className="border-2 font-bold h-11 text-white  bg-blue-400 "
          >
            Save Changes
          </button>
          <button
            onClick={handleSubmit}
            className="border-2 font-bold h-11 text-white  bg-blue-400 "
          >
            Cancel
          </button>
          <hr class="h-px my-2 bg-gray-200 border-0 "></hr>
          <Link
            to="/reset-password"
            className="border-2 text-center py-1.5 font-bold h-11 text-white  bg-blue-400 "
          >
            Reset Password
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
