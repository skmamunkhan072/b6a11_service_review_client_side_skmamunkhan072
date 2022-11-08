import React, { useContext, useState } from "react";

import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import SlidersBody from "../SlidersBody/SlidersBody";

const Sliders = ({ slider }) => {
  const { thim } = useContext(AuthContext);
  const [activ, setActiv] = useState(true);

  return (
    <div className={`pt-20 pb-5 bg-${thim ? "white" : " black"}`}>
      <div className="carousel w-full h-[600px]">
        {slider.map((slid) => (
          <SlidersBody
            key={slid.id}
            slid={slid}
            setActiv={setActiv}
            activ={activ}
          />
        ))}
      </div>
    </div>
  );
};

export default Sliders;
