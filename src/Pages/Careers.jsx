import React, { useEffect, useState } from "react";
import LandingPage from "../components/Common/services/LandingPage";
import { landingPageDataCareers } from "../constatnts/landingPageData";
import { SearchInput } from "../components/Careers/SearchInput";
import { Checks } from "../components/Careers/Checks";
import {
  checksCategories,
  checksTypeOfEmployement,
} from "../constatnts/career";
import { OpenPositions } from "../components/Careers/OpenPositions";
import useIsMobile from "../utils/hooks/useIsMobile";
import { FilterIcon } from "../assets/icons";
import { selectCareerPageDetails, selectHeroDescriptionDetails, setCareerPageData } from "../redux";
import { useDispatch, useSelector } from "react-redux";
import { getOpenPositions } from "../api";

export const Careers = () => {
  const [filterData, setFilterData] = useState();
  const [checkedTypeItems, setCheckedTypeItems] = useState({});
  const [checkedCategoryItems, setCheckedCategoryItems] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const isMobile = useIsMobile();
  const dispatch = useDispatch();
  const openPositionData = useSelector(selectCareerPageDetails);
  const heroDesc = useSelector(selectHeroDescriptionDetails);

  const closeModal = () => setModalOpen(false);

  const applyFilters = () => {
    // Logic for applying filters can go here
    closeModal();
  };

  useEffect(() => {
    getOpenPositions()
      .then((res) => {
        dispatch(setCareerPageData(res?.data));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-full mb-8 relative overflow-hidden">
      <LandingPage data={landingPageDataCareers} heroDescription={heroDesc?.openPositionHero} />
      <div className="lg:p-16 xl:p-16 2xl:p-16 sm:p-8 xs:p-4 xss:px-8 w-full flex flex-col xl:gap-16 lg:gap-16 md:gap-16 sm:gap-4 xs:gap-4 xss:gap-4 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-[-2.5rem] xs:mt-[-2.5rem] xss:mt-[-2.5rem]">
        <div className="xl:block lg:block md:block sm:flex xs:flex xss:flex xl:justify-start sm:justify-between xs:justify-between xss:justify-between">
          <SearchInput
            openPositionData={openPositionData}
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
                openPositionData={openPositionData}
                data={checksTypeOfEmployement}
                heading={"Type of Employment"}
                setCheckedTypeItems={setCheckedTypeItems}
                setCheckedCategoryItems={setCheckedCategoryItems}
                checkedTypeItems={checkedTypeItems}
                checkedCategoryItems={checkedCategoryItems}
              />
              <Checks
                openPositionData={openPositionData}
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
            <OpenPositions
              checkedTypeItems={checkedTypeItems}
              checkedCategoryItems={checkedCategoryItems}
              data={openPositionData}
              filterData={filterData}
            />
          </div>
        </div>
      </div>
      {isMobile && modalOpen && (
        <div className="w-[75%] m-auto absolute top-[27%] left-[12%] h-auto flex flex-col bg-white shadow-md p-4">
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
          <div className="flex justify-around items-center">
            <button
              type="button"
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
              onClick={closeModal}
            >
              Close
            </button>
            <button
              type="button"
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              onClick={applyFilters}
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
