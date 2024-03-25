import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { circletickicon } from "../../assets/images";

const Card = ({ heading, description }) => {
  return (
    <div
      className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between hover:-translate-y-2 hover:border-dashed border border-transparent transition duration-300 ease-in-out mb-6 md:mb-0"
      style={{ width: "360px", height: "438px" }}
    >
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
                src={ circletickicon }
                alt="circletickicon"
                className="mr-4"
              />{" "}

              <span>{point}</span> 
            </li>
          ))}
        </ul>
      </div>

      {/* Footer Section */}
      <div className="w-full flex justify-center mt-[10%]">
        <button
          type="button"
          className="text-white px-5 py-2.5 w-[182px] bg-custom-purple hover:to-custom-purple-hover hover:from-custom-blue-hover rounded-full focus:outline-none active:bg-gradient-to-r active:from-custom-purple active:to-custom-blue"
        >
          <p className="font-Lato text-base font-medium leading-[28px] tracking-normal text-center">
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
      heading: "Hourly (Time & Material)" ,
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
    <div className="flex flex-col items-center mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <Card
            key={index}
            heading={card.heading}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};


