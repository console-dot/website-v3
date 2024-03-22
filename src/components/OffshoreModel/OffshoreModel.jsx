import React from "react";
import {
  circletickicon,
  offshoreimg1,
  offshoreimg2,
  offshoreimg3,
} from "../../assets/images";

export const OffshoreModel = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center lg:mt-16 md:mt-16 sm:mt-8 xs:mt-8">
        <div className="font-Lato lg:text-[16px] md:text-[16px] sm:text-[12px] xs:text-[12px] text-custom-blue">
          Offshoring Models
        </div>
        <div className="font-Poppins lg:text-[28px] md:text-[28px] sm:text-[18px] xs:text-[18px] font-bold text-custom-purple lg:mt-2 md:mt-2 sm:mt-1 xs:mt-1">
          Explore Our Offshoring Models
        </div>
        <div className="font-Rubik text-4xl font-normal leading-10 lg:mt-2 md:mt-2 sm:mt-1 xs:mt-1">
          <div className="flex items-center">
            <div className="h-0.5 bg-custom-purple w-16"></div>
            <div className="w-2 h-2 bg-black rounded-full mx-1"></div>
            <div className="h-0.5 bg-custom-purple w-16"></div>
          </div>
        </div>
      </div>
      {/* Hourly (Time & Material) start */}
      <div className=" w-full flex flex-wrap bg-offwhite py-12 ">
        {/* Left side */}
        <div className="w-full md:w-[50%]">
          <div className="w-full p-4 md:p-8 flex flex-col sm:mt-[-60px] xs:mt-[-60px]">
            <div>
              <p className="text-custom-purple font-poppins lg:text-[24px] md:text-24px sm:text-[16px] xs:text-[16px] font-bold leading-8 tracking-normal mt-4">
                Hourly <small>(Time & Material)</small>
              </p>
              <p className="text-aboutustext font-lato text-left lg:text-[14px] md:text-14px sm:text-[10px] xs:text-[10px] font-normal leading-6 mt-4">
                In this model, you pay for the actual time and resources
                invested in your project. It's a flexible approach, ideal for
                dynamic projects with evolving requirements.
              </p>
              <p className="lg:text-[14px] md:text-[14px] sm:text-[10px] xs:text-[10px] text-black mt-4">
                Advantages:
              </p>
              <div className="flex items-start mt-4">
                <img
                  src={circletickicon}
                  alt="circletickicon"
                  className="mr-2 lg:mr-4 w-4 h-4 lg:w-6 lg:h-6"
                />
                <span className="text-aboutustext lg:text-[14px] md:text-[14px] sm:text-[10px] xs:text-[10px]">
                  Flexibility to adapt to changing project needs.
                </span>
              </div>
              <div className="flex items-start mt-4">
                <img
                  src={circletickicon}
                  alt="circletickicon"
                  className="mr-2 lg:mr-4 w-4 h-4 lg:w-6 lg:h-6"
                />
                <span className="text-aboutustext lg:text-[14px] md:text-[14px] sm:text-[10px] xs:text-[10px]">
                  Real-time tracking and reporting.
                </span>
              </div>
              <div className="flex items-start mt-4">
                <img
                  src={circletickicon}
                  alt="circletickicon"
                  className="mr-2 lg:mr-4 w-4 h-4 lg:w-6 lg:h-6"
                />
                <span className="text-aboutustext lg:text-[14px] md:text-[14px] sm:text-[10px] xs:text-[10px]">
                  Cost-effectiveness for short-term projects.
                </span>
              </div>
              <div className=" flex justify-start mt-8">
                <button className="text-white px-24 py-4 bg-gradient-to-r from-custom-blue to-custom-purple  rounded-full  active:bg-gradient-to-r active:from-custom-purple active:to-custom-blue">
                  <p className="font-Lato text-base font-medium leading-[28px] tracking-normal">
                    Avail Service
                  </p>
                </button>
              </div>
              {/* Add more advantage points as needed */}
            </div>
          </div>
        </div>
        {/* Right side */}
        <div className="w-[528px] h-[407px] md:w-[50%] min-w-[266px] min-h-[205px] overflow-hidden">
          <img
            src={offshoreimg1}
            alt="Offshore Image"
            className="w-full h-full "
          />
        </div>
      </div>
      {/* Hourly (Time & Material) End */}

      {/* Fixed Price Start*/}
      <div className="w-full flex flex-wrap bg-offwhite py-12">
        {/* Left side (with image) */}
        <div className="w-[528px] h-[407px] md:w-[50%] min-w-[266px] min-h-[205px] overflow-hidden">
          <img
            src={offshoreimg2}
            alt="Offshore Image"
            className="w-full h-full"
          />
        </div>
        {/* Right side (with text) */}
        <div className="w-full md:w-[50%]">
          <div className="w-full p-4 md:p-8 flex flex-col sm:mt-[-60px] xs:mt-[-60px]">
            <div>
              <p className="text-custom-purple font-poppins lg:text-[24px] md:text-24px sm:text-[16px] xs:text-[16px] font-bold leading-8 tracking-normal mt-4">
                Fixed Price
              </p>
              <p className="text-aboutustext font-lato text-left lg:text-[14px] md:text-14px sm:text-[10px] xs:text-[10px] font-normal leading-6 mt-4">
                For projects with well-defined scopes, our fixed-price model
                ensures budget predictability. We provide a comprehensive quote,
                and you pay a predetermined amount for the entire project.
              </p>
              <p className="lg:text-[14px] md:text-[14px] sm:text-[10px] xs:text-[10px] text-black mt-4">
                Advantages:
              </p>
              <div className="flex items-start mt-4">
                <img
                  src={circletickicon}
                  alt="circletickicon"
                  className="mr-2 lg:mr-4 w-4 h-4 lg:w-6 lg:h-6"
                />
                <span className="text-aboutustext lg:text-[14px] md:text-[14px] sm:text-[10px] xs:text-[10px]">
                  Budget certainty with no surprises.
                </span>
              </div>
              <div className="flex items-start mt-4">
                <img
                  src={circletickicon}
                  alt="circletickicon"
                  className="mr-2 lg:mr-4 w-4 h-4 lg:w-6 lg:h-6"
                />
                <span className="text-aboutustext lg:text-[14px] md:text-[14px] sm:text-[10px] xs:text-[10px]">
                  Clear project milestones and deliverables.
                </span>
              </div>
              <div className="flex items-start mt-4">
                <img
                  src={circletickicon}
                  alt="circletickicon"
                  className="mr-2 lg:mr-4 w-4 h-4 lg:w-6 lg:h-6"
                />
                <span className="text-aboutustext lg:text-[14px] md:text-[14px] sm:text-[10px] xs:text-[10px]">
                  Suitable for projects with a stable and known scope.
                </span>
              </div>
              <div className="flex justify-start mt-8">
                <button className="text-white px-24 py-4 bg-gradient-to-r from-custom-blue to-custom-purple rounded-full active:bg-gradient-to-r active:from-custom-purple active:to-custom-blue">
                  <p className="font-Lato text-base font-medium leading-[28px] tracking-normal">
                    Avail Service
                  </p>
                </button>
              </div>
              {/* Add more advantage points as needed */}
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Price Start */}

      <div className=" w-full flex flex-wrap bg-offwhite py-12 ">
        {/* Left side */}
        <div className="w-full md:w-[50%]">
          <div className="w-full p-4 md:p-8 flex flex-col sm:mt-[-60px] xs:mt-[-60px]">
            <div>
              <p className="text-custom-purple font-poppins lg:text-[24px] md:text-24px sm:text-[16px] xs:text-[16px] font-bold leading-8 tracking-normal mt-4">
                BOT(Build-Operate-Transfer)Model
              </p>
              <p className="text-aboutustext font-lato text-left lg:text-[14px] md:text-14px sm:text-[10px] xs:text-[10px] font-normal leading-6 mt-4">
                ConsoleDot's BOT model offers a strategic partnership that
                combines the benefits of outsourcing and ownership. We build and
                operate the project for an agreed-upon duration, and later, you
                can seamlessly transfer the operations in-house.
              </p>
              <p className="lg:text-[14px] md:text-[14px] sm:text-[10px] xs:text-[10px] text-black mt-4">
                Advantages:
              </p>
              <div className="flex items-start mt-4">
                <img
                  src={circletickicon}
                  alt="circletickicon"
                  className="mr-2 lg:mr-4 w-4 h-4 lg:w-6 lg:h-6"
                />
                <span className="text-aboutustext lg:text-[14px] md:text-[14px] sm:text-[10px] xs:text-[10px]">
                  Gradual transition and knowledge transfer.
                </span>
              </div>
              <div className="flex items-start mt-4">
                <img
                  src={circletickicon}
                  alt="circletickicon"
                  className="mr-2 lg:mr-4 w-4 h-4 lg:w-6 lg:h-6"
                />
                <span className="text-aboutustext lg:text-[14px] md:text-[14px] sm:text-[10px] xs:text-[10px]">
                  Complete control and ownership over the project.
                </span>
              </div>
              <div className="flex items-start mt-4">
                <img
                  src={circletickicon}
                  alt="circletickicon"
                  className="mr-2 lg:mr-4 w-4 h-4 lg:w-6 lg:h-6"
                />
                <span className="text-aboutustext lg:text-[14px] md:text-[14px] sm:text-[10px] xs:text-[10px]">
                  Risk mitigation through ConsoleDot's expertise.
                </span>
              </div>
              <div className=" flex justify-start mt-8">
                <button className="text-white px-24 py-4 bg-gradient-to-r from-custom-blue to-custom-purple  rounded-full  active:bg-gradient-to-r active:from-custom-purple active:to-custom-blue">
                  <p className="font-Lato text-base font-medium leading-[28px] tracking-normal">
                    Avail Service
                  </p>
                </button>
              </div>
              {/* Add more advantage points as needed */}
            </div>
          </div>
        </div>
        {/* Right side */}
        <div className="w-[528px] h-[407px] md:w-[50%] min-w-[266px] min-h-[205px] overflow-hidden">
          <img
            src={offshoreimg3}
            alt="Offshore Image"
            className="w-full h-full "
          />
        </div>
      </div>
    </>
  );
};
