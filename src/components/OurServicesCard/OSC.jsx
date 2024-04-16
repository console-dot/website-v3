import React from "react";
import { image1, image2, image3, image4 } from "../../assets/images";

export const OSC = ({ isMobile }) => {
  return (
    <div className="pt-6">
    <div className="bg-gradient-to-t from-custom-blue to-custom-purple w-full flex md:flex-row flex-col justify-items-stretch gap-0 px-4 md:px-28 p-[3rem] ">
      {servicesData.map((service, index) => (
        <div
          key={index}
          className={"flex items-center flex-row md:w-[25%] md:pb-0 pb-[15px]" }
         
        >
          <div className="md:w-24 md:h-24 w-24 h-24 rounded-full border-2 border-white relative" >
            
            <img
              src={service.image}
              alt={service.title}
              className="object-cover md:ml-5 md:mt-5 mt-5 ml-[25%]  "
              
            />
          </div>

          <div className=" ml-5 md:mt-0 md:w-[60%] justify-start md:text-left">
            <span className="font-bold md:text-[48px] text-[26px] text-white font-poppins">
              {service.title}
            </span>
            <div className="md:w-[70%]">
              <span className="text-white font-poppins md:text-[16px] text-[12px]">
                {service.description}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

const servicesData = [
  {
    image: image1,
    title: "12+",
    description: `Countries where
                    we have happy
                    clients`,
  },
  {
    image: image2,
    title: "26",
    description: "Experienced Employees",
  },
  {
    image: image3,
    title: "05",
    description: "Scrum Teams",
  },
  {
    image: image4,
    title: "06",
    description: "Fullstack Developers",
  },
];
