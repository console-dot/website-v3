import React from "react";
import LandingPage from "../components/Common/services/LandingPage";
import { landingPageDataCareers } from "../constatnts/landingPageData";
import { SearchInput } from "../components/Careers/SearchInput";
import { Checks } from "../components/Careers/Checks";
import {
  checksCategories,
  checksTypeOfEmployement,
  openPositionData,
} from "../constatnts/career";
import { OpenPositions } from "../components/Careers/OpenPositions";

export const Careers = () => {
  return (
    <div className="w-full mb-16">
      <LandingPage data={landingPageDataCareers} />
      <div className="p-16 w-full flex flex-col gap-16">
        <SearchInput />
        <div className="flex w-full gap-8">
          <div className="w-2/6 pt-2">
            <Checks
              data={checksTypeOfEmployement}
              heading={"Type of Employment"}
            />
            <Checks data={checksCategories} heading={"Categories"} />
          </div>
          <div className="w-full">
            <OpenPositions data={openPositionData} />
          </div>
        </div>
      </div>
    </div>
  );
};
