import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import landingPageSlice from "./landingPageSlice";
import offshoreSlice from "./offShoreSlice";
import customServiceSlice from "./customServiceSlice";
import productresearchSlice from "./productresearchSlice";
import webdevSlice from "./webdevSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    landingPage: landingPageSlice,
    offShore: offshoreSlice,
    customService: customServiceSlice,
    productresearch: productresearchSlice,
    webdev:webdevSlice,
  },
});
