import React from "react";
import { MobTop, MobTopcompImg } from "../assets/icons";
import { Preposition, Process, TopComponent } from "../components/Common";
import { TechStack } from "../components/Common/services/TechStack";
import { WhyChoose } from "../components/Common/services/WhyChoose";
import LandingPage from "../components/Common/services/LandingPage";
import { processCardsMobDev } from "../constatnts/ProcessCardsData";
import { techStackDataMobDev } from "../constatnts/techStackData";
import { whyChooseDataMob } from "../constatnts/whyChooseData";
import { landingPageDataMob } from "../constatnts/landingPageData";
import { OffshoreModel } from "../components/OffshoreModel";

export const MobileAppDevelopment = () => {
  return (
    <div className="w-full mb-16">
      <LandingPage data={landingPageDataMob} />
      <div className="p-16">
        <div className="pb-4">
          {" "}
          <TopComponent
            title={"Services"}
            heading={"Empowering Businesses in the Palm of Your Hand"}
            description={
              "Consoledot's Mobile App Development services bring your business to the forefront of users' daily lives. Whether you're targeting iOS, Android, or both, our expert team crafts mobile solutions that drive engagement and elevate user satisfaction."
            }
            image={<MobTop />}
            
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
          heading={"Web Development Process/Adding new Feature in existing App"}
          title={"Web dev process"}
        />
        <WhyChoose
          heading={"Why Choose Consoledot for App Development?"}
          data={whyChooseDataMob}
          cardsInRow={"grid-cols-4"}
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
