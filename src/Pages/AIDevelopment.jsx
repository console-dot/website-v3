import React from "react";
import { AITop } from "../assets/icons";
import {  Process, TopComponent } from "../components/Common";
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
  whyChooseDataBlockchain
} from "../constatnts/whyChooseData";
import { landingPageDataAI } from "../constatnts/landingPageData";

export const AIDevelopment = () => {
  return (
    <div className="w-full mb-8 overflow-hidden">
      <LandingPage data={landingPageDataAI} />
      <div className="lg:p-16 xl:p-16 2xl:p-16 sm:p-8 xs:p-4 xxs:p-2">
        <div className="pb-4">
          {" "}
          <TopComponent
            title={"Services"}
            heading={"Revolutionize with GenAi: ConsoleDot's Cutting-Edge AI Solutions"}
            description={
              "Welcome to GenAi by ConsoleDot, where artificial intelligence meets innovation. We offer more than just AI development; we provide transformative solutions that harness the power of machine learning, natural language processing, and computer vision to propel your business into the future."
            }
            image={<AITop />}
          />
        </div>

        <Process
          data={processCardsAIDev}
          heading={"How ConsoleDot Executes the GenAi Development Process"}
          title={"GenAi Development Process"}
        />
        <WhyChoose
          heading={"Why Choose Consoledot for GENAI?"}
          data={whyChooseDataAI}
          cardsInRow={"lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1"}
        />

        <TechStack
          data={techStackDataAI}
          description={
            "Our technology stack is meticulously chosen to ensure your blockchain solution is secure, scalable, and future-proof:"
          }
        />
      </div>
    </div>
  );
};
