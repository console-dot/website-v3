import React from "react";
import {
  DashedBg,
  aboutService,
  circletickicon,
  offshoreimg1,
  offshoreimg2,
  offshoreimg3,
} from "../../assets/images";

export const OffshoreModel = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center md:mt-16 mt-8">
        <div className="font-Lato md:text-[16px] text-[12px] text-custom-blue">
          Offshoring Models
        </div>
        <div className="font-Poppins md:text-[28px] text-[18px] font-bold text-custom-purple md:mt-2 mt-1">
          EXPLORE OUR OFFSHORING MODELS
        </div>
        <div className="leading-10 md:mt-2 mt-1">
          <div className="flex items-center">
            <div class="h-0.5 bg-custom-purple md:w-[80px] w-12"></div>
            <div class="w-2 h-2 bg-gradient-to-tl from-custom-blue to-custom-purple rounded-full"></div>
            <div class="h-0.5 bg-custom-purple md:w-[80px] w-12"></div>
          </div>
        </div>
      </div>

      {/* Hourly (Time & Material) start */}
      <div className="w-full pl-5 pr-5 md:pl-20 md:pr-20 flex flex-wrap justify-between items-center md:flex-row  bg-offwhite md:mt-9 mt-5">
        {/* Left side */}
        <div className="xl:w-[48%] lg:w-[48%] md:w-[48%] sm:w-[100%] xs:w-[100%] md:p-0 p-3">
          <div className="w-full flex flex-col">
            <div className="w-[100%]">
              <p className="text-custom-purple font-poppins md:text-[28px] text-[18px] font-bold leading-8 tracking-normal md:mt-4 mt-2">
                Hourly <small>(Time & Material)</small>
              </p>
              <p className="text-aboutustext font-lato text-justify md:text-[16px] text-[12px] leading-6 md:mt-4 mt-2">
                In this model, you pay for the actual time and resources
                invested in your project. It's a flexible approach, ideal for
                dynamic projects with evolving requirements.
              </p>
              <p className="md:text-[16px] text-[12px] font-bold text-black mt-4">
                Advantages:
              </p>
              <div className="flex items-start mt-4">
                <img
                  src={circletickicon}
                  alt="circletickicon"
                  className="mr-2 lg:mr-4 w-4 h-4 lg:w-6 lg:h-6"
                />
                <span className="text-aboutustext md:text-[16px] text-[12px]">
                  Flexibility to adapt to changing project needs.
                </span>
              </div>
              <div className="flex items-start mt-4">
                <img
                  src={circletickicon}
                  alt="circletickicon"
                  className="mr-2 lg:mr-4 w-4 h-4 lg:w-6 lg:h-6"
                />
                <span className="text-aboutustext md:text-[16px] text-[12px]">
                  Real-time tracking and reporting.
                </span>
              </div>
              <div className="flex items-start mt-4">
                <img
                  src={circletickicon}
                  alt="circletickicon"
                  className="mr-2 lg:mr-4 w-4 h-4 lg:w-6 lg:h-6"
                />
                <span className="text-aboutustext md:text-[16px] text-[12px]">
                  Cost-effectiveness for short-term projects.
                </span>
              </div>
              <div className="flex md:justify-start justify-center sm:mt-7 sm:mb-6 xs:mt-7 xs:mb-6 md:mt-7 md:mb-6 mt-2 mb-2">
                <button className="md:px-24 md:py-4 px-16 py-3  bg-custom-purple text-custom-white rounded-full focus:outline-none transition-colors duration-300 hover:bg-custom-lightBlue hover:text-custom-purple active:bg-gradient-to-r active:from-custom-purple active:to-custom-blue">
                  <p className="font-Lato text-base font-medium leading-[28px] tracking-normal">
                    Avail Service
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Right side */}
        <div className="xl:w-[48%] lg:w-[48%] md:w-[48%] sm:w-[100%] xs:w-[100%] flex justify-center relative md:order-1 order-2">
          <div className="w-[100%]] relative justify-start">
            <img
              className="md:w-[528px] md:h-[408px] w-full h-auto"
              src={offshoreimg1}
              alt="Img not found"
              style={{ position: "relative" }}
            />
          </div>
        </div>
      </div>
      {/* Hourly (Time & Material) End */}

      {/* Fixed-price start */}
      <div className="w-full pl-5 pr-5 md:pl-20 md:pr-20 flex flex-wrap justify-between items-center bg-offwhite md:mt-9 mt-5">
        {/* Right side */}
        <div className="xl:w-[48%] lg:w-[48%] md:w-[48%] sm:w-[100%] xs:w-[100%] md:p-0 p-3 md:pl-5 md:order-2 order-1">
          <div className="w-full flex flex-col pl-0">
            <div className="w-[100%]">
              <p className="text-custom-purple font-poppins md:text-[28px] text-[18px] font-bold leading-8 tracking-normal md:mt-4 mt-2">
                Fixed Price
              </p>
              <p className="text-aboutustext font-lato text-justify md:text-[16px] text-[12px] leading-6 md:mt-4 mt-2">
                For projects with well-defined scopes, our fixed-price model
                ensures budget predictability. We provide a comprehensive
                quote,and you pay a predetermined amount for the entire project.
              </p>
              <p className="md:text-[16px] text-[12px] font-bold text-black mt-4">
                Advantages:
              </p>
              <div className="flex items-start mt-4">
                <img
                  src={circletickicon}
                  alt="circletickicon"
                  className="mr-2 lg:mr-4 w-4 h-4 lg:w-6 lg:h-6"
                />
                <span className="text-aboutustext md:text-[16px] text-[12px]">
                  Budget certainty with no surprises.
                </span>
              </div>
              <div className="flex items-start mt-4">
                <img
                  src={circletickicon}
                  alt="circletickicon"
                  className="mr-2 lg:mr-4 w-4 h-4 lg:w-6 lg:h-6"
                />
                <span className="text-aboutustext md:text-[16px] text-[12px]">
                  Clear project milestones and deliverables.
                </span>
              </div>
              <div className="flex items-start mt-4">
                <img
                  src={circletickicon}
                  alt="circletickicon"
                  className="mr-2 lg:mr-4 w-4 h-4 lg:w-6 lg:h-6"
                />
                <span className="text-aboutustext md:text-[16px] text-[12px]">
                  Suitable for projects with a stable and known scope.
                </span>
              </div>
              <div className="flex md:justify-start justify-center sm:mt-7 sm:mb-6 xs:mt-7 xs:mb-6 md:mt-7 md:mb-6 mt-2 mb-2">
                <button className="md:px-24 md:py-4 px-16 py-3  bg-custom-purple text-custom-white rounded-full focus:outline-none transition-colors duration-300 hover:bg-custom-lightBlue hover:text-custom-purple active:bg-gradient-to-r active:from-custom-purple active:to-custom-blue">
                  <p className="font-Lato text-base font-medium leading-[28px] tracking-normal">
                    Avail Service
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Left side */}
        <div className="xl:w-[48%] lg:w-[48%] md:w-[48%] sm:w-[100%] xs:w-[100%]flex justify-center relative md:order-1 order-2">
          <div className="w-[100%] relative justify-start">
            <img
              className="md:w-[528px] md:h-[408px] w-full h-auto"
              src={offshoreimg2}
              alt="Img not found"
              style={{ position: "relative" }}
            />
          </div>
        </div>
      </div>
      {/* Fixed-price End */}

      <div className="w-full pl-5 pr-5 md:pl-20 md:pr-20 flex flex-wrap justify-between items-center bg-offwhite md:mt-9 mt-5">
        {/* Left side */}
        <div className="xl:w-[48%] lg:w-[48%] md:w-[48%] sm:w-[100%] xs:w-[100%] md:p-0 p-3">
          <div className="w-full flex flex-col">
            <div className="w-[100%]">
              <p className="text-custom-purple font-poppins md:text-[28px] text-[18px] font-bold leading-8 tracking-normal md:mt-4 mt-2">
                BOT<small>(Build-Operate-Transfer)</small>Model
              </p>
              <p className="text-aboutustext font-lato text-justify md:text-[16px] text-[12px] leading-6 md:mt-4 mt-2">
                ConsoleDot's BOT model offers a strategic partnership that
                combines the benefits of outsourcing and ownership. We build and
                operate the project for an agreed-upon duration, and later, you
                can seamlessly transfer the operations in-house.
              </p>
              <p className="md:text-[16px] text-[12px] font-bold text-black mt-4">
                Advantages:
              </p>
              <div className="flex items-start mt-4">
                <img
                  src={circletickicon}
                  alt="circletickicon"
                  className="mr-2 lg:mr-4 w-4 h-4 lg:w-6 lg:h-6"
                />
                <span className="text-aboutustext md:text-[16px] text-[12px]">
                  Gradual transition and knowledge transfer.
                </span>
              </div>
              <div className="flex items-start mt-4">
                <img
                  src={circletickicon}
                  alt="circletickicon"
                  className="mr-2 lg:mr-4 w-4 h-4 lg:w-6 lg:h-6"
                />
                <span className="text-aboutustext md:text-[16px] text-[12px]">
                  Complete control and ownership over the project.
                </span>
              </div>
              <div className="flex items-start mt-4">
                <img
                  src={circletickicon}
                  alt="circletickicon"
                  className="mr-2 lg:mr-4 w-4 h-4 lg:w-6 lg:h-6"
                />
                <span className="text-aboutustext md:text-[16px] text-[12px]">
                  Risk mitigation through ConsoleDot's expertise.
                </span>
              </div>
              <div className="flex md:justify-start justify-center sm:mt-7 sm:mb-6 xs:mt-7 xs:mb-6 md:mt-7 md:mb-6 mt-2 mb-2 ">
                <button className="md:px-24 md:py-4 px-16 py-3  bg-custom-purple text-custom-white rounded-full focus:outline-none transition-colors duration-300 hover:bg-custom-lightBlue hover:text-custom-purple active:bg-gradient-to-r active:from-custom-purple active:to-custom-blue">
                  <p className="font-Lato text-base font-medium leading-[28px] tracking-normal">
                    Avail Service
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Right side */}
        <div className="xl:w-[48%] lg:w-[48%] md:w-[48%] sm:w-[100%] xs:w-[100%] flex justify-center relative md:order-1 order-2">
          <div className="w-[100%] relative justify-start">
            <img
              className="md:w-[528px] md:h-[408px] w-full h-auto"
              src={offshoreimg3}
              alt="Img not found"
              style={{ position: "relative" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
