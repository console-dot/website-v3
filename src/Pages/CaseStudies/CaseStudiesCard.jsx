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
    description: (
      <>
        <strong className="font-semibold text-webHeading">Introduction:</strong>{" "}
        Provide an overview of the client or project context.
        <br />
        <strong className="font-semibold text-webHeading">
          Objectives:
        </strong>{" "}
        Outline the goals and objectives of the software development project.
      </>
    ),
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
    description: (
      <>
        <strong className="font-semibold text-webHeading">Approach:</strong>{" "}
        Explain the methodology and approach taken to address the client's
        challenges.
        <br />
        <strong className="font-semibold text-webHeading">
          Technologies Used:
        </strong>{" "}
        List the technologies, tools, and frameworks employed in the software
        development.\nKey Features: Highlight the main features and
        functionalities of the software solution.,
      </>
    ),
  },
  {
    title: "Development Process",
    image: developmentProcessImage,
    description: (
      <>
        <strong className="font-semibold text-webHeading">Planning:</strong>{" "}
        Detail the planning phase, including requirements gathering, scope
        definition, and timeline.
        <br />
        <strong className="font-semibold text-webHeading">
          Execution:
        </strong>{" "}
        Describe the development process, including coding, testing, and
        iteration.,
      </>
    ),
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
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
              <h3 className="text-lg text-webHeading font-bold mb-2 h-10">
                {card.title}
              </h3>
              <div className="text-webDescrip mb-4 h-20 overflow-hidden">
                {typeof card.description === "string"
                  ? card.description.split("\n").map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))
                  : card.description}
              </div>
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
