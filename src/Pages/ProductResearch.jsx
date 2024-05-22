import React from "react";
import { AITop, ProductResearchTop } from "../assets/icons";
import { Process, TopComponent } from "../components/Common";
import { TechStack } from "../components/Common/services/TechStack";
import { WhyChoose } from "../components/Common/services/WhyChoose";
import LandingPage from "../components/Common/services/LandingPage";
import { processCardsAIDev } from "../constatnts/ProcessCardsData";
import {
  techStackDataAI,
  techStackDataBlockchain,
} from "../constatnts/techStackData";
import {
  whyChooseDataAI,
  whyChooseDataBlockchain,
  whyChooseDataProductResearch,
} from "../constatnts/whyChooseData";
import { landingPageDataProductResearch } from "../constatnts/landingPageData";
import { ProductResearchKeyComp } from "../components/ProductResearch/ProductResearchKeyComp";

export const ProductResearch = () => {
  return (
    <div className="w-full mb-8 overflow-hidden">
      <LandingPage data={landingPageDataProductResearch} />
      <div className="lg:p-16 xl:p-16 2xl:p-16 sm:p-8 xs:p-8 xss:p-8">
        <div className="pb-4">
          {" "}
          <TopComponent
            title={"Services"}
            heading={
              "Navigating Success with \n Insightful Product Research"
            }
            description={
              "In the fast-paced digital landscape, staying ahead requires not just innovation but strategic insight. Consoledot introduces a unique service - Product Research. We delve deep into markets, understand your client base, and pave the road map for software development that guarantees success."
            }
            image={<ProductResearchTop />}
          />
        </div>

        <ProductResearchKeyComp />
        <WhyChoose
          heading={"Why Choose Consoledot for Product Research"}
          data={whyChooseDataProductResearch}
          cardsInRow={"lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1"}
        />
      </div>
    </div>
  );
};
