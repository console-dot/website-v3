import React from "react";
import { image1, image2, image3, image4 } from "../../assets/images";

export const OSC = ({ workExperience }) => {
  const servicesData = [
    {
      image: image1,
      title: workExperience?.countries,
      description: `Countries where
                      we have happy
                      clients`,
    },
    {
      image: image2,
      title: workExperience?.expEmployes,
      description: "Experienced Employees",
    },
    {
      image: image3,
      title: workExperience?.scrumTeams,
      description: "Scrum Teams",
    },
    {
      image: image4,
      title: workExperience?.fullStackDev,
      description: "Fullstack Developers",
    },
  ];
  return (
    <div className="pt-6">
      <div className="bg-gradient-to-t from-custom-blue xs:pl-10  to-custom-purple w-full flex md:flex-row flex-col justify-items-stretch gap-0 lg:px-4 xl:px-4 md:px-4 sm:px-10 xs:px-10 xss:px-10  p-[3rem] ">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className={
              "flex items-center flex-row md:w-[25%] md:pb-0 pb-[15px] xs:pb-[25px]"
            }
          >
            <div className=" flex justify-center items-center xl:w-24 xl:h-24 lg:w-24 lg:h-24 md:w-24 md:h-24 w-12 h-12 rounded-full border-2 border-white relative">
              <img
                src={service.image}
                alt={service.title}
                className="object-cover  xl:w-12 xl:h-12 lg:w-12 lg:h-12 md:w-12 md:h-12 w-6 h-6  "
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


