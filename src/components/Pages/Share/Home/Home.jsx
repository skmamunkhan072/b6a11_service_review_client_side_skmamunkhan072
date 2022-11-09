import React, { useContext, useEffect } from "react";
import "./Home.css";
import Sliders from "../../Sliders/Sliders";
import slider1 from "../../../Assets/imessage/SliderImg/1.jpg";
import slider2 from "../../../Assets/imessage/SliderImg/2.jpg";
import slider3 from "../../../Assets/imessage/SliderImg/3.jpg";
import slider4 from "../../../Assets/imessage/SliderImg/4.jpg";
import slider5 from "../../../Assets/imessage/SliderImg/5.jpg";
import slider6 from "../../../Assets/imessage/SliderImg/6.jpg";
import slider7 from "../../../Assets/imessage/SliderImg/7.jpg";
import slider8 from "../../../Assets/imessage/SliderImg/8.jpg";
import SlidersItems from "../../SlidersItems/SlidersItems";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import Services from "../../Services/Services";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const { setSliderItem, setSelectSliderItem, servicesdata, setServicesdata } =
    useContext(AuthContext);
  const servicesData = useLoaderData();
  useEffect(() => {
    if (servicesData) {
      return setServicesdata(servicesData);
    } else {
      return;
    }
  }, [servicesData]);
  const slider = [
    { img: slider1, id: 1, prev: 8, next: 2 },
    { img: slider2, id: 2, prev: 1, next: 3 },
    { img: slider3, id: 3, prev: 2, next: 4 },
    { img: slider4, id: 4, prev: 3, next: 5 },
    { img: slider5, id: 5, prev: 4, next: 6 },
    { img: slider6, id: 6, prev: 5, next: 7 },
    { img: slider7, id: 7, prev: 6, next: 8 },
    { img: slider8, id: 8, prev: 7, next: 1 },
  ];
  const handelSliderItems = (id, next, prev, img) => {
    setSliderItem({ id, next, prev, img });
    setSelectSliderItem(false);
  };

  return (
    <div>
      <div>
        <Sliders slider={slider} setSliderItem={setSliderItem} />
        <div className="pb-5">
          <div className="grid gap-4 row-gap-5 grid-cols-2 sm:grid-cols-6 lg:grid-cols-8">
            {slider.map((item) => (
              <SlidersItems
                key={item.id}
                item={item}
                handelSliderItems={handelSliderItems}
              />
            ))}
          </div>
        </div>
      </div>
      <Services />
    </div>
  );
};

export default Home;
