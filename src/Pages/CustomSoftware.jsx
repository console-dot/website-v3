import React from "react";
import { CustomSoftTop } from "../assets/icons";
import {  Preposition, TopComponent } from "../components/Common";
import { WhyChooseCustomSoft } from "../components/Common/services/WhyChooseCustomSoft";
import LandingPage from "../components/Common/services/LandingPage";

import {
    whyChooseDataCustomSoft
} from "../constatnts/whyChooseData";
import { landingPageDataCustomSoft } from "../constatnts/landingPageData";
import { WhyChoosePara } from "../components/CustomSoftware/WhyChoosePara";
import { WhyWeWork } from "../components/CustomSoftware/WhyWeWork";
import { selectCustomServiceDetails } from "../redux";
import { useSelector } from "react-redux";

export const CustomSoftware = () => {
  const data = useSelector(selectCustomServiceDetails);
  return (
    <div className="w-full mb-8 overflow-hidden">
      <LandingPage data={landingPageDataCustomSoft} />
      <div className="lg:p-16 xl:p-16 2xl:p-16 sm:p-8 xs:p-8 xss:p-8">
        <div className="pb-4">
          {" "}
          <TopComponent
            title={"Services"}
            heading={"Crafting Tailored Solutions for Unique Business Demands"}
            description={data?.description}
            image={<CustomSoftTop />}
          />
        </div>
        <Preposition
          title={"Proposition"}
          heading={"Our Proposition"}
          proposition={data?.proposition}
        />
        <WhyWeWork delivers={data?.delivers}/>
        
        <WhyChooseCustomSoft
          heading={"Why Choose Consoledot?"}
          whyChooseUs={data?.whyChooseUs}
          cardsInRow={"lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1"}
        />
        <WhyChoosePara whyChooseDes={data?.whyChooseDes}/>
        

        
      </div>
    </div>
  );
};
