import React, { useState } from "react";
import { Link } from "react-router-dom";
import Faqs from "../components/Faqs";
const Pricing = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (i) => {
    if(isOpen==i){
      return setIsOpen(null);
    }
      setIsOpen(i);
  };

  return (
    <div>
      <div className="my-12">
        <h1 className="text-5xl mx-4 text-gray-700 font-bold text-center">
          Unlock Your Publishing Potential
        </h1>
        <p className="text-center text-base font-medium m-2">
          Effortless E-book Creation at Your Fingertips – Choose Your Plan
          Today!
        </p>
      </div>
      <div className="max-w-screen-xl text-lg xl:text-xl  m-auto grid mt-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-10 ">
        <div
          id="book-lesson"
          className="text-gray-600 bg-slate-200 justify-center h-fit py-10  gap-y-2 flex flex-col items-center rounded-xl shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(2,139,199,0.5)]"
        >
          <h2 className="text-5xl text-center  font-bold">BEGINNER</h2>
          <p className="text-5xl  font-bold">
            $10
            <span className="font-thin text-base sm:text-lg xl:text-xl ">
              /month
            </span>
          </p>
          <Link
            href={{ pathname: "/book-lesson", query: { lesson: "single" } }}
          >
            <button className="mt-4 font-medium px-16 py-3 rounded-xl text-center overflow-hidden group bg-sky-500 relative hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-sky-400 transition-all ease-out duration-300">
              <span className="absolute right-0 w-8 h-28 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              Get Started
            </button>
          </Link>
          <div className="flex text-black flex-col space-y-3 px-8 font-normal  ">
            <div className="flex gap-2">
              <img
                className="w-6 h-6 mt-1"
                width={23}
                height={23}
                alt="check icon"
                src="check.png"
              ></img>
              <p>Access to the restricted version of the e-book generator.</p>
            </div>
            <div data-aos="fade-up" className="flex gap-2">
              <img
                className="w-6 h-6 mt-1"
                width={23}
                height={23}
                alt="check icon"
                src="check.png"
              ></img>
              <p>
                You can see your history of generated books and download them
                anytime you want.
              </p>
            </div>
          </div>
        </div>
        <div
          id="buy-hours"
          className="text-gray-600  bg-blue-100 justify-center h-fit py-10 gap-y-2 flex flex-col items-center rounded-xl shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(2,139,199,0.5)]"
        >
          <h2 className="text-5xl text-center  font-bold">STANDART</h2>
          <p className="text-5xl  font-bold">
            $20
            <span className="text-base sm:text-lg xl:text-xl font-thin ">
              /month
            </span>
          </p>
          <button className="mt-4 font-medium px-16 py-3 rounded-xl text-center overflow-hidden group bg-sky-500 relative hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-sky-400 transition-all ease-out duration-300">
            <span className="absolute right-0 w-8 h-28 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            Get Started
          </button>
          <div className="flex  text-black flex-col space-y-3 px-8 font-normal">
            <div className="flex gap-2">
              <img
                className="w-6 h-6 mt-1"
                width={23}
                height={23}
                alt="check icon"
                src="check.png"
              ></img>
              <p>Access to the FULL version of the e-book generator.</p>
            </div>
            <div className="flex gap-2">
              <img
                className="w-6 h-6 mt-1"
                width={23}
                height={23}
                alt="check icon"
                src="check.png"
              ></img>
              <p>
                You can see your history of generated books and download them
                anytime you want.
              </p>
            </div>
            <div className="flex gap-2">
              <img
                className="w-6 h-6 mt-1"
                width={23}
                height={23}
                alt="check icon"
                src="check.png"
              ></img>
              <p>
                Direct access to future updates (Word templates for styling,
                Direct publish on e-books platforms).
              </p>
            </div>
          </div>
        </div>
        <div
          id="group-class"
          className="text-gray-600 bg-violet-100	justify-center h-fit py-10 gap-y-2 flex flex-col items-center rounded-xl shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(2,139,199,0.5)]"
        >
          <h2 data-aos="fade-up" className="text-5xl text-center font-bold">
            PREMIUM
          </h2>
          <p data-aos="fade-up" className="text-5xl  font-bold">
            $30
            <span className="text-base sm:text-lg xl:text-xl font-thin ">
              /month
            </span>
          </p>
          <Link href={{ pathname: "/book-lesson", query: { lesson: "group" } }}>
            <button className="mt-4 font-medium px-16 py-3 rounded-xl text-center overflow-hidden group bg-sky-500 relative hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-sky-400 transition-all ease-out duration-300">
              <span className="absolute right-0 w-8 h-28 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              Get Started
            </button>
          </Link>
          <div className="text-black flex flex-col space-y-3 px-8 font-normal">
            <div className="flex gap-2">
              <img
                className="w-6 h-6 mt-1"
                width={23}
                height={23}
                alt="check icon"
                src="check.png"
              ></img>
              <p>Access to the FULL version of the e-book generator.</p>
            </div>
            <div className="flex gap-2">
              <img
                className="w-6 h-6 mt-1"
                width={23}
                height={23}
                alt="check icon"
                src="check.png"
              ></img>
              <p>
                You can see your history of generated books and download them
                anytime you want.
              </p>
            </div>
            <div className="flex gap-2">
              <img
                className="w-6 h-6 mt-1"
                width={23}
                height={23}
                alt="check icon"
                src="check.png"
              ></img>
              <p>
                Early access to future updates (Word templates for styling,
                Direct publish on e-books platforms).
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="my-12">
          <h1 className="text-5xl mx-4 text-gray-700 font-bold text-center">
            Frequently asked questions
          </h1>
          <p className="text-center text-base font-medium m-2">
            ABOUT INNOVISCRYPT
          </p>
        </div>
        <div>
          {Faqs.map((f, i) => {
            return (
              <div key={i} className="flex gap-4 flex-col">
                <div
                  onClick={()=>handleClick(i)}
                  className="bg-gray-200 h-fit W-full mx-10"
                >
                  <div className="h-fit  flex justify-between px-5">
                    <h2 className="text-2xl my-6 font-bold">{f.question}</h2>
                    {isOpen ==i ? (
                      <svg
                        class="my-6 w-10 h-10 text-black "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m5 15 7-7 7 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="my-6 w-10 h-10 text-black "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m19 9-7 7-7-7"
                        />
                      </svg>
                    )}
                  </div>

                  {isOpen==i ? <p className="p-5">{f.answer}</p> : ""}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
