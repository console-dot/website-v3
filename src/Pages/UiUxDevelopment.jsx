import React from "react";
import { UiUxTop } from "../assets/icons";
import { Process, TopComponent } from "../components/Common";
import { TechStack } from "../components/Common/services/TechStack";
import { WhyChoose } from "../components/Common/services/WhyChooseCustomSoft";
import LandingPage from "../components/Common/services/LandingPage";
import { processCardsUiUx } from "../constatnts/ProcessCardsData";
import { techStackDataUiUx } from "../constatnts/techStackData";
import { whyChooseDataUiUx } from "../constatnts/whyChooseData";
import { landingPageDataUiUx } from "../constatnts/landingPageData";

export const UiUxDevelopment = () => {
  return (
    <div className="w-full mb-8 overflow-hidden">
      <LandingPage data={landingPageDataUiUx} />
      <div className="lg:p-16 xl:p-16 2xl:p-16 sm:p-8 xs:p-8 xss:p-8">
        <div className="pb-4">
          {" "}
          <TopComponent
            title={"Services"}
            heading={
              "Crafting Experiences, Inspiring Engagement: ConsoleDot's UI/UX Solutions"
            }
            description={
              "Welcome to ConsoleDot's UI/UX design studio, where every pixel tells a story. Elevate your digital presence with user-centric designs that not only captivate your audience but also drive meaningful engagement. Choose ConsoleDot for UI/UX solutions that blend aesthetics with functionality, creating seamless and delightful user experiences."
            }
            image={<UiUxTop />}
          />
        </div>

        <Process
          data={processCardsUiUx}
          heading={"How ConsoleDot Executes the UI/UX Design Process"}
          title={"UI/UX Design Process"}
        />
        <WhyChoose
          heading={"Why Choose ConsoleDot for UI/UX Design?"}
          data={whyChooseDataUiUx}
          cardsInRow={
            "lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1"
          }
        />

        <TechStack
          data={techStackDataUiUx}
          description={
            "Our technology stack is carefully chosen to empower our designers in delivering cutting-edge UI/UX solutions:"
          }
        />
      </div>
    </div>
  );
};
