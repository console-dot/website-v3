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
import useIsMobile from "../utils/hooks/useIsMobile";
import { FilterIcon } from "../assets/icons";

export const Careers = () => {
  const [filterData, setFilterData] = useState();
  const [checkedTypeItems, setCheckedTypeItems] = useState({});
  const [checkedCategoryItems, setCheckedCategoryItems] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const isMobile = useIsMobile();
  console.log(filterData, "asd");
  return (
    <div className="w-full mb-8 relative overflow-hidden">
      <LandingPage data={landingPageDataCareers} />
      <div className="lg:p-16 xl:p-16 2xl:p-16 sm:p-8 xs:p-4 xss:px-8 w-full flex flex-col xl:gap-16 lg:gap-16 md:gap-16 sm:gap-4 xs:gap-4 xss:gap-4 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-8 xs:mt-8 xss:mt-8">
        <div className="xl:block lg:block md:block sm:flex xs:flex xss:flex xl:justify-start sm:justify-between xs:justify-between xss:justify-between">
          <SearchInput
            setFilterData={setFilterData}
            checkedTypeItems={checkedTypeItems}
            checkedCategoryItems={checkedCategoryItems}
          />
          {isMobile ? (
            <button
              type="button"
              className="w-[55px] h-[54px] rounded-lg bg-white flex justify-center items-center"
              onClick={() => {
                setModalOpen(!modalOpen);
              }}
            >
              <FilterIcon />
            </button>
          ) : (
            <></>
          )}
        </div>
        <div className="flex lg:flex-row xl:flex-row 2xl:flex-row md:flex-row sm:flex-row xs:flex-col xxs:flex-col w-full gap-8">
          {!isMobile ? (
            <div className="lg:w-2/5 xl:w-2/5 2xl:w-2/5  pt-2">
              <Checks
                data={checksTypeOfEmployement}
                heading={"Type of Employment"}
                setCheckedTypeItems={setCheckedTypeItems}
                setCheckedCategoryItems={setCheckedCategoryItems}
                checkedTypeItems={checkedTypeItems}
                checkedCategoryItems={checkedCategoryItems}
              />
              <Checks
                data={checksCategories}
                heading={"Categories"}
                setCheckedTypeItems={setCheckedTypeItems}
                setCheckedCategoryItems={setCheckedCategoryItems}
                checkedTypeItems={checkedTypeItems}
                checkedCategoryItems={checkedCategoryItems}
              />
            </div>
          ) : (
            <></>
          )}
          <div className="w-full">
            <OpenPositions data={openPositionData} filterData={filterData} />
          </div>
        </div>
      </div>
      {isMobile && modalOpen && (
        <div className="w-[75%] m-auto absolute top-[27%] left-[12%] h-auto flex bg-white shadow-md">
          <div className="w-full pt-2">
            <Checks
              data={checksTypeOfEmployement}
              heading={"Type of Employment"}
              setCheckedTypeItems={setCheckedTypeItems}
              setCheckedCategoryItems={setCheckedCategoryItems}
              checkedTypeItems={checkedTypeItems}
              checkedCategoryItems={checkedCategoryItems}
            />
            <Checks
              data={checksCategories}
              heading={"Categories"}
              setCheckedTypeItems={setCheckedTypeItems}
              setCheckedCategoryItems={setCheckedCategoryItems}
              checkedTypeItems={checkedTypeItems}
              checkedCategoryItems={checkedCategoryItems}
            />
          </div>
        </div>
      )}
    </div>
  );
};
