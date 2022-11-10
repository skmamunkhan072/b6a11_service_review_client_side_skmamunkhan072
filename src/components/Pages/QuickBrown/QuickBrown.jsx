import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const QuickBrown = () => {
  const { thim } = useContext(AuthContext);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
              The quick, brown fox
              <br className="hidden md:block" />
              Choose from a
              <span className="relative px-1">
                <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                <span className="relative inline-block text-deep-purple-accent-400">
                  curated selection
                </span>
              </span>
            </h2>
            <p className="text-base d:text-lg">
              Make your business shine online with a custom pizza website
              designed just for you by a professional designer. Need ideas?
              We’ve collected some amazing examples of pizza websites from our
              global community of designers. Get inspired and start planning the
              perfect pizza web design today.
            </p>
          </div>
          <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
            <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5">
                  I'll be sure to note that in my log
                </h6>
                <p className="text-sm text-gray-900">
                  PIZZA THAT WILL MAKE YOU SMILE FROM CHEEK TO CHEEK
                </p>
              </div>
            </div>
            <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5">
                  A business big enough that it could be listed
                </h6>
                <p className="text-sm text-gray-900">
                  Voluptatem ea rerum nisi. Ullam debitis optio. Quae odio quasi
                  repellat sit fugiat dolor manet. Officia et dolorum. Eos non
                  itaque ut libero dolorum hic voluptas repudiandae. Fugiat
                  bisun quos et odit vel optio. Autem neque voluptatum. Et et
                  ducimus ut est aut. Voluptates qui alem similique aut eius.
                  Aperiam alias non soluta qui quos eos. Voluptatem nam iure
                  voluptatem officiis non velit.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="data:image/jpeg;base64,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"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default QuickBrown;
