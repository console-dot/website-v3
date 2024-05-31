import React from "react";

import { WebTop } from "../assets/icons";
import {
  Preposition,
  Process,
  TechStackWebDev,
  TopComponent,
  WhyChooseWebDev,
} from "../components/Common";
import { TechStack } from "../components/Common/services/TechStack";
import LandingPage from "../components/Common/services/LandingPage";
import { techStackDataWeb } from "../constatnts/techStackData";
import { landingPageDataWeb } from "../constatnts/landingPageData";
import { processCardsWeb } from "../constatnts/ProcessCardsData";
import { useSelector } from "react-redux";
import { selectwebdevDetails } from "../redux";

export const WebDevelopment = () => {
  const data = useSelector(selectwebdevDetails);
  return (
    <div className="w-full mb-8 overflow-hidden">
      <LandingPage data={landingPageDataWeb} />
      <div className="lg:p-16 xl:p-16 2xl:p-16 sm:p-8 xs:p-8 xss:p-8">
        <div className=" pb-4">
          {" "}
          <TopComponent
            title={"Services"}
            heading={
              "Transforming Visions into Captivating Digital Experiences"
            }
            description={data?.description}
            image={<WebTop />}
          />
        </div>
        <Preposition
          title={"Proposition"}
          heading={"our Proposition"}
          proposition={data?.proposition}
        />

        <Process
          data={processCardsWeb}
          heading={"WEB DEVELOPMENT PROCESS/ADDING NEW FEATURE IN EXISTING APP"}
          title={"Web Development Process "}
          maxRow={5}
        />

        <WhyChooseWebDev
          heading={"Why Choose Consoledot for Web Development?"}
          whyChooseUs={data?.whyChooseUs}
          cardsInRow={
            "lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1"
          }
        />
        <TechStackWebDev
          data={data?.techStack}
          description={
            "Our technology stack is meticulously chosen to ensure your blockchain solution is secure, scalable, and future-proof"
          }
        />
      </div>
    </div>
  );
};
