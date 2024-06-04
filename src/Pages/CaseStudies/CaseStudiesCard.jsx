import React, { useEffect, useState, useRef } from "react";
import useIsMobile from "../../utils/hooks/useIsMobile";
import config from "../../api/config";
import { useNavigate } from "react-router-dom";

const CardModal = ({ card, onClose }) => {
  const BASE_URL = config.BASE_URL;
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
          <div className="w-[50%] flex justify-end space-x-2">
            <button
              onClick={() => window.open(card.projectLink, "_blank")}
              className="bg-blue-500 px-5 flex justify-center items-center rounded-lg text-white"
            >
              View
            </button>
            <button
              onClick={onClose}
              className="bg-red-500 px-5 flex justify-center items-center rounded-lg text-white"
            >
              Close
            </button>
          </div>
        </div>
        <div className="mt-6">
          <img
            src={`${BASE_URL}/file/${card.projectImage}`}
            alt={card.title}
            className="w-full h-96 object-fill mb-4 rounded-3xl"
          />
          <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col xss:flex-col justify-around gap-4">
            <div className="flex flex-col">
              <label className="text-webHeading font-semibold">CLIENT</label>
              <div className="text-webDescrip">{card.clientName}</div>
            </div>
            <div className="flex flex-col">
              <label className="text-webHeading font-semibold">SERVICES</label>
              <div className="text-webDescrip">{card.services}</div>
            </div>
            <div className="flex flex-col">
              <label className="text-webHeading font-semibold">DURATION</label>
              <div className="text-webDescrip">{card.projectDuration}</div>
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
          <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col xss:flex-col justify-around mt-8 gap-8 rounded-lg">
            <div>
              <img
                src={`${BASE_URL}/file/${card?.images[0]}`}
                alt="none"
                className="rounded-lg"
              />
            </div>
            <div>
              <img
                src={`${BASE_URL}/file/${card?.images[1]}`}
                alt="none"
                className="rounded-lg"
              />
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

export const CaseStudiesCard = ({ data }) => {
  const BASE_URL = config.BASE_URL;
  const isMobile = useIsMobile();
  const [visibleCards, setVisibleCards] = useState(isMobile ? 5 : data.length);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    setVisibleCards(isMobile ? 5 : data.length);
  }, [isMobile, data.length]);

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
      Math.min(prevVisibleCards + 5, data.length)
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
        {data.slice(0, visibleCards).map((caseStudy, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(caseStudy)}
            className="cursor-pointer"
          >
            <img
              src={`${BASE_URL}/file/${caseStudy.projectImage}`}
              alt={caseStudy.title}
              className="w-full h-40 object-cover"
            />
            <div className="bg-white flex flex-col items-start p-6 shadow-md hover:shadow-xl">
              <h3 className="text-lg text-webHeading font-bold mb-2 h-10">
                {caseStudy.title}
              </h3>
              <div className="text-webDescrip mb-4 h-20 overflow-hidden">
                {caseStudy.description}
              </div>
            </div>
          </div>
        ))}
      </div>
      {isMobile && visibleCards < data.length && (
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
