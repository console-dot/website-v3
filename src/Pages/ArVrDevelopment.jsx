import React from "react";
import { ArVrTop } from "../assets/icons";
import {
  Process,
  TechStackAr,
  TopComponent,
  WhyChooseAr,
} from "../components/Common";
import LandingPage from "../components/Common/services/LandingPage";
import { processCardsArVr } from "../constatnts/ProcessCardsData";

import { landingPageDataArVr } from "../constatnts/landingPageData";
import { selectARDetails } from "../redux";
import { useSelector } from "react-redux";

export const ArVrDevelopment = () => {
  const data = useSelector(selectARDetails);
  return (
    <div className="w-full mb-8 overflow-hidden">
      <LandingPage data={landingPageDataArVr} />
      <div className="lg:p-16 xl:p-16 2xl:p-16 sm:p-8 xs:p-8 xss:p-8">
        <div className="pb-4">
          {" "}
          <TopComponent
            title={"Services"}
            heading={"Immerse and Innovate: ConsoleDot's AR/VR Solutions"}
            description={data?.description}
            image={<ArVrTop />}
          />
        </div>

        <Process
          data={processCardsArVr}
          heading={"How ConsoleDot Executes the AR/VR Development Process"}
          title={"AR/VR Development Process"}
        />
        <WhyChooseAr
          heading={"Why Choose ConsoleDot for AR/VR?"}
          whyChooseUs={data?.whyChooseUs}
          cardsInRow={
            "lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1"
          }
        />

        <TechStackAr
          data={data?.techStack}
          description={
            "Our technology stack is carefully curated to deliver AR/VR solutions that push the boundaries of immersive experiences:"
          }
        />
      </div>
    </div>
  );
};
