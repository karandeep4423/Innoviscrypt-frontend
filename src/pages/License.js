import React from "react";

const License = () => {
  return (
    <div className="max-w-screen-xl m-auto">
      <div className="my-10">
        <h1 className="text-5xl mx-4 text-gray-700 font-bold text-center">
          Licence
        </h1>
        <p className=" px-5 sm:px-24 text-center text-base font-medium m-2">
          All graphical assets in this template are licensed for personal and
          commercial use. If you’d like to use a specific asset, please check
          the license below.
        </p>
      </div>
      <div className="flex-col space-y-10 bg-slate-100 m-5 sm:m-24 p-5 sm:p-10">
        <div>
          <h2 className="text-4xl text-gray-700 font-bold mb-3">Photography</h2>
          <p>
            All photography and assets are sourced from Unsplash, Pexels,
            Freepix and is free to use in your projects. Unsplash Licence &
            Pexels Licence can be viewed via these links.
          </p>
        </div>
        <div>
          <h2 className="text-4xl text-gray-700 font-bold mb-3">Icons</h2>
          <p>
            Icons are sourced from remixicon.com and is available under CC0
            licence.
          </p>
        </div>
        <div>
          <h2 className="text-4xl text-gray-700 font-bold mb-3">Typography</h2>
          <p>
            This template uses Archivo & Inter typography. These fonts are
            supplied via Google and can be added directly into your projects
            using the Webflow custom font settings. You can obtain these fonts
            online as they are available for personal and commercial usage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default License;
