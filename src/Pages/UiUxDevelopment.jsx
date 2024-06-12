import React from "react";
import { UiUxTop } from "../assets/icons";
import {
  Process,
  TechStackUiUx,
  TopComponent,
  WhyChooseUiUx,
} from "../components/Common";
import LandingPage from "../components/Common/services/LandingPage";
import { processCardsUiUx } from "../constatnts/ProcessCardsData";
import { landingPageDataUiUx } from "../constatnts/landingPageData";
import { selectUIDetails } from "../redux";
import { useSelector } from "react-redux";

export const UiUxDevelopment = () => {
  const data = useSelector(selectUIDetails);
  return (
    <div className="w-full mb-8 overflow-hidden">
      <LandingPage data={landingPageDataUiUx} heroDescription={data?.heroDescription}/>
      <div className="lg:p-16 xl:p-16 2xl:p-16 sm:p-8 xs:p-8 xss:p-8">
        <div className="pb-4">
          {" "}
          <TopComponent
            title={"Services"}
            heading={
              "Crafting Experiences, Inspiring Engagement: ConsoleDot's UI/UX Solutions"
            }
            description={data?.description}
            image={<UiUxTop />}
          />
        </div>

        <Process
          data={processCardsUiUx}
          heading={"How ConsoleDot Executes the UI/UX Design Process"}
          title={"UI/UX Design Process"}
        />
        <WhyChooseUiUx
          heading={"Why Choose ConsoleDot for UI/UX Design?"}
          whyChooseUs={data?.whyChooseUs}
          cardsInRow={
            "lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1"
          }
        />

        <TechStackUiUx
          data={data?.techStack}
          description={
            "Our technology stack is carefully chosen to empower our designers in delivering cutting-edge UI/UX solutions:"
          }
        />
      </div>
    </div>
  );
};
