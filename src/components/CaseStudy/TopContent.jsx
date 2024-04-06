import React from "react";

export const TopContent = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-5 gap-8 w-full">
        <div>
          <h1 className="text-[16px] leading-5 text-center text-webHeading font-bold mb-4">
            Executive Summary
          </h1>
          <p className="text-[16px] leading-5 text-justify text-webDescrip">
            Briefly summarize the key aspects of the project, highlighting the
            problem, solution, and outcomes.
          </p>
        </div>
        <div>
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
            A. Introduction
          </h1>
          <p className="text-[16px] leading-5 text-justify text-webDescrip">
            Provide an overview of the client or project context.
          </p>
        </div>
        <div>
          <h1 className="text-[16px] leading-5 text-center mb-4 font-bold text-webHeading">
            Problem Statement
          </h1>
          <p className="text-[16px] leading-5 text-justify text-webDescrip">
            Describe the challenges or issues the client was facing that led to
            the need for the software solution.
          </p>
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
          <h1 className="text-[14px] leading-5 text-start font-bold text-webHeading">
            C. Key Features
          </h1>
          <p className="text-[16px] leading-5 text-justify text-webDescrip">
            Highlight the main features and functionalities of the software
            solution.
          </p>
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
    </div>
  );
};
