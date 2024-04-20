import React, { useState } from "react";

const Theapp = () => {
  const [value, setValue] = useState("fruit");
  const [bookDirection, setBookDirection] = useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const genre = [
    { label: "Fiction", value: "Fiction" },
    { label: "Non-Fiction", value: "Non-Fiction" },
    { label: "Young adult", value: "Young adult" },
  ];
  const theme = [
    { label: "Love and Relationship", value: "Love and Relationship" },
    { label: "Coming of Age", value: "Coming of Age" },
    { label: "Survival", value: "Survival" },
  ];
  const writingStyle = [
    { label: "Narrative", value: "Narrative" },
    { label: "Reflective", value: "Reflective" },
    { label: "Analytical", value: "Analytical" },
  ];
  const language = [
    { label: "English", value: "English" },
    { label: "Français", value: "Français" },
    { label: "Espanol", value: "Espanol" },
  ];
  const NumberofChapters = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
  ];

  const NumberofSubsections = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
  ];
  return (
    <div className="max-w-screen-xl m-auto">
      <div className="my-6">
        <h1 className="text-5xl mx-4 text-gray-700 font-bold text-center">
          E-Book Generator
        </h1>
        <p className="text-center text-base font-medium m-2">
          The very beginning of a beautiful story !
        </p>
      </div>
      <div className="flex flex-col gap-5 mx-5 lg:mx-48">
        <label className="flex flex-col gap-1">
          <span className="text-2xl mx-4 text-gray-700 font-bold ">Genre</span>
          <select
            className="text-xl h-10  shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)]  bg-blue-100  rounded-3xl border-2 border-blue-400 pl-16 pr-6  sm:pr-4 "
            value={value}
            onChange={handleChange}
          >
            {genre.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-2xl mx-4 text-gray-700 font-bold ">Theme</span>

          <select
            className="text-xl h-10  shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)]  bg-blue-100  rounded-3xl border-2 border-blue-400 pl-16 pr-6  sm:pr-4 "
            value={value}
            onChange={handleChange}
          >
            {theme.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-2xl mx-4 text-gray-700 font-bold ">
            Writing Style
          </span>
          <select
            className="text-xl h-10 shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)] focus:outline-none focus:border-none bg-blue-100  rounded-3xl border-2 border-blue-400 pl-16 pr-6  sm:pr-4 "
            value={value}
            onChange={handleChange}
          >
            {writingStyle.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-2xl mx-4 text-gray-700 font-bold">
            Language
          </span>
          <select
            className="text-xl h-10 shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)] focus:outline-none focus:border-none bg-blue-100  rounded-3xl border-2 border-blue-400 pl-16 pr-6  sm:pr-4 "
            value={value}
            onChange={handleChange}
          >
            {language.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-2xl mx-4 text-gray-700 font-bold">
            Number of Chapters
          </span>
          <select
            className="text-xl h-10 shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)] focus:outline-none focus:border-none bg-blue-100  rounded-3xl border-2 border-blue-400 pl-16 pr-6  sm:pr-4 "
            value={value}
            onChange={handleChange}
          >
            {NumberofChapters.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-2xl mx-4 text-gray-700 font-bold">
            Number of Subsections (for each chapter)
          </span>
          <select
            className="text-xl h-10 shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)] focus:outline-none focus:border-none bg-blue-100  rounded-3xl border-2 border-blue-400 pl-16 pr-6  sm:pr-4 "
            value={value}
            onChange={handleChange}
          >
            {NumberofSubsections.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        </label>
        <textarea
          required
          placeholder="Write book direction"
          value={bookDirection}
          onChange={(e) => setBookDirection(e.target.value)}
          className=" shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)] rounded-xl w-full outline-sky-600 hover:outline-offset-2 h-32 p-2  text-xl border-2 "
        ></textarea>
        <input
          required
          placeholder="Write title of book"
          value={bookDirection}
          onChange={(e) => setBookDirection(e.target.value)}
          className="w-full shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)] rounded-xl  outline-sky-600 hover:outline-offset-2  p-2  text-xl border-2 "
        ></input>
        <div className="flex justify-center items-center">
        <button className="w-1/2 text-xl font-medium px-3 sm:px-14 py-3 rounded-xl text-center overflow-hidden group bg-sky-500 relative hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-sky-400 transition-all ease-out duration-300">
          <span className="absolute right-0 w-8 h-28 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          Generate Book
        </button>
        </div>
      </div>
      <div className="my-10 mx-10">
        <h2 className="text-4xl mx-4 text-gray-700 font-bold text-center">
          Create Your Custom E-book: A Step-by-Step Guide
        </h2>
        <p>
          Welcome to our e-book generator! Here, you have the power to bring
          your own digital book to life in just a few clicks. Whether you're
          crafting something for educational purposes, creating a novel, or
          simply experimenting, our tool is designed to adjust to your unique
          creative desires. Follow the steps below to start the journey of
          bringing your e-book vision to reality.
        </p>
        <div className="flex gap-2 flex-col">
          <h3 className="text-3xl text-gray-700 font-bold">
            1. Genre Selection
          </h3>
          <p>
            First up, choose the Genre of your book. This is the overarching
            category your story will fall under. Whether it's the intrigue of a
            Mystery, the far-off worlds of Science Fiction, or the heartfelt
            journeys in Romance, picking a genre sets the tone for your entire
            book.
          </p>
          <h3 className="text-3xl text-gray-700 font-bold">2. Theme Focus</h3>
          <p>
            Next, select the Theme. Themes represent the underlying subjects or
            messages you want to explore in your book. From the trials of Love
            and Relationships to the adventures of Heroism, your chosen theme
            adds depth and meaning, guiding your narrative's direction.
          </p>
          <h3 className="text-3xl text-gray-700 font-bold">3. Writing Style</h3>
          <p>
            Your choice of Writing Style influences how your story is told. Opt
            for Narrative to tell a compelling tale with a clear beginning,
            middle, and end, or Descriptive to paint vivid pictures in the
            reader's mind. Each style impacts the reader's experience, ensuring
            your book resonates with its intended audience.
          </p>
          <h3 className="text-3xl text-gray-700 font-bold">4. Language</h3>
          <p>
            Select the Language in which your book will be written. Currently
            supporting a wide variety of languages, this choice makes your
            e-book accessible and enjoyable to your intended readership.
          </p>
          <h3 className="text-3xl text-gray-700 font-bold">
            5. Title Your Masterpiece
          </h3>
          <p>
            Every great book needs a captivating Title. This is your readers'
            first impression, so make it count! Your title should hint at the
            adventure, discovery, or romance that awaits within your pages.
          </p>

          <h3 className="text-3xl text-gray-700 font-bold">7. Finally</h3>
          <p>
            Once you've made all your selections, hit the "Generate Book"
            button. Our system will then craft your e-book based on the
            preferences you've specified, combining your choices into a
            cohesive, unique masterpiece. Please note, if you're unsure about
            any of the options, hover over them for more information or visit
            our FAQ section. We've designed this journey to be as intuitive and
            enriching as possible, ensuring that your path from a simple idea to
            a fully-realized e-book is smooth and enjoyable.Happy Creating!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Theapp;
