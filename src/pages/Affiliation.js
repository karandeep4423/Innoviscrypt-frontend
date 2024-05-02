import React from "react";

const Affiliation = () => {
  return (
    <div className="max-w-screen-xl m-auto">
      <div className="my-12">
        <h1 className="text-5xl mx-4 text-gray-700 font-bold text-center">
          Affiliation Program
        </h1>
        <p className="text-center text-base font-medium m-2">
          With our affiliation program you can receive money by sharing your
          personal affiliation link !
        </p>
      </div>
      <div className="bg-gray-100 mx-10 lg:mx-44">
        <div className="py-10 px-5  flex justify-center items-center flex-col">
          <h2 className="text-4xl  pb-2 text-gray-700 font-bold">
          Generate your link
          </h2>
          <p className="text-lg">Please enter your email in field below.</p>
          <div className="mt-14 w-full px-10 lg:px-44 gap-5 flex flex-col ">
            <div className="flex flex-col">
              <label className="font-bold">Name</label>
              <input className="border-2 px-2 h-11  border-black"></input>
            </div>
            <div className="flex flex-col">
              <label className="font-bold">Email Address</label>
              <input className="border-2 px-2 h-11  border-black"></input>
            </div>
            <button
              
              className="border-2 font-bold h-11 text-white  bg-blue-400 "
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Affiliation;
