import React from "react";
import {
  BlockChainTop,
} from "../assets/icons";
import { Process, TopComponent } from "../components/Common";
import { TechStack } from "../components/Common/services/TechStack";
import { WhyChoose } from "../components/Common/services/WhyChoose";
import LandingPage from "../components/Common/services/LandingPage";
import { processCardsBlockchainDev } from "../constatnts/ProcessCardsData";
import { techStackDataBlockchain } from "../constatnts/techStackData";
import { whyChooseDataBlockchain } from "../constatnts/whyChooseData";
import { landingPageDataBlockchain } from "../constatnts/landingPageData";

export const BlockchainDevelopment = () => {
 
  return (
    <div className="w-full mb-8">
      <LandingPage data={landingPageDataBlockchain} />
      <div className="lg:p-16 xl:p-16 2xl:p-16 sm:p-8 xs:p-4 xxs:p-2">
      <div className="pb-4">
        {" "}
        <TopComponent
          title={"Services"}
          heading={"EMPOWERING TOMORROW: CONSOLEDOT'S BLOCKCHAIN DEVELOPMENT SOLUTIONS"}
          description={
            "At ConsoleDot, we believe in the transformative power of blockchain. Our Blockchain Development services aren't just about technology; they're about reshaping industries, enhancing security, and providing unparalleled transparency. Choose ConsoleDot for innovative solutions that redefine the way you do business."
          }
          image={<BlockChainTop/>}
        />
      </div>
      
      <Process data={processCardsBlockchainDev} heading={"How ConsoleDot Executes the Blockchain Development Process"} title={"Blockchain Development Process"}/>
      <WhyChoose heading={"Why Choose Consoledot for Blockchain Development?"} data={whyChooseDataBlockchain} cardsInRow={"lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1"}/>
     
      <TechStack data={techStackDataBlockchain} description={"Our technology stack is meticulously chosen to ensure your blockchain solution is secure, scalable, and future-proof:"}/>
      </div>
    </div>
  );
};
