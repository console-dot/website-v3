import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { circletickicon } from "../../assets/images";

const Card = ({ heading, description }) => {
  return (
    <div className="bg-white  shadow-lg xl:w-full lg:w-full md:w-full xl:h-[460px] lg:h-[460px] md:h-[600px] w-[350px] h-[450px] rounded-lg xl:p-6 lg:pl-1 lg:pb-6  md:pl-6 md:pb-6 sm:pl-6 sm:pb-6 xs:pl-6 xs:pb-6 flex flex-col justify-between hover:-translate-y-8 hover:border-dashed hover:border-2 hover:border-custom-blue1  transition duration-300 ease-in-out mt-6 md:mb-0">
      {/* Header Section */}
      <div className="text-center mb-4 mt-8 text-custom-purple">
        <h2 className="text-[24px] font-bold mb-2">{heading}</h2>
      </div>

      {/* Description Section */}
      <div className="text-custom-grey text-left mb-4 mt-2">
        <ul className="list-disc list-inside">
          {description.map((point, index) => (
            <li key={index} className="flex items-center mb-2 text-custom-grey">
              {" "}
              {/* Added text-custom-grey class */}
              <img
                src={circletickicon}
                alt="circletickicon"
                className="mr-4"
              />{" "}
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer Section */}
      <div className="w-full flex justify-around mt-6">
        <button className="xl:px-24  xl:py-2.5 lg:px-24  lg:py-1 md:px-24  md:py-2.5 sm:px-24  sm:py-2 xs:px-24  xs:py-2.5  bg-custom-lightBlue text-custom-purple rounded-full focus:outline-none transition-colors duration-300 hover:bg-gradient-to-tl  hover:from-custom-blue1 hover:to-custom-purple hover:text-custom-white active:bg-gradient-to-r active:from-custom-purple active:to-custom-blue">
          <p className="font-Lato text-base font-medium leading-[28px] tracking-normal">
            Avail Service
          </p>
        </button>
      </div>
    </div>
  );
};

export const CardArray = () => {
  const cards = [
    {
      heading: "Hourly (Time & Material)",
      description: [
        "High Flexibility",
        "Variable Cost Predictability",
        "Easily accommodated Scope Changes",
        "Minimal Risk Mitigation ",
        "ConsoleDot Ownership",
        "Dynamic Projects Suitability",
      ],
    },
    {
      heading: "Fixed Price",
      description: [
        "Limited Flexibility",
        "Fixed Cost Predictability",
        "May result in additional costs",
        "Shared Risk Mitigation",
        "Client Ownership",
        "Point Well-defined projects",
      ],
    },
    {
      heading: "BOT Model",
      description: [
        "Moderate Flexibility",
        "Gradual, with potential for in-house",
        "Can be managed collaboratively",
        "ConsoleDot assumes initial risk",
        "Transfers to client after the term",
        "Strategic projects with future goals",
      ],
    },
  ];

  return (
    <div className="flex md:flex-row flex-col items-center mb-8 gap-6">
      {cards.map((card, index) => (
        <Card
          key={index}
          heading={card.heading}
          description={card.description}
        />
      ))}
    </div>
  );
};
