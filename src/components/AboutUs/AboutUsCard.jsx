import React, { useState } from "react";
import user from "../../assets/images/user.png";
import cardsymbol from "../../assets/images/cardsymbol.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Inverted2 } from "../../assets/icons";
import config from "../../api/config";

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} animate-bounce-right custom-arrow-right`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <i className="fas fa-arrow-right"></i>
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} animate-bounce-left custom-arrow-left`}
      style={{ ...style, display: "block", left: -40 }}
      onClick={onClick}
    >
      <i className="fas fa-arrow-left"></i>
    </div>
  );
};

const settings = {
  dots: true,
  infinite: false,
  className: "center",
  centerPadding: "60px",
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  nextArrow: <CustomNextArrow />,
  prevArrow: <CustomPrevArrow />,

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

const Card = ({ testimonials }) => {
  const BASE_URL = config.BASE_URL;
  return (
    <div className="">
      <Slider {...settings} style={{ gap: "10px" }}>
        {testimonials?.map((testimonial) => (
          <div
            key={testimonial?._id}
            className="bg-white flex items-center justify-center transition-transform duration-300 rounded-xl p-3 py-10"
          >
            <div className="flex justify-center mb-4 h-16">{<Inverted2 />}</div>
            <p className="text-custom-grey text-center my-2 h-28">
              {testimonial?.description}
            </p>
            <div className="flex items-center justify-center mt-10 mb-2">
              <img
                src={`${BASE_URL}/file/${testimonial?.image}`}
                alt={testimonial?.fullName}
                className="flex items-center justify-center h-10 w-10 rounded-full"
              />
            </div>
            <p className="text-gray-800 font-bold text-xl text-center">
              {testimonial?.fullName}
            </p>
            <p className="text-custom-purple font-lato text-lg text-center">
              {testimonial?.designation}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Card;
