import React from "react";
import { WebProcess } from "../components/WebLandingPage";

import { Top, WebBg } from "../assets/images";

import {
  AngularIcon,
  BootstrapIcon,
  BulmaIcon,
  CrossPlatformIcon,
  EmberIcon,
  MUIIcon,
  OptimizationIcon,
  ReactIcon,
  RepoIcon,
  SIcon,
  SvelteIcon,
  UserCentricIcon,
  VueIcon,
} from "../assets/icons";
import { Preposition, TopComponent } from "../components/Common";
import { TechStack } from "../components/Common/services/TechStack";
import { WhyChoose } from "../components/Common/services/WhyChoose";
import LandingPage from "../components/Common/services/LandingPage";
import OffshoringServices from "../components/OffshoringServices/OffshoringServices";

export const WebDevelopment = () => {
  const techStackData = [
    {
      id: 1,
      title: "Frontend Technologies",
      icons: [
        <ReactIcon />,
        <AngularIcon />,
        <VueIcon />,
        <SvelteIcon />,
        <EmberIcon />,
        <BootstrapIcon />,
        <MUIIcon />,
        <SIcon />,
        <BulmaIcon />,
        <RepoIcon />,
      ],
    },
    {
      id: 2,
      title: "Backend Technologies",
      icons: [
        <ReactIcon />,
        <AngularIcon />,
        <VueIcon />,
        <SvelteIcon />,
        <EmberIcon />,
        <BootstrapIcon />,
        <MUIIcon />,
        <SIcon />,
        <BulmaIcon />,
        <RepoIcon />,
      ],
    },
    {
      id: 3,
      title: "Database",
      icons: [
        <ReactIcon />,
        <AngularIcon />,
        <VueIcon />,
        <SvelteIcon />,
        <EmberIcon />,
        <BootstrapIcon />,
        <MUIIcon />,
        <SIcon />,
        <BulmaIcon />,
        <RepoIcon />,
      ],
    },
    {
      id: 4,
      title: "VCS",
      icons: [
        <ReactIcon />,
        <AngularIcon />,
        <VueIcon />,
        <SvelteIcon />,
        <EmberIcon />,
        <BootstrapIcon />,
        <MUIIcon />,
        <SIcon />,
        <BulmaIcon />,
        <RepoIcon />,
      ],
    },
    {
      id: 5,
      title: "Testing tools",
      icons: [
        <ReactIcon />,
        <AngularIcon />,
        <VueIcon />,
        <SvelteIcon />,
        <EmberIcon />,
        <BootstrapIcon />,
        <MUIIcon />,
        <SIcon />,
        <BulmaIcon />,
        <RepoIcon />,
      ],
    },
  ];
  const whyChooseData = [
    {
      id: 1,
      title: "User-Centric Design",
      icon: <UserCentricIcon />,
      description:
        "Put your users first with our focus on user-centric design principles, ensuring an intuitive and engaging experience.",
    },
    {
      id: 2,
      title: "Cross-Platform Compatibility",
      icon: <CrossPlatformIcon />,
      description:
        "Reach a wider audience with our cross-platform development approach, ensuring your website functions seamlessly across devices.",
    },
    {
      id: 3,
      title: "Performance Optimization",
      icon: <OptimizationIcon />,
      description:
        "We understand the need for speed. Our optimization strategies ensure your website performs at its best, providing a seamless user experience.",
    },
  ];
  const landingPageData={topHeading:'Our Services', midHeading:"WEB DEVELOPMENT",bottomHeading:"Home > Services > Web Development",backgroundImage: WebBg}
  return (
    <div className="w-full mb-16">
      <LandingPage data={landingPageData} />
      <div className="p-16 pb-4">
        {" "}
        <TopComponent
          title={"Services"}
          heading={"Transforming Visions into Captivating Digital Experiences"}
          description={
            "At Consoledot, our Web Development services go beyond mere website creation; we embark on a journey to craft immersive digital experiences. From responsive designs to seamless user interfaces, our team ensures that your online presence captivates and engages, leaving a lasting impression on your audience."
          }
          image={Top}
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
      <TechStack data={techStackData} />
      <WhyChoose heading={"Why Choose Consoledot for Web Development?"} data={whyChooseData}/>
    </div>
  );
};
