import React from "react";
import LandingPage from "../components/Common/services/LandingPage";
import { landingPageDataFaqs } from "../constatnts/landingPageData";
import { QuestionCard } from "../components/Faqs/QuestionCard";
import { questionsData } from "../constatnts/questions";

export const Faqs = () => {
  return (
    <div className="w-full">
      <LandingPage data={landingPageDataFaqs} />
      <div className="2xl:p-16 xl:p-16 lg:p-16 sm:p-8 xs:p-8 xss:p-8 w-full flex flex-col gap-16">
        <QuestionCard data={questionsData} />
      </div>
    </div>
  );
};
