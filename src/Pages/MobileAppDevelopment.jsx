import React from "react";
import { ArVrTop, MobTop, MobTopcompImg } from "../assets/icons";
import { Preposition, Process, TopComponent } from "../components/Common";
import { TechStack } from "../components/Common/services/TechStack";
import { WhyChoose } from "../components/Common/services/WhyChooseCustomSoft";
import LandingPage from "../components/Common/services/LandingPage";
import { processCardsMobDev } from "../constatnts/ProcessCardsData";
import { techStackDataMobDev } from "../constatnts/techStackData";
import { whyChooseDataMob } from "../constatnts/whyChooseData";
import { landingPageDataMob } from "../constatnts/landingPageData";

export const MobileAppDevelopment = () => {
  return (
    <div className="w-full mb-8 overflow-hidden">
      <LandingPage data={landingPageDataMob} />
      <div className="lg:p-16 xl:p-16 2xl:p-16 sm:p-8 xs:p-8 xss:p-8">
        <div className="pb-4">
          {" "}
          <TopComponent
            title={"Services"}
            heading={"Empowering Businesses in the Palm of Your Hand"}
            description={
              "Consoledot's Mobile App Development services bring your business to the forefront of users' daily lives. Whether you're targeting iOS, Android, or both, our expert team crafts mobile solutions that drive engagement and elevate user satisfaction."
            }
            image={<ArVrTop />}
          />
        </div>

        <Preposition
          title={"Proposition"}
          heading={"our Proposition"}
          proposition={
            "At ConsoleDot, we go beyond just coding; we craft mobile experiences that resonate with your users and drive your business forward. Our Mobile App Development services are not just about creating apps; they're about creating connections, user engagement, and unlocking the full potential of your brand in the mobile space."
          }
        />
        <Process
          data={processCardsMobDev}
          heading={
            "Mobile Development Process/Adding new Feature in existing App"
          }
          title={"Mobile Development Process"}
          maxRow={5}
        />

        <WhyChoose
          heading={"Why Choose Consoledot for App Development?"}
          data={whyChooseDataMob}
          cardsInRow={
            "lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1"
          }
        />

        <TechStack
          data={techStackDataMobDev}
          description={
            "Our technology stack is meticulously chosen to ensure your blockchain solution is secure, scalable, and future-proof"
          }
        />
      </div>
    </div>
  );
};
