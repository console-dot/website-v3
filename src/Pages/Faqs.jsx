import React from "react";
import LandingPage from "../components/Common/services/LandingPage";
import { landingPageDataFaqs } from "../constatnts/landingPageData";
import { QuestionCard } from "../components/Faqs/QuestionCard";
import { questionsData } from "../constatnts/questions";

export const Faqs = () => {
  return (
    <div className="w-full mb-16">
      <LandingPage data={landingPageDataFaqs} />
      <div className="p-16 w-full flex flex-col gap-16">
        <QuestionCard data={questionsData}/>
      </div>
    </div>
  );
};
