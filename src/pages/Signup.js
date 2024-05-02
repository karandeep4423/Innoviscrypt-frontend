import React, { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && name && password) {
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
      setName("");
      //   toast.success("Your message has been sent successfully");
    }
  };

  return (
    <div className="max-w-screen-xl m-auto flex">
      <div className=" mx-20">
        <div className=" mt-10">
          <h1 className="text-5xl text-gray-700 font-bold">Sign up</h1>
          <p className="text-xl pt-2">
            Get started posting and applying for jobs
          </p>
        </div>
        <div className=" my-4 flex flex-col gap-5">
          <div className="flex flex-col">
            <label className="font-bold">Email</label>
            <input className="border-2  h-11 px-2 border-black"></input>
          </div>
          <div className="flex flex-col">
            <label className="font-bold">Name</label>
            <input className="border-2 h-11 px-2 border-black"></input>
          </div>
          <div className="flex flex-col">
            <label className="font-bold">Password</label>
            <input className="border-2 px-2 h-11  border-black"></input>
          </div>
          <button
            onClick={handleSubmit}
            className="border-2 font-bold h-11 text-white bg-blue-400 "
          >
            Create an account
          </button>
          <div className="flex gap-3 ">
            <input type="checkbox" value="huey" />
            <label for="huey">I consent to receive marketing emails.</label>
          </div>
          <div className="flex gap-3">
            <input type="checkbox" value="huey" />
            <label for="huey">
              By creating an account, I agree to this website's privacy policy
              and terms of service.
            </label>
          </div>
        </div>
        <hr class="h-px my-2 bg-gray-200 border-0"></hr>
        <div className="">
          <span>
            Already have an account?
            <a className="text-blue-500 pl-2" href="/sign">
              Log In
            </a>
          </span>
        </div>
      </div>
      <div className="lg:block hidden py-2 mt-5 lg:mt-0 px-10 flex-col space-y-14  bg-blue-500">
        <div className="bg-sky-100 mt-14   flex w-fit h-fit">
          <p className="px-3 py-2 m-2 bg-sky-200">New</p>
          <p className="py-2 m-2">Signup Page</p>
        </div>
        <p className="text-4xl sm:text-7xl text-white font-bold">
          Welcome to InnoviScrypt.
        </p>
        <p className="text-2xl text-white">
          “InnoviScrypt puts the focus in the right place: on the people who are
          using it.”
        </p>
        <div className="flex gap-4 items-center">
          <img className="w-24 h-24 rounded-full" src="testimonial1.png"></img>
          <div>
          <p className="text-white text-lg">David Smith</p>
          <p>Frontend Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;


