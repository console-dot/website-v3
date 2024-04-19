import React from "react";
import { ArVrTop } from "../assets/icons";
import { Process, TopComponent } from "../components/Common";
import { TechStack } from "../components/Common/services/TechStack";
import { WhyChoose } from "../components/Common/services/WhyChoose";
import LandingPage from "../components/Common/services/LandingPage";
import { processCardsArVr } from "../constatnts/ProcessCardsData";
import {
  techStackDataAI,
  techStackDataArVr,
} from "../constatnts/techStackData";
import { whyChooseDataArVr } from "../constatnts/whyChooseData";
import { landingPageDataArVr } from "../constatnts/landingPageData";

export const ArVrDevelopment = () => {
  return (
    <div className="w-full mb-8">
      <LandingPage data={landingPageDataArVr} />
      <div className="lg:p-16 xl:p-16 2xl:p-16 sm:p-8 xs:p-4 xxs:p-2">
        <div className="pb-4">
          {" "}
          <TopComponent
            title={"Services"}
            heading={"Immerse and Innovate: ConsoleDot's AR/VR Solutions"}
            description={
              "Welcome to the future of immersive technology with ConsoleDot's AR/VR solutions. We don't just develop applications; we create experiences that transcend reality. Elevate your business with augmented and virtual reality that captivates your audience, enhances engagement, and sets you apart from the competition."
            }
            image={<ArVrTop />}
          />
        </div>

        <Process
          data={processCardsArVr}
          heading={"How ConsoleDot Executes the AR/VR Development Process"}
          title={"AR/VR Development Process"}
        />
        <WhyChoose
          heading={"Why Choose ConsoleDot for AR/VR?"}
          data={whyChooseDataArVr}
          cardsInRow={"lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1"}
        />

        <TechStack
          data={techStackDataArVr}
          description={
            "Our technology stack is carefully curated to deliver AR/VR solutions that push the boundaries of immersive experiences:"
          }
        />
      </div>
    </div>
  );
};
