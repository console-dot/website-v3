import { createSlice } from "@reduxjs/toolkit";

export const faqSlice = createSlice({
  name: "faqPage",
  initialState: {
    faqPageData: null,
  },
  reducers: {
    setFaqPageData: (state, action) => {
      state.faqPageData = action.payload; // payload should be ai details object
    },
    resetFaqPageData: (state) => {
      state.faqPageData = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFaqPageData, resetFaqPageData } = faqSlice.actions;

// Selectors
export const selectFaqPageDetails = (state) => state.faqPage.faqPageData;

// The reducer
export default faqSlice.reducer;
