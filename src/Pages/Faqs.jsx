import React from "react";
import LandingPage from "../components/Common/services/LandingPage";
import { landingPageDataFaqs } from "../constatnts/landingPageData";
import { QuestionCard } from "../components/Faqs/QuestionCard";
import { questionsData } from "../constatnts/questions";

export const Faqs = () => {
  return (
    <div className="w-full mb-8">
      <LandingPage data={landingPageDataFaqs} />
      <div className="lg:p-16 xl:p-16 2xl:p-16 sm:p-8 xs:p-4 xxs:p-2 w-full flex flex-col gap-16">
        <QuestionCard data={questionsData}/>
      </div>
    </div>
  );
};
