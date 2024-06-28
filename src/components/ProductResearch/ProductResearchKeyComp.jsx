import React from "react";
import Slider from "react-slick";
import { Divider } from "../../constatnts/Divider";
import { ClientUnderstandingIcon } from "../../assets/icons/ClientUnderstandingIcon";
import {
  FeasibilityStudiesIcon,
  MarketAnalysisIcon,
  RoadmaoDevIcon,
} from "../../assets/icons";
import CheckIcon from "../../assets/icons/CheckIcon";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCheck } from "react-icons/fa6";

export const ProductResearchKeyComp = ({ keyComponents }) => {
  const gradientStyle = {
    background: "linear-gradient(180deg, #0E7789 0%, #3C5A85 100%)",
  };
  const data = [
    {
      id: 1,
      heading: "Market Analysis",
      icon: <MarketAnalysisIcon />,
      para1: keyComponents[0]?.marketAnalysis[0],

      para2: keyComponents[0]?.marketAnalysis[1],
    },
    {
      id: 2,
      heading: "Client Understanding",
      icon: <ClientUnderstandingIcon />,
      para1: keyComponents[0]?.client[0],
      para2: keyComponents[0]?.client[1],
    },
    {
      id: 3,
      heading: "Feasibility Studies",
      icon: <FeasibilityStudiesIcon />,
      para1: keyComponents[0]?.feasibility[0],
      para2: keyComponents[0]?.feasibility[1],
    },
    {
      id: 4,
      heading: "Road Map Development",
      icon: <RoadmaoDevIcon />,
      para1: keyComponents[0]?.roadMap[0],
      para2: keyComponents[0]?.roadMap[1],
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: "unslick",
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col items-center justify-center w-full mt-12">
      <div className="flex flex-col gap-2 items-center justify-center w-3/5 sm:w-full md:w-full xs:w-full xxs:w-full ">
        <h1 className="text-[28px] w-full leading-10 text-custom-purple font-bold text-center">
          KEY COMPONENTS OF CONSOLEDOT'S PRODUCT RESEARCH SERVICES:
        </h1>
        <div className="xl:mb-0 lg:mb-0 md:mb-0 sm:mb-4 xs:mb-8 xss:mb-8">
          <Divider />
        </div>
      </div>
      <div className="hidden lg:grid xl:grid-cols-2 2xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 gap-8 xl:mt-8 lg:mt-8 md:mt-8 sm:mt-12 xs:mt-12 xss:mt-12">
        {data.map((i) => (
          <div
            key={i.id}
            className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row xs:flex-col xxs:flex-col gap-4 p-4 border-2 border-transparent hover:border-2 hover:border-primaryText hover:border-dashed bg-white"
          >
            <div className="py-[40px] xs:py-4 xxs:py-4 xxs:flex p-4 lg-w-full xxs:justify-center xs:justify-center justify-center items-center">
              <div
                style={gradientStyle}
                className="w-[80px] h-[80px] border-[5px] border-fromclr bg-custom-purple flex items-center  justify-center rounded-full"
              >
                {i.icon}
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full">
              <div className="flex w-full justify-center lg:justify-start">
                <h1 className="font-poppins text-[14px] leading-6 font-bold text-webHeading px-2 text-center lg:text-left">
                  {i.heading}
                </h1>
              </div>
              <div className="flex gap-4 flex-row">
                <div className="w-[30px] h-[30px] flex items-center justify-center rounded-full">
                  <CheckIcon />
                </div>
                <p className="text-[14px] text-webDescrip">{i.para1}</p>
              </div>
              <div className="flex gap-4 flex-row">
                <div className="w-[30px] h-[30px] flex items-center justify-center rounded-full">
                  <CheckIcon />
                </div>
                <p className="text-[14px] text-webDescrip">{i.para2}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="lg:hidden w-full">
        <Slider {...settings}>
          {data.map((i) => (
            <div key={i.id} className="flex items-center justify-center w-full">
              <div className="flex flex-col gap-4 p-4 border-2 border-transparent hover:border-2 hover:border-primaryText hover:border-dashed bg-white w-full">
                <div className="py-[40px] xs:py-4 xxs:py-4 xxs:flex p-4 xxs:justify-center xs:justify-center">
                  <div
                    style={gradientStyle}
                    className="w-[80px] h-[80px] border-[5px] border-fromclr bg-custom-purple flex items-center justify-center rounded-full"
                  >
                    {i.icon}
                  </div>
                </div>
                <div className="flex flex-col gap-4 w-full">
                  <div className="flex w-full justify-center">
                    <h1 className="font-poppins text-[14px] leading-6 font-bold text-webHeading px-2 text-center">
                      {i.heading}
                    </h1>
                  </div>
                  <div className="flex gap-4 flex-row justify-center">
                    <div className="w-[25px] h-[25px] flex items-center justify-center rounded-full border-[5px] border-fromclr bg-custom-purple">
                      <FaCheck className="text-white" />
                    </div>
                    <p className="text-[14px]">{i.para1}</p>
                  </div>
                  <div className="flex gap-4 flex-row justify-center">
                    <div className="w-[25px] h-[25px] flex items-center justify-center rounded-full border-[5px] border-fromclr bg-custom-purple">
                      <FaCheck className="text-white" />
                    </div>
                    <p className="text-[14px]">{i.para2}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
