import React from "react";
import { BlockChainTop } from "../assets/icons";
import {
  Process,
  TechStackBC,
  TopComponent,
  WhyChooseBC,
} from "../components/Common";
import LandingPage from "../components/Common/services/LandingPage";
import { processCardsBlockchainDev } from "../constatnts/ProcessCardsData";
import { landingPageDataBlockchain } from "../constatnts/landingPageData";
import { useSelector } from "react-redux";
import { selectBlockChainDetails } from "../redux";

export const BlockchainDevelopment = () => {
  const data = useSelector(selectBlockChainDetails);
  return (
    <div className="w-full mb-8 overflow-hidden">
      <LandingPage data={landingPageDataBlockchain} />
      <div className="lg:p-16 xl:p-16 2xl:p-16 sm:p-8 xs:p-8 xss:p-8">
        <div className="pb-4">
          {" "}
          <TopComponent
            title={"Services"}
            heading={
              "EMPOWERING TOMORROW: CONSOLEDOT'S BLOCKCHAIN DEVELOPMENT SOLUTIONS"
            }
            description={data?.description}
            image={<BlockChainTop />}
          />
        </div>

        <Process
          data={processCardsBlockchainDev}
          heading={"How ConsoleDot Executes the Blockchain Development Process"}
          title={"Blockchain Development Process"}
          maxRow={5}
        />
        <WhyChooseBC
          heading={"Why Choose Consoledot for BlockChain Development?"}
          whyChooseUs={data?.whyChooseUs}
          cardsInRow={
            "lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1"
          }
        />

        <TechStackBC
          data={data?.techStack}
          description={
            "Our technology stack is meticulously chosen to ensure your blockchain solution is secure, scalable, and future-proof:"
          }
        />
      </div>
    </div>
  );
};
