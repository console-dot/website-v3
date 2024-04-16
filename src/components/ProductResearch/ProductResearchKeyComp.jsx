import React from "react";
import { Divider } from "../../constatnts/Divider";
import { ClientUnderstandingIcon } from "../../assets/icons/ClientUnderstandingIcon";
import {
  FeasibilityStudiesIcon,
  MarketAnalysisIcon,
  RoadmaoDevIcon,
  TickIcon,
} from "../../assets/icons";

export const ProductResearchKeyComp = () => {
  const data = [
    {
      id: 1,
      heading: "Market Analysis",
      icon: <MarketAnalysisIcon />,
      para1:
        "Thorough examination of market trends, identifying opportunities, and understanding potential challenges.",
      para2:
        "Analysis of competitors to determine unique selling points and market positioning.",
    },
    {
      id: 2,
      heading: "Client Understanding",
      icon: <ClientUnderstandingIcon />,
      para1:
        "In-depth exploration of your target audience, ensuring a comprehensive understanding of their needs, preferences, and pain points. ",
      para2:
        "Crafting user personas to guide software development that resonates with your clients.",
    },
    {
      id: 3,
      heading: "Feasibility Studies",
      icon: <FeasibilityStudiesIcon />,
      para1:
        "Assessing the viability of proposed software solutions, considering technical, financial, and operational aspects.",
      para2:
        "Providing insights into potential risks and mitigation strategies.",
    },
    {
      id: 4,
      heading: "Road Map Development",
      icon: <RoadmaoDevIcon />,
      para1:
        "Creating a strategic road map for software development, outlining key milestones, timelines, and deliverables.",
      para2:
        "Aligning the development process with business objectives for a cohesive and goal-oriented approach.",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center w-full mt-12">
      <div className="flex flex-col gap-2 items-center justify-center w-3/5">
        <h1 className="text-[16px] leading-5 text-dottedBorder">
          Key Components
        </h1>
        <h1 className="text-[28px] w-full leading-10 text-dottedBorder font-bold text-center">
          KEY COMPONENTS OF CONSOLEDOT's PRODUCT RESEARCH SERVICES:
        </h1>
        <div className="">
          <Divider />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8 mt-8">
        {data?.map((i) => (
          <div
            className={`flex ${
              i.id % 2 === 0 ? "flex-row" : "flex-row-reverse"
            } gap-8 p-4 hover:border-2 hover:border-primaryText hover:border-dashed`}
          >
            <div className="py-[40px]">
              <div className="w-[80px] h-[80px] border-2 border-webDescrip bg-dottedBorder flex items-center justify-center rounded-full">
                {i.icon}
              </div>
            </div>
            <div className="flex flex-col gap-4 ">
              <div
                className={`flex w-full ${
                  i.id % 2 === 0
                    ? "items-start justify-start"
                    : "items-end justify-end"
                }`}
              >
                <h1 className="font-poppins text-[14px] leading-6 font-bold text-webHeading px-2">
                  {i.heading}
                </h1>
              </div>
              <div
                className={`flex gap-4 ${
                  i.id % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className=" ">
                <div className="w-[30px] h-[30px] border-2 border-webDescrip bg-dottedBorder flex items-center justify-center rounded-full">
                  <TickIcon />
                </div></div>
                <p
                  className={`text-[14px] ${i.id % 2 === 0 ? "" : "text-end"}`}
                >
                  {i.para1}
                </p>
              </div>
              <div
                className={`flex gap-4 ${
                  i.id % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className=" ">
                <div className="w-[30px] h-[30px] border-2 border-webDescrip bg-dottedBorder flex items-center justify-center rounded-full">
                  <TickIcon />
                </div></div>
                <p
                  className={`text-[14px] ${i.id % 2 === 0 ? "" : "text-end"}`}
                >
                  {i.para2}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
