import React, { useState, useEffect, useRef } from "react";
import { Divider } from "../../constatnts/Divider";
import { CloudCompIcon } from "../../assets/icons";

export const WhyWeWork = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update visibility state based on whether the container is in view
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Trigger when 50% of the container is in view
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Clean up the observer when the component unmounts
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className="">
      <div className="flex flex-col gap-2 items-center justify-center w-full">
        <h1 className="text-[16px] leading-5 text-dottedBorder">Why We Work</h1>
        <h1 className="text-[28px] xs:text-[20px] xxs:text-[16px] leading-10 text-custom-purple font-bold">
          HOW CONSOLEDOT DELIVERS:
        </h1>
        <div className="">
          <Divider />
        </div>
      </div>
      <div
        ref={containerRef}
        className={`flex flex-col w-full justify-center items-center mt-8 gap-8 ${
          isVisible ? "animate-slide-in" : ""
        }`}
      >
        <div className="flex gap-8 lg:w-[45%] xl:w-[45%] 2xl:w-[45%] md:w-[70%] sm:w-[70%] xs:w-full xxs:w-full  bg-white  p-4 border-2 border-transparent hover:border-2 hover:border-primaryText hover:border-dashed">
          <div>
            <div className="w-[80px] h-[80px] xs:w-[60px] xs:h-[60px] xxs:h-[50px] xxs:w-[50px] bg-dottedBorder rounded-full flex items-center justify-center mb-4">
              <CloudCompIcon />
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-[16px] text-webHeading leading-6 mb-2 font-bold">
              Expertise in Action
            </h1>
            <h1 className="text-[16px] text-webHeading leading-6 text-justify ">
              ConsoleDot brings a seasoned team of developers, designers, and
              project managers to the table. Expect nothing less than excellence
              in execution and meticulous attention to detail.
            </h1>
          </div>
        </div>

        <div className="flex gap-8 lg:w-[45%] xl:w-[45%] 2xl:w-[45%] md:w-[70%] sm:w-[70%] xs:w-full xxs:w-full  bg-white  p-4 border-2 border-transparent hover:border-2 hover:border-primaryText hover:border-dashed">
          <div>
            <div className="w-[80px] h-[80px] xs:w-[60px] xs:h-[60px] xxs:h-[50px] xxs:w-[50px] bg-dottedBorder rounded-full flex items-center justify-center mb-4">
              <CloudCompIcon />
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-[16px] text-webHeading leading-6 mb-2 font-bold">
              Expertise in Action
            </h1>
            <h1 className="text-[16px] text-webHeading leading-6 text-justify ">
              ConsoleDot brings a seasoned team of developers, designers, and
              project managers to the table. Expect nothing less than excellence
              in execution and meticulous attention to detail.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
