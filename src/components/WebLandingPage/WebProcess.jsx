import React, { useState } from "react";
import { processCardsData } from "../../constatnts/ProcessCardsData";
import { WebProcessHeading } from "./WebProcessHeading";
import { WebProcessTopDescriptions } from "./WebProcessTopDescriptions";
import { WebProcessBottomDescr } from "./WebProcessBottomDescr";
import { HalfBorderCard } from "../../constatnts/HalfBorderCard";
import {WebprocessBottomDesWeb} from "./WebprocessBottomDesWeb";
import {WebprocessTopDesWeb } from "./WebprocessTopDesWeb"
import { HalfBorderCardWeb } from "./HalfBorderCardWeb";
export const WebProcess = () => {
  const [showAllCards, setShowAllCards] = useState(false);

  const toggleShowAllCards = () => {
    setShowAllCards(!showAllCards);
  };

  return (
    <div className="">
      <div className="mb-4">
        <WebProcessHeading />
      </div>
      <div className="flex flex-col md:hidden sm:hidden xs:hidden xxs:hidden">
      <WebprocessTopDesWeb/>
        <HalfBorderCardWeb data={processCardsData}/>
        <WebprocessBottomDesWeb/>
        </div>
        <div className="xl:hidden 2xl:hidden lg:hidden">
      <div className="grid grid-cols-2 gap-4 ">
        {processCardsData.slice(0, showAllCards ? processCardsData.length : 4).map((i, index) => (
          <div key={index} className="flex flex-col gap-4">
            {" "}
            <WebProcessTopDescriptions topHeading={i.topHeading} topData={i.topData}/>
            <HalfBorderCard
              heading={i.heading}
              flexDirection={i.flexDirection}
              borders={i.borders}
              dotDirection={i.dotDirection}
              icon={i.icon}
            />
            <WebProcessBottomDescr bottomHeading={i.bottomHeading} bottomData={i.bottomData}/>
          </div>
        ))}
      </div>
      <div className="mt-8">
      {!showAllCards && (
        <button className="text-white p-2 px-8 bg-gradient-to-r from-fromclr to-toclr hover:bg-gradient-to-r hover:from-toclr hover:to-fromclr rounded-full" onClick={toggleShowAllCards}>
          Show All
        </button>
      )}
      {showAllCards && (
        <button className="text-white p-2 px-8 bg-gradient-to-r from-fromclr to-toclr hover:bg-gradient-to-r hover:from-toclr hover:to-fromclr rounded-full" onClick={toggleShowAllCards}>
          Show Less
        </button>
      )}
      </div></div>
    </div>
  );
};

