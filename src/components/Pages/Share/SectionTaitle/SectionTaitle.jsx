import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const SectionTaitle = ({ taitle }) => {
  const { thim } = useContext(AuthContext);
  return (
    <div>
      <h2
        className={`${
          thim ? "section_header" : ""
        } relative mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-500 sm:text-4xl md:mx-auto`}
      >
        <span className="inline-block">
          {thim ? (
            ""
          ) : (
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute bottom-0 sm:right-[38%] md:right-[40%] lg:right-[42%]  xl:right-[45%] hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="18302e52-9e2a-4c8e-9550-0cbb21b38e55"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)"
                width="52"
                height="24"
              />
            </svg>
          )}
        </span>
        {taitle}
      </h2>
    </div>
  );
};

export default SectionTaitle;
