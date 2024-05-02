import React from "react";

const ResetPassword = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (email && password) {
    //   const res = await fetch("/api/sign", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       email: email,
    //       password: password,
    //     }),
    //   });
    //   const result = await res.json();
    //   if (result.err) {
    //     // toast.error("Server error, Try again");
    //     return;
    //   }
    //   setEmail("");
    //   setPassword("");
    //   //   toast.success("Your message has been sent successfully");
    // }
  };
  return (
    <div className="max-w-screen-xl h-screen flex justify-center items-center m-auto">
      <div className="bg-gray-100 w-full  mt-5 sm:mt-0 mx-10 lg:mx-44">
        <div className="py-10   flex justify-center items-center flex-col">
          <h1 className="text-5xl px-5 pb-2 text-gray-700 font-bold">
            Reset Password
          </h1>
          <p className="text-lg px-5">Please enter your email in field below.</p>
          <div className="mt-14 w-full px-10 lg:px-44 gap-5 flex flex-col ">
            <div className="flex flex-col">
            <label className="font-bold">Email</label>
            <input className="border-2 px-2 h-11  border-black"></input>
            </div>
            <button
              onClick={handleSubmit}
              className="border-2 font-bold h-11 text-white  bg-blue-400 "
            >
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
