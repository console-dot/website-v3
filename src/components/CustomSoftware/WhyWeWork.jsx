import React, { useState, useEffect, useRef } from "react";
import { Divider } from "../../constatnts/Divider";
import {
  CloudCompIcon,
  CustomCollabIcon,
  CustomExpertiseIcon,
  ProductResearchTop,
} from "../../assets/icons";
import { whywework } from "../../assets/images";
import "./WhyChoose.css";

export const WhyWeWork = ({ delivers }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const gradientStyle = {
    background: "linear-gradient(180deg, #0E7789 0%, #3C5A85 100%)",
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } 
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []); 

  return (
    <div className="">
      <div className="flex flex-col gap-2 items-center justify-center w-full">
        <h1 className="text-[28px] xs:text-[20px] xxs:text-[16px] leading-10 text-custom-purple font-bold">
          HOW CONSOLEDOT DELIVERS:
        </h1>
        <div className="">
          <Divider />
        </div>
      </div>
      <div
        ref={containerRef}
        className={`flex lg:flex-row xl:flex-row md:flex-row sm:flex-col-reverse xss:flex-col-reverse xs:flex-col w-full justify-around items-center mt-8 gap-8`}
      >
        <div className="lg:w-[50%] xl:w-[50%] md:w-[50%] sm:w-[100%] xs:w-[100%] xss:w-[100%]">
          <div className="flex justify-center items-center p-4">
            <ProductResearchTop width={483} height={382} />
          </div>
        </div>
        <div
          className={`lg:w-[50%] xl:w-[50%] md:w-[50%] sm:w-[100%] xs:w-[100%] xss:w-[100%] ${
            isVisible ? "animate-slide-in" : "animate-slide-out"
          }`}
        >
          <div className="flex flex-col w-full">
            <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col xss:flex-col items-center xl:gap-8 lg:gap-8 md:gap-8 sm:gap-4 xs:gap-4 xss:gap-4 lg:w-[100%] xl:w-[100%] 2xl:w-[100%] md:w-[70%] sm:w-[70%] xs:w-full xxs:w-full  bg-white  p-4 border-2 border-transparent hover:border-2 hover:border-primaryText hover:border-dashed mb-4">
              <div>
                <div
                  style={gradientStyle}
                  className="w-[80px] h-[80px] xs:w-[60px] xs:h-[60px] xxs:h-[50px] xxs:w-[50px] bg-dottedBorder rounded-full flex items-center justify-center mb-4"
                >
                  <CustomExpertiseIcon />
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-[16px] text-webHeading leading-6 mb-2 font-bold">
                  Expertise in Action
                </h1>
                <h1 className="md:text-[16px] text-[14px] text-webDescrip leading-6 text-justify ">
                  {delivers?.actionDescription}
                </h1>
              </div>
            </div>

            <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col xss:flex-col items-center xl:gap-8 lg:gap-8 md:gap-8 sm:gap-4 xs:gap-4 xss:gap-4 lg:w-[100%] xl:w-[100%] 2xl:w-[100%] md:w-[70%] sm:w-[70%] xs:w-full xxs:w-full  bg-white  p-4 border-2 border-transparent hover:border-2 hover:border-primaryText hover:border-dashed">
              <div>
                <div
                  style={gradientStyle}
                  className="w-[80px] h-[80px] xs:w-[60px] xs:h-[60px] xxs:h-[50px] xxs:w-[50px] bg-dottedBorder rounded-full flex items-center justify-center mb-4"
                >
                  <CustomCollabIcon />
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-[16px] text-webHeading leading-6 mb-2 font-bold">
                  Collaborative Ingenuity
                </h1>
                <h1 className="md:text-[16px] text-[14px] text-webDescrip leading-6 text-justify ">
                  {delivers?.collabDescription}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
