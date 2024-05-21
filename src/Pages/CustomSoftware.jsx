import React from "react";
import { CustomSoftTop } from "../assets/icons";
import {  Preposition, TopComponent } from "../components/Common";
import { WhyChoose } from "../components/Common/services/WhyChoose";
import LandingPage from "../components/Common/services/LandingPage";

import {
    whyChooseDataCustomSoft
} from "../constatnts/whyChooseData";
import { landingPageDataCustomSoft } from "../constatnts/landingPageData";
import { WhyChoosePara } from "../components/CustomSoftware/WhyChoosePara";
import { WhyWeWork } from "../components/CustomSoftware/WhyWeWork";

export const CustomSoftware = () => {
  return (
    <div className="w-full mb-8">
      <LandingPage data={landingPageDataCustomSoft} />
      <div className="lg:p-16 xl:p-16 2xl:p-16 sm:p-8 xs:p-4 xxs:p-2">
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
        <WhyWeWork/>
        
        <WhyChoose
          heading={"Why Choose Consoledot?"}
          data={whyChooseDataCustomSoft}
          cardsInRow={"lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1"}
        />
        <WhyChoosePara/>
        

        
      </div>
    </div>
  );
};
