import React, { useState } from "react";
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
  const [filterData, setFilterData]=useState();
  
  return (
    <div className="w-full mb-8">
      <LandingPage data={landingPageDataCareers} />
      <div className="lg:p-16 xl:p-16 2xl:p-16 sm:p-8 xs:p-4 xxs:p-2 w-full flex flex-col gap-16">
        <SearchInput setFilterData={setFilterData}/>
        <div className="flex lg:flex-row xl:flex-row 2xl:flex-row md:flex-row sm:flex-row xs:flex-col xxs:flex-col w-full gap-8">
          <div className="lg:w-2/5 xl:w-2/5 2xl:w-2/5  pt-2">
            <Checks
              data={checksTypeOfEmployement}
              heading={"Type of Employment"}
            />
            <Checks data={checksCategories} heading={"Categories"} />
          </div>
          <div className="w-full">
            <OpenPositions data={openPositionData} filterData={filterData} />
          </div>
        </div>
      </div>
    </div>
  );
};
