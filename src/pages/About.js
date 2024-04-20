import React from "react";
import Contact from "./Contact";
const About = () => {
  return (
    <div className="max-w-screen-xl m-auto">
      <div className="my-12">
        <h1 className="text-5xl mx-4 text-gray-700 font-bold text-center">
          InnoviScrypt is an e-book generator
        </h1>
        <h2 className="text-2xl mx-4 text-gray-700 font-bold text-center">
          The Story Behind The App
        </h2>
        <p className="text-center text-base font-medium mx-10 ">
          The idea for InnoviScrypt sparked from a personal revelation: why
          could not the process of creating an e-book be as seamless as chatting
          with an AI about your story idea? From drafting an outline to
          generating the chapters, each step was ripe for
        </p>
      </div>
      <div className="mx-10">
        <h2 className="text-5xl mx-4 text-gray-700 font-bold text-center">
          Transforming Ideas into eBooks: The Journey Begins Here
        </h2>
        <p className="py-5">
          Welcome to InnoviScrypt, where your journey from aspiring writer to
          published author is just a few clicks away. Born from a spark of
          innovation and a passion for democratizing the written word,
          InnoviScypt is more than just an app—it's a revolution in eBook
          creation.
        </p>
        <div className="flex text-black flex-col space-y-3 px-8 font-normal  ">
          <div className="flex gap-2">
            <img
              className="w-6 h-6 mt-1"
              width={23}
              height={23}
              alt="check icon"
              src="check.png"
            ></img>
            <p>
              Genre and Theme: Tailor your book to the exact genre and theme
              that resonates with your vision.
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
              Reference Artist: Influence your book’s writing style by selecting
              a reference artist, channeling their essence into your work.
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
              Chapter Flexibility: Decide the number of chapters and subchapters
              that best suit your story’s pace and depth.
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
              Styling and Cover Design: From the docx template to the e-book
              cover, your book’s appearance is entirely in your hands.
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
              Multiple Export Options: Whether it's .docx, .pdf, or .epub, you
              choose the format that fits your publishing goals.
            </p>
          </div>
        </div>
      </div>
      <div className="my-12">
        <h2 className="text-5xl mx-4 text-gray-700 font-bold text-center">
          Our Mission: Empowering Writers with Cutting-Edge Technology
        </h2>
        <p className="text-center text-base font-medium px-24 py-4">
          At InnoviScrypt, we believe that everyone has a story to tell, but not
          everyone has the means or ability to tell it. That's where we step in.
          Through our state-of-the-art platform, we're breaking down the
          barriers between your ideas and the vast world of readers eager to
          explore new stories. Whether you're a seasoned writer or a beginner
          with a burning desire to share your voice, our app is designed to turn
          your dreams into publishable eBooks.
        </p>
      </div>
      <Contact/>
    </div>
  );
};

export default About;
