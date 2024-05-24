import React, { useState } from "react";
import user from "../../assets/images/user.png";
import cardsymbol from "../../assets/images/cardsymbol.png"; 
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Inverted2 } from "../../assets/icons";

const settings = {
  dots: true,
  infinite: false,
  className: "center",
  centerPadding: "60px",
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Card = () => {
  const [hovered, setHovered] = useState(false);

  const cards = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor lorem eros, in vulputate massa rhoncus quis. Ut aliquam varius risus id dignissim. Integer erat nibh...",
      name: "Full Name",
      designation: "Desgination",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor lorem eros, in vulputate massa rhoncus quis. Ut aliquam varius risus id dignissim. Integer erat nibh",
      name: "Full Name",
      designation: "Desgination",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor lorem eros, in vulputate massa rhoncus quis. Ut aliquam varius risus id dignissim. Integer erat nibh",
      name: "Full Name",
      designation: "Desgination",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor lorem eros, in vulputate massa rhoncus quis. Ut aliquam varius risus id dignissim. Integer erat nibh",
      name: "Full Name",
      designation: "Desgination",
    },
     ];

  return (
    <div className="">
      <Slider {...settings} style={{ gap: "10px" }}>
        {cards.map((d, index) => (
          <div
            key={index} // Using index as key
            className={`bg-white flex items-center justify-center transition-transform duration-300 rounded-xl p-3 py-10 ${index % 2 !== 0 ? "odd-border1" : ""}`}
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
            // Adjusting card width and height with margin
          >
            <div className="flex  justify-center  mb-4">
              <Inverted2  className="h-[20%] w-[20%] object-cover mb-6 "/>
            </div>
            <p className="text-custom-grey text-center my-2">{d.text}</p>{" "}
            {/* Adjusting text size */}
            <div className="flex items-center justify-center rounded-full overflow-hidden  mt-10 mb-2">
              {" "}
              {/* Adjusting image size */}
              <img
                src={user}
                alt="Profile"
                className="flex items-center justify-center "
              />
            </div>
            <p className="flex items-center justify-center text-gray-800 font-bold text-xl">
              {d.name}
            </p>{" "}
            {/* Adjusting text size */}
            <p className="flex items-center justify-center text-custom-purple font-lato text-lg">
              {d.designation}
            </p>{" "}
            {/* Adjusting text size */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Card;
