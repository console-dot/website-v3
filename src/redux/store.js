import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import landingPageSlice from "./landingPageSlice";
import careerSlice from "./careerSlice";
import faqSlice from "./faqSlice";
import offshoreSlice from "./offShoreSlice";
import customServiceSlice from "./customServiceSlice";
import productresearchSlice from "./productresearchSlice";
import webdevSlice from "./webdevSlice";
import mobdevSlice from "./mobdevSlice";
import blockChainSlice from "./blockChainSlice";
import aiSlice from "./aiSlice";
import arvrSlice from "./arvrSlice";
import uiuxSlice from "./uiuxSlice";
import caseStudySlice from "./casestudySlice";
import heroDescriptionReducer from "./heroDescSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    landingPage: landingPageSlice,
    careerPage: careerSlice,
    faqPage: faqSlice,
    offShore: offshoreSlice,
    customService: customServiceSlice,
    productresearch: productresearchSlice,
    webdev: webdevSlice,
    mobdev: mobdevSlice,
    blockChain: blockChainSlice,
    ai: aiSlice,
    arvr: arvrSlice,
    uiux: uiuxSlice,
    casestudy:caseStudySlice,
    heroDescription: heroDescriptionReducer,
  },
});
