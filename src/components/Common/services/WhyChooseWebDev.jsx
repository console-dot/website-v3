import React from "react";
import { Divider } from "../../../constatnts/Divider";
import {
  MobCustomizationIcon,
  MobExpertise,
  MobileCollabIcon,
  MonInnovatIcon,
} from "../../../assets/icons";
import useIsMobile from "../../../utils/hooks/useIsMobile";
export const WhyChooseWebDev = ({ heading, whyChooseUs, cardsInRow }) => {
  const data = [
    {
      id: 1,
      title: "Expertise",
      icon: <MobExpertise />,
      description: whyChooseUs[0],
    },
    {
      id: 2,
      title: "Innovative Solutions",
      icon: <MonInnovatIcon />,
      description: whyChooseUs[1],
    },
    {
      id: 3,
      title: "Client Collaboration",
      icon: <MobileCollabIcon />,
      description: whyChooseUs[2],
    },
  ];

  const gradientStyle = {
    background: "linear-gradient(180deg, #0E7789 0%, #3C5A85 100%)",
  };
  const isMobile = useIsMobile();
  return (
    <div className="w-full mt-12">
      <div className="flex flex-col text-center gap-2 items-center justify-center w-full">
        <h1 className="text-[28px] xs:text-[20px] xxs:text-[16px] leading-10 text-custom-purple font-bold">
          {heading.toUpperCase()}
        </h1>
        <div className="xl:mb-0 lg:mb-0 md:mb-0 sm:mb-8 xs:mb-8 xss:mb-8">
          <Divider />
        </div>
      </div>
      {!isMobile ? (
        <div className={`w-full grid ${cardsInRow} gap-8 mt-8 `}>
          {data?.map((i, index) => (
            <div
              key={index}
              className=" flex flex-col bg-white border-2 border-transparent  hover:border-2 hover:border-primaryText hover:border-dashed justify-between px-4"
            >
              <div className="flex flex-col items-center justify-center p-8 my-6 sm:p-4 xs:p-4 xxs:p-2 gap-4">
                <div
                  style={gradientStyle}
                  className="w-[80px] h-[80px] bg-dottedBorder rounded-full flex items-center justify-center mb-4"
                >
                  {i?.icon}
                </div>

                <h1 className="text-[16px] text-webHeading leading-6 font-bold">
                  {i.title}
                </h1>
                {i?.subHeading && (
                  <h1 className="text-[16px] text-center font-poppins my-1 text-dottedBorder leading-6">
                    {i.subHeading}
                  </h1>
                )}
                <span className="text-[14px] text-webDescrip leading-6 text-justify ">
                  {i.description}
                </span>
              </div>
              <div className=" w-full h-2 bg-gradient-to-r from-fromclr to-toclr"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full overflow-x-auto flex sm:hidden">
          <div className="flex gap-8">
            {data?.map((i, index) => (
              <div
                key={index}
                className="flex flex-col bg-white border-2 border-transparent hover:border-2 hover:border-primaryText hover:border-dashed justify-between px-4 min-w-[300px]"
              >
                <div className="flex flex-col items-center justify-center p-8 sm:p-4 xs:p-4 xxs:p-2 gap-4">
                  <div
                    style={gradientStyle}
                    className="w-[80px] h-[80px] bg-dottedBorder rounded-full flex items-center justify-center mb-4"
                  >
                    {i?.icon}
                  </div>

                  <h1 className="text-[16px] text-webHeading leading-6 font-bold">
                    {i.title}
                  </h1>
                  {i?.subHeading && (
                    <h1 className="text-[16px] text-center font-poppins my-1 text-dottedBorder leading-6">
                      {i.subHeading}
                    </h1>
                  )}
                  <span className="text-[16px] text-webHeading leading-6 text-justify">
                    {i.description}
                  </span>
                </div>
                <div className="w-full h-2 bg-gradient-to-r from-fromclr to-toclr"></div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
