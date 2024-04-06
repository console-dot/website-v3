import React from "react";
import { CustomSoftTop, ProductResearchTop } from "../assets/icons";
import {  Preposition, TopComponent } from "../components/Common";
import { WhyChoose } from "../components/Common/services/WhyChoose";
import LandingPage from "../components/Common/services/LandingPage";

import {
    whyChooseDataCustomSoft,
  whyChooseDataProductResearch
} from "../constatnts/whyChooseData";
import { landingPageDataCustomSoft, landingPageDataProductResearch } from "../constatnts/landingPageData";
import { ProductResearchKeyComp } from "../components/ProductResearch/ProductResearchKeyComp";
import { WhyChoosePara } from "../components/CustomSoftware/WhyChoosePara";
import { WhyWeWork } from "../components/CustomSoftware/WhyWeWork";

export const CustomSoftware = () => {
  return (
    <div className="w-full mb-16">
      <LandingPage data={landingPageDataCustomSoft} />
      <div className="p-16">
        <div className="pb-4">
          {" "}
          <TopComponent
            title={"Services"}
            heading={"Crafting Tailored Solutions for Unique Business Demands"}
            description={
              "Discover the essence of customization with Consoledot's Custom Software Development services. Our seasoned developers collaborate closely with you, decoding the intricacies of your business requirements. The result Meticulously crafted solutions that align perfectly with your goals, ensuring unparalleled adaptability and efficiency."
            }
            image={<CustomSoftTop />}
          />
        </div>
        <Preposition
          title={"Proposition"}
          heading={"Our Proposition"}
          proposition={
            "Tailored to Perfection - Consoledot's custom solutions transcend generic frameworks, providing you with a unique digital arsenal that evolves alongside your business."
          }
        />
        
        <WhyChoose
          heading={"Why Choose Consoledot?"}
          data={whyChooseDataCustomSoft}
          cardsInRow={"grid-cols-3"}
        />
        <WhyChoosePara/>
        <WhyWeWork/>

        
      </div>
    </div>
  );
};
