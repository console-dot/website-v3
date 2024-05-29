import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import landingPageSlice from "./landingPageSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    landingPage: landingPageSlice,
  },
});
