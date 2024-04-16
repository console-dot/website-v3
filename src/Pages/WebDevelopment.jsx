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
      <div className="p-16">
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
      <WhyChoose heading={"Why Choose Consoledot for Web Development?"} data={whyChooseDataWeb} cardsInRow={"grid-cols-3"}/>
      </div>
    </div>
  );
};
