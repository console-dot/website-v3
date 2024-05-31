import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CheckIcon from "../../assets/icons/CheckIcon";

const Card = ({ heading, description }) => {
  return (
    <div className="bg-white shadow-lg xl:w-full lg:w-full md:w-full xl:h-[420px] lg:h-[420px] md:h-[420px] h-[400px] rounded-lg flex flex-col justify-between xl:p-6 lg:px-1 lg:pb-6 md:px-6 md:pb-6 sm:px-6 sm:pb-6 xs:px-6 xs:pb-6 xss:px-6 xss:pb-6 xl:hover:-translate-y-8 lg:hover:-translate-y-8 md:hover:-translate-y-8 sm:hover:-translate-y-0 xs:hover:-translate-y-0 xss:hover:-translate-y-0 hover:border-dashed hover:border-2 hover:border-custom-purple transition duration-300 ease-in-out mt-6 md:mb-0">
      {/* Header Section */}
      <div className="text-center mb-4 text-custom-purple">
        <h2 className="text-[24px] font-bold">{heading}</h2>
      </div>

      {/* Description Section */}
      <div className="flex-1 text-custom-grey text-left overflow-y-hidden hover:overflow-y-auto">
        <ul className="list-disc list-inside">
          {description.map((point, index) => (
            <li key={index} className="flex items-center mb-2">
              <div className="mr-2">
                <CheckIcon />
              </div>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer Section */}
      <div className="w-full flex justify-center mt-6">
        <button className="xl:px-24 xl:py-2.5 lg:px-24 lg:py-1 md:px-24 md:py-2.5 sm:px-12 sm:py-2 xs:px-12 xs:py-2.5 xss:px-12 xss:py-2.5 bg-custom-lightBlue text-custom-purple rounded-full focus:outline-none transition-colors duration-300 lg:hover:bg-gradient-to-tl lg:hover:from-custom-blue1 lg:hover:to-custom-purple lg:hover:text-custom-white lg:active:bg-gradient-to-r lg:active:from-custom-purple lg:active:to-custom-blue md:hover:bg-gradient-to-tl md:hover:from-custom-blue1 md:hover:to-custom-purple md:hover:text-custom-white md:active:bg-gradient-to-r md:active:from-custom-purple md:active:to-custom-blue">
          <p className="font-Lato text-base font-medium leading-[28px] tracking-normal">
            Avail Service
          </p>
        </button>
      </div>
    </div>
  );
};

export const CardArray = ({ offshoreComparison }) => {
  const cards = offshoreComparison.map((offshore) => ({
    heading: offshore.type,
    description: offshore.comparison,
  }));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tablet breakpoint
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // mobile breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="hidden lg:grid lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 w-full justify-center items-center mb-8 gap-6">
        {cards.map((card, index) => (
          <Card
            key={index}
            heading={card.heading}
            description={card.description}
          />
        ))}
      </div>
      <div className="lg:hidden lg:mb-2 md:mb-2 mb-20">
        <Slider {...settings}>
          {cards.map((card, index) => (
            <div key={index}>
              <Card heading={card.heading} description={card.description} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
