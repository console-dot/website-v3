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
      <div className="flex flex-col items-center justify-center text-center  md:mt-16 mt-8">
        <div className="font-Lato md:text-[16px] text-[12px] text-custom-blue">
          Offshoring Models
        </div>
        <div className="font-Poppins md:text-[28px] text-[18px] font-bold text-custom-purple md:mt-2 mt-1">
          EXPLORE OUR OFFSHORING MODELS
        </div>
        <div className=" leading-10  md:mt-2 mt-1">
          <div className="flex items-center">
            <div class="h-0.5 bg-custom-purple md:w-[80px] w-12"></div>
            <div class="w-2 h-2 bg-gradient-to-tl from-custom-blue to-custom-purple rounded-full"></div>
            <div class="h-0.5 bg-custom-purple md:w-[80px] w-12"></div>
          </div>
        </div>
      </div>
      {/* Hourly (Time & Material) start */}
      <div className="w-full md:pl-[7rem] flex flex-wrap justify-center items-center bg-offwhite md:mt-9 mt-5 ">
        {/* Left side */}
        <div className="w-auto md:w-[50%] md:p-0 p-3">
          <div className="w-auto  flex flex-col">
            <div>
              <p className="text-custom-purple font-poppins md:text-[28px] text-[18px] font-bold leading-8 tracking-normal md:mt-4 mt-2">
                Hourly <small>(Time & Material)</small>
              </p>
              <p className="text-aboutustext font-lato text-justify   md:text-[16px] text-[12px]  leading-6 md:mt-4 mt-2">
                In this model, you pay for the actual time and resources
                invested in your <span className="md:block"></span>project. It's
                a flexible approach, ideal for dynamic projects with evolving
                <span className="md:block"></span> requirements.
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
              <div className=" flex md:justify-start justify-center   md:mt-8 mt-4">
                <button className="text-white md:px-24 md:py-4 px-16 py-3 bg-gradient-to-r from-custom-blue to-custom-purple  rounded-full   hover:from-custom-purple hover:to-custom-blue active:text-custom-purple ">
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
        <div className="w-auto md:w-1/2 flex md:justify-start justify-center md:pl-5  relative ">
          <div className="w-3/4 justify-center relative">
            <img
              src={DashedBg}
              alt="Loading.."
              className="md:w-[500px] md:h-[400px] w-[350px] h-[250px]"
            />
            <img
              className="  md:left-[50px] md:w-[350px] md:h-[290px] top-11 left-3 w-[85%]"
              src={offshoreimg1}
              alt="Img not found"
              style={{ position: "absolute" }}
            />
          </div>
        </div>
      </div>
      {/* Hourly (Time & Material) End */}

      {/* Fixed-price start */}
      <div className="w-full md:pl-[7rem] flex flex-wrap justify-center items-center bg-offwhite md:mt-9 mt-5">
        {/* Right side */}
        <div className="w-auto md:w-[50%] md:p-0 p-3 md:pl-5 md:order-2 order-1">
          <div className="w-auto  flex flex-col">
            <div>
              <p className="text-custom-purple font-poppins md:text-[28px] text-[18px] font-bold leading-8 tracking-normal md:mt-4 mt-2">
                Fixed Price
              </p>
              <p className="text-aboutustext font-lato text-justify   md:text-[16px] text-[12px]  leading-6 md:mt-4 mt-2">
                For projects with well-defined scopes, our fixed-price model
                ensures budget predictability. We provide a comprehensive quote,
                and you pay a predetermined amount for the entire project.
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
              <div className=" flex md:justify-start justify-center   md:mt-8 mt-4">
                <button className="text-white md:px-24 md:py-4 px-16 py-3 bg-gradient-to-r from-custom-blue to-custom-purple  rounded-full   hover:from-custom-purple hover:to-custom-blue active:text-custom-purple ">
                  <p className="font-Lato text-base font-medium leading-[28px] tracking-normal">
                    Avail Service
                  </p>
                </button>
              </div>
              {/* Add more advantage points as needed */}
            </div>
          </div>
        </div>
        {/* Left side */}
        <div className="w-auto md:w-1/2 flex md:justify-start justify-center relative md:order-1 order-2">
          <div className="w-3/4 relative justify-start ">
            <img
              src={DashedBg}
              alt="Loading.."
              className="md:w-[500px] md:h-[400px] w-[350px] h-[250px]"
            />
            <img
              className="  md:left-[50px] md:w-[350px] md:h-[290px] top-11 left-3 w-[85%]"
              src={offshoreimg2}
              alt="Img not found"
              style={{ position: "absolute" }}
            />
          </div>
        </div>
      </div>
      {/* Fixed-price End */}
      <div className="w-full md:pl-[7rem] flex flex-wrap justify-center items-center bg-offwhite md:mt-9 mt-5">
        {/* Left side */}
        <div className="w-auto md:w-[50%] md:p-0 p-3">
          <div className="w-auto  flex flex-col">
            <div>
              <p className="text-custom-purple font-poppins md:text-[28px] text-[18px] font-bold leading-8 tracking-normal md:mt-4 mt-2">
                BOT<small>(Build-Operate-Transfer)</small>Model
              </p>
              <p className="text-aboutustext font-lato text-justify   md:text-[16px] text-[12px]  leading-6 md:mt-4 mt-2">
                ConsoleDot's BOT model offers a strategic partnership that
                combines the<span className="md:block"></span> benefits of outsourcing and ownership. We build and
                operate the project<span className="md:block"></span> for an agreed-upon duration, and later, you
                can seamlessly transfer the<span className="md:block"></span> operations in-house.
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
              <div className=" flex md:justify-start justify-center   md:mt-8 mt-4">
                <button className="text-white md:px-24 md:py-4 px-16 py-3 bg-gradient-to-r from-custom-blue to-custom-purple  rounded-full   hover:from-custom-purple hover:to-custom-blue active:text-custom-purple ">
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
        <div className="w-auto md:w-1/2 flex md:justify-start justify-center md:pl-5  relative ">
          <div className="w-3/4 justify-center relative">
            <img
              src={DashedBg}
              alt="Loading.."
              className="md:w-[500px] md:h-[400px] w-[350px] h-[250px]"
            />
            <img
              className="  md:left-[50px] md:w-[350px] md:h-[290px] top-11 left-3 w-[85%]"
              src={offshoreimg3}
              alt="Img not found"
              style={{ position: "absolute" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
