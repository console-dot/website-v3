import React from "react";
import { ArVrTop, MobTop, MobTopcompImg } from "../assets/icons";
import { Preposition, Process, TechStackMobDev, TopComponent, WhyChooseMobDev } from "../components/Common";
import { TechStack } from "../components/Common/services/TechStack";
import LandingPage from "../components/Common/services/LandingPage";
import { processCardsMobDev } from "../constatnts/ProcessCardsData";
import { techStackDataMobDev } from "../constatnts/techStackData";
import { landingPageDataMob } from "../constatnts/landingPageData";
import { selectmobdevDetails } from "../redux/mobdevSlice";
import { useSelector } from "react-redux";

export const MobileAppDevelopment = () => {
  const data = useSelector(selectmobdevDetails);
  return (
    <div className="w-full mb-8 overflow-hidden">
      <LandingPage data={landingPageDataMob} />
      <div className="lg:p-16 xl:p-16 2xl:p-16 sm:p-8 xs:p-8 xss:p-8">
        <div className="pb-4">
          {" "}
          <TopComponent
            title={"Services"}
            heading={"Empowering Businesses in the Palm of Your Hand"}
            description={data?.description}
            image={<ArVrTop />}
          />
        </div>

        <Preposition
          title={"Proposition"}
          heading={"our Proposition"}
          proposition={data?.proposition}
        />
        <Process
          data={processCardsMobDev}
          heading={
            "Mobile Development Process/Adding new Feature in existing App"
          }
          title={"Mobile Development Process"}
          maxRow={5}
        />

        <WhyChooseMobDev
          heading={"Why Choose Consoledot for App Development?"}
          whyChooseUs={data?.whyChooseUs}
          cardsInRow={
            "lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1"
          }
        />

        <TechStackMobDev 
          data={data?.techStack}
          description={
            "Our technology stack is meticulously chosen to ensure your blockchain solution is secure, scalable, and future-proof"
          }
        />
      </div>
    </div>
  );
};
