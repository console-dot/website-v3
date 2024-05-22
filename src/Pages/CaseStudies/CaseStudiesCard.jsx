import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  execSummaryImage,
  problemStatementImage,
  solutionImage,
  developmentProcessImage,
  challengesFacedImage,
  projectOverviewImage,
} from "../../assets/images";
import useIsMobile from "../../utils/hooks/useIsMobile";

const cards = [
  {
    title: "Executive Summary",
    image: execSummaryImage,
    description:
      "Briefly summarize the key aspects of the project, highlighting the problem, solution, and outcomes.",
  },
  {
    title: "Project Overview",
    image: projectOverviewImage,
    description:
      "Introduction: Provide an overview of the client or project context.\nObjectives: Outline the goals and objectives of the software development project.",
  },
  {
    title: "Problem Statement",
    image: problemStatementImage,
    description:
      "Describe the challenges or issues the client was facing that led to the need for the software solution.",
  },
  {
    title: "Solution",
    image: solutionImage,
    description:
      "Approach: Explain the methodology and approach taken to address the client’s challenges.\nTechnologies Used: List the technologies, tools, and frameworks employed in the software development.\nKey Features: Highlight the main features and functionalities of the software solution.",
  },
  {
    title: "Development Process",
    image: developmentProcessImage,
    description:
      "Planning: Detail the planning phase, including requirements gathering, scope definition, and timeline.\nExecution: Describe the development process, including coding, testing, and iteration.",
  },
  {
    title: "Challenges Faced",
    image: challengesFacedImage,
    description:
      "Discuss any challenges or obstacles encountered during the project and how they were overcome.",
  },
];


export const CaseStudiesCard = () => {
  const isMobile = useIsMobile();
  const [visibleCards, setVisibleCards] = useState(isMobile ? 5 : cards.length);
  const navigate = useNavigate();

  useEffect(() => {
    setVisibleCards(isMobile ? 5 : cards.length);
  }, [isMobile]);

  const loadMore = () => {
    setVisibleCards((prevVisibleCards) =>
      Math.min(prevVisibleCards + 5, cards.length)
    );
  };

  const handleCardClick = (card) => {
    navigate(`/CaseStudies/${card.title}`, { state: { card } });
  };

  return (
    <div className="flex flex-col justify-start items-center mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {cards.slice(0, visibleCards).map((card, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(card)}
            className="cursor-pointer"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-40 object-cover"
            />
            <div className="bg-white flex flex-col items-start p-6 shadow-md hover:shadow-xl">
              <h3 className="text-xl font-bold mb-2 h-10">{card.title}</h3>
              <p className="text-custom-grey mb-4 h-20 overflow-hidden">
                {card.description.split("\n").map((line, i) => (
                  <span key={i}>{line}<br/></span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
      {isMobile && visibleCards < cards.length && (
        <div className="w-full flex justify-center mt-4">
          <button
            className="text-custom-purple border-[0.5px] bg-custom-lightBlue rounded-full focus:outline-none transition-colors duration-300 hover:bg-gradient-to-tl hover:from-custom-blue1 hover:to-custom-purple hover:text-custom-white active:bg-gradient-to-r active:from-custom-purple active:to-custom-blue px-5 py-2.5 w-[182px] h-[54px] mt-3 font-Lato font-medium"
            onClick={loadMore}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};
