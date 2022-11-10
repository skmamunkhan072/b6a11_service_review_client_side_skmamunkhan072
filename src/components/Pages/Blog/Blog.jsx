import React from "react";

const Blog = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <div className="p-8 bg-white border rounded shadow-sm">
          <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
            <small className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
              holidays
            </small>
            <span className="text-gray-600">— 15 Nov 2020</span>
          </p>
          <h1 className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400">
            Happy new Year
          </h1>
          <p className="mb-5 text-gray-700">
            Pommy ipsum smeg head whizz morris dancers come hither, bugger
            codswallop gob. Taking the mick middle class bog.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
