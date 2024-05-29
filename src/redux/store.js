import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import landingPageSlice from "./landingPageSlice";
import careerSlice from "./careerSlice";
import faqSlice from "./faqSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    landingPage: landingPageSlice,
    careerPage: careerSlice,
    faqPage: faqSlice,
  },
});
