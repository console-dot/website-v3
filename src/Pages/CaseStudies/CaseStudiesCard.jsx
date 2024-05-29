import React, { useEffect, useState, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import {
  execSummaryImage,
  problemStatementImage,
  solutionImage,
  developmentProcessImage,
  challengesFacedImage,
  projectOverviewImage,
} from "../../assets/images";
import useIsMobile from "../../utils/hooks/useIsMobile";
import {
  AngularIcon,
  BootstrapIcon,
  BulmaIcon,
  EmberIcon,
  MUIIcon,
  ReactIcon,
  RepoIcon,
  SIcon,
  SvelteIcon,
  VueIcon,
} from "../../assets/icons";


const cards = [
  {
    title: "Project 1",
    image: execSummaryImage,
    client: "Envato Theme",
    services: "Tips & Tricks, Design",
    duration: "108 hrs",
    image2: execSummaryImage,
    image3: execSummaryImage,
    description: (
      <>
        <strong className="font-semibold text-webHeading">Introduction:</strong>
        Patent authorities globally are grappling with the challenge of
        redefining their approach to handling inventions generated not by human
        ingenuity but by AI. This analysis initiates a three-part series that
        delves into the influence of AI on intellectual property rights.
        <br />
        <strong className="font-semibold text-webHeading">Problem:</strong>
        The increasing role of AI in innovation.
        <br />
        <strong className="font-semibold text-webHeading">Solution:</strong>
        A comprehensive analysis and redefinition of intellectual property
        rights.
        <br />
        <strong className="font-semibold text-webHeading">Outcomes:</strong>
        Enhanced understanding and policy recommendations.
      </>
    ),
    tech: [
      <ReactIcon key="react" />,
      <AngularIcon key="angular" />,
      <VueIcon key="vue" />,
      <SvelteIcon key="svelte" />,
      <EmberIcon key="ember" />,
      <BootstrapIcon key="bootstrap" />,
      <MUIIcon key="mui" />,
      <RepoIcon key="repo" />,
      <BulmaIcon key="bulma" />,
      <SIcon key="s" />,
    ],
  },
  {
    title: "Project 2",
    image: projectOverviewImage,
    client: "CLIENT",
    services: "SERVICES",
    duration: "DURATION",
    image2: execSummaryImage,
    image3: execSummaryImage,
    description: (
      <>
        <strong className="font-semibold text-webHeading">Introduction:</strong>
        Provide an overview of the client or project context.
        <br />
        <strong className="font-semibold text-webHeading">Objectives:</strong>
        Outline the goals and objectives of the software development project.
      </>
    ),
    tech: [
      <ReactIcon key="react" />,
      <AngularIcon key="angular" />,
      <VueIcon key="vue" />,
      <SvelteIcon key="svelte" />,
      <EmberIcon key="ember" />,
      <BootstrapIcon key="bootstrap" />,
      <MUIIcon key="mui" />,
      <RepoIcon key="repo" />,
      <BulmaIcon key="bulma" />,
      <SIcon key="s" />,
    ],
  },
  {
    title: "Project 3",
    image: problemStatementImage,
    client: "CLIENT",
    services: "SERVICES",
    duration: "DURATION",
    image2: execSummaryImage,
    image3: execSummaryImage,
    description: (
      <>
        <strong className="font-semibold text-webHeading">
          Problem Statement:
        </strong>
        Describe the challenges or issues the client was facing that led to the
        need for the software solution.
      </>
    ),
    tech: [
      <ReactIcon key="react" />,
      <AngularIcon key="angular" />,
      <VueIcon key="vue" />,
      <SvelteIcon key="svelte" />,
      <EmberIcon key="ember" />,
      <BootstrapIcon key="bootstrap" />,
      <MUIIcon key="mui" />,
      <RepoIcon key="repo" />,
      <BulmaIcon key="bulma" />,
      <SIcon key="s" />,
    ],
  },
  {
    title: "Project 4",
    image: solutionImage,
    client: "CLIENT",
    services: "SERVICES",
    duration: "DURATION",
    image2: execSummaryImage,
    image3: execSummaryImage,
    description: (
      <>
        <strong className="font-semibold text-webHeading">Approach:</strong>
        Explain the methodology and approach taken to address the client's
        challenges.
        <br />
        <strong className="font-semibold text-webHeading">
          Technologies Used:
        </strong>
        List the technologies, tools, and frameworks employed in the software
        development.
        <br />
        <strong className="font-semibold text-webHeading">Key Features:</strong>
        Highlight the main features and functionalities of the software
        solution.
      </>
    ),
    tech: [
      <ReactIcon key="react" />,
      <AngularIcon key="angular" />,
      <VueIcon key="vue" />,
      <SvelteIcon key="svelte" />,
      <EmberIcon key="ember" />,
      <BootstrapIcon key="bootstrap" />,
      <MUIIcon key="mui" />,
      <RepoIcon key="repo" />,
      <BulmaIcon key="bulma" />,
      <SIcon key="s" />,
    ],
  },
  {
    title: "Project 5",
    image: developmentProcessImage,
    client: "CLIENT",
    services: "SERVICES",
    duration: "DURATION",
    image2: execSummaryImage,
    image3: execSummaryImage,
    description: (
      <>
        <strong className="font-semibold text-webHeading">Planning:</strong>
        Detail the planning phase, including requirements gathering, scope
        definition, and timeline.
        <br />
        <strong className="font-semibold text-webHeading">Execution:</strong>
        Describe the development process, including coding, testing, and
        iteration.
      </>
    ),
    tech: [
      <ReactIcon key="react" />,
      <AngularIcon key="angular" />,
      <VueIcon key="vue" />,
      <SvelteIcon key="svelte" />,
      <EmberIcon key="ember" />,
      <BootstrapIcon key="bootstrap" />,
      <MUIIcon key="mui" />,
      <RepoIcon key="repo" />,
      <BulmaIcon key="bulma" />,
      <SIcon key="s" />,
    ],
  },
  {
    title: "Project 6",
    image: challengesFacedImage,
    client: "CLIENT",
    services: "SERVICES",
    duration: "DURATION",
    image2: execSummaryImage,
    image3: execSummaryImage,
    description: (
      <>
        <strong className="font-semibold text-webHeading">
          Challenges Faced:
        </strong>
        Discuss any challenges or obstacles encountered during the project and
        how they were overcome.
      </>
    ),
    tech: [
      <ReactIcon key="react" />,
      <AngularIcon key="angular" />,
      <VueIcon key="vue" />,
      <SvelteIcon key="svelte" />,
      <EmberIcon key="ember" />,
      <BootstrapIcon key="bootstrap" />,
      <MUIIcon key="mui" />,
      <RepoIcon key="repo" />,
      <BulmaIcon key="bulma" />,
      <SIcon key="s" />,
    ],
  },
];

const CardModal = ({ card, onClose }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!card) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center mt-12  bg-black opacity-99  z-10">
      <div
        ref={modalRef}
        className="relative bg-slate-100 xl:w-4/5 xl:h-5/6 lg:w-4/5 lg:h-5/6 md:w-4/5 md:h-5/6 sm:w-[90%] sm:h-[90%] xs:w-[90%] xs:h-[90%] xss:w-[90%] xss:h-[90%] overflow-auto p-6 z-16"
      >
        <div className="flex flex-row w-full">
          <div className="w-[50%]">
            <h3 className="text-2xl text-webHeading font-bold">{card.title}</h3>
          </div>
          <div className="w-[50%] flex justify-end">
            <button onClick={onClose} className="sticky top-0">
              <AiOutlineClose size={24} color="red" />
            </button>
          </div>
        </div>
        <div className="mt-6">
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-96 object-fill mb-4 rounded-3xl"
          />
          <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col xss:flex-col justify-around gap-4">
            <div className="flex flex-col">
              <label className="text-webHeading font-semibold">CLIENT</label>
              <div className="text-webDescrip">{card.client}</div>
            </div>
            <div className="flex flex-col">
              <label className="text-webHeading font-semibold">SERVICES</label>
              <div className="text-webDescrip">{card.services}</div>
            </div>
            <div className="flex flex-col">
              <label className="text-webHeading font-semibold">DURATION</label>
              <div className="text-webDescrip">{card.duration}</div>
            </div>
          </div>
          <div className="text-webDescrip mt-6">
            <h3 className="text-2xl text-webHeading">
              <strong>Project Description</strong>
            </h3>
            {typeof card.description === "string"
              ? card.description.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))
              : card.description}
          </div>
          <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col xss:flex-col justify-between mt-8 gap-8 rounded-lg">
            <div>
              <img src={card.image2} alt="none" className="rounded-lg" />
            </div>
            <div>
              <img src={card.image3} alt="none" className="rounded-lg" />
            </div>
          </div>
          <div className="flex flex-col mt-6">
            <label className="text-webHeading text-2xl font-semibold">
              Technologies
            </label>
            <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-2 xss:grid-cols-2 gap-2">
              {card.tech &&
                card.tech.map((tech, index) => (
                  <div
                    className="flex justify-center items-center p-5"
                    key={index}
                  >
                    {tech}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CaseStudiesCard = () => {
  const isMobile = useIsMobile();
  const [visibleCards, setVisibleCards] = useState(isMobile ? 5 : cards.length);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    setVisibleCards(isMobile ? 5 : cards.length);
  }, [isMobile]);

  useEffect(() => {
    if (selectedCard) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedCard]);

  const loadMore = () => {
    setVisibleCards((prevVisibleCards) =>
      Math.min(prevVisibleCards + 5, cards.length)
    );
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  return (
    <div
      className={`container mx-auto px-4 ${
        selectedCard ? "opacity-90" : "opacity-100"
      }`}
    >
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
      {selectedCard && <CardModal card={selectedCard} onClose={closeModal} />}
    </div>
  );
};
