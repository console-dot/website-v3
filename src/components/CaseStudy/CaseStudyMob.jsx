import React from "react";
import {
  CaseIcon1,
  CaseIcon10,
  CaseIcon2,
  CaseIcon3,
  CaseIcon4,
  CaseIcon5,
  CaseIcon6,
  CaseIcon7,
  CaseIcon8,
  CaseIcon9,
} from "../../assets/icons";
import { CircleLarge } from "./CircleLarge";
import { CircleSmall } from "./CircleSmall";
import { useNavigate } from "react-router-dom";

export const CaseStudyMob = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className=" grid grid-cols-2 sm-gap-4 xs:gap-2 xxs:gap-1  sm:p-4 xs:p-2 xxs:p-1 items-start border-t-2 border-r-2 border-b-2 border-fromclr border-dashed">
        <div className="relative p-4 flex flex-col gap-4">
          <div className="absolute md:top-[-16%] lg:top-[-16%] sm:top-[-16%] xs:top-[-10%] xxs:top-[-5%] left-[45%] ">
            <CircleLarge text={1} />
          </div>
          <div className="flex w-full justify-center">
            <CaseIcon1 />
          </div>
          <div>
            <h1 className="text-[16px] leading-5 text-center text-webHeading font-bold mb-4">
              Executive Summary
            </h1>
            <p className="text-[16px] leading-5 text-justify text-webDescrip">
              Briefly summarize the key aspects of the project, highlighting the
              problem, solution, and outcomes.
            </p>
          </div>
        </div>
        <div className="relative p-4 flex flex-col gap-4">
          <div className="absolute md:top-[-9%] lg:top-[-9%] sm:top-[-9%] xs:top-[-5%] xxs:top-[-3%] left-[45%]">
            <CircleSmall text={2} />
          </div>
          <div className="flex w-full justify-center items-center">
            <CaseIcon2 />
          </div>
          <div className="p-8">
            <h1 className="text-[16px] leading-5 font-bold text-center text-webHeading mb-4">
              Project Overview
            </h1>
            <h1 className="text-[14px] leading-5 text-start font-bold text-webHeading">
              A. Introduction
            </h1>
            <p className="text-[16px] leading-5 text-justify text-webDescrip mb-4">
              Provide an overview of the client or project context.
            </p>
            <h1 className="text-[14px] leading-5 text-start font-bold text-webHeading">
              B. Objectives
            </h1>
            <p className="text-[16px] leading-5 text-justify text-webDescrip">
              Outline the goals and objectives of the software development
              project.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm-gap-4 xs:gap-2 xxs:gap-1  sm:p-4 xs:p-2 xxs:p-1 items-start border-l-2 border-b-2 border-fromclr border-dashed">
        <div className="relative p-4 flex flex-col gap-4">
          <div className="absolute md:top-[-14%] lg:top-[-14%] sm:top-[-14%] xs:top-[-8%] xxs:top-[-5%]  left-[45%]">
            <CircleSmall text={4} />
          </div>
          <div className="flex w-full justify-center">
            <CaseIcon3 />
          </div>
          <div>
            <h1 className="text-[16px] leading-5 text-center mb-4 font-bold text-webHeading">
              Problem Statement
            </h1>
            <p className="text-[16px] leading-5 text-justify text-webDescrip">
              Describe the challenges or issues the client was facing that led
              to the need for the software solution.
            </p>
          </div>
        </div>
        <div className="relative p-4 flex flex-col gap-4">
          <div className="absolute md:top-[-12%] lg:top-[-12%] sm:top-[-12%] xs:top-[-7%] xxs:top-[-3%] left-[45%]">
            <CircleLarge text={3} />
          </div>
          <div className="flex w-full justify-center items-center">
            <CaseIcon4 />
          </div>
          <div>
            <h1 className="text-[16px] leading-5 text-center mb-4 font-bold text-webHeading">
              Solution
            </h1>
            <h1 className="text-[14px] leading-5 text-start font-bold text-webHeading">
              A. Approach
            </h1>
            <p className="text-[16px] leading-5 text-justify text-webDescrip mb-4">
              Explain the methodology and approach taken to address the client's
              challenges.
            </p>
            <h1 className="text-[14px] leading-5 text-start font-bold text-webHeading">
              B. Technologies Used
            </h1>
            <p className="text-[16px] leading-5 text-justify text-webDescrip mb-4">
              List the technologies, tools, and frameworks employed in the
              software development.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm-gap-4 xs:gap-2 xxs:gap-1  sm:p-4 xs:p-2 xxs:p-1 items-start border-r-2 border-b-2 border-fromclr border-dashed">
        <div className="relative p-4 flex flex-col gap-4">
          <div className="absolute md:top-[-10%] lg:top-[-10%] sm:top-[-10%] xs:top-[-5%] xxs:top-[-3%] left-[45%]">
            <CircleSmall text={5} />
          </div>
          <div className="flex w-full justify-center">
            <CaseIcon5 />
          </div>
          <div>
            <h1 className="text-[16px] leading-5 text-center font-bold mb-4 text-webHeading">
              Development Process
            </h1>
            <h1 className="text-[14px] leading-5 text-start font-bold text-webHeading">
              A. Planning
            </h1>
            <p className="text-[16px] leading-5 text-justify text-webDescrip mb-4">
              Detail the planning phase, including requirements gathering, scope
              definition, and timeline.
            </p>
            <h1 className="text-[14px] leading-5 text-start font-bold text-webHeading">
              B. Execution
            </h1>
            <p className="text-[16px] leading-5 text-justify text-webDescrip mb-4">
              Describe the development process, including coding, testing, and
              iteration.
            </p>
          </div>
        </div>
        <div className="relative p-4 flex flex-col gap-4">
          <div className="absolute md:top-[-16%] lg:top-[-16%] sm:top-[-16%] xs:top-[-12%] xxs:top-[-9%] left-[45%]">
            <CircleLarge text={6} />
          </div>
          <div className="flex w-full justify-center items-center">
            <CaseIcon6 />
          </div>
          <div>
            <h1 className="text-[16px] leading-5 text-center text-webHeading font-bold mb-4">
              Conclusion
            </h1>
            <p className="text-[16px] leading-5 text-justify text-webDescrip">
              Summarize the overall success of the software development project
              and its significance.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm-gap-4 xs:gap-2 xxs:gap-1  sm:p-4 xs:p-2 xxs:p-1 items-start border-l-2 border-b-2 border-fromclr border-dashed">
        <div className="relative p-4 flex flex-col gap-4">
          <div className="absolute md:top-[-16%] lg:top-[-16%] sm:top-[-16%] xs:top-[-12%] xxs:top-[-9%] left-[45%]">
            <CircleLarge text={8} />
          </div>
          <div className="flex w-full justify-center">
            <CaseIcon7 />
          </div>
          <div>
            <h1 className="text-[16px] leading-5 font-bold text-center text-webHeading mb-4">
              Lessons Learned
            </h1>

            <p className="text-[16px] leading-5 text-justify text-webDescrip mb-4">
              Share insights gained from the project that can be applied to
              future endeavors.
            </p>
          </div>
        </div>
        <div className="relative p-4 flex flex-col gap-4">
          <div className="absolute md:top-[-14%] lg:top-[-14%] sm:top-[-14%] xs:top-[-8%] xxs:top-[-4%] left-[45%]">
            <CircleSmall text={7} />
          </div>
          <div className="flex w-full justify-center items-center">
            <CaseIcon8 />
          </div>
          <div>
            <h1 className="text-[16px] leading-5 text-center mb-4 font-bold text-webHeading">
              Client Testimonials
            </h1>
            <p className="text-[16px] leading-5 text-justify text-webDescrip">
              Include quotes or testimonials from the client expressing
              satisfaction with the delivered solution
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm-gap-4 xs:gap-2 xxs:gap-1  sm:p-4 xs:p-2 xxs:p-1 items-start border-r-2 border-b-2 border-fromclr border-dashed">
        <div className="relative p-4 flex flex-col gap-4">
          <div className="absolute md:top-[-12%] lg:top-[-12%] sm:top-[-12%] xs:top-[-8%] xxs:top-[-5%] left-[45%]">
            <CircleSmall text={9} />
          </div>
          <div className="flex w-full justify-center">
            <CaseIcon9 />
          </div>
          <div>
            <h1 className="text-[16px] leading-5 text-center mb-4 font-bold text-webHeading">
              Results and Benefits
            </h1>
            <h1 className="text-[14px] leading-5 text-start font-bold text-webHeading">
              A. Achievements
            </h1>
            <p className="text-[16px] leading-5 text-justify text-webDescrip mb-4">
              Highlight the positive outcomes and achievements of the software
              development project.
            </p>
          </div>
        </div>
        <div className="relative p-4 flex flex-col gap-4">
          <div className="absolute md:top-[-16%] lg:top-[-16%] sm:top-[-16%] xs:top-[-11%] xxs:top-[-7%] left-[45%]">
            <CircleLarge text={10} />
          </div>
          <div className="flex w-full justify-center items-center">
            <CaseIcon10 />
          </div>
          <div>
            <h1 className="text-[16px] leading-5 text-center font-bold mb-4 text-webHeading">
              Challenges Faced
            </h1>
            <p className="text-[16px] leading-5 text-justify text-webDescrip mb-4">
              Discuss any challenges or obstacles encountered during the project
              and how they were overcome.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <button
          type="button"
          onClick={() => navigate("/CaseStudies")}
          className="text-custom-purple just border-[0.5px]bg-custom-lightBlue  rounded-full focus:outline-none transition-colors duration-300 hover:bg-gradient-to-tl  hover:from-custom-blue1 hover:to-custom-purple hover:text-custom-white active:bg-gradient-to-r active:from-custom-purple active:to-custom-blue px-5 py-2.5 w-[182px] h-[54px] mt-3 bg-custom-lightBlue  font-Lato font-medium"
        >
          Go To Case Studies
        </button>
      </div>
    </div>
  );
};
