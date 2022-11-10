import React from "react";
import PhotoView from "../PhotoView/PhotoView";

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
            Difference between SQL and NoSQL
          </h1>
          <p className="mb-5 text-gray-700">
            SQL is the programming language used to interface with relational
            databases. (Relational databases model data as records in rows and
            tables with logical links between them). NoSQL is a class of DBMs
            that are non-relational and generally do not use SQL.
          </p>
        </div>
        <div className="p-8 bg-white border rounded shadow-sm">
          <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
            <small className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
              holidays
            </small>
            <span className="text-gray-600">— 15 Nov 2020</span>
          </p>
          <h1 className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400">
            What is JWT, and how does it work?
          </h1>
          <p className="mb-5 text-gray-700">
            What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open
            standard (RFC 7519) for securely transmitting information between
            parties as JSON object. It is compact, readable and digitally signed
            using a private key/ or a public key pair by the Identity
            Provider(IdP).
          </p>
        </div>
        <div className="p-8 bg-white border rounded shadow-sm">
          <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
            <small className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
              holidays
            </small>
            <span className="text-gray-600">— 15 Nov 2020</span>
          </p>
          <h1 className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400">
            What is the difference between javascript and NodeJS?
          </h1>

          <p className="mb-5 text-gray-700">
            JavaScript is a client-side scripting language that is lightweight,
            cross-platform, and interpreted. Both Java and HTML include it.
            Node.js, on the other hand, is a V8-based server-side programming
            language.As a result, it is used to create network-centric
            applications. It's a networked system made for data-intensive
            real-time applications. If we compare node js vs. python, it is
            clear that node js will always be the preferred option.
          </p>
        </div>
        <div className="p-8 bg-white border rounded shadow-sm">
          <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
            <small className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
              holidays
            </small>
            <span className="text-gray-600">— 15 Nov 2020</span>
          </p>
          <h1 className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400">
            How does NodeJS handle multiple requests at the same time?
          </h1>
          <p className="mb-5 text-gray-700">
            How NodeJS handle multiple client requests? NodeJS receives multiple
            client requests and places them into EventQueue. NodeJS is built
            with the concept of event-driven architecture. NodeJS has its own
            EventLoop which is an infinite loop that receives requests and
            processes them.
          </p>
        </div>
      </div>

      {/* <PhotoView /> */}
    </div>
  );
};

export default Blog;
