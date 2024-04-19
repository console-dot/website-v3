import React from "react";
import { WebProcess } from "../components/WebLandingPage";

import {
  WebTop,
} from "../assets/icons";
import { Preposition, TopComponent } from "../components/Common";
import { TechStack } from "../components/Common/services/TechStack";
import { WhyChoose } from "../components/Common/services/WhyChoose";
import LandingPage from "../components/Common/services/LandingPage";
import { techStackDataWeb } from "../constatnts/techStackData";
import { whyChooseDataWeb } from "../constatnts/whyChooseData";
import { landingPageDataWeb } from "../constatnts/landingPageData";

export const WebDevelopment = () => {
  
  
  return (
    <div className="w-full mb-8 ">
      <LandingPage data={landingPageDataWeb} />
      <div className="lg:p-16 xl:p-16 2xl:p-16 sm:p-8 xs:p-4 xxs:p-2">
      <div className=" pb-4">
        {" "}
        <TopComponent
          title={"Services"}
          heading={"Transforming Visions into Captivating Digital Experiences"}
          description={
            "At Consoledot, our Web Development services go beyond mere website creation; we embark on a journey to craft immersive digital experiences. From responsive designs to seamless user interfaces, our team ensures that your online presence captivates and engages, leaving a lasting impression on your audience."
          }
          image={<WebTop/>}
        />
      </div>
      <Preposition
        title={"Proposition"}
        heading={"our Proposition"}
        proposition={
          "Seamless Fusion of Design and Functionality - Consoledot's web development is a testament to user-centric design and cross-platform compatibility, ensuring your digital footprint leaves an indelible mark."
        }
      />
      <WebProcess />
      <TechStack data={techStackDataWeb} />
      <WhyChoose heading={"Why Choose Consoledot for Web Development?"} data={whyChooseDataWeb} cardsInRow={"lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1"}/>
      </div>
    </div>
  );
};
