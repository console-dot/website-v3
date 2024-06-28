import React from "react";
import { AITop } from "../assets/icons";
import {
  Process,
  TechStackAi,
  TopComponent,
  WhyChooseAi,
} from "../components/Common";
import { TechStack } from "../components/Common/services/TechStack";
import { WhyChoose } from "../components/Common/services/WhyChooseCustomSoft";
import LandingPage from "../components/Common/services/LandingPage";
import { processCardsAIDev } from "../constatnts/ProcessCardsData";
import {
  techStackDataAI,
  techStackDataBlockchain,
} from "../constatnts/techStackData";
import {
  whyChooseDataAI,
  whyChooseDataBlockchain,
} from "../constatnts/whyChooseData";
import { landingPageDataAI } from "../constatnts/landingPageData";
import { selectAiDetails } from "../redux";
import { useSelector } from "react-redux";

export const AIDevelopment = () => {
  const data = useSelector(selectAiDetails);
  return (
    <div className="w-full mb-8 overflow-hidden">
      <LandingPage
        data={landingPageDataAI}
        heroDescription={data?.heroDescription}
      />
      <div className="lg:p-16 xl:p-16 2xl:p-16 sm:p-8 xs:p-8 xxs:p-8">
        <div className="pb-4">
          {" "}
          <TopComponent
            heading={
              "Revolutionize with GenAi: ConsoleDot's Cutting-Edge AI Solutions"
            }
            description={data?.description}
            image={<AITop />}
          />
        </div>

        <Process
          data={processCardsAIDev}
          heading={"How ConsoleDot Executes the GenAi Development Process"}
        />

        <WhyChooseAi
          heading={"Why Choose Consoledot for GENAI?"}
          whyChooseUs={data?.whyChooseUs}
          cardsInRow={
            "lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1"
          }
        />

        <TechStackAi
          data={data?.techStack}
          description={
            "Our technology stack is carefully selected to ensure your AI solutions are at the forefront of innovation"
          }
        />
      </div>
    </div>
  );
};
