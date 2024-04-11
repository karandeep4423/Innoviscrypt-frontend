import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
const Home = () => {
  return (
    <div className="max-w-screen-xl m-auto ">
      <div className="relative max-w-screen-xl m-auto   w-full h-fit md:h-screen  flex flex-col md:flex-row px-10 items-center  ">
        <div>
          <h1 className="text-5xl text-gray-700 text-center font-bold">
            Generate e-books in a minutes using AI
          </h1>
          <p  className="text-xl my-8">
            The best site to generate ready to publish e-books with AI. ‍Sign in
            or sign up to get started!
          </p>
        </div>
        <div>
          <img
            src="/home.png"
            className="w-[1000px] h-[400px]"
            width={1000}
            height={1000}
            alt="learn punjabi language"
          ></img>
        </div>
      </div>
      <div className=" max-w-screen-xl m-auto">
        <div className="flex  items-center justify-center">
          <div>
            <h2 className="text-gray-700 relative mt-12 text-center mx-3 text-5xl font-bold">
              WHY CHOOSE US
            </h2>
          </div>
          <div className="bg-sky-400 mt-12 absolute   mix-blend-multiply filter blur-2xl h-16 w-56 "></div>
        </div>
        <div className="text-lg xl:text-xl grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-10 p-6 md:p-10">
          <div
            className="w-fit max-h-fit p-5 border-2 rounded-2xl bg-white 
             shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)]"
          >
            <img
              className="m-auto"
              src="/homePage/target.png"
              height={110}
              width={110}
              alt=""
            ></img>
            <h3 className="text-center mb-2 text-3xl font-medium">
              Generate e-books using AI
            </h3>
            <p>
              With the help of chatGPT, write well constructed and comprehensive
              e-books
            </p>
          </div>
          <div
            
            className="w-fit max-h-fit p-5 border-2 rounded-2xl bg-white 
             shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)]"
          >
            <img
              className="m-auto"
              src="/homePage/dollar.png"
              height={110}
              width={110}
              alt=""
            ></img>
            <h3 className="text-center mb-2 text-3xl font-medium">
              Customizable writing styles and presentation styles
            </h3>
            <p>
              Use a reference author to customize the writing style of your
              e-book and select a word template to fit your ideas
            </p>
          </div>
          <div
           
            className="w-fit max-h-fit p-5 border-2 rounded-2xl bg-white 
             shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)]"
          >
            <img
              className="m-auto"
              src="/homePage/calendar.png"
              height={110}
              width={110}
              alt=""
            ></img>
            <h3 className="text-center mb-2 text-3xl font-medium">
              Export in any format
            </h3>
            <p>
              You can export your e-book either in .docx, .pdf and .epub format
            </p>
          </div>
        </div>
      </div>
      <div className="relative max-w-screen-xl m-auto">
        <div className="flex  items-center justify-center">
          <div>
            <h2 className="text-gray-700 relative mt-12 text-center mx-3 text-5xl font-bold">
              TESTIMONIAL
            </h2>
            <p className="text-xl mt-2">
              See what users say about our platform
            </p>
          </div>
          <div className="bg-sky-400 mt-12 absolute   mix-blend-multiply filter blur-2xl h-16 w-56 "></div>
        </div>
        <div>
          <Swiper
            grabCursor={true}
            pagination={true}
            navigation={true}
            centeredSlides={true}
            modules={[Pagination, Navigation]}
            spaceBetween={50}
            slidesPerView={1}
          >
            <SwiperSlide className="">
              <div className="sm:p-8 rounded-2xl  lg:p-14 py-14  border-y-2 sm:border-2 relative mx-0 sm:mx-14 lg:mx-20 my-16 border-sky-600  ">
                <span className="absolute pt-4 pl-4 sm:pl-0 sm:pt-6 -top-1 sm:-left-4 -left-0.5  w-14 text-left text-4xl md:text-7xl text-sky-600 bg-white ">
                  ❝
                </span>
                <div className="max-w-screen-xl flex p-6  md:flex-row flex-col  gap-6 w-11/12 m-auto  max-h-fit rounded-2xl shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)]">
                  <div className="w-32 h-32  md:m-6 m-auto">
                    <img
                      className="w-full h-full rounded-full shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)] "
                      width={300}
                      height={300}
                      alt="punjabi language class"
                      src="testimonial1.png"
                    ></img>
                  </div>
                  <div className=" md:w-8/12  flex flex-col justify-center items-center md:items-start text-lg">
                    <p>Emily York</p>
                    <p className="text-gray-600">Senior Frontend Developer</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed a mi rhoncus, pharetra leo et, efficitur tortor. Fusce
                      vel convallis magna
                    </p>
                  </div>
                </div>
                <span className=" absolute -bottom-1 sm:-right-4 pr-4 sm:pr-0 -right-0.5 w-14 pt-4 sm:pt-6 text-right text-4xl md:text-7xl text-sky-600 bg-white ">
                  ❞
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="sm:p-8 rounded-2xl  lg:p-14 py-14  border-y-2 sm:border-2 relative mx-0 sm:mx-14 lg:mx-20 my-16 border-sky-600  ">
                <span className="absolute pt-4 pl-4 sm:pl-0 sm:pt-6 -top-1 sm:-left-4 -left-0.5  w-14 text-left text-4xl md:text-7xl text-sky-600 bg-white ">
                  ❝
                </span>
                <div className="max-w-screen-xl flex p-6  md:flex-row flex-col  gap-6 w-11/12 m-auto  max-h-fit rounded-2xl shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)]">
                  <div className="w-32 h-32  md:m-6 m-auto">
                    <img
                      className="w-full h-full rounded-full shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)] "
                      width={300}
                      height={300}
                      alt="punjabi language lesson"
                      src="testimonial2.jpeg"
                    ></img>
                  </div>
                  <div className=" md:w-8/12  flex flex-col justify-center items-center md:items-start text-lg">
                    <p>Emily York </p>
                    <p className="text-gray-600">Senior Frontend Developer</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed a mi rhoncus, pharetra leo et, efficitur tortor. Fusce
                      vel convallis magna
                    </p>
                  </div>
                </div>
                <span className=" absolute -bottom-1 sm:-right-4 pr-4 sm:pr-0 -right-0.5 w-14 pt-4 sm:pt-6 text-right text-4xl md:text-7xl text-sky-600 bg-white ">
                  ❞
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="sm:p-8 rounded-2xl  lg:p-14 py-14  border-y-2 sm:border-2 relative mx-0 sm:mx-14 lg:mx-20 my-16 border-sky-600  ">
                <span className="absolute pt-4 pl-4 sm:pl-0 sm:pt-6 -top-1 sm:-left-4 -left-0.5  w-14 text-left text-4xl md:text-7xl text-sky-600 bg-white ">
                  ❝
                </span>
                <div className="max-w-screen-xl flex p-6  md:flex-row flex-col  gap-6 w-11/12 m-auto  max-h-fit rounded-2xl shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)]">
                  <div className="w-32 h-32  md:m-6 m-auto">
                    <img
                      className="w-full h-full rounded-full shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)] "
                      width={300}
                      height={300}
                      alt="punjabi language course"
                      src="testimonial1.png"
                    ></img>
                  </div>
                  <div className=" md:w-8/12  flex flex-col justify-center items-center md:items-start text-lg">
                    <p>David Sinclair</p>
                    <p className="text-gray-600">Senior Frontend Developer</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed a mi rhoncus, pharetra leo et, efficitur tortor. Fusce
                      vel convallis magna
                    </p>
                  </div>
                </div>
                <span className=" absolute -bottom-1 sm:-right-4 pr-4 sm:pr-0 -right-0.5 w-14 pt-4 sm:pt-6 text-right text-4xl md:text-7xl text-sky-600 bg-white ">
                  ❞
                </span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Home;
